---
sidebar_position: 9
---

# Example AGENTS.md

Below is a sample `AGENTS.md` that orients an AI coding agent to the AgentKit ecosystem (with a little sarcastic soul).

```markdown
# AGENTS.md - AgentKit Workspace

Welcome, agent. This repo uses AgentKit so you don’t have to guess how to install stuff like a raccoon in a dumpster.

## Install AgentKit
(Choose one and move on.)
- npm i -g agentkit
- pnpm add -g agentkit

## Docs & Registry
- Docs: https://elclaudioabierto.github.io/docs/
- Official registry: https://github.com/elclaudioabierto/registry
- Registry template: https://github.com/elclaudioabierto/registry-template

## AgentKit CLI (all commands)
- agentkit search <query>
- agentkit inspect <capability>
- agentkit add <capability>
- agentkit add <capability> --dry-run --json
- agentkit list recipes
- agentkit list packages
- agentkit list capabilities

## Flags
- --json (structured output)
- --dry-run (plan only)
- --yes (non-interactive)
- --cwd (run in a specific directory)

## Local Sources (optional)
If a local registry exists, check:
- agentkit.sources.yaml
- .agentkit/sources.yaml

## Behavior
- Prefer **capabilities** over packages (yes, really).
- Run `--dry-run` first unless you enjoy surprises.
- JSON output is your friend. Use it.

## TL;DR
Stop guessing. Start installing deterministically.
```
