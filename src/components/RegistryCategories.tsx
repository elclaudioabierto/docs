import React from 'react';
import data from '@site/src/data/registry.json';

const sections = [
  { title: 'Web & Automation', match: ['web-automation', 'scraping', 'playwright', 'browser'] },
  { title: 'AI & LLM Ops', match: ['ai', 'llm', 'evals', 'rag', 'agents'] },
  { title: 'Data & Analytics', match: ['data', 'data-science', 'db', 'analytics'] },
  { title: 'Dev Tools', match: ['devtools', 'frontend', 'git', 'node'] },
  { title: 'Cloud & DevOps', match: ['cloud', 'devops', 'kubernetes', 'docker'] },
  { title: 'Media & Transcription', match: ['media', 'transcription', 'ffmpeg'] },
  { title: 'Security & Privacy', match: ['security', 'privacy', 'redaction'] },
  { title: 'Geospatial', match: ['geospatial', 'gis'] },
  { title: 'Docs & Writing', match: ['markdown', 'latex'] }
];

function inSection(item: any, keys: string[]) {
  const hay = [
    ...(item.capabilities || []),
    ...(item.tags || []),
    item.id
  ].map((x: string) => String(x).toLowerCase());
  return keys.some((k) => hay.some((h: string) => h.includes(k)));
}

function CardList({ items }: { items: any[] }) {
  if (!items.length) return null;
  return (
    <div className="scroll-row">
      {items.map((item) => (
        <div key={item.id} className="card feature-card" style={{ minWidth: 260, maxWidth: 320 }}>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{item.kind}</div>
          <h3 style={{ marginTop: 6 }}>{item.name}</h3>
          <p style={{ marginTop: 6 }}>{item.description}</p>
          <div className="code-chip">
            <span>agentkit add {item.id}</span>
            <button
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(`agentkit add ${item.id}`)}
              aria-label={`Copy agentkit add ${item.id}`}
            >
              <svg viewBox="0 0 448 512" aria-hidden="true">
                <path d="M384 96L192 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM416 384c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 256zM64 128l0 256c0 17.7 14.3 32 32 32l32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-53 0-96-43-96-96l0-256c0-53 43-96 96-96l32 0 0 64-32 0c-17.7 0-32 14.3-32 32z"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RegistryCategories() {
  const recipes = (data as any).recipes || [];
  return (
    <div style={{ display: 'grid', gap: '2rem' }}>
      {sections.map((section) => {
        const items = recipes.filter((r: any) => inSection(r, section.match));
        if (!items.length) return null;
        return (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <CardList items={items} />
          </section>
        );
      })}
    </div>
  );
}
