import React, { useState } from 'react';
import { FONT, C, MAXW } from 'theme/tokens';

// Assembled at runtime so there's no scrapeable address in the page source.
const EMAIL = ['ndmt.2503', 'gmail.com'].join('@');

const ghostBtn = {
  fontFamily: FONT.mono,
  fontSize: 15,
  color: C.text,
  padding: '14px 26px',
  borderRadius: 999,
  textDecoration: 'none',
  border: '1px solid rgba(255,255,255,0.18)',
};

export default function Contact() {
  const [revealed, setRevealed] = useState(false);

  const onEmailClick = () => {
    if (!revealed) setRevealed(true);
    else window.location.href = 'mailto:' + EMAIL;
  };

  return (
    <section id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div data-reveal data-pad style={{ maxWidth: MAXW, margin: '0 auto', padding: '110px 40px 80px', textAlign: 'center' }}>
        <span style={{ fontFamily: FONT.mono, fontSize: 13, color: C.green }}>06 — contact</span>
        <h2
          style={{
            margin: '18px 0 0',
            fontFamily: FONT.display,
            fontSize: 'clamp(38px, 6vw, 58px)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.06,
          }}
        >
          Let's build something
          <br />
          that doesn't page you at 3am.
        </h2>
        <p style={{ margin: '22px auto 0', maxWidth: 520, fontSize: 16.5, lineHeight: 1.6, color: C.muted, textWrap: 'pretty' }}>
          Open to interesting problems in distributed systems, fintech, and AI-native engineering.
        </p>

        <div className="contact-actions" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
          <button
            onClick={onEmailClick}
            className="btn-primary"
            style={{
              fontFamily: FONT.mono,
              fontSize: 15,
              fontWeight: 600,
              color: C.bg,
              background: C.green,
              padding: '15px 30px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              minWidth: 288,
            }}
          >
            {revealed ? EMAIL : '$ decrypt --email'}
          </button>
          <a href="https://www.linkedin.com/in/tridinhminhngo/" target="_blank" rel="noreferrer" className="btn-ghost" style={ghostBtn}>
            linkedin ↗
          </a>
          <a href="https://github.com/TriDevelopers" target="_blank" rel="noreferrer" className="btn-ghost" style={ghostBtn}>
            github ↗
          </a>
        </div>

        <p style={{ margin: '16px 0 0', fontFamily: FONT.mono, fontSize: 12, color: C.faint }}>
          {revealed ? 'decrypted · click again to open your mail client' : 'click to reveal — no scrapeable address in the source'}
        </p>
      </div>

      <footer
        data-pad
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '24px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: MAXW,
          margin: '0 auto',
        }}
      >
        <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.dim }}>© 2026 Tri Ngo · dallas, tx</span>
        <span style={{ fontFamily: FONT.mono, fontSize: 12.5, color: C.dim }}>
          psst — type <span style={{ color: C.green }}>hodl</span>
        </span>
      </footer>
    </section>
  );
}
