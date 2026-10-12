/* Shared catalogue and native accessible dialog for every SHIFT page. */
(() => {
  'use strict';
  const formations = (window.SHIFT_FORMATIONS || []).map(formation => {
    const formats = {
      CTRL: { duree: '1 h 30', prix_public: 79 },
      ENTER: { duree: '7 h — 2 × 3 h 30', prix_public: 399 },
      standard: { duree: '2 h 30', prix_public: 119 },
      outil: { duree: '2 h 30', prix_public: 139 }
    };
    const format = formation.niveau === 'CMD' ? formats[formation.type_cmd] : formats[formation.niveau];
    return formation.statut === 'programme_a_valider' ? formation : { ...formation, ...format };
  });
  const formationsById = new Map(formations.map(f => [f.id, f]));
  const domainReferences = window.SHIFT_CMD_DOMAINES || {};
  const toolsLabel = f => f.environnements?.join(f.environnements_par_session ? ' ou ' : ' / ') + (f.environnements_par_session ? ' (selon la session)' : '');
  const dialog = document.getElementById('formation-modal');
  const content = document.getElementById('formation-detail');
  let trigger = null;
  const price = value => typeof value === 'number' ? `${value} €` : '';
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function section(label, value) {
    if (!value || (Array.isArray(value) && !value.length)) return;
    const block = element('section', undefined, 'modal-section');
    block.append(element('h3', label));
    if (Array.isArray(value)) {
      const list = element('ul');
      value.forEach(item => list.append(element('li', item)));
      block.append(list);
    } else block.append(element('p', value));
    content.append(block);
  }
  function openFormation(formation, button) {
    trigger = button;
    content.replaceChildren();
    content.append(element('span', formation.niveau, 'badge'));
    const title = element('h2', formation.titre);
    title.id = 'formation-modal-title';
    content.append(title);
    section('Introduction', formation.resume);
    section('Pour qui ?', formation.public);
    section('Objectifs', formation.objectif);
    section('Programme', formation.programme);
    section('Pendant l’atelier', formation.pratique);
    section('Ce que vous repartez avec', formation.resultat);
    section('Prérequis', formation.prerequis);
    const formatSection = element('section', undefined, 'modal-section');
    formatSection.append(element('h3', 'Format'));
    const meta = element('div', undefined, 'modal-meta');
    meta.append(element('p', `Niveau : ${formation.niveau}`));
    if (formation.duree) meta.append(element('p', `Durée : ${formation.duree}`));
    if (typeof formation.prix_public === 'number') meta.append(element('p', `Tarif public : ${price(formation.prix_public)}`));
    if (formation.environnements?.length) meta.append(element('p', `Environnement : ${toolsLabel(formation)}`));
    if (formation.niveau === 'ENTER') meta.append(element('p', 'Groupe : 4 à 8 participants'));
    formatSection.append(meta);
    content.append(formatSection);
    if (formation.statut === 'programme_a_valider') content.append(element('p', 'Programme en cours de validation. Type et tarif non fixés.', 'pending'));
    const cta = element('a', 'Échanger sur cette formation →', 'cta');
    cta.href = `mailto:laurence@lrenov-ia.studio?subject=${encodeURIComponent('Formation SHIFT — ' + formation.titre)}`;
    content.append(cta);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    dialog.querySelector('.modal-close').focus();
  }
  document.querySelectorAll('[data-catalogue]').forEach(list => {
    const refs = list.dataset.niveau === 'CMD' && list.dataset.sphere ? domainReferences[list.dataset.sphere] : null;
    const selection = refs ? refs.map(id => formationsById.get(id)).filter(Boolean) : formations.filter(f => f.niveau === list.dataset.niveau && (!list.dataset.sphere || f.sphere === list.dataset.sphere));
    const count = list.closest('.shift-domain')?.querySelector('summary span');
    if (count) count.textContent = selection.length + ' ateliers';
    selection.forEach(formation => {
      const button = element('button', undefined, 'catalog-row');
      button.type = 'button';
      button.dataset.formationId = formation.id;
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-controls', 'formation-modal');
      button.append(element('span', formation.niveau, 'badge'));
      const details = element('span');
      details.append(element('span', formation.titre, 'row-title'));
      const cardLayout = Boolean(list.closest('.shift-family'));
      if (cardLayout && formation.environnements?.length) details.append(element('span', toolsLabel(formation), 'card-tools'));
      button.append(details);
      const facts = [formation.duree, typeof formation.prix_public === 'number' ? price(formation.prix_public) : null].filter(Boolean);
      if (cardLayout) {
        const bottom = element('span', undefined, 'card-bottom');
        if (facts.length) bottom.append(element('span', facts.join(' · '), 'card-facts'));
        bottom.append(element('span', 'Voir les détails →', 'row-action'));
        button.append(bottom);
      } else button.append(element('span', (facts.length ? facts.join(' · ') + ' · ' : '') + 'Voir les détails →', 'row-action'));
      button.addEventListener('click', () => openFormation(formation, button));
      list.append(button);
    });
  });
  if (dialog) {
    dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const focusable = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')].filter(node => !node.disabled && node.tabIndex >= 0 && node.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    let backdropPress = false;
    const outside = event => {
      const rect = dialog.getBoundingClientRect();
      return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    };
    dialog.addEventListener('pointerdown', event => { backdropPress = event.target === dialog && outside(event); });
    dialog.addEventListener('click', event => {
      if (backdropPress && event.target === dialog && outside(event)) dialog.close();
      backdropPress = false;
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      trigger?.focus();
    });
  }
  const sessions = document.getElementById('upcoming-sessions');
  if (sessions) {
    const now = Date.now();
    // Only explicitly scheduled future sessions with a complete ISO date are public.
    const scheduled = formations.flatMap(f => (f.sessions || []).filter(s => s.statut === 'programmee' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}.*(?:Z|[+-]\d{2}:\d{2})$/.test(s.date) && Number.isFinite(Date.parse(s.date)) && Date.parse(s.date) >= now).map(s => ({ formation: f, session: s }))).sort((a, b) => Date.parse(a.session.date) - Date.parse(b.session.date));
    if (scheduled.length) {
      sessions.replaceChildren();
      const list = element('ul', undefined, 'session-list');
      scheduled.forEach(({ formation, session }) => {
        const item = element('li');
        const time = element('time', new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(new Date(session.date)));
        time.dateTime = session.date;
        item.append(time, element('span', ` — ${formation.titre}`));
        list.append(item);
      });
      sessions.append(list);
    }
  }
  const menu = document.getElementById('global-links');
  const toggle = document.getElementById('menu-toggle');
  function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu?.classList.contains('open') && !dialog?.open) { closeMenu(); toggle.focus(); } });
})();
