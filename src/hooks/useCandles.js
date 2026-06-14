import { useEffect } from 'react';

/*
 * Candlestick chart — gentle upward drift (career compounding) with real
 * volatility. Candles fill in over time, then the last one jitters live.
 * Ported 1:1 from the design's canvas routine.
 */
export function useCandles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const candles = [];
    let count = 0;
    let lastTick = 0;
    const t0 = performance.now();

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      count = Math.ceil(canvas.width / (21 * dpr)) + 1;
    };
    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);

    const ctx = canvas.getContext('2d');

    const draw = (shown) => {
      const CW = 14 * dpr;
      const GAP = 7 * dpr;
      const pad = 18 * dpr;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      let lo = Infinity;
      let hi = -Infinity;
      const n = Math.min(shown, candles.length);
      for (let i = 0; i < n; i++) {
        lo = Math.min(lo, candles[i].lo);
        hi = Math.max(hi, candles[i].hi);
      }
      if (!isFinite(lo)) { lo = 0; hi = 1; }
      const range = Math.max(0.0001, hi - lo);
      const y = (v) => h - pad - ((v - lo) / range) * (h - pad * 2);

      for (let i = 0; i < n; i++) {
        const c = candles[i];
        const x = 16 * dpr + i * (CW + GAP);
        const up = c.close >= c.open;
        const col = up ? 'rgba(62,224,143,0.9)' : 'rgba(229,96,76,0.85)';
        ctx.strokeStyle = col;
        ctx.lineWidth = dpr;
        ctx.beginPath();
        ctx.moveTo(x + CW / 2, y(c.hi));
        ctx.lineTo(x + CW / 2, y(c.lo));
        ctx.stroke();
        ctx.fillStyle = col;
        const top = y(Math.max(c.open, c.close));
        const hgt = Math.max(dpr, Math.abs(y(c.open) - y(c.close)));
        ctx.fillRect(x, top, CW, hgt);
      }
    };

    let raf;
    const frame = () => {
      const t = performance.now() - t0;
      if (canvas.width > 0) {
        while (candles.length < count) {
          const open = candles.length ? candles[candles.length - 1].close : 0.26;
          const close = Math.min(0.93, Math.max(0.12, open + (Math.random() - 0.42) * 0.13 + 0.0075));
          candles.push({
            open,
            close,
            hi: Math.max(open, close) + Math.random() * 0.06,
            lo: Math.min(open, close) - Math.random() * 0.06,
          });
        }
        const shown = t < 700 ? 0 : Math.min(count, Math.floor((t - 700) / 34));
        if (shown >= count && count > 0 && t - lastTick > 700) {
          lastTick = t;
          const last = candles[candles.length - 1];
          last.close = Math.min(0.9, Math.max(0.1, last.close + (Math.random() - 0.46) * 0.035));
          last.hi = Math.max(last.hi, last.close);
          last.lo = Math.min(last.lo, last.close);
        }
        draw(shown);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [canvasRef]);
}
