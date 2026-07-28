# Archangel Enterprise AI Transformation Platform

This directory contains the first executable delivery slice.

## Current flow

1. Read an environment assessment.
2. Generate invariant platform configuration.
3. Produce a sandbox deployment plan.
4. Validate AP invoices deterministically.
5. Resolve the correct human approver.

## Run

```bash
npm run platform:generate
npm run test:platform
```

Generated artifacts are written to `platform/output/`.

## Design rule

AI and discovery components may propose configuration. Financial controls, approvals, validation, audit, and production promotion remain deterministic and human governed.

## Next implementation increment

Connect the assessment contract to Microsoft Graph and Power Platform inventory exports, then package the AP resources as a managed Power Platform solution.
