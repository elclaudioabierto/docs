---
sidebar_position: 9
---

# Example AGENTS.md

Below is a sample `AGENTS.md` that orients an AI coding agent to the AgentKit ecosystem.

```markdown
# AGENTS.md - AgentKit Workspace

This repo uses AgentKit for capability provisioning.

## Docs & Registry
- Docs: https://elclaudioabierto.github.io/docs/
- Official registry: https://github.com/elclaudioabierto/registry
- Registry template: https://github.com/elclaudioabierto/registry-template

## AgentKit CLI
Common commands:
- agentkit search <query>
- agentkit inspect <capability>
- agentkit add <capability> --dry-run --json

## Local Sources (optional)
If a local registry is present, use:
- agentkit.sources.yaml
- .agentkit/sources.yaml

## Guidance
- Prefer capabilities over packages.
- Use --dry-run for plans before execution.
- Output should be JSON for machine-readable workflows.
```
