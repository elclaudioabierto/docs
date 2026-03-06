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
