import React from 'react';
import { FONT, C, MAXW } from 'theme/tokens';
import triPhoto from 'assets/images/tri.jpg';

const chips = ['distributed systems', 'markets & trading', 'security & self-custody', 'ai-native dev'];

const stats = [
  { value: '2+', label: 'years in production at Fidelity' },
  { value: '24h', label: 'production incident SLA, owned' },
  { value: '3.95', label: 'GPA · B.S. CS, UT Dallas' },
];

const SpinRing = () => (
  <svg width="46" height="46" viewBox="0 0 46 46" style={{ position: 'absolute', top: 10, right: 10 }}>
    <circle
      cx="23"
      cy="23"
      r="16"
      fill="none"
      stroke={C.green}
      strokeOpacity="0.35"
      strokeWidth="3"
      strokeDasharray="1 5.5"
      style={{ transformOrigin: '23px 23px', animation: 'spin 16s linear infinite' }}
    />
  </svg>
);

export default function About() {
  return (
    <section
      id="about"
      data-pad
      data-r="sec"
      style={{ maxWidth: MAXW, margin: '0 auto', padding: '92px 40px' }}
    >
      <div
        data-reveal
        data-r="about"
        style={{ display: 'grid', gridTemplateColumns: '264px 1fr', gap: 56, alignItems: 'start' }}
      >
        {/* photo */}
        <div data-r="about-photo" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img
              src={triPhoto}
              alt="Tri Ngo"
              style={{
                display: 'block',
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                filter: 'saturate(0.9) brightness(0.95)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(10,14,19,0.55))',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 2px',
              fontFamily: FONT.mono,
              fontSize: 11.5,
            }}
          >
            <span style={{ color: C.muted }}>dallas, tx</span>
            <span style={{ color: C.green, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 2.4s ease-in-out infinite' }} />
              zero trust
            </span>
          </div>
        </div>

        {/* copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>01 — about</span>
          <h2
            data-r="h2"
            style={{
              margin: 0,
              fontFamily: FONT.display,
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              maxWidth: 560,
              textWrap: 'pretty',
            }}
          >
            Finance and tech, forced to shake hands.
          </h2>
          <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.75, color: C.sub, maxWidth: 620, textWrap: 'pretty' }}>
            I got into software through markets — I like systems where the numbers have to add up. By
            day that's distributed pricing infrastructure at Fidelity: Java, Kafka, six microservices,
            and a pager I take seriously. By night it's trading automation and on-chain data, chasing
            what crypto promises — security, autonomy, and money that answers to math.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {chips.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: FONT.mono,
                  fontSize: 12.5,
                  color: C.text,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '7px 14px',
                  borderRadius: 999,
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <div
            data-r="about-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14,
              marginTop: 6,
              maxWidth: 620,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.value}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: 20,
                  borderRadius: 14,
                  background: C.panel,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <SpinRing />
                <span style={{ fontFamily: FONT.mono, fontSize: 26, fontWeight: 600, color: C.green }}>{s.value}</span>
                <span style={{ fontSize: 12.5, color: C.muted }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
