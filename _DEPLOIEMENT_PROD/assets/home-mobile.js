/* Touch feedback only: links keep their native navigation. */
(() => {
  'use strict';
  const root = document.getElementById('home-mobile');
  if (!root) return;
  const mobile = matchMedia('(max-width:767px)');
  let pressed = null;
  let releaseTimer = 0;
  const clear = () => {
    clearTimeout(releaseTimer);
    pressed?.classList.remove('is-pressed');
    pressed = null;
  };
  root.addEventListener('pointerdown', event => {
    if (!mobile.matches || !event.isPrimary || event.button !== 0) return;
    clear();
    pressed = event.target.closest('.home-card,.home-contact-actions a');
    pressed?.classList.add('is-pressed');
  }, { passive: true });
  document.addEventListener('pointerup', () => { releaseTimer = setTimeout(clear, 100); }, { passive: true });
  document.addEventListener('pointercancel', clear, { passive: true });
  addEventListener('blur', clear);
  mobile.addEventListener('change', clear);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
})();
