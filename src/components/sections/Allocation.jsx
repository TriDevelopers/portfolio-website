import React from 'react';
import { FONT, C, MAXW } from 'theme/tokens';

// Proficiency depth per stack area (independent, not shares of a week).
const rows = [
  { name: 'Java · Spring Boot', pct: 96, note: 'backend core · daily driver' },
  { name: 'Kafka · Redis · Oracle', pct: 90, note: 'distributed data backbone' },
  { name: 'JUnit · Cypress · WireMock', pct: 88, note: 'tested before it ships' },
  { name: 'AWS · Kubernetes', pct: 85, note: 'deploy, scale, operate' },
  { name: 'Python', pct: 76, note: 'analysis & trading bots' },
  { name: 'TypeScript · Angular', pct: 64, note: 'the part users see' },
];

export default function Allocation() {
  return (
    <section id="allocation" data-pad data-r="sec" style={{ maxWidth: MAXW, margin: '0 auto', padding: '92px 40px' }}>
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 44 }}>
        <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>05 — stack</span>
        <h2 data-r="h2" style={{ margin: 0, fontFamily: FONT.display, fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em' }}>
          Allocation
        </h2>
        <p style={{ margin: 0, fontSize: 15.5, color: C.muted }}>
          Proficiency across the stack — independent depth in each, not a slice of the week.
        </p>
      </div>

      <div data-reveal style={{ background: C.panel, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '10px 30px' }}>
        {rows.map((r, i) => (
          <div
            key={r.name}
            data-r="alloc-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 52px 220px',
              gap: 20,
              alignItems: 'center',
              padding: '17px 0',
              borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.06)',
              fontSize: 14.5,
            }}
          >
            <span style={{ fontWeight: 600, color: C.text }}>{r.name}</span>
            <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div
                data-bar
                data-w={r.pct}
                style={{
                  height: '100%',
                  width: '0%',
                  borderRadius: 99,
                  background: C.green,
                  transition: 'width 1.1s cubic-bezier(.4,0,.2,1)',
                }}
              />
            </div>
            <span style={{ fontFamily: FONT.mono, color: C.green, fontWeight: 600, textAlign: 'right' }}>{r.pct}%</span>
            <span data-r="alloc-desc" style={{ color: C.dim, fontSize: 13 }}>{r.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
