import React from 'react';
import { FONT, C, MAXW } from 'theme/tokens';

const line = {
  position: 'absolute',
  left: 13,
  top: 4,
  width: 1,
  background: 'rgba(255,255,255,0.1)',
};

/* One ledger entry: date gutter, the rail (connecting line + node marker),
   then the card content. `last` shortens the rail so the chain terminates. */
function LedgerRow({ date, block, marker, last, children }) {
  return (
    <div data-r="exp-row" style={{ display: 'grid', gridTemplateColumns: '168px 28px 1fr', gap: 20 }}>
      <div data-r="exp-date" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 5, paddingTop: 2 }}>
        <span style={{ fontFamily: FONT.mono, fontSize: 12, color: C.sub }}>{date}</span>
        <span style={{ fontFamily: FONT.mono, fontSize: 11.5, color: C.dim }}>{block}</span>
      </div>
      <div data-r="exp-rail" style={{ position: 'relative' }}>
        <div style={{ ...line, ...(last ? { height: 18 } : { bottom: -28 }) }} />
        <div style={marker} />
      </div>
      <div style={last ? undefined : { paddingBottom: 28 }}>{children}</div>
    </div>
  );
}

const card = {
  background: C.panel,
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: '22px 26px',
};

const confirmedBadge = {
  flexShrink: 0,
  fontFamily: FONT.mono,
  fontSize: 11.5,
  color: C.green,
  background: 'rgba(62,224,143,0.06)',
  border: '1px solid rgba(62,224,143,0.2)',
  padding: '5px 12px',
  borderRadius: 999,
};

const fidelityTags = ['java 21', 'spring boot', 'kafka', 'angular', 'redis · oracle', 'openapi · resilience4j'];

const fidelityBullets = [
  <>Build across <strong style={{ color: C.text }}>6 Spring Boot microservices</strong> (Java 21, Kafka, Oracle, Redis) in a hexagonal architecture</>,
  <>Own a pricing workstream in production — alerting, daily run metrics, on-call resolution within a <strong style={{ color: C.text }}>24h SLA</strong></>,
  <>Designed <strong style={{ color: C.text }}>19+ validation rules</strong> with parallel async execution, feature flags, and distributed locking — bad prices die before they propagate</>,
  <>Ship features end-to-end — REST APIs, Kafka event pipelines, and Angular UI — <strong style={{ color: C.text }}>contract-first from OpenAPI specs</strong>, generating services straight from the spec at <strong style={{ color: C.text }}>90%+ coverage</strong></>,
  <>Automated a recurring manual process end-to-end, returning <strong style={{ color: C.text }}>~8 hours/week</strong> to the business</>,
];

export default function Experience() {
  return (
    <section
      id="ledger"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.012)' }}
    >
      <div data-pad data-r="sec" style={{ maxWidth: MAXW, margin: '0 auto', padding: '92px 40px' }}>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>02 — experience</span>
          <h2 data-r="h2" style={{ margin: 0, fontFamily: FONT.display, fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em' }}>
            The ledger
          </h2>
          <p style={{ margin: 0, fontSize: 15.5, color: C.muted }}>
            Append-only. No revisions — exactly how a career history should read.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Block #04 — GaTech (pending) */}
          <div data-reveal>
            <LedgerRow
              date="2024 → 2028"
              block="block #04"
              marker={{
                position: 'absolute',
                left: 7,
                top: 5,
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: C.bg,
                border: `2px solid ${C.gold}`,
              }}
            >
              <div style={card}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h3 style={{ margin: 0, fontFamily: FONT.display, fontSize: 19, fontWeight: 600 }}>
                      Georgia Institute of Technology
                    </h3>
                    <span style={{ fontSize: 14, color: C.muted }}>M.S. in Computer Science · since 2024</span>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: FONT.mono,
                      fontSize: 11.5,
                      color: C.gold,
                      background: 'rgba(217,164,65,0.08)',
                      border: '1px solid rgba(217,164,65,0.28)',
                      padding: '5px 12px',
                      borderRadius: 999,
                    }}
                  >
                    pending · 2028
                  </span>
                </div>
              </div>
            </LedgerRow>
          </div>

          {/* Block #03 — Fidelity (expanded, active) */}
          <div data-reveal>
            <LedgerRow
              date="2024.06 → now"
              block="block #03"
              marker={{
                position: 'absolute',
                left: 6,
                top: 4,
                width: 15,
                height: 15,
                borderRadius: '50%',
                background: C.green,
                boxShadow: '0 0 0 4px rgba(62,224,143,0.14)',
              }}
            >
              <div
                style={{
                  background: C.panel,
                  border: '1px solid rgba(62,224,143,0.28)',
                  borderRadius: 16,
                  padding: '26px 28px',
                  boxShadow: '0 8px 32px rgba(62,224,143,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h3 style={{ margin: 0, fontFamily: FONT.display, fontSize: 21, fontWeight: 600 }}>
                      Fidelity Investments
                    </h3>
                    <span style={{ fontSize: 14.5, color: C.muted }}>
                      Full-Stack Software Engineer — securities pricing
                    </span>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      fontFamily: FONT.mono,
                      fontSize: 11.5,
                      color: C.green,
                      background: 'rgba(62,224,143,0.08)',
                      border: '1px solid rgba(62,224,143,0.25)',
                      padding: '5px 12px',
                      borderRadius: 999,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 2.4s ease-in-out infinite' }} />
                    active
                  </span>
                </div>

                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14.5, lineHeight: 1.6, color: C.sub }}>
                  {fidelityBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div
                  style={{
                    display: 'flex',
                    gap: 13,
                    alignItems: 'flex-start',
                    marginTop: 16,
                    padding: '13px 15px',
                    borderRadius: 12,
                    background: 'rgba(62,224,143,0.06)',
                    border: '1px solid rgba(62,224,143,0.2)',
                  }}
                >
                  <span style={{ flexShrink: 0, fontFamily: FONT.mono, fontSize: 10, letterSpacing: '0.08em', color: C.green, paddingTop: 3 }}>
                    ★ LEADERSHIP
                  </span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.55, color: C.soft }}>
                    Led the team's shift to AI-native development — <strong style={{ color: C.text }}>pitched it to leadership</strong>, ran the
                    enablement sessions, and wrote the Claude Code playbook the team now pairs with daily.
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {fidelityTags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: FONT.mono,
                        fontSize: 11.5,
                        color: C.green,
                        background: 'rgba(62,224,143,0.08)',
                        border: '1px solid rgba(62,224,143,0.22)',
                        padding: '4px 11px',
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </LedgerRow>
          </div>

          {/* Block #02 — SVTech */}
          <div data-reveal>
            <LedgerRow
              date="2022.06 → .09"
              block="block #02"
              marker={{
                position: 'absolute',
                left: 7,
                top: 5,
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: C.bg,
                border: `2px solid ${C.green}`,
              }}
            >
              <div style={card}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontFamily: FONT.display, fontSize: 19, fontWeight: 600 }}>SVTech</h3>
                    <span style={{ fontSize: 14, color: C.muted }}>
                      SWE Intern — built a multi-provider facial-recognition API (Java, Spring Boot) that lifted
                      identification accuracy <strong style={{ color: C.sub }}>+20%</strong> over a single-provider baseline, then
                      shipped it to a production Ubuntu server.
                    </span>
                  </div>
                  <span style={confirmedBadge}>✓ confirmed</span>
                </div>
              </div>
            </LedgerRow>
          </div>

          {/* Block #01 — UTD */}
          <div data-reveal>
            <LedgerRow
              date="2020 → 2024"
              block="block #01"
              last
              marker={{
                position: 'absolute',
                left: 7,
                top: 5,
                width: 13,
                height: 13,
                borderRadius: '50%',
                background: C.bg,
                border: `2px solid ${C.green}`,
              }}
            >
              <div style={card}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h3 style={{ margin: 0, fontFamily: FONT.display, fontSize: 19, fontWeight: 600 }}>
                      The University of Texas at Dallas
                    </h3>
                    <span style={{ fontSize: 14, color: C.muted }}>B.S. in Computer Science — GPA 3.95 / 4.0</span>
                  </div>
                  <span style={confirmedBadge}>✓ confirmed</span>
                </div>
              </div>
            </LedgerRow>
          </div>
        </div>
      </div>
    </section>
  );
}
