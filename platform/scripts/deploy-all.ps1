param(
  [Parameter(Mandatory=$true)][ValidateSet('sandbox','production')][string]$Stage,
  [Parameter(Mandatory=$true)][string]$EnvironmentUrl,
  [Parameter(Mandatory=$true)][string]$EnvironmentName,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ClientId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [Parameter(Mandatory=$true)][string]$Office365ConnectionName,
  [Parameter(Mandatory=$true)][string]$DataverseConnectionName,
  [Parameter(Mandatory=$true)][string]$ApprovalsConnectionName,
  [string]$AssessmentPath = "platform/examples/environment-assessment.json",
  [switch]$ApprovedForProduction
)
$ErrorActionPreference = "Stop"
if ($Stage -eq 'production' -and -not $ApprovedForProduction) { throw 'Production deployment requires -ApprovedForProduction.' }

node platform/cli.mjs $AssessmentPath platform/output/client-config.generated.json
if ($LASTEXITCODE -ne 0) { throw 'Configuration generation failed.' }

& "$PSScriptRoot/provision-dataverse.ps1" -EnvironmentUrl $EnvironmentUrl -TenantId $TenantId -ClientId $ClientId -ClientSecret $ClientSecret
& "$PSScriptRoot/install-flows.ps1" -EnvironmentName $EnvironmentName -TenantId $TenantId -ClientId $ClientId -ClientSecret $ClientSecret -Office365ConnectionName $Office365ConnectionName -DataverseConnectionName $DataverseConnectionName -ApprovalsConnectionName $ApprovalsConnectionName
& "$PSScriptRoot/smoke-test.ps1" -EnvironmentUrl $EnvironmentUrl -TenantId $TenantId -ClientId $ClientId -ClientSecret $ClientSecret

Write-Host "Archangel AP deployment completed for $Stage. Flows remain stopped until the operator validates connection ownership, approvers, ERP authentication, and a test invoice."
