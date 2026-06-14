import React, { useRef } from 'react';
import { FONT, C, MAXW } from 'theme/tokens';
import { useDragPan } from 'hooks';

const BOX = {
  neutral: { border: '1px solid rgba(255,255,255,0.14)', background: '#0b0f14', color: C.soft },
  green: { border: '1px solid rgba(62,224,143,0.3)', background: '#0b1410', color: C.green },
  blue: { border: '1px solid rgba(122,162,247,0.32)', background: '#0b0f16', color: C.blue },
};

function Node({ left, top, box, icon, title, sub }) {
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: 120,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 9,
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 14,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...box,
        }}
      >
        {icon}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.04em', color: C.text }}>{title}</div>
        <div style={{ fontFamily: FONT.mono, fontSize: 10, color: C.dim, marginTop: 3 }}>{sub}</div>
      </div>
    </div>
  );
}

function Chip({ left, top, color, border, children }) {
  return (
    <span
      style={{
        position: 'absolute',
        left,
        top,
        transform: 'translate(-50%,-50%)',
        fontFamily: FONT.mono,
        fontSize: 9.5,
        color,
        background: C.panel,
        border,
        padding: '2px 8px',
        borderRadius: 999,
        zIndex: 3,
      }}
    >
      {children}
    </span>
  );
}

/* Tick-ring gauge with a centered number (microservices / rules / hours). */
function Gauge({ value, fontSize, label, sub }) {
  return (
    <div
      style={{
        background: C.panel,
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <svg width="78" height="78" viewBox="0 0 84 84" style={{ flexShrink: 0 }}>
        <circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
        <circle
          cx="42"
          cy="42"
          r="25"
          fill="none"
          stroke={C.green}
          strokeOpacity="0.5"
          strokeWidth="5"
          strokeDasharray="1.4 6.2"
          style={{ transformOrigin: '42px 42px', animation: 'spinrev 22s linear infinite' }}
        />
        <text x="42" y="48" textAnchor="middle" fontFamily={FONT.mono} fontSize={fontSize} fontWeight="600" fill={C.text}>
          {value}
        </text>
      </svg>
      <div>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.05em', color: C.sub }}>{label}</div>
        <div style={{ fontSize: 12, color: C.dim, marginTop: 4 }}>{sub}</div>
      </div>
    </div>
  );
}

const iconTarget = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="1" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="1" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="23" y2="12" />
  </svg>
);

const iconBot = (
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ animation: 'botbob 1.3s ease-in-out infinite', overflow: 'visible' }}>
    <line x1="14" y1="6.5" x2="14" y2="3" stroke="#3ee08f" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="2.4" r="1.7" fill="#5cf0a8" style={{ animation: 'blink 1.1s step-end infinite' }} />
    <rect x="5.5" y="6.5" width="17" height="12.5" rx="4.5" fill="#0b1812" stroke="#3ee08f" strokeWidth="1.7" />
    <circle cx="11" cy="12.5" r="1.8" fill="#3ee08f" />
    <circle cx="17" cy="12.5" r="1.8" fill="#3ee08f" />
    <rect x="10" y="15.6" width="8" height="1.5" rx="0.75" fill="#3ee08f" fillOpacity="0.55" />
    <line x1="9.5" y1="19" x2="9.5" y2="22.8" stroke="#3ee08f" strokeWidth="1.8" strokeLinecap="round" style={{ animation: 'legA 0.46s ease-in-out infinite' }} />
    <line x1="18.5" y1="19" x2="18.5" y2="22.8" stroke="#3ee08f" strokeWidth="1.8" strokeLinecap="round" style={{ animation: 'legB 0.46s ease-in-out infinite' }} />
  </svg>
);

const iconCode = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const iconShield = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5l-8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const iconSend = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const iconChip = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);

const iconLock = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const flowPaths = [
  'M94,60 L258,60',
  'M318,60 L482,60',
  'M542,60 L706,60',
  'M766,60 L930,60',
  'M512,90 L512,180',
  'M542,210 L706,210',
  'M736,180 L736,92',
];

export default function AiFlow() {
  const scrollRef = useRef(null);
  const hintRef = useRef(null);
  useDragPan(scrollRef, hintRef);

  return (
    <section id="ai" data-pad data-r="sec" style={{ maxWidth: MAXW, margin: '0 auto', padding: '92px 40px' }}>
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
        <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>03 — ai-native</span>
        <h2 data-r="h2" style={{ margin: 0, fontFamily: FONT.display, fontSize: 38, fontWeight: 700, letterSpacing: '-0.03em' }}>
          How I ship with AI
        </h2>
      </div>
      <p data-reveal style={{ margin: '0 0 40px', maxWidth: 700, fontSize: 16, lineHeight: 1.6, color: C.sub, textWrap: 'pretty' }}>
        AI writes drafts. I own the architecture, the review, and the pager. The pipeline I run at
        Fidelity — where I drove team adoption — and at home, where I built my trading tools largely
        this way.
      </p>

      <div data-reveal style={{ background: C.panel, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '26px 28px 30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.dim }}>{'// ship-with-ai.flow'}</span>
          <span style={{ fontFamily: FONT.mono, fontSize: 12, color: C.green, display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'dot 1.6s ease-in-out infinite' }} />
            human-in-the-loop
          </span>
        </div>

        <div style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            data-r="ai-scroll"
            style={{ overflowX: 'auto', cursor: 'grab', touchAction: 'pan-x', WebkitOverflowScrolling: 'touch' }}
          >
            <div
              style={{
                position: 'relative',
                width: 1040,
                height: 296,
                margin: '0 auto',
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
            <svg viewBox="0 0 1040 296" width="1040" height="296" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
              <defs>
                <marker id="ah6" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#3ee08f" fillOpacity="0.6" />
                </marker>
              </defs>
              <g fill="none" stroke="#3ee08f" strokeOpacity="0.42" strokeWidth="1.5" strokeDasharray="2.5 5.5">
                {flowPaths.map((d, i) => (
                  <path key={i} d={d} markerEnd="url(#ah6)">
                    <animate attributeName="stroke-dashoffset" values="16;0" dur="0.7s" repeatCount="indefinite" />
                  </path>
                ))}
              </g>
              <circle r="6" fill="#3ee08f" opacity="0.22">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M94,60 L930,60" />
              </circle>
              <circle r="2.8" fill="#5cf0a8">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M94,60 L930,60" />
              </circle>
              <circle r="2.4" fill="#7aa2f7">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M512,90 L512,210 L736,210 L736,92" />
              </circle>
            </svg>

            {/* chips */}
            <Chip left={176} top={60} color={C.muted} border="1px solid rgba(255,255,255,0.12)">frame</Chip>
            <Chip left={400} top={60} color={C.muted} border="1px solid rgba(255,255,255,0.12)">scaffold</Chip>
            <Chip left={624} top={60} color={C.muted} border="1px solid rgba(255,255,255,0.12)">review</Chip>
            <Chip left={848} top={60} color={C.green} border="1px solid rgba(62,224,143,0.3)">ship</Chip>
            <Chip left={624} top={210} color={C.blue} border="1px solid rgba(122,162,247,0.3)">isolate</Chip>

            {/* main pipeline */}
            <Node left={4} top={30} box={BOX.neutral} icon={iconTarget} title="INTENT" sub="spec + tests" />
            <Node left={228} top={30} box={BOX.green} icon={iconBot} title="CLAUDE CODE" sub="pair · scaffold" />
            <Node left={452} top={30} box={BOX.green} icon={iconCode} title="CUSTOM AGENTS" sub="automate 80%" />
            <Node left={676} top={30} box={BOX.neutral} icon={iconShield} title="REVIEW" sub="I own every line" />
            <Node left={900} top={30} box={BOX.green} icon={iconSend} title="SHIP" sub="prod · on-call" />

            {/* branch */}
            <Node left={452} top={180} box={BOX.blue} icon={iconChip} title="LOCAL MODELS" sub="Ollama · on-device" />
            <Node left={676} top={180} box={BOX.blue} icon={iconLock} title="PRIVATE DATA" sub="never leaves box" />
            </div>
          </div>
          <div
            ref={hintRef}
            data-r="ai-hint"
            style={{
              position: 'absolute',
              left: 12,
              bottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '7px 13px',
              borderRadius: 999,
              background: 'rgba(13,18,25,0.92)',
              border: '1px solid rgba(62,224,143,0.3)',
              fontFamily: FONT.mono,
              fontSize: 11.5,
              color: C.green,
              pointerEvents: 'none',
              opacity: 0,
              transition: 'opacity .35s',
              whiteSpace: 'nowrap',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
            drag to explore
          </div>
        </div>
      </div>

      {/* telemetry instruments */}
      <div data-reveal style={{ marginTop: 20 }}>
        <div style={{ fontFamily: FONT.mono, fontSize: 12, letterSpacing: '0.06em', color: C.dim, marginBottom: 12 }}>
          {'// telemetry · real numbers, no slop'}
        </div>
        <div data-r="telemetry" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {/* coverage : true % => smooth arc */}
          <div
            style={{
              background: C.panel,
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <svg width="78" height="78" viewBox="0 0 84 84" style={{ flexShrink: 0 }}>
              <circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
              <circle
                cx="42"
                cy="42"
                r="25"
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="5"
                strokeDasharray="1.4 6.2"
                style={{ transformOrigin: '42px 42px', animation: 'spinrev 22s linear infinite' }}
              />
              <circle
                cx="42"
                cy="42"
                r="34"
                fill="none"
                stroke={C.green}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="213.6"
                strokeDashoffset="21.4"
                transform="rotate(-90 42 42)"
              />
              <text x="42" y="47" textAnchor="middle" fontFamily={FONT.mono} fontSize="15" fontWeight="600" fill={C.text}>
                90%
              </text>
            </svg>
            <div>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, letterSpacing: '0.05em', color: C.sub }}>TEST COVERAGE</div>
              <div style={{ fontSize: 12, color: C.dim, marginTop: 4 }}>held across 6 services</div>
            </div>
          </div>

          <Gauge value="6" fontSize="20" label="MICROSERVICES" sub="hexagonal, in prod" />
          <Gauge value="24h" fontSize="18" label="INCIDENT SLA" sub="on-call, owned end-to-end" />
          <Gauge value="8h" fontSize="18" label="RECLAIMED / WEEK" sub="manual process killed" />
        </div>
      </div>
    </section>
  );
}
