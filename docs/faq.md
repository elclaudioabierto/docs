---
sidebar_position: 3
---

# FAQ

## “Isn’t this just GitHub Actions?”
No. GitHub Actions runs workflows in CI. AgentKit provisions **capabilities** on a machine (developer or agent) using deterministic recipes and registries. It’s a different layer.

## “Isn’t this just skills like Clawhub?”
Skills are reusable *agent behaviors*. AgentKit is about **installing capabilities** (tools, environments, dependencies) so agents don’t guess commands.

## “Isn’t an AGENTS.md file enough?”
AGENTS.md is great for **instructions**, but it doesn’t provision tooling. AgentKit turns those instructions into reproducible installs and verified steps.

## “What’s the core value?”
Multi‑step workflows. Not just installing one package, but orchestrating the entire setup chain in a deterministic, inspectable way.

## “Who is this for?”
- AI coding agents that need reliable setup
- Humans who want a clean, repeatable environment
- Teams that want fewer install surprises
