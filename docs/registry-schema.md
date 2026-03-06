---
sidebar_position: 4
---

# Registry Schema

The registry index is a YAML file listing available recipes.

Fields (v1):
- `id`
- `kind` (package | capability | alias)
- `name`, `title`
- `path`
- `tags`, `domain`
- `provides`, `dependsOn`
- `platforms`

Example:
```yaml
id: web-automation
kind: capability
name: web-automation
title: Web Automation
path: recipes/web-automation.yaml
tags: [browser, automation]
```
