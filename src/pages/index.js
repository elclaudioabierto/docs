import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="AgentKit" description="Capability provisioning for AI coding agents">
      <main style={{padding: '4rem 1rem', textAlign: 'center'}}>
        <h1>AgentKit</h1>
        <p>Capability provisioning for AI coding agents.</p>
        <div style={{maxWidth: 720, margin: '2rem auto', textAlign: 'left'}}>
          <h2>Repos</h2>
          <ul>
            <li><a href="https://github.com/elclaudioabierto/agentkit">agentkit</a> — CLI + core engine + schemas</li>
            <li><a href="https://github.com/elclaudioabierto/registry">registry</a> — official recipes and index</li>
            <li><a href="https://github.com/elclaudioabierto/registry-template">registry-template</a> — starter template</li>
            <li><a href="https://github.com/elclaudioabierto/docs">docs</a> — this site</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
