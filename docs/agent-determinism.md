---
sidebar_position: 10
---

# Deterministic setups for agents (and humans)

AgentKit helps **agents and humans** converge on the same deterministic setup — which saves tokens and time.

## For AI agents
When an agent reads `AGENTS.md`, it learns the **expected capabilities** and the **exact commands** to install them:

- No guessing
- No trial‑and‑error
- Fewer round‑trips and errors

This is what deterministic looks like:

```bash
agentkit search web-automation
agentkit inspect web-automation
agentkit add web-automation --dry-run --json
```

## For humans
Humans can install the capabilities **before** handing control to an agent:

- Install once
- Hand off confidently
- Agent skips setup and starts building

## Why this saves more tokens
Every failed install attempt costs:
- Tokens (error analysis + retries)
- Latency (waiting, re‑running)
- Friction (context switching)

When humans pre‑install, the agent doesn’t need to burn tokens on setup at all. It can go straight to shipping.

## TL;DR
- **Agents** use AgentKit to install deterministically
- **Humans** can pre‑install to eliminate setup tokens entirely
