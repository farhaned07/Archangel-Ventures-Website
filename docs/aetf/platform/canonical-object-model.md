# Canonical Business Object Model

This is the shared language for every Archangel accelerator.

The goal is simple: every client may store data differently, but every accelerator should understand the same business objects.

## Core objects

### Invoice
Represents an incoming supplier invoice.

Required fields:
- Invoice Number
- Vendor
- Purchase Order
- Invoice Date
- Due Date
- Currency
- Total Amount
- Approval Status
- ERP Reference
- Archive Location

### Vendor
Represents a supplier or service provider.

Required fields:
- Vendor ID
- Vendor Name
- Tax ID
- Payment Terms
- Status
- Primary Contact

### Purchase Order
Represents an approved request to buy goods or services.

Required fields:
- PO Number
- Requester
- Department
- Cost Center
- Amount
- Currency
- Status
- ERP Reference

### Approval
Represents a human or system decision.

Required fields:
- Approval ID
- Object Type
- Object ID
- Approver
- Decision
- Decision Time
- Comments
- Audit Trail

### Exception
Represents a case that needs human review.

Required fields:
- Exception ID
- Object Type
- Object ID
- Reason
- Priority
- Owner
- Status
- Resolution Notes

## Standard mapping rule

Each client-specific system must map into these objects.

Example:

```yaml
invoice:
  source: SharePoint
  library: Finance/Invoices
vendor:
  source: SAP
purchase_order:
  source: Oracle
approval:
  source: Teams
```

## Why this matters

Without a canonical object model, every client becomes a custom build.
With it, Archangel becomes a repeatable platform.
