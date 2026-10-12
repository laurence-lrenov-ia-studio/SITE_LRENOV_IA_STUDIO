(() => {
  'use strict';
  let trigger = null;
  let previousOverflow = null;
  let previousScroll = null;
  let hadModalOpenClass = false;
  const dialogs = [...document.querySelectorAll('.fafcea-modal')];
  document.querySelectorAll('[data-fafcea-open]').forEach(button => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById('fafcea-modal-' + button.dataset.fafceaOpen);
      trigger = button;
      previousScroll = { left: window.scrollX, top: window.scrollY };
      previousOverflow = [document.documentElement.style.overflow, document.body.style.overflow];
      hadModalOpenClass = document.body.classList.contains('modal-open');
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      dialog.querySelector('[data-fafcea-close]').focus({ preventScroll: true });
    });
  });
  dialogs.forEach(dialog => {
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const focusable = [...dialog.querySelectorAll('button:not(:disabled),a[href],[tabindex="0"]')].filter(el => el.getClientRects().length);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    dialog.querySelector('[data-fafcea-close]').addEventListener('click', () => dialog.close());
    const outside = event => {
      const r = dialog.getBoundingClientRect();
      return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
    };
    let backdropPress = false;
    dialog.addEventListener('pointerdown', event => {
      backdropPress = event.target === dialog && outside(event);
    });
    dialog.addEventListener('pointercancel', () => { backdropPress = false; });
    dialog.addEventListener('click', event => {
      if (backdropPress && event.target === dialog && outside(event)) dialog.close();
      backdropPress = false;
    });
    dialog.addEventListener('close', () => {
      backdropPress = false;
      if (!hadModalOpenClass) document.body.classList.remove('modal-open');
      if (previousOverflow) {
        document.documentElement.style.overflow = previousOverflow[0];
        document.body.style.overflow = previousOverflow[1];
        previousOverflow = null;
      }
      trigger?.focus({ preventScroll: true });
      if (previousScroll) {
        window.scrollTo({ ...previousScroll, behavior: 'instant' });
        previousScroll = null;
      }
    });
  });
  const value = window.FAFCEA_CONFIG?.devisUrl;
  try {
    if (typeof value !== 'string' || !value.trim()) return;
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return;
    document.querySelectorAll('[data-fafcea-quote]').forEach(button => {
      const link = document.createElement('a');
      link.className = button.className; link.textContent = button.textContent;
      link.href = url.href; button.replaceWith(link);
    });
    const note = document.querySelector('.fafcea-common-actions .muted');
    if (note) note.hidden = true;
  } catch { /* Le bouton reste désactivé sans lien officiel valide. */ }
})();
