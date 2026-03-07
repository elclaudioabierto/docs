---
sidebar_position: 0
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# AgentKit

<div className="homepage-layout">

<div className="hero-block">
  <div className="hero-title">Capability provisioning for AI coding agents.</div>
  <p className="hero-sub">AgentKit turns messy setup into deterministic recipes. Agents install capabilities (not just packages) without guessing commands.</p>
  <div className="hero-cta">
    <code>npm i -g @claudioabierto/agentkit</code>
  </div>
  <div style={{marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
    <a className="button button--primary" href="/docs/getting-started">Get started</a>
    <a className="button button--secondary" href="/docs/registry">Browse registry</a>
    <a className="button button--secondary" href="/docs/flow">Flow UI</a>
  </div>
  <div className="hero-stats">
    <div className="hero-stat"><strong>~75%</strong> fewer setup tokens</div>
    <div className="hero-stat"><strong>1–2</strong> commands to install</div>
    <div className="hero-stat"><strong>GitHub‑native</strong> registry</div>
  </div>
</div>

<section className="section-band">

## What is AgentKit?
AgentKit is a **capability provisioning layer** for AI coding agents. It sits between package managers (brew/npm/pip) and agent runtimes. Agents can **search**, **inspect**, and **add** capabilities using a GitHub‑hosted registry of recipes.

<div className="video-frame">
  <video src={useBaseUrl('/demo.mp4')} controls playsInline />
</div>

</section>

<section className="section-band section-band--alt">

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
    <p>Fewer guess loops means fewer LLM tokens (and $$$)!</p>
  </div>
  <div className="card feature-card">
    <h3>Auditability</h3>
    <p>Every step is explicit, reviewable, and reproducible.</p>
  </div>
</div>

</section>

<section className="section-band">

## How it works

<div className="step-grid">
  <div className="card step-card">
    <div className="step-title">1) Search</div>
    <p>Find the capability you need in the registry.</p>
  </div>
  <div className="card step-card">
    <div className="step-title">2) Inspect</div>
    <p>Review every step before anything runs.</p>
  </div>
  <div className="card step-card">
    <div className="step-title">3) Add</div>
    <p>Execute the deterministic plan with logs.</p>
  </div>
</div>

```bash
agentkit search web-automation
agentkit inspect web-automation
agentkit add web-automation
```

</section>

<section className="section-band section-band--alt">

## Use cases

<div className="usecase-grid">
  <div className="card usecase-card">
    <h3>Web automation</h3>
    <ul>
      <li>install chromium</li>
      <li>install puppeteer</li>
      <li>safety check</li>
    </ul>
  </div>
  <div className="card usecase-card">
    <h3>Media transcription</h3>
    <ul>
      <li>install ffmpeg</li>
      <li>install yt-dlp</li>
      <li>download video</li>
      <li>transcribe</li>
    </ul>
  </div>
  <div className="card usecase-card">
    <h3>PII redaction</h3>
    <ul>
      <li>install presidio</li>
      <li>configure analyzers</li>
      <li>run redaction</li>
    </ul>
  </div>
</div>

</section>

<section className="section-band">

## Example capabilities

<div className="pill-list">
  <span className="pill">web-automation</span>
  <span className="pill">media-transcription</span>
  <span className="pill">presidio</span>
  <span className="pill">tensorflow-cpu</span>
  <span className="pill">tensorflow-gpu</span>
</div>

</section>

<section className="section-band section-band--alt">

## Repos
- Core: https://github.com/elclaudioabierto/agentkit
- Registry: https://github.com/elclaudioabierto/registry
- Registry Template: https://github.com/elclaudioabierto/registry-template
- Docs: https://github.com/elclaudioabierto/docs

</section>

</div>
