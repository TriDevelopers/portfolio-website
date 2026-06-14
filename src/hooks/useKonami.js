import { useEffect } from 'react';

/*
 * Easter egg: typing "hodl" anywhere unlocks the vault overlay; Escape closes it.
 */
export function useKonami(onOpen, onClose) {
  useEffect(() => {
    let buf = '';
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-8);
      if (buf.endsWith('hodl')) { buf = ''; onOpen(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onOpen, onClose]);
}
