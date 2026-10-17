const REQUIRED_WORKLOADS = ["outlook", "teams", "sharepoint", "powerAutomate", "dataverse"];

function requireValue(value, field) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`Missing required assessment field: ${field}`);
  }
  return value;
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

export function generateClientConfig(assessment) {
  requireValue(assessment, "assessment");
  const client = requireValue(assessment.client, "client");
  const environment = requireValue(assessment.environment, "environment");
  const ap = requireValue(assessment.accountsPayable, "accountsPayable");

  const missingWorkloads = REQUIRED_WORKLOADS.filter(
    (workload) => environment.workloads?.[workload] !== true,
  );

  const approvers = (ap.approvers || []).map((approver) => ({
    email: normalizeEmail(approver.email),
    minimumAmount: Number(approver.minimumAmount || 0),
    maximumAmount:
      approver.maximumAmount === undefined ? null : Number(approver.maximumAmount),
    businessUnits: unique(approver.businessUnits || ["*"]),
  }));

  return {
    apiVersion: "archangel.ai/v1alpha1",
    kind: "ClientConfiguration",
    metadata: {
      clientId: requireValue(client.id, "client.id"),
      clientName: requireValue(client.name, "client.name"),
      generatedAt: new Date().toISOString(),
      source: "environment-assessment",
    },
    platform: {
      tenantId: requireValue(environment.tenantId, "environment.tenantId"),
      targetEnvironment: environment.targetEnvironment || "sandbox",
      region: environment.region || "asia",
      missingWorkloads,
      humanApprovalRequired: true,
    },
    connections: {
      invoiceMailbox: normalizeEmail(ap.invoiceMailbox),
      sharePointSite: ap.sharePointSite || null,
      teamsApprovalChannel: ap.teamsApprovalChannel || null,
      erp: {
        type: ap.erp?.type || "manual-export",
        endpoint: ap.erp?.endpoint || null,
      },
    },
    accountsPayable: {
      currency: ap.currency || "USD",
      duplicateDetection: true,
      confidenceThreshold: Number(ap.confidenceThreshold || 0.85),
      approvalRules: approvers,
      exceptionRules: {
        missingPurchaseOrder: ap.requirePurchaseOrder !== false,
        amountMismatchTolerance: Number(ap.amountMismatchTolerance || 0),
        unknownVendor: true,
        lowConfidenceExtraction: true,
      },
    },
    governance: {
      auditRetentionDays: Number(assessment.governance?.auditRetentionDays || 2555),
      dataLossPreventionPolicy: assessment.governance?.dataLossPreventionPolicy || null,
      productionPromotionRequiresApproval: true,
    },
  };
}
