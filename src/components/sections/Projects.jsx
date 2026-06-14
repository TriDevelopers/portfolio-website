import React from 'react';
import { FONT, C, MAXW } from 'theme/tokens';

const tickerBadge = {
  fontFamily: FONT.mono,
  fontSize: 11,
  fontWeight: 600,
  color: C.green,
  background: 'rgba(62,224,143,0.1)',
  border: '1px solid rgba(62,224,143,0.25)',
  padding: '2px 8px',
  borderRadius: 6,
};

const runningStatus = (
  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6, fontFamily: FONT.mono, fontSize: 11.5, color: C.green }}>
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 2.4s ease-in-out infinite' }} />
    running
  </span>
);

const aiTag = {
  fontFamily: FONT.mono,
  fontSize: 11.5,
  color: C.blue,
  background: 'rgba(122,162,247,0.1)',
  border: '1px solid rgba(122,162,247,0.25)',
  padding: '4px 10px',
  borderRadius: 999,
};
const plainTag = {
  fontFamily: FONT.mono,
  fontSize: 11.5,
  color: C.muted,
  border: '1px solid rgba(255,255,255,0.12)',
  padding: '4px 10px',
  borderRadius: 999,
};

function PositionCard({ ticker, opened, title, description, table, tags }) {
  return (
    <article
      data-reveal
      className="proj-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 28,
        background: C.panel,
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={tickerBadge}>{ticker}</span>
            <span style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.dim }}>{opened}</span>
          </div>
          <h3 style={{ margin: 0, fontFamily: FONT.display, fontSize: 20, fontWeight: 600 }}>{title}</h3>
        </div>
        {runningStatus}
      </div>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: C.sub, textWrap: 'pretty' }}>{description}</p>
      {table}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map((t) => (
          <span key={t.label} style={t.ai ? aiTag : plainTag}>
            {t.label}
          </span>
        ))}
      </div>
    </article>
  );
}

const miniTable = {
  background: C.panelDeep,
  border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 12,
  overflow: 'hidden',
  fontFamily: FONT.mono,
  fontSize: 12,
};
const headerCell = {
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  color: C.dim,
  fontSize: 10.5,
  letterSpacing: '0.07em',
  padding: '9px 15px',
};
const bodyRow = { padding: '9px 15px', borderBottom: '1px solid rgba(255,255,255,0.05)' };
const bodyRowLast = { padding: '9px 15px' };

const netWorthTable = (
  <div style={miniTable}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 70px', ...headerCell }}>
      <span>SLEEVE</span>
      <span style={{ textAlign: 'right' }}>WEIGHT</span>
      <span style={{ textAlign: 'right' }}>PNL</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 70px', ...bodyRow }}>
      <span style={{ color: C.sub }}>equities · fidelity</span>
      <span style={{ textAlign: 'right', color: C.soft }}>61%</span>
      <span style={{ textAlign: 'right', color: C.green }}>+12.8%</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 70px', ...bodyRow }}>
      <span style={{ color: C.sub }}>on-chain · btc/eth/sol</span>
      <span style={{ textAlign: 'right', color: C.soft }}>39%</span>
      <span style={{ textAlign: 'right', color: C.green }}>+54.3%</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 70px', ...bodyRowLast }}>
      <span style={{ color: C.text, fontWeight: 600 }}>blended</span>
      <span style={{ textAlign: 'right', color: C.text, fontWeight: 600 }}>100%</span>
      <span style={{ textAlign: 'right', color: C.green, fontWeight: 600 }}>▲ +26.4%</span>
    </div>
  </div>
);

const copyTable = (
  <div style={miniTable}>
    <div style={{ display: 'grid', gridTemplateColumns: '92px 1fr 74px', ...headerCell }}>
      <span>VENUE</span>
      <span>PIPELINE</span>
      <span style={{ textAlign: 'right' }}>STATE</span>
    </div>
    {['stocks', 'crypto', 'prediction'].map((venue, i) => (
      <div key={venue} style={{ display: 'grid', gridTemplateColumns: '92px 1fr 74px', ...(i === 2 ? bodyRowLast : bodyRow) }}>
        <span style={{ color: C.sub }}>{venue}</span>
        <span style={{ color: C.dim }}>detect → size → route</span>
        <span style={{ textAlign: 'right', color: C.green }}>mirrored</span>
      </div>
    ))}
  </div>
);

const closed = [
  {
    year: '2022',
    title: 'Behavior Predictor — ASA DataFest ↗',
    href: 'https://docs.google.com/presentation/d/1nNxz0vXgXQl2-FDlhiqEWW5GAdAi1pU0YDOzRF9mU00/edit#slide=id.p',
    desc: 'predictive models on Play2Prevent data, 90%+ correlation',
    result: 'exit: 1st / 15',
  },
  {
    year: '2022',
    title: 'Weathered Cloud — HackDFW ↗',
    href: 'https://github.com/orgs/HackDFW-2022-Weather-Things/repositories',
    desc: 'ML rain prediction on AWS, ~700ms latency, live heatmap',
    result: 'shipped',
  },
  {
    year: '2023',
    title: 'JPMorgan SWE Virtual Program',
    desc: 'live market data feeds → trading-floor visualization stack',
    result: 'completed',
  },
  {
    year: '2024',
    title: 'CodePath Cybersecurity',
    desc: '10-week intermediate security course',
    result: 'certified',
  },
];

function ClosedRow({ year, title, href, desc, result }) {
  return (
    <div
      className="closed-row"
      data-r="pos-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1.1fr 150px',
        gap: 16,
        alignItems: 'center',
        padding: '16px 10px',
        margin: '0 -6px',
        borderRadius: 8,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        fontSize: 14,
      }}
    >
      <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.dim }}>{year}</span>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="closed-link" style={{ color: C.text, fontWeight: 600, textDecoration: 'none' }}>
          {title}
        </a>
      ) : (
        <span style={{ color: C.text, fontWeight: 600 }}>{title}</span>
      )}
      <span className="closed-desc" style={{ color: C.muted }}>{desc}</span>
      <span data-r="pos-status" style={{ textAlign: 'right', fontFamily: FONT.mono, fontSize: 12.5, color: C.green }}>{result}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="positions" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.012)' }}>
      <div data-pad data-r="sec" style={{ maxWidth: MAXW, margin: '0 auto', padding: '92px 40px' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 44 }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>04 — projects</span>
          <h2 data-r="h2" style={{ margin: 0, fontFamily: FONT.display, fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em' }}>
            Open positions
          </h2>
          <p style={{ margin: 0, fontSize: 15.5, color: C.muted }}>
            Side projects are where conviction shows. Mine trade — and I built them with AI.
          </p>
        </div>

        <div data-r="projects" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginBottom: 50 }}>
          <PositionCard
            ticker="$NETWORTH"
            opened="opened 2025"
            title="Net-worth aggregator"
            description="One dashboard, every account. Pulls Fidelity equities and reads BTC / ETH / SOL balances straight from the chain, then computes PnL and performance across all of it — locally. Net worth is personal; it never leaves my machine."
            table={netWorthTable}
            tags={[{ label: 'built with AI', ai: true }, { label: 'local-first' }, { label: 'on-chain RPC' }]}
          />
          <PositionCard
            ticker="$COPYBOT"
            opened="opened 2025"
            title="Copy-trading engine"
            description="Watch once, execute everywhere. Mirrors trades across three very different venues — equities, crypto, and prediction markets — normalizing each platform's quirks into a single rules-based execution path."
            table={copyTable}
            tags={[{ label: 'built with AI', ai: true }, { label: 'multi-venue' }, { label: 'automation' }]}
          />
        </div>

        <div data-reveal style={{ fontFamily: FONT.mono, fontSize: 12, letterSpacing: '0.08em', color: C.dim, marginBottom: 12 }}>
          {'// closed positions'}
        </div>
        <div data-reveal style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {closed.map((c, i) => (
            <ClosedRow key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
