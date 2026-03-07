---
sidebar_position: 5
---

# Workflows > Packages

AgentKit’s real value is **multi‑step workflows**. Installing a package is table stakes; orchestrating a repeatable chain is the win.

## Example 1: Web automation setup
```yaml
id: web-automation
steps:
  - install chromium
  - install puppeteer
  - check: safety/robots
```

## Example 2: Media transcription
```yaml
id: media-transcription
steps:
  - install ffmpeg
  - install yt-dlp
  - download video
  - transcribe with faster-whisper
```

## Why this matters
Multi‑step workflows avoid guesswork, hidden dependencies, and flaky copy‑paste setup.
