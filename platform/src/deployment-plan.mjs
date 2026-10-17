export function createDeploymentPlan(config) {
  const blockers = [];
  if (config.platform.missingWorkloads.length) {
    blockers.push(`Enable required workloads: ${config.platform.missingWorkloads.join(", ")}`);
  }
  if (!config.connections.invoiceMailbox) blockers.push("Configure the AP invoice mailbox.");
  if (!config.accountsPayable.approvalRules.length) blockers.push("Configure at least one approval rule.");

  const resources = [
    { type: "dataverse-table", name: "aa_invoice" },
    { type: "dataverse-table", name: "aa_invoice_exception" },
    { type: "dataverse-table", name: "aa_audit_event" },
    { type: "power-automate-flow", name: "AA AP Invoice Intake" },
    { type: "power-automate-flow", name: "AA AP Validation" },
    { type: "power-automate-flow", name: "AA AP Approval" },
    { type: "power-automate-flow", name: "AA AP ERP Handoff" },
    { type: "teams-app", name: "Archangel AP Approvals" },
    { type: "power-bi-dataset", name: "Archangel AP Operations" },
  ];

  return {
    clientId: config.metadata.clientId,
    targetEnvironment: config.platform.targetEnvironment,
    status: blockers.length ? "blocked" : "ready",
    blockers,
    stages: [
      "preflight",
      "provision-data-layer",
      "import-managed-solution",
      "bind-connections",
      "apply-client-configuration",
      "seed-reference-data",
      "run-smoke-tests",
      "enable-sandbox-users",
    ],
    resources,
    promotionPolicy: {
      managedSolutionOnly: true,
      requiresValidationEvidence: true,
      requiresHumanApproval: true,
    },
  };
}
