import React, { useRef } from 'react';
import { FONT, C, MAXW } from 'theme/tokens';
import { useScrollProgress } from 'hooks';

const midLinks = [
  { href: '#about', label: 'about' },
  { href: '#ledger', label: 'experience' },
  { href: '#positions', label: 'projects' },
  { href: '#allocation', label: 'allocation' },
];

export default function Nav() {
  const barRef = useRef(null);
  useScrollProgress(barRef);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,14,19,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        data-r="nav-inner"
        style={{
          maxWidth: MAXW,
          margin: '0 auto',
          padding: '15px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: FONT.mono,
            fontSize: 14,
            color: C.green,
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          tri@ngo:~$
        </a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {midLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-r="navlink"
              className="nav-link"
              style={{
                fontFamily: FONT.mono,
                fontSize: 13,
                color: C.muted,
                textDecoration: 'none',
                padding: '8px 13px',
                borderRadius: 999,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{
              fontFamily: FONT.mono,
              fontSize: 13,
              color: C.bg,
              textDecoration: 'none',
              background: C.green,
              padding: '9px 18px',
              borderRadius: 999,
              fontWeight: 600,
              marginLeft: 6,
              whiteSpace: 'nowrap',
            }}
          >
            contact →
          </a>
        </div>
      </div>
      <div style={{ height: 2, background: 'rgba(255,255,255,0.05)' }}>
        <div ref={barRef} style={{ height: '100%', width: '0%', background: C.green }} />
      </div>
    </nav>
  );
}
