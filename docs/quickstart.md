---
sidebar_position: 2
---

# Quickstart

Get from zero to a working capability in ~60 seconds.

## 1) Search

```bash
agentkit search web-automation
```

## 2) Inspect

```bash
agentkit inspect web-automation
```

You’ll see a deterministic list of steps (install, run, copy, open, check) plus metadata.

## 3) Add

```bash
agentkit add web-automation
```

AgentKit executes the plan and writes logs to:

```bash
.agentkit/agentkit.log
```

## Bonus: Dry‑run (JSON)

```bash
agentkit add web-automation --dry-run --json
```

Use this when you want a structured plan before anything runs.
