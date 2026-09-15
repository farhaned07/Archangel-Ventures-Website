#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { generateClientConfig } from "./src/config-generator.mjs";
import { createDeploymentPlan } from "./src/deployment-plan.mjs";
import { createDeploymentSettings } from "./src/deployment-settings.mjs";

const assessmentPath = resolve(process.argv[2] || "platform/examples/environment-assessment.json");
const outputPath = resolve(process.argv[3] || "platform/output/client-config.generated.json");

try {
  const assessment = JSON.parse(await readFile(assessmentPath, "utf8"));
  const config = generateClientConfig(assessment);
  const plan = createDeploymentPlan(config);
  const settings = createDeploymentSettings(config);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  await writeFile(
    outputPath.replace(/\.json$/, ".deployment-plan.json"),
    `${JSON.stringify(plan, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    resolve(dirname(outputPath), "deployment-settings.json"),
    `${JSON.stringify(settings, null, 2)}\n`,
    "utf8",
  );

  console.log(`Configuration generated: ${outputPath}`);
  console.log(`Deployment status: ${plan.status}`);
  if (plan.blockers.length) console.log(`Blockers: ${plan.blockers.join(" | ")}`);
} catch (error) {
  console.error(`Archangel platform generation failed: ${error.message}`);
  process.exitCode = 1;
}
