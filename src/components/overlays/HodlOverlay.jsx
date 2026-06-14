import React from 'react';
import { FONT, C } from 'theme/tokens';

export default function HodlOverlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(5,7,10,0.78)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(540px, 90vw)',
          borderRadius: 16,
          background: C.panel,
          border: '1px solid rgba(62,224,143,0.35)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          cursor: 'default',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '13px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            fontFamily: FONT.mono,
            fontSize: 12,
          }}
        >
          <span style={{ color: C.green }}>vault — access granted</span>
          <span style={{ color: C.dim }}>esc to close</span>
        </div>
        <div style={{ padding: '26px 24px', fontFamily: FONT.mono, fontSize: 13.5, lineHeight: 1.9, color: C.sub }}>
          <div>
            <span style={{ color: C.green }}>$</span> <span style={{ color: C.text }}>unlock --passphrase ••••</span>
          </div>
          <div style={{ color: C.green }}>✓ diamond hands verified</div>
          <div style={{ marginTop: 14 }}>
            You found the easter egg — that curiosity is exactly what I look for in a teammate. The
            position on me is still open; the contact button decrypts my email.{' '}
            <span style={{ color: C.green }}>— Tri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
