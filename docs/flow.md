---
sidebar_position: 6
---

# Flow UI

The **Flow UI** is an OpenClaw accessibility tool — a visual builder for node‑based flows that can be executed via the OpenClaw gateway.

## Install

For now, run it from the AgentKit repo (the package is published, but there’s no global CLI yet).

```bash
pnpm --filter @claudioabierto/agentkit-flow dev
```

Then open http://localhost:3000.

## What it does

- Visual node palette (agents, conditionals, retries, outputs, etc.)
- Inspector for node config (prompts, thresholds, tags)
- Simulation mode for dry‑run steps
- “Run in OpenClaw” to execute via gateway

## Positioning

Flow UI is **not** the AgentKit CLI — it’s a companion tool for OpenClaw accessibility workflows.

## Notes

- Folder picker in the Workspace node depends on browser permissions.
- For cross‑device usage, point the UI at a gateway reachable from your machine.
