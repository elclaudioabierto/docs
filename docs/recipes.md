---
sidebar_position: 5
---

# Writing Recipes

Recipes are YAML and can include steps like:
- `directory.ensure`
- `file.write`
- `file.append`
- `package.add`
- `command.run`
- `recipe.run`
- `json.patch`

Example:
```yaml
kind: package
id: chromium
steps:
  - package.add:
      manager: brew
      name: chromium
```

:::note
`command.run` exists but should not be the only mechanism. Prefer declarative steps.
:::
