import React, { useCallback, useState } from 'react';
import { C, FONT } from 'theme/tokens';
import { useReveal, useKonami } from 'hooks';
import Nav from 'components/layout/Nav';
import { Hero, Ticker, About, Experience, AiFlow, Projects, Allocation, Contact } from 'components/sections';
import HodlOverlay from 'components/overlays/HodlOverlay';

/* Composition root: global effects + the page sections in order. */
export default function App() {
  const [konami, setKonami] = useState(false);

  useReveal();
  const openVault = useCallback(() => setKonami(true), []);
  const closeVault = useCallback(() => setKonami(false), []);
  useKonami(openVault, closeVault);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: C.bg,
        color: C.text,
        fontFamily: FONT.sans,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <AiFlow />
      <Projects />
      <Allocation />
      <Contact />
      {konami && <HodlOverlay onClose={closeVault} />}
    </div>
  );
}
