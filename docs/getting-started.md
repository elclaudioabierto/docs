---
sidebar_position: 1
---

# Getting Started

AgentKit helps agents install **capabilities** without guessing commands.

## Install

```bash
npm i -g @claudioabierto/agentkit
```

## First command

```bash
agentkit search web-automation
```

## Typical flow

```bash
agentkit inspect web-automation
agentkit add web-automation --dry-run --json
```

You get a deterministic plan **before** anything runs.
