# AP Accelerator — Design

## Objective
Convert the discovered process into a simple, stable future state.

## Future state principles

- Humans handle judgment.
- Automation handles repetitive work.
- Exceptions are visible.
- Everything is logged.
- The user works in Teams whenever possible.

## Design outputs

- Future state workflow
- Power Automate design
- SharePoint library structure
- Dataverse tables
- Teams approval design
- ERP handoff design
- Security and permission model
- KPI definition

## Core data objects

- Invoice
- Vendor
- Purchase Order
- Approval
- Exception
- Audit Log

## Example architecture

```text
Outlook
  ↓
Power Automate
  ↓
SharePoint + AI Builder
  ↓
Dataverse
  ↓
Teams approval
  ↓
ERP
  ↓
Power BI
```

## Design rule

Do not overbuild. If a step does not improve speed, control, auditability, or user clarity, remove it.
