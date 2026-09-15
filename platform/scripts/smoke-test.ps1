param(
  [Parameter(Mandatory=$true)][string]$EnvironmentUrl,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ClientId,
  [Parameter(Mandatory=$true)][string]$ClientSecret
)
$ErrorActionPreference = "Stop"
$token = (Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Body @{
  client_id=$ClientId; client_secret=$ClientSecret; grant_type="client_credentials"; scope="$EnvironmentUrl/.default"
}).access_token
$headers = @{ Authorization="Bearer $token"; Accept="application/json" }
$required = @('aa_invoice','aa_invoiceexception','aa_auditevent')
foreach ($table in $required) {
  $result = Invoke-RestMethod -Method Get -Uri "$EnvironmentUrl/api/data/v9.2/EntityDefinitions?`$select=LogicalName&`$filter=LogicalName eq '$table'" -Headers $headers
  if (-not $result.value.Count) { throw "Missing Dataverse table: $table" }
  Write-Host "PASS table $table"
}
$variables = @('archangel_APMailbox','archangel_APSharePointSite','archangel_APTeamsChannel','archangel_APCurrency','archangel_APApproversJson')
foreach ($schema in $variables) {
  $result = Invoke-RestMethod -Method Get -Uri "$EnvironmentUrl/api/data/v9.2/environmentvariabledefinitions?`$select=schemaname&`$filter=schemaname eq '$schema'" -Headers $headers
  if (-not $result.value.Count) { throw "Missing environment variable: $schema" }
  Write-Host "PASS variable $schema"
}
Write-Host 'Smoke tests passed.'
