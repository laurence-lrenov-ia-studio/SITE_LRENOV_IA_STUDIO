(() => {
  'use strict';
  function activate(id, value) {
    const button = document.getElementById(id);
    if (!button || typeof value !== 'string' || !value.trim()) return;
    try {
      const url = new URL(value);
      if (!['http:', 'https:'].includes(url.protocol)) return;
      const link = document.createElement('a');
      link.className = button.className; link.id = button.id; link.textContent = button.textContent; link.href = url.href;
      button.replaceWith(link);
    } catch { /* Le bouton reste désactivé sans URL officielle valide. */ }
  }
  activate('cpf-signup', window.FORMATIONS_CONFIG?.cpfInscriptionUrl);
  activate('cpf-quote', window.FORMATIONS_CONFIG?.cpfDevisUrl);
  const note = document.getElementById('cpf-links-note');
  if (note && !document.querySelector('.cpf-actions button:disabled')) note.hidden = true;
})();
