import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="AgentKit" description="Capability provisioning for AI coding agents">
      <main style={{padding: '4rem 1rem', textAlign: 'center'}}>
        <div className="homepage-hero" style={{maxWidth: 980, margin: '0 auto', background: '#fff', border: '4px solid #000', boxShadow: '10px 10px 0 #000', padding: '2rem'}}>
          <div style={{display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', textAlign: 'left'}}>
            <div>
              <h1>AgentKit</h1>
              <p style={{fontSize: '1.1rem'}}>Capability provisioning for AI coding agents. Minimal. Deterministic. Fun.</p>
              <p>Install capabilities like<br/><strong>web-automation</strong><br/>without guessing commands.</p>
              <div style={{marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <a className="button button--primary" href="/docs/overview">Read the docs</a>
                <a className="button button--secondary" href="https://github.com/elclaudioabierto/agentkit">View on GitHub</a>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <img src="/img/ghost-kit.svg" alt="AgentKit capability blocks" style={{maxWidth: 320, width: '100%'}} />
            </div>
          </div>

          <div style={{maxWidth: 760, margin: '2rem auto', textAlign: 'left'}}>
            <h2>Repos</h2>
            <ul>
              <li><a href="https://github.com/elclaudioabierto/agentkit">agentkit</a> — CLI + core engine + schemas</li>
              <li><a href="https://github.com/elclaudioabierto/registry">registry</a> — official recipes and index</li>
              <li><a href="https://github.com/elclaudioabierto/registry-template">registry-template</a> — store your own recipes in your own vault</li>
              <li><a href="https://github.com/elclaudioabierto/docs">docs</a> — this site</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
