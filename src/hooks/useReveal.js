import { useEffect } from 'react';

/*
 * Scroll-reveal for [data-reveal] elements and animated [data-bar] fills,
 * via a single IntersectionObserver. A safety timeout reveals everything
 * after 1.6s in case the observer never fires.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const el = en.target;
          if (el.dataset.bar !== undefined) {
            el.style.width = el.dataset.w + '%';
          } else {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition =
        'opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)';
      io.observe(el);
    });
    document.querySelectorAll('[data-bar]').forEach((el) => io.observe(el));

    const safety = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      document.querySelectorAll('[data-bar]').forEach((el) => {
        el.style.width = el.dataset.w + '%';
      });
    }, 1600);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);
}
