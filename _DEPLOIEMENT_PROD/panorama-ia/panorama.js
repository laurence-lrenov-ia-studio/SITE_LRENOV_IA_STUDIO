const ASSET='assets/';
const BRANDS={
  openai:{name:'ChatGPT',className:'openai',logo:ASSET+'logo-openai.svg',color:'#3f8f84'},
  claude:{name:'Claude',className:'claude',logo:ASSET+'logo-claude.png',color:'#d77a4b'},
  gemini:{name:'Gemini',className:'gemini',logo:ASSET+'logo-gemini.svg',color:'#667eea'},
  mistral:{name:'Mistral',className:'mistral',logo:ASSET+'logo-mistral.svg',color:'#ee8b21'},
  perplexity:{name:'Perplexity',className:'perplexity',logo:ASSET+'logo-perplexity.png',color:'#2f8f8b'}
};

const MISSIONS=[
  {id:'quotidien',cat:'production',title:'Assistant polyvalent du quotidien',sub:'Rédiger, analyser, créer, organiser et enchaîner plusieurs formats',leader:'openai',why:'L’écosystème ChatGPT réunit conversation, fichiers, image, recherche, connexions, Work et Codex dans une même porte d’entrée.',alt:'claude',watch:'Le routage, les fonctions et les limites dépendent du forfait.',detail:'Repère principal pour une TPE qui cherche un seul environnement très polyvalent. Claude reste une alternative très forte pour les documents longs et le travail soutenu.'},
  {id:'documents',cat:'analyse',title:'Documents longs et travail complexe',sub:'Contrats, dossiers, analyses, missions qui durent plusieurs heures ou plusieurs jours',leader:'claude',why:'Anthropic positionne Fable 5 sur les tâches les plus ambitieuses et Sonnet 5 sur les agents, le code et le travail professionnel à grande échelle.',alt:'openai',watch:'Fable 5 peut nécessiter des crédits d’usage et appliquer des garde-fous plus stricts.',detail:'Claude ressort lorsque la continuité, la lecture de nombreux documents et la tenue d’un raisonnement long sont prioritaires. Cela ne dispense pas de vérifier les sources et les conclusions.'},
  {id:'recherche',cat:'recherche',title:'Recherche web et veille sourcée',sub:'Trouver, recouper et citer des informations récentes',leader:'perplexity',why:'Perplexity est construit autour de la recherche, des sources et de Deep Research, avec une logique d’analyste qui cherche, confronte puis synthétise.',alt:'gemini',watch:'Une citation n’est pas une preuve de qualité : il faut ouvrir la source primaire.',detail:'Pour une veille, Perplexity est le repère le plus naturel. Gemini bénéficie aussi de l’ancrage Google. ChatGPT et Claude savent rechercher, mais ce n’est pas leur seul centre de gravité.'},
  {id:'google',cat:'production',title:'Travail déjà centré sur Google',sub:'Gmail, Drive, Docs, Sheets, Maps et contenus multimodaux',leader:'gemini',why:'Gemini s’intègre naturellement à l’écosystème Google et ses modèles récents combinent contexte très long, recherche, outils, multimodal et computer use.',alt:'openai',watch:'La valeur dépend des droits Workspace, du plan et de la qualité des données partagées.',detail:'Gemini devient particulièrement pertinent quand les équipes vivent déjà dans Google Workspace. Le gain vient autant de l’intégration que du modèle.'},
  {id:'code',cat:'action',title:'Coder et faire évoluer un projet',sub:'Lire un dépôt, modifier des fichiers, tester et livrer une évolution',leader:'openai',coLeader:'claude',why:'Codex et Claude Code sont aujourd’hui les deux repères majeurs pour intervenir dans une base de code et mener des tâches agentiques longues.',alt:'mistral',watch:'Toujours travailler sur une copie, tester et valider avant production.',detail:'Ici, il n’y a pas un gagnant absolu : ChatGPT/Codex et Claude/Claude Code sont tous deux très forts. Le choix dépend du projet, des outils, du coût et de la méthode de contrôle.'},
  {id:'agents',cat:'action',title:'Agents rapides et workflows à volume',sub:'Boucles agentiques, multimodal, sous-agents et automatisation UI',leader:'gemini',why:'Gemini 3.6 Flash est officiellement optimisé pour les tâches agentiques et multimodales, avec un million de jetons de contexte et le computer use en aperçu.',alt:'openai',watch:'Une automatisation rapide peut aussi propager une erreur rapidement.',detail:'Gemini ressort pour les boucles agentiques à vitesse et volume élevés. ChatGPT, Claude et Mistral disposent aussi d’environnements d’agents très solides.'},
  {id:'deploiement',cat:'conformite',title:'Contrôle du déploiement et souveraineté',sub:'On-premise, cloud privé, résidence des données et personnalisation',leader:'mistral',why:'Mistral met en avant le déploiement on-premise ou cloud privé, la résidence des données et un écosystème européen unifié avec Vibe.',alt:'claude',watch:'« Européen » ou « Enterprise » ne remplace pas l’analyse du contrat, du DPA et des sous-traitants.',detail:'Mistral ressort lorsque le contrôle d’infrastructure et le déploiement sont centraux. D’autres fournisseurs proposent des offres Enterprise solides, mais avec des architectures et clauses différentes.'},
  {id:'creation',cat:'production',title:'Création visuelle et production multi-format',sub:'Textes, images, documents, présentations et design',leader:'openai',why:'ChatGPT combine création d’images, analyse multimodale, documents et capacités de design dans une expérience unifiée.',alt:'gemini',watch:'Vérifier les droits, l’identité de marque et les informations inscrites dans les visuels.',detail:'Pour produire plusieurs formats depuis un même espace, ChatGPT est le repère le plus simple. Gemini dispose aussi d’un écosystème visuel et multimodal très fort.'},
  {id:'donnees',cat:'conformite',title:'Données confidentielles ou réglementées',sub:'Clients, santé, juridique, RH, finance ou secrets d’affaires',leader:'mistral',why:'Le critère principal devient le mode de déploiement, les accès, la conservation, l’entraînement et la possibilité de garder les données dans un environnement maîtrisé.',alt:'claude',watch:'Aucune version grand public ne doit recevoir des données sensibles sans vérification contractuelle.',detail:'Ce classement ne porte pas sur “l’intelligence” du modèle. Il privilégie le contrôle de déploiement. Selon l’organisation, une offre Enterprise d’OpenAI, Anthropic, Google ou Perplexity peut aussi convenir.'}
];

const ECOSYSTEMS=[
  {id:'openai',model:'GPT-5.6 · Work · Codex',role:'Le plus transversal',points:['GPT-5.6 Sol pour les travaux complexes','ChatGPT Work pour les tâches de bout en bout','Codex, connexions, plugins et skills pour agir'],limit:'Très large, donc à cadrer : forfait, autorisations et validation des actions.',date:'GPT-5.6 annoncé le 9 juillet 2026'},
  {id:'claude',model:'Fable 5 · Sonnet 5 · Opus 4.8',role:'Le spécialiste du travail long',points:['Fable 5 pour les tâches les plus difficiles','Sonnet 5 pour agents, code et travail à grande échelle','Claude Code et écosystème de fichiers'],limit:'Fable 5 est plus coûteux et ses garde-fous peuvent bloquer davantage de requêtes bénignes.',date:'Fable 5 rétabli mondialement le 1er juillet 2026'},
  {id:'gemini',model:'Gemini 3.6 Flash · 3.1 Pro',role:'Le natif de Google',points:['Un million de jetons de contexte sur Gemini 3.6 Flash','Multimodal, search grounding et computer use','Intégration naturelle aux outils Google'],limit:'Le meilleur choix surtout si votre organisation est déjà structurée autour de Google.',date:'Gemini 3.6 Flash publié le 21 juillet 2026'},
  {id:'mistral',model:'Vibe · Medium 3.5',role:'Le contrôle et le déploiement',points:['Vibe unifie travail, conversation et code','Plus de 100 outils via connecteurs et MCP','Déploiement on-premise, cloud privé ou Mistral Cloud'],limit:'L’intérêt maximal apparaît lorsque la maîtrise de l’infrastructure compte réellement.',date:'Le Chat est devenu Vibe en juin 2026'},
  {id:'perplexity',model:'Deep Research · Computer',role:'La recherche d’abord',points:['Recherche externe avec sources vérifiables','Deep Research pour les enquêtes itératives','Orchestration de plusieurs modèles et connexions Enterprise'],limit:'Excellent pour chercher et vérifier ; pas nécessairement le meilleur atelier de production pour tout.',date:'Deep Research intégré à Computer en juin 2026'}
];

const RADAR={
  axes:['Rédaction','Analyse longue','Recherche','Agents','Multimodal','Outils connectés','Déploiement','Adoption TPE'],
  data:{
    openai:[4.8,4.6,4.3,4.9,4.9,4.9,3.8,4.8],
    claude:[4.7,5.0,3.9,4.8,4.2,4.5,4.1,4.3],
    gemini:[4.3,4.5,4.7,4.8,4.9,4.9,4.0,4.5],
    mistral:[4.0,4.2,4.0,4.6,4.1,4.7,5.0,4.0],
    perplexity:[3.9,4.4,5.0,4.5,4.0,4.6,4.0,4.6]
  },
  notes:{
    openai:'Très équilibré et particulièrement fort lorsque production, connexions et exécution doivent rester dans le même environnement.',
    claude:'Le profil le plus marqué sur le travail long, les documents complexes et les tâches agentiques soutenues.',
    gemini:'Très fort en multimodal, recherche ancrée, volume et intégration Google.',
    mistral:'Le profil le plus distinctif sur le contrôle de déploiement, la résidence des données et la personnalisation.',
    perplexity:'Le spécialiste le plus lisible pour la recherche web, les sources et la veille.'
  }
};

const JOBS=[
  {id:'artisan',name:'Artisan / BTP',context:'Gagner du temps sur les devis préparatoires, les comptes-rendus, le stock, les photos et le suivi sans ajouter une usine à gaz.',rows:[['Produire','openai','Emails, documents, procédures et préparation de chantier.'],['Construire','openai','Codex ou une application métier pour stock, chantiers et documents.'],['Rechercher','perplexity','Produits, normes et sources à vérifier.'],['Vigilance',null,'L’IA ne remplace ni le métré, ni la conformité, ni le contrôle chantier.']]},
  {id:'immobilier',name:'Immobilier',context:'Centraliser biens, recherches, communication et informations terrain sans exposer les données clients.',rows:[['Documents','claude','Synthèses, comptes-rendus, dossiers et analyse longue.'],['Communication','openai','Production multi-format et adaptation du ton.'],['Veille','perplexity','Marché, réglementation et informations locales sourcées.'],['Vigilance',null,'Anonymisation, droits d’accès et validation avant publication.']]},
  {id:'formation',name:'Formation / Conseil',context:'Concevoir des parcours, produire des supports, suivre des apprenants et personnaliser les livrables.',rows:[['Concevoir','claude','Architecture pédagogique et traitement de documents longs.'],['Produire','openai','Textes, images, documents et présentations.'],['Workspace','gemini','Gmail, Drive, Docs, Sheets et travail collaboratif.'],['Vigilance',null,'Sources, droits, accessibilité et validation pédagogique.']]},
  {id:'dirigeant',name:'Dirigeant TPE / PME',context:'Choisir peu d’outils, les relier à des problèmes mesurables et garder la maîtrise des coûts et des données.',rows:[['Polyvalence','openai','Un environnement large pour produire, analyser et agir.'],['Travail long','claude','Dossiers complexes et missions qui durent.'],['Déploiement','mistral','À considérer si la maîtrise des données est structurante.'],['Vigilance',null,'Commencer par une seule tâche et mesurer le gain réel.']]},
  {id:'reglemente',name:'Professions réglementées',context:'Traiter des documents complexes et des données sensibles avec une exigence élevée de traçabilité.',rows:[['Analyse','claude','Documents longs, cohérence et préparation de synthèses.'],['Recherche','perplexity','Retrouver les sources primaires et les ouvrir.'],['Contrôle','mistral','Déploiement maîtrisé lorsque l’organisation l’exige.'],['Vigilance',null,'Aucune décision engageante sans validation professionnelle.']]}
];

const SOURCES=[
  {brand:'openai',title:'GPT-5.6 : famille Sol, Terra et Luna',date:'9 juillet 2026',desc:'Présentation officielle des modèles GPT-5.6 et de leurs domaines de capacité.',url:'https://openai.com/index/gpt-5-6/'},
  {brand:'openai',title:'ChatGPT Work',date:'9 juillet 2026',desc:'Agent pour les tâches longues, les apps connectées et la création de livrables finis.',url:'https://help.openai.com/en/articles/6825453-chatgpt-release-notes'},
  {brand:'claude',title:'Claude Fable 5',date:'9 juin / 1er juillet 2026',desc:'Modèle de cinquième génération pour les tâches de connaissance et de code les plus difficiles.',url:'https://www.anthropic.com/claude/fable'},
  {brand:'claude',title:'Claude Sonnet 5',date:'30 juin 2026',desc:'Modèle agentique pour le code, les outils et le travail professionnel à grande échelle.',url:'https://www.anthropic.com/news/claude-sonnet-5'},
  {brand:'gemini',title:'Gemini 3.6 Flash',date:'21 juillet 2026',desc:'Modèle agentique et multimodal avec contexte d’un million de jetons.',url:'https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash'},
  {brand:'mistral',title:'Mistral Vibe',date:'mai–juin 2026',desc:'Agent unifié pour le travail et le code, avec connecteurs, MCP et options de déploiement privé.',url:'https://mistral.ai/products/vibe/'},
  {brand:'perplexity',title:'Deep Research dans Computer',date:'11 juin 2026',desc:'Recherche agentique itérative qui planifie, confronte les preuves et produit un livrable.',url:'https://www.perplexity.ai/fr/hub/blog/deep-research-now-in-computer'},
  {brand:'perplexity',title:'Perplexity Enterprise',date:'consulté le 22 juillet 2026',desc:'Recherche, fichiers, outils connectés, orchestration de modèles et garanties Enterprise.',url:'https://www.perplexity.ai/enterprise'}
];

function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function logoHTML(id,alt=''){const b=BRANDS[id];return `<img src="${b.logo}" alt="${esc(alt||b.name)}">`;}
function brandHTML(id,label=true){const b=BRANDS[id];return `<span class="tool-chip ${b.className}">${logoHTML(id)}${label?esc(b.name):''}</span>`;}
function brandBlock(id,caption=''){const b=BRANDS[id];return `<div class="tool-card ${b.className}">${logoHTML(id)}<div class="tool-card-copy"><strong>${esc(b.name)}</strong>${caption?`<small>${esc(caption)}</small>`:''}</div></div>`;}

function renderMissions(filter='all'){
  const rows=MISSIONS.filter(m=>filter==='all'||m.cat===filter);
  const body=document.getElementById('mission-table-body');
  body.innerHTML=rows.map(m=>`<tr data-mission="${m.id}">
    <td><div class="mission-title">${esc(m.title)}</div><div class="mission-sub">${esc(m.sub)}</div></td>
    <td><div class="brand-cell">${brandBlock(m.leader,'Repère principal')}${m.coLeader?brandBlock(m.coLeader,'Co-repère sur cette mission'):''}</div></td>
    <td class="reason-cell"><div class="table-note"><strong>Pourquoi ça ressort</strong><p>${esc(m.why)}</p></div></td>
    <td><div class="brand-cell">${brandBlock(m.alt,'Alternative forte')}</div></td>
    <td class="watch-cell"><div class="table-note warning-note"><strong>Point de vigilance</strong><p>${esc(m.watch)}</p></div></td>
  </tr>`).join('');
  document.getElementById('mission-cards').innerHTML=rows.map(m=>`<article class="mission-card" data-mission="${m.id}"><h3>${esc(m.title)}</h3><div class="mission-sub">${esc(m.sub)}</div><dl><div><dt>Repère principal</dt><dd>${brandBlock(m.leader,'Repère principal')}${m.coLeader?brandBlock(m.coLeader,'Co-repère sur cette mission'):''}</dd></div><div><dt>Pourquoi</dt><dd>${esc(m.why)}</dd></div><div><dt>Alternative forte</dt><dd>${brandBlock(m.alt,'Alternative forte')}</dd></div><div><dt>À surveiller</dt><dd>${esc(m.watch)}</dd></div></dl></article>`).join('');
  document.querySelectorAll('[data-mission]').forEach(el=>el.addEventListener('click',()=>showMission(el.dataset.mission)));
}
function showMission(id){const m=MISSIONS.find(x=>x.id===id);if(!m)return;document.querySelectorAll('[data-mission]').forEach(el=>el.classList.toggle('active',el.dataset.mission===id));const d=document.getElementById('mission-detail');d.innerHTML=`<h3>${esc(m.title)} — lecture L'Rénov IA Studio</h3><p>${esc(m.detail)}</p>`;d.classList.add('show');}

function renderEcosystems(){document.getElementById('ecosystem-grid').innerHTML=ECOSYSTEMS.map(e=>{const b=BRANDS[e.id];return `<article class="eco-card"><div class="eco-logo ${b.className}">${logoHTML(e.id,`Logo ${b.name}`)}</div><h3>${esc(b.name)}</h3><div class="eco-model">${esc(e.model)}</div><div class="eco-role">${esc(e.role)}</div><ul class="eco-points">${e.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><div class="eco-limit">${esc(e.limit)}</div><div class="eco-date">${esc(e.date)}</div></article>`}).join('');}

let activeRadar=new Set(['openai','claude','gemini']);
function renderRadarControls(){const el=document.getElementById('radar-switches');el.innerHTML=Object.keys(BRANDS).map(id=>{const b=BRANDS[id];return `<button type="button" class="radar-switch ${b.className}${activeRadar.has(id)?' active':''}" style="--switch-color:${b.color}" data-radar="${id}">${logoHTML(id)}<span><strong>${b.name}</strong><small>${ECOSYSTEMS.find(e=>e.id===id).role}</small></span></button>`}).join('');el.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.radar;if(activeRadar.has(id)&&activeRadar.size>1)activeRadar.delete(id);else activeRadar.add(id);renderRadarControls();drawRadar();}));const focus=[...activeRadar][0];const b=BRANDS[focus];document.getElementById('radar-explanation').innerHTML=`<h3>${b.name}</h3><p>${RADAR.notes[focus]}</p>`;}
function polar(cx,cy,r,i,n){const a=-Math.PI/2+i*(Math.PI*2/n);return [cx+Math.cos(a)*r,cy+Math.sin(a)*r];}
function polygon(points){return points.map(p=>p.map(v=>v.toFixed(1)).join(',')).join(' ');}
function drawRadar(){const svg=document.getElementById('radar-svg');const w=700,h=620,cx=350,cy=310,r=195,n=RADAR.axes.length;let html=`<title id="radar-title">Radar comparatif des écosystèmes IA</title><desc id="radar-desc">Comparaison sur huit dimensions professionnelles.</desc>`;
  for(let level=1;level<=5;level++){html+=`<polygon class="radar-grid" points="${polygon(Array.from({length:n},(_,i)=>polar(cx,cy,r*level/5,i,n)))}"/>`;}
  for(let i=0;i<n;i++){const p=polar(cx,cy,r,i,n);html+=`<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}"/>`;const lp=polar(cx,cy,r+47,i,n);const anchor=lp[0]<cx-25?'end':lp[0]>cx+25?'start':'middle';html+=`<text class="radar-label" x="${lp[0]}" y="${lp[1]}" text-anchor="${anchor}" dominant-baseline="middle">${esc(RADAR.axes[i])}</text>`;}
  [...activeRadar].forEach(id=>{const b=BRANDS[id],vals=RADAR.data[id],pts=vals.map((v,i)=>polar(cx,cy,r*v/5,i,n));html+=`<polygon class="radar-shape" points="${polygon(pts)}" fill="${b.color}" stroke="${b.color}"/>`;pts.forEach((p,i)=>html+=`<circle class="radar-point" cx="${p[0]}" cy="${p[1]}" r="5" fill="${b.color}"><title>${b.name} — ${RADAR.axes[i]} : ${vals[i]}/5</title></circle>`);});
  svg.innerHTML=html;
}

function toolInline(id,text){if(!id)return `<strong>${esc(text)}</strong>`;const b=BRANDS[id];return `<span class="job-tool ${b.className}">${logoHTML(id)}<strong>${esc(text)}</strong></span>`;}
function renderJobs(){const tabs=document.getElementById('job-tabs');tabs.innerHTML=JOBS.map((j,i)=>`<button type="button" class="job-tab${i===0?' active':''}" data-job="${j.id}">${esc(j.name)}</button>`).join('');tabs.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>selectJob(b.dataset.job)));selectJob(JOBS[0].id);}
function selectJob(id){const j=JOBS.find(x=>x.id===id);document.querySelectorAll('.job-tab').forEach(b=>b.classList.toggle('active',b.dataset.job===id));document.getElementById('job-panel').innerHTML=`<div class="job-grid"><div><div class="job-title">${esc(j.name)}</div><p class="job-context">${esc(j.context)}</p></div><div class="job-stack">${j.rows.map(r=>`<div class="job-stack-row"><span>${esc(r[0])}</span><div>${toolInline(r[1],r[1]?BRANDS[r[1]].name:r[2])}${r[1]?`<p>${esc(r[2])}</p>`:''}</div></div>`).join('')}</div></div>`;}

function renderSources(){document.getElementById('source-grid').innerHTML=SOURCES.map(s=>{const b=BRANDS[s.brand];return `<a class="source-card" href="${s.url}" target="_blank" rel="noopener"><div class="source-top ${b.className}">${logoHTML(s.brand)}<strong>${esc(s.title)}</strong></div><p>${esc(s.desc)}</p><span class="source-date">${esc(s.date)}</span></a>`}).join('');}
function updateROI(){const h=+document.getElementById('hours').value,rate=+document.getElementById('rate').value,hourly=+document.getElementById('hourly').value,cost=+document.getElementById('cost').value;const saved=h*4.33*rate/100,gross=saved*hourly,net=gross-cost,roi=cost>0?net/cost*100:0;document.getElementById('hours-value').textContent=`${h} h`;document.getElementById('rate-value').textContent=`${rate} %`;document.getElementById('hourly-value').textContent=`${hourly} €`;document.getElementById('cost-value').textContent=`${cost} €`;document.getElementById('saved-hours').textContent=`${saved.toLocaleString('fr-FR',{maximumFractionDigits:1})} h`;document.getElementById('gross-value').textContent=`${Math.round(gross).toLocaleString('fr-FR')} €`;document.getElementById('roi-main').textContent=`${Math.round(net).toLocaleString('fr-FR')} €`;document.getElementById('roi-rate').textContent=cost?`${Math.round(roi).toLocaleString('fr-FR')} %`:'—';}
function setupMenu(){const b=document.querySelector('.menu-toggle'),n=document.getElementById('main-nav');b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',open)});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));}

document.addEventListener('DOMContentLoaded',()=>{
  setupMenu();renderMissions();document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderMissions(b.dataset.filter);document.getElementById('mission-detail').classList.remove('show')}));
  renderEcosystems();renderRadarControls();drawRadar();renderJobs();renderSources();['hours','rate','hourly','cost'].forEach(id=>document.getElementById(id).addEventListener('input',updateROI));updateROI();
});
