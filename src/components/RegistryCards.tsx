import React from 'react';
import data from '@site/src/data/registry.json';

const labels: Record<string, string> = {
  recipes: 'All recipes',
  packages: 'Packages',
  capabilities: 'Capabilities',
  aliases: 'Aliases'
};

export default function RegistryCards({ section = 'recipes' }: { section?: keyof typeof data }) {
  const list = (data as any)[section] ?? [];
  return (
    <div className="scroll-row">
      {list.map((item: any) => (
        <div key={item.id} className="card feature-card" style={{minWidth: 260}}>
          <div style={{fontSize: 12, opacity: 0.7}}>{item.kind}</div>
          <h3 style={{marginTop: 6}}>{item.name}</h3>
          <p style={{marginTop: 6}}>{item.description}</p>
          {item.tags?.length ? (
            <div style={{marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap'}}>
              {item.tags.map((tag: string) => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
