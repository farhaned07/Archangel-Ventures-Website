# Archangel Enterprise AI Transformation Platform

This package deploys the Accounts Payable accelerator into a client Microsoft environment.

## Delivery flow

1. Assess the client environment.
2. Generate client configuration and deployment settings.
3. Provision Dataverse tables and environment variables.
4. Install Power Automate workflows in a stopped state.
5. Run tenant smoke tests.
6. Validate with real invoices.
7. Enable flows and promote with human approval.

## Prerequisites

- Node.js 20 or later
- PowerShell 7
- Microsoft Entra service principal with access to the target Power Platform environment
- Existing Office 365 Outlook, Dataverse and Approvals connections owned or shared with the deployment identity
- ERP endpoint and authentication method

## Generate configuration

```bash
npm run platform:generate
npm run test:platform
```

Edit `platform/examples/environment-assessment.json` before generation. Generated files are written to `platform/output/`.

## Deploy to sandbox

```powershell
./platform/scripts/deploy-all.ps1 `
  -Stage sandbox `
  -EnvironmentUrl "https://YOURORG.crm.dynamics.com" `
  -EnvironmentName "YOUR-POWER-PLATFORM-ENVIRONMENT-ID" `
  -TenantId "YOUR-TENANT-ID" `
  -ClientId "YOUR-APP-ID" `
  -ClientSecret $env:ARCHANGEL_CLIENT_SECRET `
  -Office365ConnectionName "shared-office365-CONNECTION-ID" `
  -DataverseConnectionName "shared-commondataserviceforapps-CONNECTION-ID" `
  -ApprovalsConnectionName "shared-approvals-CONNECTION-ID"
```

The deployment is idempotent. Tables and variables are created only when missing. Flows are created or updated and remain stopped until an operator validates connections, approvers, ERP authentication and a real invoice.

## Production promotion

Run the same command with `-Stage production -ApprovedForProduction`. Production promotion is blocked unless the explicit approval switch is present.

## Installed capability

- Invoice intake from Outlook attachments
- Canonical Dataverse invoice records
- Deterministic validation and exception routing
- Human approval through Microsoft Approvals and Teams
- ERP handoff through a configured endpoint
- Audit and exception tables
- Client configuration and deployment settings
- CI validation and post deployment smoke tests

## Security rule

AI may propose extraction and mappings. Financial controls, approval decisions, audit records and production promotion remain deterministic and human governed.

## Secrets

Never commit tenant secrets, connection IDs or generated client outputs. Keep them in GitHub environment secrets or a local secret store.

## Important tenant requirement

The repository is deployment complete, but no external system can be installed into a private Microsoft tenant without tenant specific credentials, permissions, connection IDs and ERP details. These are supplied at deployment time and are never committed to source control.
