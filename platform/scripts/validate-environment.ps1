param(
  [Parameter(Mandatory=$true)][string]$EnvironmentUrl,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ApplicationId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [string]$SolutionUniqueName = "ArchangelAP"
)

$ErrorActionPreference = "Stop"

pac auth create --name archangel-validation --url $EnvironmentUrl --tenant $TenantId --applicationId $ApplicationId --clientSecret $ClientSecret | Out-Host
pac auth select --name archangel-validation | Out-Host

$solutions = pac solution list | Out-String
if ($solutions -notmatch $SolutionUniqueName) { throw "Solution $SolutionUniqueName is not installed." }

$checks = [ordered]@{
  environment = $EnvironmentUrl
  solution = $SolutionUniqueName
  solutionInstalled = $true
  authenticated = $true
  validatedAt = (Get-Date).ToUniversalTime().ToString("o")
}

$checks | ConvertTo-Json | Set-Content "platform/output/validation-report.json" -Encoding utf8
Write-Host "Validation passed. Report: platform/output/validation-report.json"
