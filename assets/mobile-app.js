/* Progressive mobile presentation. Original nodes and desktop state are retained. */
(() => {
  'use strict';
  const mq = matchMedia('(max-width: 767px)');
  const siteRoot = new URL('../', document.currentScript.src);
  const page = location.pathname.includes('/panorama-ia/') ? 'panorama-ia' : location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  const body = document.body;
  body.dataset.mobilePage = page;
  const make = (tag, text, cls) => { const n = document.createElement(tag); n.textContent = text; if (cls) n.className = cls; return n; };
  const nav = make('nav', '', 'app-bottom');
  nav.setAttribute('aria-label', 'Navigation mobile');
  [['index','⌂','Accueil'],['formations','▤','Formations'],['radar-ia','◎','Radar IA'],['contact','✉','Contact']].forEach(([file, icon, label]) => {
    const a = make('a', ''); a.href = new URL(file + '.html', siteRoot).href;
    const pictogram = make('span', icon); pictogram.setAttribute('aria-hidden', 'true');
    a.append(pictogram, make('span', label));
    if (page === file || (file === 'formations' && /^(formations?-|ateliers)/.test(page))) a.setAttribute('aria-current', 'page');
    nav.append(a);
  });
  body.append(nav);
  const moves = [];
  function mobileMove(node, parent, before = null) {
    if (!node || !parent) return;
    const marker = document.createComment('desktop position'); node.before(marker);
    moves.push(() => mq.matches ? parent.insertBefore(node, before) : marker.after(node));
  }
  function shortLabel(node, text) {
    if (!node) return;
    const original = make('span', '', 'app-desktop-label');
    while (node.firstChild) original.append(node.firstChild);
    node.append(original, make('span', text, 'app-mobile-label'));
  }
  if (page === 'index') {
    const quick = make('div', '', 'app-shortcuts'); quick.setAttribute('role', 'navigation'); quick.setAttribute('aria-label', 'Accès rapides');
    [['ateliers.html','SHIFT','CTRL · CMD · ENTER'],['formations-fafcea.html','FAFCEA','Parcours individualisés'],['formation-cpf.html','CPF','Parcours certifiant RS7311'],['assistant.html','Solutions métier',''],['radar-ia.html','Radar IA',''],['contact.html','Contact / réservation','']].forEach(([href,title,info]) => {
      const a = make('a', ''); a.href = href; a.append(make('strong',title)); if(info) a.append(make('small',info)); a.append(make('span','Voir →')); quick.append(a);
    });
    const families = make('div', '', 'app-home-families');
    [['ctrl','CTRL'],['cmd','CMD'],['enter','ENTER']].forEach(([id,label]) => { const a = make('a',label); a.href = 'ateliers.html#' + id; families.append(a); });
    quick.firstElementChild.after(families);
    document.querySelector('.hero-inner')?.append(quick);
  }
  document.querySelectorAll('.offer-card .cta').forEach(a => shortLabel(a, 'Voir →'));
  shortLabel(document.querySelector('.offer-cpf h2'), 'CPF');
  shortLabel(document.querySelector('.offer-fafcea h2'), 'FAFCEA');
  document.querySelectorAll('.shift-family .row-action').forEach(n => shortLabel(n, 'Voir →'));
  shortLabel(document.querySelector('#formation-modal .modal-close'), '× Fermer');
  if (page === 'radar-ia') shortLabel(document.querySelector('.modal-close'), '× Fermer');
  const actions = document.querySelector('.cpf-actions');
  if (actions) mobileMove(actions, actions.parentNode, document.querySelector('.cpf-key-info').nextSibling);
  const notice = document.querySelector('.fafcea-notice');
  if (notice) mobileMove(notice, notice.parentNode, document.querySelector('.fafcea-comparison'));
  if (page === 'ateliers') {
    const families = [...document.querySelectorAll('.shift-family')];
    const links = [...document.querySelectorAll('.shift-section-nav a')];
    const domains = [...document.querySelectorAll('.shift-domain')];
    const saved = domains.map(d => d.open);
    const chips = make('div', '', 'app-chips'); chips.setAttribute('role', 'group'); chips.setAttribute('aria-label', 'Domaines CMD');
    let selected = 'all';
    const labels = ['Services','Bâtiment','Immobilier','Finance','Commercial','Formation','Communication','Pilotage'];
    const filter = () => {
      const seen = new Set();
      domains.forEach((d, i) => {
        const visible = selected === 'all' || selected === String(i);
        d.classList.toggle('app-filtered', mq.matches && !visible);
        d.querySelectorAll('[data-formation-id]').forEach(card => {
          card.classList.toggle('app-duplicate', mq.matches && selected === 'all' && seen.has(card.dataset.formationId));
          if (visible) seen.add(card.dataset.formationId);
        });
      });
      chips.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === selected)));
    };
    ['Tous', ...labels].forEach((label,i) => {
      const b = make('button', label); b.type = 'button'; b.dataset.filter = i ? String(i-1) : 'all';
      b.addEventListener('click', () => { selected = b.dataset.filter; filter(); }); chips.append(b);
    });
    document.querySelector('#cmd h2').after(chips);
    function update() {
      const active = ['#ctrl','#cmd','#enter'].includes(location.hash) ? location.hash : '#ctrl';
      families.forEach(f => f.classList.toggle('app-family-hidden', mq.matches && '#' + f.id !== active));
      links.forEach(a => { if(mq.matches && a.hash === active) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); });
      domains.forEach((d,i) => { d.open = mq.matches || saved[i]; }); filter();
    }
    links.forEach(a => a.addEventListener('click', event => {
      if (!mq.matches) return;
      event.preventDefault(); history.pushState(null, '', a.hash); update();
    }));
    addEventListener('hashchange', update); addEventListener('popstate', update); mq.addEventListener('change', update); update();
  }
  const applyMoves = () => moves.forEach(move => move()); mq.addEventListener('change', applyMoves); applyMoves();
})();
