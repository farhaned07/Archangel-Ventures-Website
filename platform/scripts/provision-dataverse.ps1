param(
  [Parameter(Mandatory=$true)][string]$EnvironmentUrl,
  [Parameter(Mandatory=$true)][string]$TenantId,
  [Parameter(Mandatory=$true)][string]$ClientId,
  [Parameter(Mandatory=$true)][string]$ClientSecret,
  [string]$ManifestPath = "platform/solution/ap-solution.manifest.json"
)
$ErrorActionPreference = "Stop"

function Get-Token {
  $body = @{ client_id=$ClientId; client_secret=$ClientSecret; grant_type="client_credentials"; scope="$EnvironmentUrl/.default" }
  (Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$TenantId/oauth2/v2.0/token" -Body $body).access_token
}
function Invoke-Dv([string]$Method,[string]$Path,$Body=$null) {
  $headers = @{ Authorization="Bearer $script:token"; Accept="application/json"; "OData-MaxVersion"="4.0"; "OData-Version"="4.0"; Prefer="return=representation" }
  $args = @{ Method=$Method; Uri="$EnvironmentUrl/api/data/v9.2/$Path"; Headers=$headers; ContentType="application/json" }
  if ($null -ne $Body) { $args.Body = ($Body | ConvertTo-Json -Depth 40) }
  Invoke-RestMethod @args
}
function Label([string]$text) { @{ LocalizedLabels=@(@{ Label=$text; LanguageCode=1033 }) } }

$manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json
$script:token = Get-Token

$publisher = Invoke-Dv Get "publishers?`$select=publisherid&`$filter=uniquename eq '$($manifest.solution.publisher.uniqueName)'"
if (-not $publisher.value.Count) {
  $publisher = Invoke-Dv Post "publishers" @{
    uniquename=$manifest.solution.publisher.uniqueName; friendlyname=$manifest.solution.publisher.uniqueName;
    customizationprefix=$manifest.solution.publisher.prefix; customizationoptionvalueprefix=$manifest.solution.publisher.optionValuePrefix
  }
  $publisherId = $publisher.publisherid
} else { $publisherId = $publisher.value[0].publisherid }

$solution = Invoke-Dv Get "solutions?`$select=solutionid&`$filter=uniquename eq '$($manifest.solution.uniqueName)'"
if (-not $solution.value.Count) {
  $solution = Invoke-Dv Post "solutions" @{
    uniquename=$manifest.solution.uniqueName; friendlyname=$manifest.solution.friendlyName; version=$manifest.solution.version;
    "publisherid@odata.bind"="/publishers($publisherId)"
  }
}

foreach ($table in $manifest.tables) {
  $exists = Invoke-Dv Get "EntityDefinitions?`$select=MetadataId&`$filter=LogicalName eq '$($table.logicalName)'"
  if ($exists.value.Count) { Write-Host "Table exists: $($table.logicalName)"; continue }
  $attributes = @()
  foreach ($c in $table.columns) {
    $schema = ($c[0] -replace '^aa_','aa_')
    switch ($c[1]) {
      "String" { $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.StringAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; MaxLength=[int]$c[3]; FormatName=@{Value="Text"} } }
      "Multiline" { $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.MemoAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; MaxLength=[int]$c[3] } }
      "Money" { $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.MoneyAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; PrecisionSource=2; MinValue=-922337203685477; MaxValue=922337203685477 } }
      "Decimal" { $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.DecimalAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; MinValue=-100000000000; MaxValue=100000000000; Precision=[int]$c[4] } }
      "DateTime" { $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.DateTimeAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; Format="DateAndTime" } }
      "Choice" {
        $options=@(); $v=71000; foreach($o in $c[3]) { $options += @{Value=$v; Label=(Label $o)}; $v++ }
        $attributes += @{ "@odata.type"="#Microsoft.Dynamics.CRM.PicklistAttributeMetadata"; SchemaName=$schema; DisplayName=(Label $c[2]); RequiredLevel=@{Value="None"}; OptionSet=@{IsGlobal=$false; OptionSetType="Picklist"; Options=$options} }
      }
    }
  }
  $entity = @{
    "@odata.type"="#Microsoft.Dynamics.CRM.EntityMetadata"; SchemaName=$table.logicalName; DisplayName=(Label $table.displayName);
    DisplayCollectionName=(Label $table.displayCollectionName); OwnershipType="UserOwned"; HasActivities=$false; HasNotes=$true;
    PrimaryNameAttribute=$table.primaryName; Attributes=@(@{ "@odata.type"="#Microsoft.Dynamics.CRM.StringAttributeMetadata"; SchemaName=$table.primaryName; DisplayName=(Label $table.displayName); RequiredLevel=@{Value="ApplicationRequired"}; MaxLength=200; FormatName=@{Value="Text"} }) + $attributes
  }
  Invoke-Dv Post "EntityDefinitions" $entity | Out-Null
  Write-Host "Created table: $($table.logicalName)"
}

foreach ($ev in $manifest.environmentVariables) {
  $schema=$ev[0]; $found=Invoke-Dv Get "environmentvariabledefinitions?`$select=environmentvariabledefinitionid&`$filter=schemaname eq '$schema'"
  if ($found.value.Count) { continue }
  $type = switch($ev[2]) { "Decimal" {1} "Boolean" {2} "Integer" {3} default {100000000} }
  Invoke-Dv Post "environmentvariabledefinitions" @{ schemaname=$schema; displayname=$ev[1]; type=$type; isrequired=$false } | Out-Null
  Write-Host "Created environment variable: $schema"
}

Invoke-Dv Post "PublishAllXml" @{} | Out-Null
Write-Host "Dataverse provisioning complete."
