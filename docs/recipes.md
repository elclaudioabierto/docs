---
sidebar_position: 5
---

# Recipes

Recipes are declarative YAML.

```yaml
kind: package
id: chromium
steps:
  - package.add:
      manager: brew
      name: chromium
```

Prefer steps over raw shell commands.
