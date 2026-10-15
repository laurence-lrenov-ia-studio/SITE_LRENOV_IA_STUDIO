/* Shared catalogue and native accessible dialog for every SHIFT page. */
(() => {
  'use strict';
  const publicSessions = window.FORMATIONS_SESSIONS || [];
  const formations = (window.SHIFT_FORMATIONS || []).map(formation => {
    const formats = {
      CTRL: { duree: '1 h 30', prix_public: 79 },
      ENTER: { duree: '7 h — 2 × 3 h 30', prix_public: 399 },
      standard: { duree: '2 h 30', prix_public: 119 },
      outil: { duree: '2 h 30', prix_public: 139 }
    };
    const format = formation.niveau === 'CMD' ? formats[formation.type_cmd] : formats[formation.niveau];
    const sessions = publicSessions.filter(session => session.offre === 'SHIFT' && session.formation_id === formation.id);
    return formation.statut === 'programme_a_valider' ? { ...formation, sessions } : { ...formation, ...format, sessions };
  });
  const formationsById = new Map(formations.map(f => [f.id, f]));
  const domainReferences = window.SHIFT_CMD_DOMAINES || {};
  const ateliersPage = Boolean(document.querySelector('.shift-family'));
  function bookingUrl(session) {
    if (session.statut !== 'programmee' || session.reservation_verifiee !== true || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/.test(session.date || '') || !Number.isFinite(Date.parse(session.date)) || Date.parse(session.date) < Date.now() || (Number.isInteger(session.places) && session.places <= 0)) return null;
    try {
      const url = new URL(session.url_inscription);
      if (url.protocol !== 'https:' || !['billetweb.fr', 'www.billetweb.fr'].includes(url.hostname) || url.username || url.password || url.pathname !== '/shop.php') return null;
      if (!/^\d+$/.test(session.billetweb_evenement || '') || !/^\d+$/.test(session.billetweb_seance || '') || url.searchParams.get('event') !== session.billetweb_evenement || url.searchParams.get('session') !== session.billetweb_seance) return null;
      return url.href;
    } catch { return null; }
  }
  const bookableSessions = formation => formation.statut === 'programme_a_valider' ? [] : formation.sessions.filter(session => bookingUrl(session)).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  function sessionLink(session, label, className = 'cta') {
    const link = element('a', label, className);
    link.href = bookingUrl(session);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.dataset.bookingSession = session.id;
    return link;
  }
  function openReservation(formation, button) {
    const sessions = bookableSessions(formation);
    if (!sessions.length) return;
    if (!dialog.open) trigger = button;
    content.replaceChildren();
    const title = element('h2', formation.titre);
    title.id = 'formation-modal-title';
    content.append(title, element('p', 'Choisissez votre date et votre environnement.'));
    const list = element('ul', undefined, 'session-list');
    const dateFormat = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' });
    const timeFormat = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
    sessions.forEach(session => {
      const item = element('li');
      const label = `${dateFormat.format(new Date(session.date))}${session.fin ? ' – ' + timeFormat.format(new Date(session.fin)) : ''} · ${session.environnement}`;
      item.append(sessionLink(session, label));
      list.append(item);
    });
    content.append(list);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    dialog.querySelector('.modal-close').focus();
  }
  function reservation(formation, card = false) {
    const sessions = bookableSessions(formation);
    if (!sessions.length) return element('span', 'Réservation non ouverte', 'pending');
    const label = formation.niveau === 'ENTER' ? (card ? 'Je pré-réserve' : 'Je pré-réserve ma place') : 'Je réserve';
    const button = element('button', label, 'cta');
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'formation-modal');
    button.addEventListener('click', () => openReservation(formation, button));
    return button;
  }
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
    content.append(element('span', ateliersPage && formation.type_cmd === 'outil' ? 'CMD·Outil' : formation.niveau, 'badge'));
    const title = element('h2', formation.titre);
    title.id = 'formation-modal-title';
    content.append(title);
    section('Introduction', formation.resume);
    section('Pour qui ?', formation.public);
    section(ateliersPage ? 'Ce que vous allez apprendre' : 'Objectifs', formation.objectif);
    section(ateliersPage ? 'Au programme' : 'Programme', formation.programme);
    section('Pendant l’atelier', formation.pratique);
    section('Ce que vous repartez avec', formation.resultat);
    section('Prérequis', ateliersPage ? (formation.prerequis?.length ? formation.prerequis : 'Aucun prérequis spécifique.') : formation.prerequis);
    const formatSection = element('section', undefined, 'modal-section');
    formatSection.append(element('h3', 'Format'));
    const meta = element('div', undefined, 'modal-meta');
    meta.append(element('p', `Niveau : ${formation.niveau}`));
    if (formation.duree) meta.append(element('p', `Durée : ${formation.duree}`));
    if (typeof formation.prix_public === 'number') meta.append(element('p', `Tarif public : ${price(formation.prix_public)}`));
    if (formation.environnements?.length) meta.append(element('p', `Environnement : ${toolsLabel(formation)}`));
    if (formation.niveau === 'ENTER') meta.append(element('p', 'Groupe : 4 à 8 participants'));
    formatSection.append(meta);
    if (ateliersPage) content.insertBefore(formatSection, content.querySelector('.modal-section'));
    else content.append(formatSection);
    if (formation.statut === 'programme_a_valider') content.append(element('p', 'Programme en cours de validation. Type et tarif non fixés.', 'pending'));
    if (ateliersPage && bookableSessions(formation).length) {
      if (formation.niveau === 'ENTER') {
        section('Financement possible', 'OPCO · FAFCEA · AGEFICE · FIF PL');
        content.append(element('p', 'Pré-réservez votre place pendant le montage de votre dossier de financement.'));
      }
    }
    content.append(reservation(formation));
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
      const cardLayout = Boolean(list.closest('.shift-family'));
      if (cardLayout) {
        const card = element('article', undefined, 'catalog-row');
        card.dataset.formationId = formation.id;
        card.dataset.niveau = formation.niveau;
        card.append(element('span', formation.type_cmd === 'outil' ? 'CMD·Outil' : formation.niveau, 'badge'));
        card.append(element('h3', formation.titre, 'row-title'));
        if (formation.environnements?.length) card.append(element('span', toolsLabel(formation), 'card-tools'));
        const facts = [formation.duree, price(formation.prix_public)].filter(Boolean);
        card.append(element('span', facts.join(' · '), 'card-facts'));
        const actions = element('div', undefined, 'card-actions');
        const details = element('button', 'Voir les détails →', 'row-action card-detail');
        details.type = 'button';
        details.setAttribute('aria-haspopup', 'dialog');
        details.setAttribute('aria-controls', 'formation-modal');
        details.setAttribute('aria-label', `Voir les détails : ${formation.titre}`);
        details.addEventListener('click', () => openFormation(formation, details));
        actions.append(details, reservation(formation, true));
        card.append(actions);
        list.append(card);
        return;
      }
      const button = element('button', undefined, 'catalog-row');
      button.type = 'button';
      button.dataset.formationId = formation.id;
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-controls', 'formation-modal');
      button.append(element('span', formation.niveau, 'badge'));
      const details = element('span');
      details.append(element('span', formation.titre, 'row-title'));
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
