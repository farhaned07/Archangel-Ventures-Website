# Platform Core

This folder holds the reusable rules that every Archangel accelerator follows.

## Purpose

The platform core keeps the product consistent across clients and across use cases. It defines what is standard, what is configurable, and what must never change.

## What belongs here

- Canonical business objects
- Configuration schema
- Naming standards
- Deployment standards
- Documentation standards
- Security and governance standards

## Platform layers

```text
Business Object Model
    ↓
Discovery & Interpretation
    ↓
Gap Analysis
    ↓
Configuration
    ↓
Deployment
    ↓
Operate & Improve
```

## Why this matters

Microsoft can inventory a tenant. Archangel interprets the tenant, maps the business reality, and turns that into a reusable deployment configuration.

## Files

- [Canonical business object model](./canonical-object-model.md)
- [Client configuration template](./client-config.template.yaml)
