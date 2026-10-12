/* Details on demand for the two public hubs. */
(() => {
  'use strict';
  const dialog = document.getElementById('hub-modal');
  const content = document.getElementById('hub-detail');
  let trigger;
  document.querySelectorAll('[data-hub-detail]').forEach(button => {
    button.addEventListener('click', () => {
      const template = document.getElementById(button.dataset.hubDetail);
      if (!template || !dialog || !content) return;
      trigger = button;
      content.replaceChildren(template.content.cloneNode(true));
      content.querySelector('h2').id = 'hub-modal-title';
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add('modal-open');
      dialog.querySelector('.modal-close').focus();
    });
  });
  if (dialog) {
    dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const nodes = [...dialog.querySelectorAll('button,a[href],[tabindex]')].filter(node => !node.disabled && node.tabIndex >= 0 && node.getClientRects().length);
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    const outside = event => { const r = dialog.getBoundingClientRect(); return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom; };
    let backdropPress = false;
    dialog.addEventListener('pointerdown', event => { backdropPress = event.target === dialog && outside(event); });
    dialog.addEventListener('click', event => { if (backdropPress && event.target === dialog && outside(event)) dialog.close(); backdropPress = false; });
    dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); trigger?.focus(); });
  }
  const toggle = document.getElementById('navMobBtn');
  const menu = document.getElementById('navMob');
  function closeMenu() { menu?.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); if (toggle) toggle.textContent = '☰'; }
  toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? '×' : '☰'; });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.classList.contains('open') && !dialog?.open) { closeMenu(); toggle.focus(); } });
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
})();

/* Existing custom cursor with native fallback. */
(() => {
  const cursor = document.querySelector('.cursor');
  const trail = document.querySelector('.cursor-trail');
  const body = document.body;
  let frame = 0, ready = false, active = false;
  let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;
  const listeners = [];
  const disable = () => {
    body.classList.remove('custom-cursor-enabled');
    active = false;
    cancelAnimationFrame(frame);
    cursor?.classList.remove('hover', 'click');
    trail?.classList.remove('hover');
  };
  try {
    const desktop = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1025px)');
    if (!cursor || !trail || !desktop.matches) return;
    const listen = (target, event, handler) => {
      const safeHandler = e => { try { handler(e); } catch { disable(); } };
      target.addEventListener(event, safeHandler);
      listeners.push(() => target.removeEventListener(event, safeHandler));
    };
    const animateTrail = () => {
      try {
        if (!active) return;
        if (!cursor.isConnected || !trail.isConnected || !desktop.matches) { disable(); return; }
        trailX += (mouseX - trailX) * .12;
        trailY += (mouseY - trailY) * .12;
        trail.style.left = trailX + 'px'; trail.style.top = trailY + 'px';
        frame = requestAnimationFrame(animateTrail);
      } catch { disable(); }
    };
    listen(document, 'mousemove', e => {
      if (!ready || !desktop.matches || !cursor.isConnected || !trail.isConnected) { disable(); return; }
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
      if (!active) {
        trailX = mouseX; trailY = mouseY;
        trail.style.left = trailX + 'px'; trail.style.top = trailY + 'px';
        active = true;
        frame = requestAnimationFrame(animateTrail);
        body.classList.add('custom-cursor-enabled');
      }
    });
    document.querySelectorAll('a,button,input,textarea,select,.presta-card,.pilier-card,.tab-btn,.sector-card').forEach(el => {
      listen(el, 'mouseenter', () => { cursor.classList.add('hover'); trail.classList.add('hover'); });
      listen(el, 'mouseleave', () => { cursor.classList.remove('hover'); trail.classList.remove('hover'); });
    });
    listen(document, 'mousedown', () => cursor.classList.add('click'));
    listen(document, 'mouseup', () => cursor.classList.remove('click'));
    listen(document.documentElement, 'mouseleave', disable);
    listen(window, 'blur', disable);
    listen(desktop, 'change', disable);
    ready = true;
  } catch {
    disable();
    listeners.forEach(remove => remove());
  }
})();
