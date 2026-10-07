/* Run with NODE_PATH pointing to a runtime containing Playwright. No deployment. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/shift-catalogue.js'), 'utf8'), sandbox);
const data = JSON.parse(JSON.stringify(sandbox.window.SHIFT_FORMATIONS));
const fields = new Set('id niveau sphere titre resume duree type_cmd prix_public environnements objectif prerequis programme resultat statut sessions'.split(' '));
assert.equal(data.length, 43);
assert.equal(new Set(data.map(f => f.id)).size, 43);
for (const formation of data) {
  for (const field of Object.keys(formation)) assert(fields.has(field), `Unauthorized field: ${field}`);
  assert.equal(formation.programme, undefined);
  assert.equal(formation.sessions.length, 0);
}
assert.equal(data.filter(f => f.niveau === 'CTRL').length, 7);
assert.equal(data.filter(f => f.niveau === 'CMD').length, 33);
assert.equal(data.filter(f => f.niveau === 'ENTER').length, 3);
assert(data.filter(f => f.niveau === 'CTRL').every(f => f.prix_public === 79 && f.duree === '1 h 30'));
assert(data.filter(f => f.niveau === 'ENTER').every(f => f.prix_public === 399 && f.duree === '7 h · 2 × 3 h 30'));
assert(data.filter(f => f.sphere === 'batiment').every(f => f.prix_public === undefined && f.type_cmd === undefined));
const domains = [...new Set(data.filter(f => f.niveau === 'CMD').map(f => f.sphere))];
assert.equal(domains.length, 8);
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert(!/in10|fafcea|\bbni\b/i.test(html), file);
  for (const nav of html.match(/<nav\b[^>]*(?:id="mainNav"|aria-label="Navigation principale")[^>]*>[\s\S]*?<\/nav>/g) || []) {
    for (const domain of domains) assert(!nav.includes(`formations-${domain}.html`), `Domain in menu: ${file}`);
  }
}
const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + requested);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' })[path.extname(file)] || 'application/octet-stream');
  res.end(fs.readFileSync(file));
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true, ...(process.env.SHIFT_BROWSER_CHANNEL ? { channel: process.env.SHIFT_BROWSER_CHANNEL } : {}) });
  try {
    for (const mobile of [false, true]) {
      const context = await browser.newContext({ viewport: mobile ? { width: 390, height: 844 } : { width: 1280, height: 900 }, isMobile: mobile, hasTouch: mobile });
      await context.route('https://**/*', route => route.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(`${base}/formations.html`);
      assert.equal(await page.locator('.domain-row .badge').filter({ hasText: 'CMD' }).count(), 8);
      assert.equal(await page.locator('[data-formation-id]').count(), 0);
      assert.equal(await page.locator('#upcoming-sessions').innerText(), 'Les prochaines dates seront publiées ici.');
      for (const href of await page.locator('main a').evaluateAll(links => links.map(a => a.getAttribute('href')).filter(h => h && !h.startsWith('#')))) {
        assert(fs.existsSync(path.join(root, href)), `Broken hub link: ${href}`);
      }
      if (mobile) {
        await page.locator('#menu-toggle').tap();
        assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'true');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
      }
      const pages = ['ateliers.html', ...domains.map(d => `formations-${d}.html`), 'formations-enter.html'];
      for (const file of pages) {
        await page.goto(`${base}/${file}`);
        const rows = page.locator('[data-formation-id]');
        const expected = file === 'ateliers.html' ? 7 : file === 'formations-enter.html' ? 3 : data.filter(f => f.sphere === file.replace('formations-', '').replace('.html', '')).length;
        assert.equal(await rows.count(), expected, file);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Page overflow: ${file}`);
        for (let i = 0; i < expected; i++) {
          const row = rows.nth(i);
          const id = await row.getAttribute('data-formation-id');
          const formation = data.find(f => f.id === id);
          if (mobile) await row.tap(); else await row.click();
          assert(await page.locator('dialog').evaluate(d => d.open));
          assert.equal(await page.locator('#formation-modal-title').innerText(), formation.titre);
          assert.equal(await page.locator('#formation-detail .cmd-promise').count(), formation.niveau === 'CMD' ? 1 : 0);
          assert(!(await page.locator('#formation-detail').innerText()).includes('Programme\n'));
          assert(await page.evaluate(() => { const d = document.querySelector('dialog'); return d.scrollWidth <= d.clientWidth; }), 'Modal overflow');
          await page.locator('.modal-close').click();
          assert(!(await page.locator('dialog').evaluate(d => d.open)));
          assert.equal(await page.evaluate(() => document.activeElement.dataset.formationId), id);
        }
        // Native keyboard activation, focus containment, Escape and backdrop dismissal.
        await rows.first().focus();
        await page.keyboard.press('Enter');
        await page.keyboard.press('Shift+Tab');
        assert(await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)), 'Focus escaped dialog');
        await page.keyboard.press('Tab');
        assert(await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)), 'Focus escaped dialog');
        await page.keyboard.press('Escape');
        assert(!(await page.locator('dialog').evaluate(d => d.open)));
        await rows.first().focus();
        await page.keyboard.press('Space');
        assert(await page.locator('dialog').evaluate(d => d.open));
        await page.mouse.click(3, 3);
        assert(!(await page.locator('dialog').evaluate(d => d.open)));
      }
      await page.goto(`${base}/formations.html`);
      for (const width of mobile ? [320, 390, 740] : [900, 1024, 1280]) {
        await page.setViewportSize({ width, height: 900 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Hub overflow at ${width}`);
        if (!mobile) assert(await page.locator('.domain-row').evaluateAll(rows => rows.every(row => {
          const parts = [...row.children].map(child => child.getBoundingClientRect());
          return parts.every((part, i) => !i || part.left >= parts[i-1].right);
        })), `Overlapping hub columns at ${width}`);
      }
      assert.equal(errors.length, 0, errors.join('\n'));
      await context.close();
    }
    // Session fixtures are used only in this test browser, never saved to the catalogue.
    const context = await browser.newContext();
    await context.route('https://**/*', route => route.abort());
    await context.route('**/assets/shift-catalogue.js', route => route.fulfill({ contentType: 'text/javascript', body: fs.readFileSync(path.join(root, 'assets/shift-catalogue.js'), 'utf8') + `\nwindow.SHIFT_FORMATIONS[0].sessions = [
      {date:'2099-01-02T10:00:00+01:00',statut:'programmee'},
      {date:'2099-01-03T10:00:00+01:00',statut:'brouillon'},
      {date:'2099-01-04T10:00:00+01:00',statut:'annulee'},
      {date:'2020-01-01T10:00:00+01:00',statut:'programmee'},
      {date:'invalide',statut:'programmee'}];` }));
    const page = await context.newPage();
    await page.goto(`${base}/formations.html`);
    assert.equal(await page.locator('#upcoming-sessions li').count(), 1);
    await context.close();
    console.log('PASS: 43 fiches, 11 pages, desktop/mobile, clavier/souris/tactile, focus, fermeture, menus, liens, données et filtrage des sessions.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
