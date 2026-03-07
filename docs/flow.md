---
sidebar_position: 6
---

# Flow UI

The **Flow UI** is a visual builder for AgentKit workflows. Use it to design node‑based flows, simulate runs, and send flows directly to OpenClaw.

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

## Notes

- Folder picker in the Workspace node depends on browser permissions.
- For cross‑device usage, point the UI at a gateway reachable from your machine.
