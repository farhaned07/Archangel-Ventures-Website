param(
  [Parameter(Mandatory=$true)][string]$EnvironmentName,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ClientId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [Parameter(Mandatory=$true)][string]$Office365ConnectionName,
  [Parameter(Mandatory=$true)][string]$DataverseConnectionName,
  [Parameter(Mandatory=$true)][string]$ApprovalsConnectionName,
  [string]$DefinitionsPath = "platform/solution/flows/ap-flows.json"
)
$ErrorActionPreference = "Stop"
$tokenResponse = Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Body @{
  client_id=$ClientId; client_secret=$ClientSecret; grant_type="client_credentials"; scope="https://service.flow.microsoft.com/.default"
}
$headers = @{ Authorization="Bearer $($tokenResponse.access_token)"; "Content-Type"="application/json" }
$bundle = Get-Content $DefinitionsPath -Raw | ConvertFrom-Json
$api = "https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/$EnvironmentName/flows"

foreach ($flow in $bundle.flows) {
  $definitionJson = $flow.definition | ConvertTo-Json -Depth 100
  $definitionJson = $definitionJson.Replace('"shared_office365"', ('"' + $Office365ConnectionName + '"'))
  $definitionJson = $definitionJson.Replace('"shared_commondataserviceforapps"', ('"' + $DataverseConnectionName + '"'))
  $definitionJson = $definitionJson.Replace('"shared_approvals"', ('"' + $ApprovalsConnectionName + '"'))
  $definition = $definitionJson | ConvertFrom-Json
  $connectionReferences = @{
    shared_office365 = @{ connectionName=$Office365ConnectionName; source="Invoker"; id="/providers/Microsoft.PowerApps/apis/shared_office365" }
    shared_commondataserviceforapps = @{ connectionName=$DataverseConnectionName; source="Invoker"; id="/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps" }
    shared_approvals = @{ connectionName=$ApprovalsConnectionName; source="Invoker"; id="/providers/Microsoft.PowerApps/apis/shared_approvals" }
  }
  $body = @{ properties=@{ displayName=$flow.name; definition=$definition; connectionReferences=$connectionReferences; state="Stopped" } } | ConvertTo-Json -Depth 100
  $existing = Invoke-RestMethod -Method Get -Uri "$api?api-version=2016-11-01" -Headers $headers
  $match = $existing.value | Where-Object { $_.properties.displayName -eq $flow.name } | Select-Object -First 1
  if ($match) {
    Invoke-RestMethod -Method Patch -Uri "$api/$($match.name)?api-version=2016-11-01" -Headers $headers -Body $body | Out-Null
    Write-Host "Updated flow: $($flow.name)"
  } else {
    Invoke-RestMethod -Method Post -Uri "$api?api-version=2016-11-01" -Headers $headers -Body $body | Out-Null
    Write-Host "Created flow: $($flow.name)"
  }
}
Write-Host "AP flows installed in stopped state. Validate connections and configuration before enabling."
