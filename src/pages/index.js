import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="AgentKit" description="Capability provisioning for AI coding agents">
      <main style={{padding: '4rem 1rem', textAlign: 'center'}}>
        <div style={{maxWidth: 960, margin: '0 auto', background: '#fff', border: '4px solid #000', boxShadow: '10px 10px 0 #000', padding: '2rem'}}>
          <div style={{display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: 'minmax(0,1fr)', textAlign: 'left'}}>
            <div>
              <h1>AgentKit</h1>
              <p style={{fontSize: '1.1rem'}}>Capability provisioning for AI coding agents. Minimal. Deterministic. Fun.</p>
              <p>Install capabilities like <strong>web-automation</strong> without guessing commands.</p>
              <p style={{marginTop: '1.5rem'}}>Build with flavor. Ship with confidence. ✨</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <img src="/docs/img/ghost-kit.svg" alt="AgentKit ghost mascot" style={{maxWidth: 320, width: '100%'}} />
            </div>
          </div>

          <div style={{maxWidth: 720, margin: '2rem auto', textAlign: 'left'}}>
            <h2>Repos</h2>
            <ul>
              <li><a href="https://github.com/elclaudioabierto/agentkit">agentkit</a> — CLI + core engine + schemas</li>
              <li><a href="https://github.com/elclaudioabierto/registry">registry</a> — official recipes and index</li>
              <li><a href="https://github.com/elclaudioabierto/registry-template">registry-template</a> — starter template</li>
              <li><a href="https://github.com/elclaudioabierto/docs">docs</a> — this site</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
