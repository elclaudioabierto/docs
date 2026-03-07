---
sidebar_position: 1
---

# Overview

AgentKit is a capability provisioning layer for AI coding agents. It turns “guess and check” installs into deterministic, reusable recipes.

:::note TL;DR
AgentKit helps agents install **capabilities** (not just packages) using declarative recipes.
:::

## What it is
- A **CLI** for `search`, `inspect`, and `add`
- A **recipe engine** for deterministic installs
- A **registry system** hosted on GitHub

## What it is not
- Not an agent runtime
- Not a chatbot
- Not an MCP replacement

## Mental model
- **MCP** lets agents *use* tools
- **AgentKit** lets agents *install* capabilities

## Why it matters

**Multi‑step workflows beat single installs.** AgentKit chains steps (download → extract → run → validate) so agents stop guessing and start executing.


Agents burn tokens when they guess tooling. AgentKit makes installs repeatable, transparent, and agent‑friendly.

## Example
```bash
agentkit add web-automation --dry-run --json
```
Returns a plan with resolved recipes, steps, and changes.

## How it works (flow)

```mermaid
flowchart LR
  A[Agent request] --> B[agentkit search/inspect]
  B --> C[Resolve recipes]
  C --> D[Validate schema]
  D --> E[Plan steps]
  E --> F[Execute or dry-run]
  F --> G[Capability installed]
```
