import { useEffect, useState } from 'react';

/*
 * Hero intro sequence — boot log + name "decrypt".
 * Time-driven exactly like the design: glyphs scramble, then the real
 * name resolves left-to-right between 900ms and 2100ms. Once everything
 * has settled (~2.2s) the timer stops; nothing loops.
 */
const GLYPHS = '01$#&%@▓9F4AE7';
const NAME = 'Tri Ngo';
const BOOT = [
  ['init secure session', 'ok'],
  ['sync market feed', 'ok'],
  ['load identity', 'Tri Ngo ✓'],
];

const randGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export function useHeroSequence() {
  const [heroName, setHeroName] = useState('');
  const [boot, setBoot] = useState([]);

  useEffect(() => {
    const t0 = performance.now();
    let raf;
    let interval;

    const tick = () => {
      const t = performance.now() - t0;

      // boot log: line i appears at 220 + i*340ms, status lands 200ms later
      const nextBoot = [];
      for (let i = 0; i < BOOT.length; i++) {
        const start = 220 + i * 340;
        if (t >= start) {
          nextBoot.push({ label: BOOT[i][0], status: t >= start + 200 ? BOOT[i][1] : null });
        }
      }
      setBoot(nextBoot);

      // name decrypt: scrambled glyphs resolving 900 -> 2100ms
      let name;
      if (t >= 2100) {
        name = NAME;
      } else {
        const reveal = t < 900 ? 0 : Math.floor(((t - 900) / 1200) * NAME.length);
        name = '';
        for (let i = 0; i < NAME.length; i++) {
          name += i < reveal ? NAME[i] : NAME[i] === ' ' ? ' ' : randGlyph();
        }
      }
      setHeroName(name);

      if (t < 2200) {
        // scramble fast while resolving
        clearTimeout(interval);
        interval = setTimeout(() => { raf = requestAnimationFrame(tick); }, 55);
      } else {
        setHeroName(NAME);
      }
    };

    tick();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(interval);
    };
  }, []);

  return { heroName, boot };
}
