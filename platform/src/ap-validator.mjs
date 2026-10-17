function issue(code, message, severity = "exception") {
  return { code, message, severity };
}

export function validateInvoice(invoice, config, context = {}) {
  const issues = [];
  const ap = config.accountsPayable;

  if (!invoice.invoiceNumber) issues.push(issue("MISSING_INVOICE_NUMBER", "Invoice number is required."));
  if (!invoice.vendorId) issues.push(issue("UNKNOWN_VENDOR", "Vendor could not be matched."));
  if (!Number.isFinite(Number(invoice.total)) || Number(invoice.total) <= 0) {
    issues.push(issue("INVALID_TOTAL", "Invoice total must be greater than zero."));
  }
  if (ap.exceptionRules.missingPurchaseOrder && !invoice.purchaseOrderNumber) {
    issues.push(issue("MISSING_PURCHASE_ORDER", "A purchase order is required."));
  }
  if (Number(invoice.extractionConfidence || 0) < ap.confidenceThreshold) {
    issues.push(issue("LOW_EXTRACTION_CONFIDENCE", "Extraction confidence is below the configured threshold."));
  }
  if (context.duplicateInvoiceIds?.includes(invoice.id)) {
    issues.push(issue("DUPLICATE_INVOICE", "A matching invoice already exists."));
  }
  if (invoice.purchaseOrderTotal !== undefined) {
    const variance = Math.abs(Number(invoice.total) - Number(invoice.purchaseOrderTotal));
    if (variance > ap.exceptionRules.amountMismatchTolerance) {
      issues.push(issue("AMOUNT_MISMATCH", `Invoice and purchase order differ by ${variance}.`));
    }
  }

  const blocking = issues.filter((item) => item.severity === "exception");
  return {
    invoiceId: invoice.id || null,
    status: blocking.length ? "exception" : "ready-for-approval",
    issues,
    requiresHumanApproval: true,
  };
}

export function resolveApprover(invoice, config) {
  const amount = Number(invoice.total || 0);
  const unit = invoice.businessUnit || "*";
  const rule = config.accountsPayable.approvalRules.find((candidate) => {
    const belowMaximum = candidate.maximumAmount === null || amount <= candidate.maximumAmount;
    const unitMatches = candidate.businessUnits.includes("*") || candidate.businessUnits.includes(unit);
    return amount >= candidate.minimumAmount && belowMaximum && unitMatches;
  });

  return rule?.email || null;
}
