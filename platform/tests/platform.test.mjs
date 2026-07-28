import test from "node:test";
import assert from "node:assert/strict";
import { generateClientConfig } from "../src/config-generator.mjs";
import { validateInvoice, resolveApprover } from "../src/ap-validator.mjs";
import { createDeploymentPlan } from "../src/deployment-plan.mjs";

const assessment = {
  client: { id: "client-1", name: "Client One" },
  environment: {
    tenantId: "tenant-1",
    workloads: { outlook: true, teams: true, sharepoint: true, powerAutomate: true, dataverse: true },
  },
  accountsPayable: {
    invoiceMailbox: "AP@CLIENT.COM",
    confidenceThreshold: 0.9,
    requirePurchaseOrder: true,
    amountMismatchTolerance: 1,
    approvers: [{ email: "manager@client.com", minimumAmount: 0, maximumAmount: 1000, businessUnits: ["*"] }],
  },
};

test("generates deployable client configuration", () => {
  const config = generateClientConfig(assessment);
  assert.equal(config.connections.invoiceMailbox, "ap@client.com");
  assert.deepEqual(config.platform.missingWorkloads, []);
  assert.equal(createDeploymentPlan(config).status, "ready");
});

test("routes invalid invoices to exception", () => {
  const config = generateClientConfig(assessment);
  const result = validateInvoice({ id: "inv-1", total: 100, extractionConfidence: 0.5 }, config);
  assert.equal(result.status, "exception");
  assert.ok(result.issues.some((item) => item.code === "MISSING_PURCHASE_ORDER"));
});

test("resolves approval rule deterministically", () => {
  const config = generateClientConfig(assessment);
  assert.equal(resolveApprover({ total: 500 }, config), "manager@client.com");
});
