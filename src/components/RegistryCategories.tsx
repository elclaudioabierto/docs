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
        <div key={item.id} className="card feature-card" style={{ minWidth: 260 }}>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{item.kind}</div>
          <h3 style={{ marginTop: 6 }}>{item.name}</h3>
          <p style={{ marginTop: 6 }}>{item.description}</p>
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
