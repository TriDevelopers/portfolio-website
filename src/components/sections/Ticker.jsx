import React from 'react';
import { FONT, C } from 'theme/tokens';

const ITEMS = [
  'Java 21', 'Spring Boot', 'Kafka', 'Angular', 'TypeScript', 'Redis',
  'Oracle', 'Kubernetes', 'AWS', 'Python', 'Claude Code', 'Ollama',
];

// One pass: each item followed by a diamond separator (margin handles spacing).
const segment = (keyPrefix) =>
  ITEMS.map((item, i) => (
    <React.Fragment key={`${keyPrefix}-${i}`}>
      <span>{item}</span>
      <span style={{ color: C.green, margin: '0 18px' }}>✦</span>
    </React.Fragment>
  ));

function Row({ ariaHidden }) {
  const prefix = ariaHidden ? 'b' : 'a';
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '14px 18px',
        fontFamily: FONT.mono,
        fontSize: 13,
        color: C.muted,
        whiteSpace: 'nowrap',
      }}
    >
      {/* list doubled within the row so the marquee reads continuously */}
      {segment(`${prefix}1`)}
      {segment(`${prefix}2`)}
    </div>
  );
}

export default function Ticker() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.015)',
      }}
    >
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
