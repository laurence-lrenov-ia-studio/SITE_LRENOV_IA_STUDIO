/* Navigation du hub et affichage des sessions issues d'une seule source publique. */
(() => {
  'use strict';
  const menu = document.getElementById('global-links');
  const toggle = document.getElementById('menu-toggle');
  function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  const target = document.getElementById('upcoming-sessions');
  const template = document.getElementById('session-card-template');
  const filters = [...document.querySelectorAll('[data-calendar-filter]')];
  const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/.test(value) && Number.isFinite(Date.parse(value));
  function safeUrl(value) { if (typeof value !== 'string' || !value.trim()) return null; try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; } catch { return null; } }
  const sessions = (window.FORMATIONS_SESSIONS || []).filter(s => ['SHIFT','FAFCEA','CPF'].includes(s.offre) && typeof s.titre === 'string' && s.titre.trim() && s.statut === 'programmee' && validDate(s.date) && Date.parse(s.date) >= Date.now() && safeUrl(s.url_formation) && !(Number.isInteger(s.places) && s.places <= 0)).sort((a,b) => Date.parse(a.date)-Date.parse(b.date));
  const dateFormat = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'Europe/Paris' });
  const timeFormat = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
  function render(offre) {
    const shown = sessions.filter(s => offre === 'Toutes' || s.offre === offre);
    if (!shown.length) { const empty=document.createElement('p'); empty.className='muted'; empty.textContent=sessions.length ? 'Aucune session programmée pour cette offre pour le moment.' : 'Les prochaines sessions seront publiées prochainement.'; target.replaceChildren(empty); return; }
    const list = document.createElement('div'); list.className='open-sessions';
    shown.forEach(s => {
      const fragment=template.content.cloneNode(true);
      fragment.querySelector('[data-session-title]').textContent=s.titre;
      const level=fragment.querySelector('[data-session-level]');
      if(s.offre==='SHIFT' && ['CTRL','CMD','ENTER'].includes(s.niveau)) { level.textContent=s.niveau; level.hidden=false; }
      const format=fragment.querySelector('[data-session-format]');
      if(typeof s.format==='string' && s.format.trim()) { format.textContent=s.format; format.hidden=false; }
      const date=fragment.querySelector('[data-session-date]'); date.dateTime=s.date; date.textContent=dateFormat.format(new Date(s.date));
      fragment.querySelector('[data-session-time]').textContent=timeFormat.format(new Date(s.date))+(validDate(s.fin)&&Date.parse(s.fin)>Date.parse(s.date)?' – '+timeFormat.format(new Date(s.fin)):'');
      const places=fragment.querySelector('[data-session-places]'); if(Number.isInteger(s.places)&&s.places>0){places.textContent=s.places+' place'+(s.places>1?'s':'')+' disponible'+(s.places>1?'s':'');places.hidden=false;}
      fragment.querySelector('[data-session-details]').href=safeUrl(s.url_formation);
      const booking=fragment.querySelector('[data-session-booking]');
      const inscription=safeUrl(s.url_inscription)||(s.offre==='CPF'?safeUrl(window.FORMATIONS_CONFIG?.cpfInscriptionUrl):null);
      if(inscription){booking.href=inscription;booking.hidden=false;}
      list.append(fragment);
    }); target.replaceChildren(list);
  }
  filters.forEach(button => button.addEventListener('click',()=>{ filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.calendarFilter); }));
  render('Toutes');
})();
