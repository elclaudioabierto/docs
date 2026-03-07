---
sidebar_position: 5
---

# Workflows > Packages

AgentKit’s real value is **multi‑step workflows**. Installing a package is table stakes; orchestrating a repeatable chain is the win.

## Example workflows

<div className="feature-grid">
  <div className="card feature-card">
    <h3>Web automation</h3>
    <pre><code>{`id: web-automation
steps:
  - install chromium
  - install puppeteer
  - check: safety/robots`}</code></pre>
  </div>
  <div className="card feature-card">
    <h3>Media transcription</h3>
    <pre><code>{`id: media-transcription
steps:
  - install ffmpeg
  - install yt-dlp
  - download video
  - transcribe with faster-whisper`}</code></pre>
  </div>
</div>

## Why this matters
Multi‑step workflows avoid guesswork, hidden dependencies, and flaky copy‑paste setup.
