# AP Accelerator — Test, Deploy, Train, Operate

## Test

Validate the solution against sample invoices and exception cases.

### Test cases
- Good invoice with matching PO
- Duplicate invoice
- Missing PO
- Amount over tolerance
- Vendor mismatch
- Low confidence extraction

## Deploy

- Deploy to test environment first
- Validate permissions
- Confirm audit logging
- Confirm rollback steps
- Move to production only after sign-off

## Train

Train users on:
- Where invoices enter
- How approvals appear in Teams
- How to handle exceptions
- How to track status
- How to read the dashboard

## Operate

Track:
- Processing time
- Approval time
- Exception rate
- Hours saved
- Duplicate prevention
- User adoption

## Success rule

If users still need to chase email threads manually, the accelerator is not finished.
