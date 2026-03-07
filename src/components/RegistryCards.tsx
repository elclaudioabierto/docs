import React from 'react';
import registry from '@site/src/data/registry.json';

export default function RegistryCards() {
  return (
    <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'}}>
      {registry.map((item: any) => (
        <div key={item.id} className="card" style={{padding: '1rem'}}>
          <div style={{fontSize: 12, opacity: 0.7}}>{item.kind}</div>
          <h3 style={{marginTop: 6}}>{item.name}</h3>
          <p style={{marginTop: 6}}>{item.description}</p>
          {item.tags?.length ? (
            <div style={{marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap'}}>
              {item.tags.map((tag: string) => (
                <span key={tag} style={{fontSize: 11, border: '1px solid #000', padding: '2px 6px'}}>#{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
