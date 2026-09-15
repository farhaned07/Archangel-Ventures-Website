export function createDeploymentSettings(config) {
  const ap = config.accountsPayable;
  const connections = config.connections;

  return {
    EnvironmentVariables: [
      { SchemaName: "archangel_APMailbox", Value: connections.invoiceMailbox },
      { SchemaName: "archangel_APSharePointSite", Value: connections.sharePointSite },
      { SchemaName: "archangel_APTeamsChannel", Value: connections.teamsApprovalChannel },
      { SchemaName: "archangel_APCurrency", Value: ap.currency },
      { SchemaName: "archangel_APConfidenceThreshold", Value: String(ap.confidenceThreshold) },
      { SchemaName: "archangel_APRequirePurchaseOrder", Value: String(ap.exceptionRules.missingPurchaseOrder) },
      { SchemaName: "archangel_APAmountMismatchTolerance", Value: String(ap.exceptionRules.amountMismatchTolerance) },
      { SchemaName: "archangel_APErpType", Value: connections.erp.type },
      { SchemaName: "archangel_APErpEndpoint", Value: connections.erp.endpoint },
      { SchemaName: "archangel_APApproversJson", Value: JSON.stringify(ap.approvalRules) },
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
