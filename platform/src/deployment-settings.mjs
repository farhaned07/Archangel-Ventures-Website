export function createDeploymentSettings(config) {
  const ap = config.accelerators.accountsPayable;
  return {
    EnvironmentVariables: [
      { SchemaName: "archangel_APMailbox", Value: ap.invoiceMailbox },
      { SchemaName: "archangel_APSharePointSite", Value: ap.sharePointSite },
      { SchemaName: "archangel_APTeamsChannel", Value: ap.teamsApprovalChannel },
      { SchemaName: "archangel_APCurrency", Value: ap.currency },
      { SchemaName: "archangel_APConfidenceThreshold", Value: String(ap.confidenceThreshold) },
      { SchemaName: "archangel_APRequirePurchaseOrder", Value: String(ap.requirePurchaseOrder) },
      { SchemaName: "archangel_APAmountMismatchTolerance", Value: String(ap.amountMismatchTolerance) },
      { SchemaName: "archangel_APErpType", Value: ap.erp.type },
      { SchemaName: "archangel_APErpEndpoint", Value: ap.erp.endpoint },
      { SchemaName: "archangel_APApproversJson", Value: JSON.stringify(ap.approvers) },
      { SchemaName: "archangel_AuditRetentionDays", Value: String(config.governance.auditRetentionDays) },
      { SchemaName: "archangel_DlpPolicy", Value: config.governance.dataLossPreventionPolicy },
    ],
    ConnectionReferences: [
      { LogicalName: "archangel_sharedoffice365", ConnectionId: "REQUIRED" },
      { LogicalName: "archangel_sharedsharepointonline", ConnectionId: "REQUIRED" },
      { LogicalName: "archangel_sharedteams", ConnectionId: "REQUIRED" },
      { LogicalName: "archangel_shareddataverse", ConnectionId: "REQUIRED" },
      { LogicalName: "archangel_erp", ConnectionId: "REQUIRED" },
    ],
  };
}
