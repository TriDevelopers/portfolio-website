import { useEffect } from 'react';

/*
 * Click-drag-to-pan for the AI flow diagram (mouse only — touch keeps native
 * momentum scroll). Shows the "drag to explore" hint while the diagram
 * overflows and is scrolled to the start.
 */
export function useDragPan(scrollRef, hintRef) {
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    const syncHint = () => {
      const h = hintRef.current;
      if (!h) return;
      const overflow = el.scrollWidth - el.clientWidth > 8;
      const atStart = el.scrollLeft < 8;
      h.style.opacity = overflow && atStart ? '1' : '0';
    };

    let down = false;
    let startX = 0;
    let startScroll = 0;
    const onDown = (e) => {
      if (e.pointerType !== 'mouse') return; // touch/trackpad use native scroll
      down = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.style.cursor = 'grabbing';
      try { el.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    };
    const onMove = (e) => {
      if (!down) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const end = () => { down = false; el.style.cursor = 'grab'; };
    const onDragStart = (e) => e.preventDefault();

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('dragstart', onDragStart);
    el.addEventListener('scroll', syncHint, { passive: true });
    window.addEventListener('resize', syncHint);
    syncHint();

    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', end);
      el.removeEventListener('pointercancel', end);
      el.removeEventListener('dragstart', onDragStart);
      el.removeEventListener('scroll', syncHint);
      window.removeEventListener('resize', syncHint);
    };
  }, [scrollRef, hintRef]);
}
