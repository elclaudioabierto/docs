---
sidebar_position: 9
---

# Example AGENTS.md

Below is a sample `AGENTS.md` that orients an AI coding agent to the AgentKit ecosystem (with a little sarcastic soul).

```markdown
# AGENTS.md - AgentKit Workspace

Welcome, agent. This repo uses AgentKit so you don’t have to guess how to install stuff like a raccoon in a dumpster.

## Install AgentKit
- npm i -g @claudioabierto/agentkit

## Docs & Registry
- Docs: https://elclaudioabierto.github.io/docs/
- Official registry: https://github.com/elclaudioabierto/registry
- Registry template: https://github.com/elclaudioabierto/registry-template
- Core repo: https://github.com/elclaudioabierto/agentkit

## AgentKit CLI (core commands)
- agentkit search <query>
- agentkit inspect <capability>
- agentkit add <capability>
- agentkit add <capability> --dry-run --json
- agentkit list recipes
- agentkit list packages
- agentkit list capabilities
- agentkit cache clear
- agentkit env --json
- agentkit doctor
- agentkit update

## Flags
- --json (structured output)
- --dry-run (plan only)
- --refresh (force registry refresh)
- --deep (update: clears npm cache)

## Capabilities (examples)
- web-automation
- media-transcription
- rag-stack
- computer-vision
- geospatial
- cloud-cli / ai-cli / faang-* bundles
- data-engineering / llm-ops / security-stack

## Local Sources (optional)
If a local registry exists, check:
- agentkit.sources.yaml
- .agentkit/sources.yaml

## Behavior
- Prefer **capabilities** over packages (yes, really).
- Run `--dry-run` first unless you enjoy surprises.
- JSON output is your friend. Use it.

## Power users
- `ak` is a shortcut for `agentkit` (same commands, faster typing).

## TL;DR
Stop guessing. Start installing deterministically.
```
