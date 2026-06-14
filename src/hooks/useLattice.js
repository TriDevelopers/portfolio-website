import { useEffect } from 'react';

/*
 * Rotating wireframe node-sphere behind the hero name. Fibonacci sphere of
 * 112 points, edges between near neighbours, projected each frame. On mobile
 * the sphere recenters horizontally and rides up behind the name.
 * Ported 1:1 from the design.
 */
export function useLattice(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    const N = 112;
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    const edges = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        if (dx * dx + dy * dy + dz * dz < 0.16) edges.push([i, j]);
      }
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);

    const proj = new Array(N);
    let raf;
    const draw = (t) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      // on mobile the sphere recenters horizontally and rides up behind the name
      const mobile = window.innerWidth <= 900;
      const cx = mobile ? w * 0.5 : w * 0.27;
      const cy = mobile ? h * 0.17 : h * 0.52;
      const R = (mobile ? Math.min(w, h * 0.42) : Math.min(w, h)) * 0.52;
      const ay = t * 0.00012;
      const ax = Math.sin(t * 0.00005) * 0.35 + 0.3;
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);
      for (let i = 0; i < N; i++) {
        const [x, y, z] = pts[i];
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const s = 1 / (1.9 - z2 * 0.6);
        proj[i] = [cx + x1 * R * s, cy + y1 * R * s, z2];
      }
      ctx.lineWidth = dpr * 0.7;
      for (const [i, j] of edges) {
        const depth = (proj[i][2] + proj[j][2]) / 2;
        const a = 0.018 + (depth + 1) * 0.038;
        ctx.strokeStyle = 'rgba(62,224,143,' + a.toFixed(3) + ')';
        ctx.beginPath();
        ctx.moveTo(proj[i][0], proj[i][1]);
        ctx.lineTo(proj[j][0], proj[j][1]);
        ctx.stroke();
      }
      for (let i = 0; i < N; i++) {
        const depth = proj[i][2];
        const a = 0.08 + (depth + 1) * 0.2;
        const r = dpr * (1.0 + (depth + 1) * 0.9);
        ctx.fillStyle = 'rgba(62,224,143,' + a.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(proj[i][0], proj[i][1], r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [canvasRef]);
}
