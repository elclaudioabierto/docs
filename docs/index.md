---
sidebar_position: 0
---

# AgentKit

<div className="hero-block">
  <div className="hero-title">Capability provisioning for AI coding agents.</div>
  <p className="hero-sub">AgentKit turns messy setup into deterministic recipes. Agents install capabilities (not just packages) without guessing commands.</p>
  <div className="hero-cta">
    <code>npm i -g @claudioabierto/agentkit</code>
  </div>
  <div style={{marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
    <a className="button button--primary" href="/docs/getting-started">Get started</a>
    <a className="button button--secondary" href="/docs/registry">Browse registry</a>
  </div>
  <div className="hero-stats">
    <div className="hero-stat"><strong>~75%</strong> fewer setup tokens</div>
    <div className="hero-stat"><strong>1–2</strong> commands to install</div>
    <div className="hero-stat"><strong>GitHub‑native</strong> registry</div>
  </div>
</div>

## What is AgentKit?
AgentKit is a **capability provisioning layer** for AI coding agents. It sits between package managers (brew/npm/pip) and agent runtimes. Agents can **search**, **inspect**, and **add** capabilities using a GitHub‑hosted registry of recipes.

## Why it matters

<div className="feature-grid">
  <div className="card feature-card">
    <h3>Less guessing</h3>
    <p>Skip the “try a command → error → retry” loop.</p>
  </div>
  <div className="card feature-card">
    <h3>Deterministic installs</h3>
    <p>Recipes make setup repeatable and auditable.</p>
  </div>
  <div className="card feature-card">
    <h3>Token savings</h3>
    <p>Simple model: if a guess loop averages 8 calls and AgentKit needs 2, you save ~75% of setup tokens. More tokens to build what you want.</p>
  </div>
</div>

## How it works

1) **Search** the registry for a capability
2) **Inspect** the recipe and steps
3) **Add** to execute the plan

```bash
agentkit search web-automation
agentkit inspect web-automation
agentkit add web-automation
```

## Example capabilities
- web-automation (chromium + puppeteer)
- media-transcription (yt-dlp + ffmpeg + faster-whisper)
- presidio (PII redaction)
- tensorflow-cpu / tensorflow-gpu

## Repos
- Core: https://github.com/elclaudioabierto/agentkit
- Registry: https://github.com/elclaudioabierto/registry
- Registry Template: https://github.com/elclaudioabierto/registry-template
- Docs: https://github.com/elclaudioabierto/docs
