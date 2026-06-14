import React, { useRef } from 'react';
import { FONT, C, MAXW } from 'theme/tokens';
import { useHeroSequence, useCandles, useLattice } from 'hooks';
import resume from 'assets/documents/Resume.pdf';

function BootLog({ boot }) {
  return (
    <>
      {boot.map((l, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <span style={{ color: C.faint }}>▸</span>
          <span>{l.label}</span>
          <span style={{ color: '#2a3138', letterSpacing: 2, flex: 1, overflow: 'hidden' }}>
            ··········
          </span>
          {l.status ? (
            <span style={{ color: C.green }}>{l.status}</span>
          ) : (
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 12,
                background: C.green,
                animation: 'blink 0.9s step-end infinite',
              }}
            />
          )}
        </div>
      ))}
    </>
  );
}

const ghostBtn = {
  fontFamily: FONT.mono,
  fontSize: 14,
  color: C.text,
  padding: '12px 22px',
  borderRadius: 999,
  textDecoration: 'none',
  border: '1px solid rgba(255,255,255,0.18)',
};

export default function Hero() {
  const { heroName, boot } = useHeroSequence();
  const candlesRef = useRef(null);
  const latticeRef = useRef(null);
  useCandles(candlesRef);
  useLattice(latticeRef);

  return (
    <header
      id="top"
      data-pad
      data-r="hero"
      style={{
        position: 'relative',
        maxWidth: MAXW,
        margin: '0 auto',
        padding: '88px 40px 64px',
        display: 'grid',
        gridTemplateColumns: '1.04fr 0.96fr',
        gap: 56,
        alignItems: 'center',
      }}
    >
      <canvas
        ref={latticeRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* left column */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            width: 'fit-content',
            padding: '7px 14px',
            borderRadius: 999,
            background: 'rgba(62,224,143,0.08)',
            border: '1px solid rgba(62,224,143,0.22)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: C.green,
              animation: 'pulse 2.4s ease-in-out infinite',
            }}
          />
          <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.green }}>
            shipping to production · dallas, tx
          </span>
        </div>

        <h1
          data-r="hero-h1"
          style={{
            margin: 0,
            fontFamily: FONT.display,
            fontSize: 86,
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            whiteSpace: 'pre',
            minHeight: 82,
          }}
        >
          {heroName}
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: 20,
            lineHeight: 1.55,
            color: C.sub,
            maxWidth: 480,
            textWrap: 'pretty',
          }}
        >
          Full-stack engineer building{' '}
          <span style={{ color: C.text, fontWeight: 600 }}>securities-pricing infrastructure</span>{' '}
          at Fidelity. After hours: trading automation, on-chain data, and tools that track money
          with the precision it deserves.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6, flexWrap: 'wrap' }}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              fontFamily: FONT.mono,
              fontSize: 14,
              fontWeight: 600,
              color: C.bg,
              background: C.green,
              padding: '13px 26px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            view resume
          </a>
          <a href="https://github.com/TriDevelopers" target="_blank" rel="noreferrer" className="btn-ghost" style={ghostBtn}>
            github ↗
          </a>
          <a href="https://www.linkedin.com/in/tridinhminhngo/" target="_blank" rel="noreferrer" className="btn-ghost" style={ghostBtn}>
            linkedin ↗
          </a>
        </div>
      </div>

      {/* market panel */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: C.panel,
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16,
          boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(62,224,143,0.05)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <span style={{ fontFamily: FONT.mono, fontSize: 12, color: C.dim }}>career index · live</span>
          <span style={{ fontFamily: FONT.mono, fontSize: 12, color: C.green }}>▲ since 2024</span>
        </div>

        <div
          style={{
            padding: '15px 18px 2px',
            minHeight: 92,
            fontFamily: FONT.mono,
            fontSize: 12.5,
            lineHeight: 1.85,
            color: C.muted,
          }}
        >
          <BootLog boot={boot} />
        </div>

        {/* quote strip */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '6px 18px 12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
              <span style={{ fontFamily: FONT.display, fontSize: 27, fontWeight: 700, letterSpacing: '-0.02em', color: C.text }}>
                TRI/USD
              </span>
              <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.green }}>▲ outperforming</span>
            </div>
            <span style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.dim }}>
              underlying · career equity — one engineer, compounding
            </span>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontFamily: FONT.mono, fontSize: 10.5, color: C.dim, letterSpacing: '0.04em' }}>CONVICTION</span>
            <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.green }}>long-term hold</span>
          </div>
        </div>

        <canvas ref={candlesRef} style={{ display: 'block', width: '100%', height: 208 }} />

        {/* time axis */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '9px 18px 13px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontFamily: FONT.mono,
            fontSize: 10,
            color: C.faint,
          }}
        >
          <span>2020</span>
          <span>2022</span>
          <span>2024</span>
          <span style={{ color: C.green }}>now ●</span>
        </div>
      </div>
    </header>
  );
}
