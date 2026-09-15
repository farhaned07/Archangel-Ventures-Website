param(
  [Parameter(Mandatory=$true)][string]$EnvironmentUrl,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ApplicationId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [string]$SolutionZip = "platform/power-platform/dist/ArchangelAP_managed.zip",
  [string]$DeploymentSettings = "platform/output/deployment-settings.json"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command pac -ErrorAction SilentlyContinue)) {
  throw "Power Platform CLI (pac) is required. Install it before deployment."
}
if (-not (Test-Path $SolutionZip)) { throw "Managed solution not found: $SolutionZip" }
if (-not (Test-Path $DeploymentSettings)) { throw "Deployment settings not found: $DeploymentSettings" }

pac auth create --name archangel-sandbox --url $EnvironmentUrl --tenant $TenantId --applicationId $ApplicationId --clientSecret $ClientSecret | Out-Host
pac auth select --name archangel-sandbox | Out-Host
pac org who | Out-Host

pac solution import --path $SolutionZip --settings-file $DeploymentSettings --activate-plugins --publish-changes --async --max-async-wait-time 30 | Out-Host
if ($LASTEXITCODE -ne 0) { throw "Solution import failed." }

Write-Host "Sandbox deployment completed. Run validate-environment.ps1 before user testing."
