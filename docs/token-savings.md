---
sidebar_position: 7
---

# Token Savings Simulation

When agents guess installs, they burn tokens on:
- wrong package names
- OS‑specific install commands
- error messages & retries

## Quick example
**Guessing loop:** 6–12 requests
**AgentKit flow:** 1–2 requests

**Result:** fewer tokens, faster setup, less frustration.

import TokenSavingsCalculator from '@site/src/components/TokenSavingsCalculator';

<TokenSavingsCalculator />
