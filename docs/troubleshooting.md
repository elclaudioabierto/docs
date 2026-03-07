---
sidebar_position: 12
---

# Troubleshooting

## Nothing happens when I run `agentkit add`
- Check logs: `.agentkit/agentkit.log`
- Try a dry‑run: `agentkit add <capability> --dry-run --json`

## Missing dependency / command not found
- Install the system dependency listed in the recipe
- Re‑run: `agentkit add <capability>`

## Permission errors (macOS/Linux)
- Re‑run with permissions (e.g., `sudo` when required)
- Ensure your shell has the expected PATH

## Slow or stuck installs
- Clear cache: `agentkit cache clear`
- Retry: `agentkit add <capability>`

## Registry issues
- Confirm sources: `agentkit env --json`
- Update: `agentkit update --deep`

## Debug info
- Quick report: `agentkit env`
- Full report: `agentkit env --json`
