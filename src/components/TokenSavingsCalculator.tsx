import React, { useMemo, useState } from 'react';

export default function TokenSavingsCalculator() {
  const [guessCalls, setGuessCalls] = useState(8);
  const [agentCalls, setAgentCalls] = useState(2);
  const [tokensPerCall, setTokensPerCall] = useState(1200);

  const { savedTokens, savedPercent } = useMemo(() => {
    const guess = Math.max(1, guessCalls);
    const agent = Math.max(1, agentCalls);
    const tpc = Math.max(100, tokensPerCall);
    const guessTokens = guess * tpc;
    const agentTokens = agent * tpc;
    const saved = Math.max(0, guessTokens - agentTokens);
    const pct = Math.round((saved / guessTokens) * 100);
    return { savedTokens: saved, savedPercent: pct };
  }, [guessCalls, agentCalls, tokensPerCall]);

  return (
    <div className="card feature-card" style={{ padding: '1rem' }}>
      <h3>Token Savings Simulator</h3>
      <p>Estimate how much setup budget you save by using deterministic recipes.</p>

      <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <label>
          Guessing loop calls
          <input
            type="number"
            value={guessCalls}
            min={1}
            onChange={(e) => setGuessCalls(Number(e.target.value))}
          />
        </label>
        <label>
          AgentKit calls
          <input
            type="number"
            value={agentCalls}
            min={1}
            onChange={(e) => setAgentCalls(Number(e.target.value))}
          />
        </label>
        <label>
          Tokens per call
          <input
            type="number"
            value={tokensPerCall}
            min={100}
            step={100}
            onChange={(e) => setTokensPerCall(Number(e.target.value))}
          />
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Estimated savings:</strong> {savedTokens.toLocaleString()} tokens (~{savedPercent}%)
      </div>
    </div>
  );
}
