#!/usr/bin/env python3
"""Générateur du site L'Rénov IA Studio — aucune dépendance (Python 3.8+).

Utilisation :
  python3 _src/build.py preview   -> génère _NOUVEAU_SITE/ (aperçu local, liens .html, non indexé)
  python3 _src/build.py prod      -> génère les pages à la racine du dépôt (liens propres, prêtes pour Hostinger)

Un seul modèle (en-tête, menu, pied de page) pour toutes les pages : on corrige le menu une fois, pas 35.
Les textes des pages sont dans _src/pages/*.html ; le calendrier dans _src/sessions.json.
"""
import json, re, sys, shutil, datetime, html
from pathlib import Path

SRC = Path(__file__).resolve().parent
ROOT = SRC.parent
MODE = sys.argv[1] if len(sys.argv) > 1 else 'preview'
OUT = ROOT / '_NOUVEAU_SITE' if MODE == 'preview' else ROOT
SITE = json.loads((SRC / 'site.json').read_text(encoding='utf-8'))
SESS = json.loads((SRC / 'sessions.json').read_text(encoding='utf-8'))
BASE = SITE['base']
TODAY = datetime.date.fromisoformat(sys.argv[2]) if len(sys.argv) > 2 else datetime.date.today()
LEGACY = {'radar-ia', 'mentions-legales', 'cgv', 'confidentialite', 'panorama-ia/'}  # pages conservées hors générateur
MOIS = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
JOURS = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']

def url(slug):
    """Lien interne selon le mode."""
    slug, _, frag = slug.partition('#')
    frag = '#' + frag if frag else ''
    if MODE == 'preview':
        if slug in LEGACY:
            return '../' + (slug if slug.endswith('/') else slug + '.html') + frag
        return ('index.html' if slug in ('', 'index') else slug + '.html') + frag
    return ('/' if slug in ('', 'index') else '/' + slug) + frag

def canon(slug):
    return BASE + ('/' if slug == 'index' else '/' + slug)

def fdate(d, with_day=True):
    d = datetime.date.fromisoformat(d) if isinstance(d, str) else d
    s = f"{d.day}{'er' if d.day == 1 else ''} {MOIS[d.month-1]}"
    return (JOURS[d.weekday()] + ' ' + s) if with_day else s

def esc(s): return html.escape(s, quote=True)

def fh(t):
    h, m = t.split(':')
    return f"{int(h)} h" + ('' if m == '00' else f" {m}")

# ---------- Calendrier ----------
def session_link(s):
    if s['url']:
        return f'<a class="btn btn-line btn-sm" href="{esc(s["url"])}" target="_blank" rel="noopener">S\'inscrire</a>'
    return f'<a class="btn btn-line btn-sm" href="{esc(SESS["billetweb_general"])}" target="_blank" rel="noopener">S\'inscrire</a>'

def cal_item(s):
    d = datetime.date.fromisoformat(s['date'])
    return (f'<li class="cal-item" data-date="{s["date"]}">'
            f'<div class="cal-date">{JOURS[d.weekday()].capitalize()} {d.day}{"er" if d.day==1 else ""} {MOIS[d.month-1]}<span>{fh(s["debut"])} – {fh(s["fin"])} · {s["format"]}</span></div>'
            f'<div class="cal-title">{esc(s["titre"])}<small>{s["prix"]} € · atelier en ligne</small></div>'
            f'{session_link(s)}</li>')

def cal_upcoming(days=31, limit=4):
    """Bloc 'glissant' de l'accueil : séances des 31 prochains jours (recalculé dans le navigateur)."""
    items = [s for s in SESS['ateliers'] if s['date'] >= TODAY.isoformat()]
    soon = [s for s in items if s['date'] <= (TODAY + datetime.timedelta(days=days)).isoformat()][:limit]
    if not soon: soon = items[:limit]
    li = ''.join(cal_item(s) for s in soon)
    return (f'<ul class="cal-list" data-glissant="{days}" data-limit="{limit}">{li}</ul>'
            f'<p class="cal-empty" hidden>Pas de séance dans les prochaines semaines : consultez le calendrier complet.</p>')

def cal_full(limit=5):
    """Toutes les séances futures sont écrites ; le navigateur n'affiche que les 5 prochaines."""
    items = [s for s in SESS['ateliers'] if s['date'] >= TODAY.isoformat()]
    empty = '<p class="cal-empty"%s>Les prochaines dates seront publiées très prochainement.</p>'
    if not items: return empty % ''
    return ('<ul class="cal-list" data-glissant="3650" data-limit="%d">' % limit + ''.join(cal_item(s) for s in items) + '</ul>'
            + empty % ' hidden' +
            f'<p style="margin-top:18px"><a href="{esc(SESS["billetweb_general"])}" target="_blank" rel="noopener">Voir toutes les dates →</a></p>')

def short(d):
    d = datetime.date.fromisoformat(d)
    m = ['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'][d.month-1]
    return f"{d.day}{'er' if d.day == 1 else ''} {m}"

def pass_dates():
    """Sessions du Pass : la prochaine en clair, les suivantes sur une ligne (recalculé dans le navigateur)."""
    ses = [x for x in SESS['pass']['sessions'] if x[-1] >= TODAY.isoformat()]
    if not ses: return '<p class="cal-empty">Prochaines sessions à venir.</p>'
    data = ';'.join(','.join(x) for x in ses)
    nxt = ses[0]
    first = '<p class="pass-next"><strong>Prochaine session :</strong> ' + ', '.join(fdate(d) for d in nxt[:-1]) + ' et ' + fdate(nxt[-1]) + '.</p>'
    rest = ' · '.join(f"{short(x[0])} → {short(x[-1])}" for x in ses[1:])
    return f'<div class="pass-dates" data-sessions="{data}">' + first + (f'<p class="pass-rest" style="color:var(--muted)">Puis : {rest}</p>' if rest else '') + '</div>'

def atelier_dates(aid):
    """Une seule date affichée par atelier : la prochaine. Les autres sont sur la page d'inscription."""
    ss = [s for s in SESS['ateliers'] if s['atelier'] == aid and s['date'] >= TODAY.isoformat()]
    if not ss: return '<p class="cal-empty">Prochaines dates à venir.</p>'
    s0 = ss[0]; d = datetime.date.fromisoformat(s0['date'])
    autres = f" · {len(ss)-1} autre{'s' if len(ss) > 2 else ''} date{'s' if len(ss) > 2 else ''}" if len(ss) > 1 else ''
    link = s0['url'] or SESS['billetweb_general']
    return (f'<p class="next-date" data-dates="{" ".join(x["date"] + "|" + x["debut"] for x in ss)}"><span>Prochaine séance</span>'
            f'{JOURS[d.weekday()].capitalize()} {short(s0["date"])}, {fh(s0["debut"])}{autres}</p>'
            f'<a class="btn btn-line btn-sm" href="{esc(link)}" target="_blank" rel="noopener">Voir les dates et s\'inscrire</a>')

# ---------- Données structurées ----------
ORG = {"@context": "https://schema.org", "@type": "ProfessionalService", "@id": BASE + "/#organisation",
       "name": SITE['brand'], "url": BASE + "/", "logo": BASE + "/assets/img/logo.png", "image": BASE + "/assets/img/logo.png",
       "description": "Formation IA, agents IA et automatisations sur mesure pour TPE et indépendants.",
       "email": SITE['email'], "telephone": SITE['phone_intl'],
       "founder": {"@type": "Person", "name": SITE['person']},
       "areaServed": [{"@type": "AdministrativeArea", "name": "Gironde"}, {"@type": "City", "name": "Bordeaux"}, {"@type": "City", "name": "Blanquefort"}],
       "sameAs": [SITE['linkedin'], SITE['instagram']]}

def jsonld(meta, slug):
    blocks = []
    kind = meta.get('jsonld')
    if kind == 'org': blocks.append(ORG)
    if kind == 'person':
        blocks.append({"@context": "https://schema.org", "@type": "Person", "name": SITE['person'],
                       "jobTitle": "Formatrice IA et fondatrice de L'Rénov IA Studio", "worksFor": {"@id": BASE + "/#organisation"},
                       "url": canon(slug), "image": BASE + "/image/laurence-borras-lrenov-ia-studio.webp", "sameAs": [SITE['linkedin']]})
    if kind == 'course':
        c = meta['course']
        blocks.append({"@context": "https://schema.org", "@type": "Course", "name": c['name'], "description": meta['description'],
                       "provider": {"@type": "Organization", "name": SITE['brand'], "sameAs": BASE + "/"}, "inLanguage": "fr",
                       **({"timeRequired": c['time']} if c.get('time') else {})})
    if slug != 'index':
        crumbs = [("Accueil", "index")] + [(t, s) for t, s in meta.get('crumbs', [])] + [(meta['h'], slug)]
        blocks.append({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": t, "item": canon(s)} for i, (t, s) in enumerate(crumbs)]})
    return ''.join(f'\n<script type="application/ld+json">{json.dumps(b, ensure_ascii=False)}</script>' for b in blocks)

# ---------- Modèle ----------
def header(slug):
    cur = ' aria-current="page"'
    li = ''.join('<li><a href="%s"%s>%s</a></li>' % (url(s), cur if s == slug else '', esc(t)) for s, t in SITE['nav'])
    return f'''<a class="skip" href="#contenu">Aller au contenu</a>
<header class="site-header"><div class="wrap">
  <a class="logo" href="{url('index')}"><img src="assets/img/logo.png" alt="" width="38" height="38">L'Rénov <span>IA Studio</span></a>
  <button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
  <nav class="main-nav" id="menu" aria-label="Menu principal"><ul>{li}</ul></nav>
  <a class="btn btn-gold btn-sm header-cta" href="{SITE['calendly']}" target="_blank" rel="noopener">Prendre rendez-vous</a>
</div></header>'''

def footer():
    y = TODAY.year
    return f'''<footer class="site-footer"><div class="wrap">
  <div class="foot-grid">
    <div><a class="logo" href="{url('index')}">L'Rénov <span>IA Studio</span></a>
      <p style="margin-top:12px">Formation IA, agents IA et automatisations pour les TPE et les indépendants. Blanquefort, Bordeaux, Gironde et à distance.</p></div>
    <div><h4>Formations</h4><ul>
      <li><a href="{url('ateliers')}">Ateliers en ligne</a></li><li><a href="{url('formations#pass')}">Pass IA 360° et journées</a></li>
      <li><a href="{url('formation-cpf')}">Parcours certifiant CPF</a></li><li><a href="{url('formations-fafcea')}">Parcours individualisé FAFCEA</a></li>
      <li><a href="{url('formation-ia-entreprise')}">Formation sur mesure</a></li><li><a href="{url('financer-sa-formation')}">Financer sa formation</a></li></ul></div>
    <div><h4>Le studio</h4><ul>
      <li><a href="{url('assistant')}">Agents IA & automatisations</a></li><li><a href="{url('radar-ia')}">Radar IA</a></li>
      <li><a href="{url('panorama-ia/')}">Panorama des IA</a></li><li><a href="{url('a-propos')}">À propos</a></li></ul></div>
    <div><h4>Contact</h4><ul>
      <li><a href="mailto:{SITE['email']}">{SITE['email']}</a></li><li><a href="tel:{SITE['phone_intl']}">{SITE['phone']}</a></li>
      <li><a href="{SITE['calendly']}" target="_blank" rel="noopener">Rendez-vous de 30 min</a></li>
      <li><a href="{SITE['linkedin']}" target="_blank" rel="noopener">LinkedIn</a> · <a href="{SITE['instagram']}" target="_blank" rel="noopener">Instagram</a></li></ul></div>
  </div>
  <div class="foot-bottom"><span>© {y} L'Rénov IA Studio · {SITE['person']} · SIRET {SITE['siret']}</span>
    <span><a href="{url('mentions-legales')}">Mentions légales</a> · <a href="{url('cgv')}">CGV</a> · <a href="{url('confidentialite')}">Confidentialité</a></span></div>
</div></footer>'''

SCRIPT = '''<script>
(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('menu');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
var today=new Date();today.setHours(0,0,0,0);
document.querySelectorAll('.cal-item[data-date]').forEach(function(li){if(new Date(li.dataset.date+'T23:59:59')<today)li.remove();});
document.querySelectorAll('[data-glissant]').forEach(function(ul){var max=new Date(today);max.setDate(max.getDate()+(+ul.dataset.glissant));
var items=[].slice.call(ul.children),k=0;items.forEach(function(li){var d=new Date(li.dataset.date+'T00:00:00');if(d>max||k>=+ul.dataset.limit){li.remove();}else{k++;}});
if(!ul.children.length){ul.hidden=true;var e=ul.nextElementSibling;if(e)e.hidden=false;}});
var J=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],M=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],MS=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'];
function dd(s){return new Date(s+'T12:00:00');}function lg(s){var d=dd(s);return J[d.getDay()]+' '+d.getDate()+(d.getDate()==1?'er':'')+' '+M[d.getMonth()];}function sh(s){var d=dd(s);return d.getDate()+(d.getDate()==1?'er':'')+' '+MS[d.getMonth()];}
document.querySelectorAll('.pass-dates[data-sessions]').forEach(function(b){var ses=b.dataset.sessions.split(';').map(function(x){return x.split(',');}).filter(function(x){return dd(x[x.length-1])>=today;});
if(!ses.length){b.innerHTML='<p class="cal-empty">Prochaines sessions à venir.</p>';return;}var n=ses[0],h='<p><strong>Prochaine session :</strong> '+n.slice(0,-1).map(lg).join(', ')+' et '+lg(n[n.length-1])+'.</p>';
if(ses.length>1)h+='<p style="color:var(--muted)">Puis : '+ses.slice(1).map(function(x){return sh(x[0])+' → '+sh(x[x.length-1]);}).join(' · ')+'</p>';b.innerHTML=h;});
document.querySelectorAll('.next-date[data-dates]').forEach(function(p){var l=p.dataset.dates.split(' ').filter(function(x){return new Date(x.split('|')[0]+'T23:59:59')>=today;});
if(!l.length){p.innerHTML='<span>Prochaine séance</span>Nouvelles dates à venir';return;}
var a=l[0].split('|'),d=new Date(a[0]+'T12:00:00'),t=a[1].split(':'),h=(+t[0])+' h'+(t[1]==='00'?'':' '+t[1]);
var txt=d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'short'});txt=txt.charAt(0).toUpperCase()+txt.slice(1);
var n=l.length-1;p.innerHTML='<span>Prochaine séance</span>'+txt+', '+h+(n?' · '+n+' autre'+(n>1?'s':'')+' date'+(n>1?'s':''):'');});
})();
</script>'''

def render(slug, meta, body):
    title = meta['title']
    robots = '<meta name="robots" content="noindex,nofollow">\n' if MODE == 'preview' else ''
    if MODE == 'preview' and meta.get('todo_count'):
        pass
    return f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(meta['description'])}">
{robots}<link rel="canonical" href="{canon(slug)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="L'Rénov IA Studio">
<meta property="og:title" content="{esc(meta.get('og_title', title))}">
<meta property="og:description" content="{esc(meta['description'])}">
<meta property="og:url" content="{canon(slug)}">
<meta property="og:image" content="{BASE}/image/laurence-borras-lrenov-ia-studio.webp">
<link rel="icon" href="assets/img/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap">
<link rel="stylesheet" href="assets/site.css">{jsonld(meta, slug)}
</head>
<body>
{header(slug)}
<main id="contenu">
{body}
</main>
{footer()}
{SCRIPT}
</body>
</html>
'''

def fill(body, slug, meta):
    body = re.sub(r'\{\{u:([^}]*)\}\}', lambda m: url(m.group(1)), body)
    rep = {'{{calendly}}': SITE['calendly'], '{{email}}': SITE['email'], '{{phone}}': SITE['phone'], '{{phone_intl}}': SITE['phone_intl'],
           '{{cal:glissant}}': cal_upcoming(), '{{cal:complet}}': cal_full(), '{{pass:dates}}': pass_dates(),
           '{{billetweb}}': SESS['billetweb_general'],
           '{{cpf_mcf}}': SITE.get('cpf_mcf') or SITE['calendly'], '{{cpf_labacademy}}': SITE.get('cpf_labacademy') or SITE['calendly']}
    for k, v in rep.items(): body = body.replace(k, v)
    body = re.sub(r'\{\{dates:([a-z0-9-]+)\}\}', lambda m: atelier_dates(m.group(1)), body)
    if slug != 'index' and meta.get('crumbs') is not None:
        crumbs = [f'<a href="{url("index")}">Accueil</a>'] + [f'<a href="{url(s)}">{esc(t)}</a>' for t, s in meta['crumbs']] + [esc(meta['h'])]
        body = body.replace('{{crumbs}}', '<nav class="breadcrumb" aria-label="Fil d\'Ariane">' + ' › '.join(crumbs) + '</nav>')
    if MODE != 'preview':
        body = re.sub(r'<p class="todo">.*?</p>', '', body, flags=re.S)  # les notes « à valider » ne partent jamais en ligne
    return body

def main():
    OUT.mkdir(exist_ok=True)
    pages = []
    for f in sorted((SRC / 'pages').glob('*.html')):
        raw = f.read_text(encoding='utf-8')
        m = re.match(r'\s*<!--META\s*(\{.*?\})\s*META-->\s*', raw, re.S)
        meta = json.loads(m.group(1)); body = raw[m.end():]
        slug = f.stem
        (OUT / f'{slug}.html').write_text(render(slug, meta, fill(body, slug, meta)), encoding='utf-8', newline='\n')
        pages.append((slug, meta))
    (OUT / 'assets').mkdir(exist_ok=True)
    shutil.copy(SRC / 'assets' / 'site.css', OUT / 'assets' / 'site.css')
    if MODE == 'preview':  # images nécessaires à l'aperçu local
        (OUT / 'assets' / 'img').mkdir(exist_ok=True); (OUT / 'image').mkdir(exist_ok=True)
        shutil.copy(ROOT / 'assets' / 'img' / 'logo.png', OUT / 'assets' / 'img' / 'logo.png')
        shutil.copy(ROOT / 'image' / 'laurence-borras-lrenov-ia-studio.webp', OUT / 'image' / 'laurence-borras-lrenov-ia-studio.webp')
    # sitemap + robots
    urls = [(canon(s), m.get('priority', '0.7')) for s, m in pages] + [(BASE + '/radar-ia', '0.6'), (BASE + '/panorama-ia/', '0.5')]
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for u, p in urls: sm += f'  <url><loc>{u}</loc><lastmod>{TODAY.isoformat()}</lastmod><priority>{p}</priority></url>\n'
    (OUT / 'sitemap.xml').write_text(sm + '</urlset>\n', encoding='utf-8')
    shutil.copy(SRC / 'robots.txt', OUT / 'robots.txt')
    print(f'{len(pages)} pages générées dans {OUT} (mode {MODE}, date de référence {TODAY})')

if __name__ == '__main__':
    main()
