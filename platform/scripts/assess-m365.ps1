param(
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ClientId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [string]$ClientName = "Client",
  [string]$OutputPath = "platform/output/environment-assessment.json"
)

$ErrorActionPreference = "Stop"

function Invoke-GraphGet([string]$Uri, [hashtable]$Headers) {
  $items = @()
  do {
    $response = Invoke-RestMethod -Method Get -Uri $Uri -Headers $Headers
    if ($response.value) { $items += $response.value } else { return $response }
    $Uri = $response.'@odata.nextLink'
  } while ($Uri)
  return $items
}

$tokenBody = @{
  client_id = $ClientId
  client_secret = $ClientSecret
  scope = "https://graph.microsoft.com/.default"
  grant_type = "client_credentials"
}
$token = Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Body $tokenBody
$headers = @{ Authorization = "Bearer $($token.access_token)" }

$organization = Invoke-GraphGet "https://graph.microsoft.com/v1.0/organization" $headers | Select-Object -First 1
$groups = Invoke-GraphGet "https://graph.microsoft.com/v1.0/groups?`$select=id,displayName,mailEnabled,securityEnabled" $headers
$sites = Invoke-GraphGet "https://graph.microsoft.com/v1.0/sites?search=*" $headers
$teams = @($groups | Where-Object { $_.resourceProvisioningOptions -contains "Team" })

$assessment = [ordered]@{
  generatedAt = (Get-Date).ToUniversalTime().ToString("o")
  client = @{ id = ($ClientName.ToLower() -replace '[^a-z0-9]+','-').Trim('-'); name = $ClientName }
  environment = @{
    tenantId = $TenantId
    tenantName = $organization.displayName
    targetEnvironment = "sandbox"
    region = $organization.countryLetterCode
    workloads = @{ outlook = $true; teams = $true; sharepoint = $true; powerAutomate = $true; dataverse = $true }
    inventory = @{
      groups = @($groups | ForEach-Object { @{ id=$_.id; name=$_.displayName; securityEnabled=$_.securityEnabled } })
      sites = @($sites | ForEach-Object { @{ id=$_.id; name=$_.name; webUrl=$_.webUrl } })
      teams = @($teams | ForEach-Object { @{ id=$_.id; name=$_.displayName } })
    }
  }
  accountsPayable = @{
    invoiceMailbox = "REQUIRED"
    sharePointSite = "REQUIRED"
    teamsApprovalChannel = "REQUIRED"
    currency = "THB"
    confidenceThreshold = 0.90
    requirePurchaseOrder = $true
    amountMismatchTolerance = 1
    erp = @{ type = "sap"; endpoint = "REQUIRED" }
    approvers = @()
  }
  governance = @{ auditRetentionDays = 2555; dataLossPreventionPolicy = "REQUIRED" }
}

$directory = Split-Path $OutputPath -Parent
if ($directory) { New-Item -ItemType Directory -Force -Path $directory | Out-Null }
$assessment | ConvertTo-Json -Depth 12 | Set-Content -Path $OutputPath -Encoding utf8
Write-Host "Assessment written to $OutputPath"
Write-Host "Complete all REQUIRED fields before generation and deployment."
