# Audit documentaire et structurel des pages historiques — L’Rénov IA Studio

Date : **14 octobre 2026 (Europe/Paris)**. Référence locale : commit `b3b2113` (« maj card »). Rapport préparatoire ; **aucun tarif, aucune offre et aucune action future ne sont validés**. Aucune modification HTML/CSS/JS, de menu, footer ou redirection n’a été effectuée pour cet audit. Les mots « obsolète » et « ancien » qualifient un décalage avec les pages actuelles, pas une décision de suppression.

## A. Synthèse générale

Le site local s’organise autour de cinq destinations de navigation : **Accueil, Formations, Solutions métier, Radar IA, Contact**. Les pages Formations et Solutions métier sont les références observables du positionnement actuel ; leur contenu n’équivaut pas à une validation commerciale pour la future architecture. L’accueil associe **former, structurer, construire**. Le footer conserve un vocabulaire plus ancien : **Secteurs Pro**, BTP Pro, Compta Pro, CGP Pro, Notariat Pro, Assurance Pro, Immo Pro. Ces liens restent des portes d’entrée secondaires vers du contenu historique.

Les fichiers `audit.html`, `outils.html` et `agents.html` sont riches en pédagogie mais leurs URL sont **déjà redirigées vers `/assistant`** par `.htaccess`. Les pages sectorielles continuent à y envoyer le lecteur avec la promesse de paliers, tarifs et ROI désormais absents de la destination. `ia-et-moi.html`, accessible par le footer, conserve une excellente logique de maturité, à dissocier entièrement des anciens packs et prix. `secteurs.html` n’est lié depuis les pages publiques que par la page 404 ; communication et professions libérales dépendent de ce hub peu visible. Le Panorama actuel existe dans `panorama-ia/index.html`, mais n’a pas de lien entrant normal depuis l’accueil ou le Radar.

Les sept pages métier ont une valeur d’exemples et de vocabulaire. Six sont candidates à une refonte en landing page discrète ; une fusion des professions libérales dans les cas d’usage transverses mérite discussion. **Aucune page métier ne paraît conservable presque telle quelle** : toutes réemploient les cinq anciennes prestations et des montants historiques. Aucune suppression automatique n’est justifiée par cet audit.

### Périmètre, méthode et limites

Inventaire récursif : **212 fichiers HTML** : **35 à la racine + 1 dans panorama-ia = 36 documents sources**, **35 copies de déploiement** et **141 sauvegardes**. Les 19 pages demandées sont toutes présentes ; 17 documents sources supplémentaires sont inclus. Les copies et sauvegardes sont inventoriées séparément et leurs occurrences financières sont également scannées. Les 35 copies de `_DEPLOIEMENT_PROD` sont identiques octet par octet à leur source correspondante ; `index (1).html` n’a pas de copie dans ce paquet.

Méthode : lecture HTML et scripts associés ; extraction des titles, H1, blocs, liens et identifiants ; résolution des chemins relatifs et URL propres ; comparaison SHA-256 des fichiers ; lecture de `.htaccess`, `sitemap.xml` et scripts de navigation. Auto-liens exclus des liens entrants ; copies et sauvegardes exclues du graphe public. Une page d’erreur, une page redirigée ou une ancienne trame ne prouvent pas une visibilité commerciale normale. Les fragments internes, templates et contenus JS sont distingués du HTML immédiatement affichable.

**Limite explicite : audit du dépôt et du paquet local, sans contrôle HTTP du serveur de production, sans requête externe, sans données Search Console/analytics et sans test d’envoi ou réservation.** Les redirections sont celles prévues par la configuration Apache locale, sous réserve de son déploiement et de son activation. L’indexation Google, les backlinks, QR codes et campagnes ne sont pas déduits de l’absence de liens internes. Aucun lien externe n’est qualifié de mort sans vérification réseau. Les mentions de conformité, financement et certification sont des contenus à faire valider, pas des conclusions juridiques de cet audit.

Statuts : **A** navigation principale ; **B** accès secondaire/footer (peut aussi avoir des liens dans le corps) ; **C** certaines pages seulement ; **D** orpheline ou quasi orpheline ; **E** ancien document sans fonction de contenu actuelle identifiable à son URL, éventuellement conservé comme alias technique. Une présence dans un sous-menu propre à une page n’est pas une entrée principale globale.

## B. Carte des 19 pages demandées

| Page | Title exact | H1 exact | Fonction actuelle | Statut / accès réel prévu |

| --- | --- | --- | --- | --- |

| index.html | L'Rénov IA Studio — Formation &amp; solutions IA métier | Mettre l'IA au travail dans votre métier. | Accueil et orientation vers formations, solutions métier, veille et contact. | A |

| formations.html | Formations · L’Rénov IA Studio | Se former avec L’Rénov IA Studio | Hub actuel : SHIFT, FAFCEA, CPF et prochaines sessions. | A |

| ateliers.html | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | Ateliers SHIFT | Catalogue SHIFT actuel CTRL / CMD / ENTER, fiches et réservation générées en JavaScript. | B |

| audit.html | Les 3 paliers d'audit IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 3 paliers d'audit IA pour décider en connaissance | Ancien document pédagogique et commercial des trois audits ; URL redirigée vers Solutions métier. | E — redirection vers assistant.html |

| outils.html | Les 4 paliers d'outil métier · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 paliers d'outil métier construit sur mesure | Ancien document des quatre paliers d’applications métier ; URL redirigée. | E — redirection vers assistant.html |

| agents.html | Les 4 niveaux d'agent IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 niveaux d'agent IA pour votre activité | Ancien document des quatre niveaux d’agents, très orienté agence ; URL redirigée. | E — redirection vers assistant.html |

| assistant.html | Solutions métier · L’Rénov IA Studio | L’IA générique vous fait perdre du temps. Un assistant IA construit pour votre métier vous en fait gagner. | Hub actuel Solutions métier : audit, outils, automatisations, assistants/agents ; détails en fenêtres modales. | A |

| ia-et-moi.html | L'IA et moi — Vous êtes dans quel cas ? · L'Rénov IA Studio | Vous êtes dans quel cas ? | Orientation par maturité, encore liée à un ancien catalogue de bras droits IA et à un calculateur ROI. | B |

| panorama.html | Panorama IA — L'Rénov IA Studio | Absent | Alias de migration vers /panorama-ia/ ; aucun H1, redirection meta et serveur. | E — redirection vers panorama-ia/index.html |

| radar-ia.html | Radar IA — L'Rénov IA Studio | Ce qui buzze. Ce qui compte vraiment. | Veille éditoriale avec recherche, filtres, archives et articles affichés en modale depuis un tableau JavaScript. | A |

| contact.html | Contact — L'Rénov IA Studio · 30 min pour en parler | Échangeons sur votre situation . | Prise de contact : cadrage 30 minutes, formulaire, email, téléphone et prise de rendez-vous. | A |

| secteurs.html | Vos prestations dans votre métier — L'Rénov IA Studio · 7 secteurs | Sept secteurs où L'Rénov intervient concrètement. | Ancien hub de sept métiers, encore associé aux cinq anciennes familles commerciales. | D |

| secteur-assurance.html | Assurance · IARD — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Assurance · IARD. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | B |

| secteur-btp.html | BTP · Artisans — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour BTP · Artisans. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | B |

| secteur-communication.html | Communication · Marketing — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Communication · Marketing. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | C |

| secteur-finance-comptabilite.html | Compta · Finance — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Compta · Finance. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | B |

| secteur-immobilier.html | Immobilier · ALUR — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Immobilier · ALUR. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | B |

| secteur-juridique.html | Juridique · Notariat — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Juridique · Notariat. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | B |

| secteur-professions-liberales.html | Professions libérales — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Professions libérales. | Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage. | C |



### Documents supplémentaires découverts

| Page | Title exact | H1 exact | Fonction | Statut |

| --- | --- | --- | --- | --- |

| 404.html | Page introuvable — L'Rénov IA Studio | Aucun signal — cette page est introuvable | Page d’erreur prévue par ErrorDocument 404 ; fonction technique légitime, pas une offre. | D |

| cgv.html | Conditions Générales de Vente — L'Rénov IA Studio | CGV L'Rénov IA Studio | Conditions commerciales transversales, contenant toujours les anciens paliers et licences. | B |

| confidentialite.html | Politique de confidentialité — L'Rénov IA Studio | Politique de confidentialité | Information sur les traitements, hébergeurs, droits et données de prestation. | B |

| formation-cpf.html | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | Fiche actuelle du parcours TPE certifiant RS7311 ; programme, accompagnement et projet. | B |

| formations-batiment.html | CMD · Bâtiment · L’Rénov IA Studio | Bâtiment | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-communication-marketing.html | CMD · Communication &amp; marketing · L’Rénov IA Studio | Communication &amp; marketing | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-developpement-commercial.html | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | Développement commercial &amp; vente | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-enter.html | Parcours longs · ENTER · L’Rénov IA Studio | Parcours longs — Transformer | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-fafcea.html | Parcours individualisés FAFCEA · L’Rénov IA Studio | Parcours individualisés FAFCEA | Deux parcours individualisés de 20 h, chacun composé de deux blocs de 10 h. | C |

| formations-finance-assurance.html | CMD · Finance &amp; assurance · L’Rénov IA Studio | Finance &amp; assurance | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-formation.html | CMD · Formation · L’Rénov IA Studio | Formation | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-immobilier.html | CMD · Immobilier · L’Rénov IA Studio | Immobilier | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-pilotage-organisation.html | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | Pilotage &amp; organisation | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| formations-services-entreprises.html | CMD · Services aux entreprises · L’Rénov IA Studio | Services aux entreprises | Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT. | E |

| index (1).html | Trame Formations · L'Rénov | Les 3 parcours de formation IA par L'Rénov | Ancienne trame de formations à trois parcours ; doublon historique non relié au site. | E |

| mentions-legales.html | Mentions légales — L'Rénov IA Studio | Mentions légales | Identification du Studio et informations légales du site. | B |

| panorama-ia/index.html | Panorama IA — L'Rénov IA Studio | Les IA ne sont pas toutes fortes au même endroit. | Vrai Panorama : comparaison pédagogique des écosystèmes IA, sources et simulation de valeur. | D |



## C. Matrice navigation / footer / liens internes

La matrice indique les liens présents dans les fichiers sources, puis distingue leur effet réel en D. « Directe seule » exclut sitemap et liens externes inconnus ; « Non » peut signifier un accès seulement depuis 404 ou un ancien fichier. Les liens générés par mobile-app.js sont décrits ensuite. M = menu/header HTML, F = footer HTML, P = corps de page. Les sources listées excluent la trame `index (1).html`, dont les liens sont historiques.

| Page | Menu principal global | Footer entrant | Autres pages entrantes (P) | URL directe seule / réserve | Sortants internes hors menu/footer |

| --- | --- | --- | --- | --- | --- |

| 404.html | Non | Non | Aucun | Oui (aucun entrant) | `index.html`, `radar-ia.html`, `secteurs.html` |

| agents.html | Non | Non | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | Non ; contenu redirigé | Aucun |

| assistant.html | Oui | Oui | `ia-et-moi.html`, `index.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | Non | `contact.html` |

| ateliers.html | Non | Oui | `formations.html`, `index.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | Non | `contact.html`, `formations.html` |

| audit.html | Non | Non | `ia-et-moi.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | Non ; contenu redirigé | Aucun |

| cgv.html | Non | Oui | Aucun | Non | `confidentialite.html`, `index.html` |

| confidentialite.html | Non | Oui | `cgv.html`, `contact.html`, `mentions-legales.html` | Non | `index.html` |

| contact.html | Oui | Oui | `assistant.html`, `ateliers.html`, `formation-cpf.html`, `formations-batiment.html`, `formations-communication-marketing.html`, `formations-developpement-commercial.html`, `formations-enter.html`, `formations-fafcea.html`, `formations-finance-assurance.html`, `formations-formation.html`, `formations-immobilier.html`, `formations-pilotage-organisation.html`, `formations-services-entreprises.html`, `formations.html`, `index.html`, `secteur-assurance.html`, `secteur-btp.html` | Non | `confidentialite.html`, `radar-ia.html` |

| formation-cpf.html | Non | Oui | `formations.html`, `index.html` | Non | `contact.html`, `formations.html` |

| formations-batiment.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-communication-marketing.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-developpement-commercial.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-enter.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-fafcea.html | Non | Non | `formations.html`, `index.html` | Non | `contact.html`, `formations.html` |

| formations-finance-assurance.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-formation.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-immobilier.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-pilotage-organisation.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations-services-entreprises.html | Non | Non | Aucun | Oui (aucun entrant) | `contact.html`, `formations.html` |

| formations.html | Oui | Oui | `ateliers.html`, `formation-cpf.html`, `formations-batiment.html`, `formations-communication-marketing.html`, `formations-developpement-commercial.html`, `formations-enter.html`, `formations-fafcea.html`, `formations-finance-assurance.html`, `formations-formation.html`, `formations-immobilier.html`, `formations-pilotage-organisation.html`, `formations-services-entreprises.html`, `index.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | Non | `ateliers.html`, `contact.html`, `formation-cpf.html`, `formations-fafcea.html` |

| ia-et-moi.html | Non | Oui | Aucun | Non | `assistant.html`, `audit.html` |

| index (1).html | Non | Non | Aucun | Oui (aucun entrant) | Aucun |

| index.html | Oui | Non | `404.html`, `cgv.html`, `confidentialite.html`, `mentions-legales.html` | Non | `assistant.html`, `ateliers.html`, `contact.html`, `formation-cpf.html`, `formations-fafcea.html`, `formations.html`, `radar-ia.html` |

| mentions-legales.html | Non | Oui | Aucun | Non | `confidentialite.html`, `index.html` |

| outils.html | Non | Non | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | Non ; contenu redirigé | Aucun |

| panorama-ia/index.html | Non | Non | `panorama.html` | Non | `radar-ia.html` |

| panorama.html | Non | Non | Aucun | Oui (aucun entrant) | `panorama-ia/index.html` |

| radar-ia.html | Oui | Oui | `404.html`, `contact.html`, `index.html`, `panorama-ia/index.html` | Non | Aucun |

| secteur-assurance.html | Non | Oui | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `contact.html`, `formations.html`, `outils.html` |

| secteur-btp.html | Non | Oui | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `contact.html`, `formations.html`, `outils.html` |

| secteur-communication.html | Non | Non | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `formations.html`, `outils.html` |

| secteur-finance-comptabilite.html | Non | Oui | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `formations.html`, `outils.html` |

| secteur-immobilier.html | Non | Oui | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `formations.html`, `outils.html` |

| secteur-juridique.html | Non | Oui | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `formations.html`, `outils.html` |

| secteur-professions-liberales.html | Non | Non | `secteurs.html` | Non | `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `formations.html`, `outils.html` |

| secteurs.html | Non | Non | `404.html` | Non | `assistant.html`, `audit.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` |



### Sources exactes des menus et footers

**Profils menu** (les auto-liens sont ici conservés pour documenter le HTML).

| Sources exactes | Destinations distinctes |

| --- | --- |

| `404.html`, `formation-cpf.html`, `formations-batiment.html`, `formations-communication-marketing.html`, `formations-developpement-commercial.html`, `formations-enter.html`, `formations-fafcea.html`, `formations-finance-assurance.html`, `formations-formation.html`, `formations-immobilier.html`, `formations-pilotage-organisation.html`, `formations-services-entreprises.html`, `formations.html` | `assistant.html`, `contact.html`, `formations.html`, `index.html`, `radar-ia.html` |

| `agents.html`, `assistant.html`, `audit.html`, `cgv.html`, `confidentialite.html`, `contact.html`, `ia-et-moi.html`, `index.html`, `mentions-legales.html`, `outils.html`, `radar-ia.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | `assistant.html`, `contact.html`, `formations.html`, `https://calendly.com/laurence-lrenov-ia/30min`, `index.html`, `radar-ia.html` |

| `ateliers.html` | `assistant.html`, `ateliers.html`, `contact.html`, `formations.html`, `index.html`, `radar-ia.html` |

| `index (1).html` | `assistant.html`, `ateliers.html`, `contact.html`, `formation-cpf.html`, `formations.html`, `https://calendly.com/laurence-lrenov-ia/30min`, `index.html`, `radar-ia.html` |

| `panorama-ia/index.html` | `https://calendly.com/laurence-lrenov-ia/30min`, `index.html`, `panorama-ia/index.html`, `radar-ia.html` |

| `panorama.html` | Aucun |



**Profils footer** (les auto-liens sont ici conservés pour documenter le HTML).

| Sources exactes | Destinations distinctes |

| --- | --- |

| `404.html`, `agents.html`, `assistant.html`, `ateliers.html`, `audit.html`, `cgv.html`, `confidentialite.html`, `contact.html`, `formation-cpf.html`, `formations-batiment.html`, `formations-communication-marketing.html`, `formations-developpement-commercial.html`, `formations-enter.html`, `formations-fafcea.html`, `formations-finance-assurance.html`, `formations-formation.html`, `formations-immobilier.html`, `formations-pilotage-organisation.html`, `formations-services-entreprises.html`, `formations.html`, `ia-et-moi.html`, `index (1).html`, `index.html`, `mentions-legales.html`, `outils.html`, `panorama-ia/index.html`, `radar-ia.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | `assistant.html`, `ateliers.html`, `cgv.html`, `confidentialite.html`, `contact.html`, `formation-cpf.html`, `formations.html`, `https://calendly.com/laurence-lrenov-ia/30min`, `https://www.facebook.com/LaurenceBorrasLRenovEspacesetIA`, `https://www.instagram.com/laurence_lrenov_ia_studio`, `https://www.linkedin.com/in/laurence-borras-l-renov-ia-studio-31b0992a2`, `https://www.skool.com/signup?ref=f96e251d07c54f30a7e93b423ea52fff`, `ia-et-moi.html`, `mailto:contact@lrenov-ia.studio`, `mentions-legales.html`, `radar-ia.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` |

| `panorama.html` | Aucun |



**Navigation mobile ajoutée par `assets/mobile-app.js:13–21`** : Accueil → index.html ; Formations → formations.html ; Radar IA → radar-ia.html ; Contact → contact.html. Elle ne comporte pas Solutions métier, qui reste dans le menu supérieur. Sur l’accueil : raccourcis supplémentaires ateliers.html, formations-fafcea.html, formation-cpf.html, assistant.html, radar-ia.html et contact.html ; liens CTRL/CMD/ENTER vers ateliers.html#ctrl/#cmd/#enter. Ces compléments renforcent SHIFT et FAFCEA, sans rendre le hub secteurs ou le Panorama accessibles.

### Registre exact des liens internes dans le corps

Chaque ligne conserve le libellé complet et le href original. Les liens menu/footer répétés sont couverts par les profils et la cartographie H-footer ; les auto-ancres utiles sont conservées ici.

| Source:ligne | Libellé | Href | Fichier cible / effet |

| --- | --- | --- | --- |

| 404.html:138 | Retour à l'accueil | / | index.html |

| 404.html:144 | Voir les secteurs | /secteurs | secteurs.html |

| 404.html:159 | Tester le Radar IA | /radar-ia | radar-ia.html |

| assistant.html:6 | Aller au contenu | #main | assistant.html |

| assistant.html:45 | Nous contacter | contact.html | contact.html |

| assistant.html:46 | contactez-nous | contact.html | contact.html |

| ateliers.html:20 | Aller au contenu | #main | ateliers.html |

| ateliers.html:35 | ← Vue d’ensemble des formations | formations.html | formations.html |

| ateliers.html:50 | nous contacter | contact.html | contact.html |

| cgv.html:292 | 1. Champ d'application | #a1 | cgv.html |

| cgv.html:293 | 2. Prestations proposées | #a2 | cgv.html |

| cgv.html:294 | 3. Devis &amp; commande | #a3 | cgv.html |

| cgv.html:295 | 4. Prix &amp; TVA | #a4 | cgv.html |

| cgv.html:296 | 5. Acomptes | #a5 | cgv.html |

| cgv.html:297 | 6. Paiement | #a6 | cgv.html |

| cgv.html:298 | 7. Retard &amp; pénalités | #a7 | cgv.html |

| cgv.html:299 | 8. Délais &amp; obligations | #a8 | cgv.html |

| cgv.html:300 | 9. Annulation &amp; report | #a9 | cgv.html |

| cgv.html:301 | 10. Propriété intellectuelle | #a10 | cgv.html |

| cgv.html:302 | 11. Licence outils &amp; limites | #a11 | cgv.html |

| cgv.html:303 | 12. Données &amp; RGPD | #a12 | cgv.html |

| cgv.html:304 | 13. Confidentialité | #a13 | cgv.html |

| cgv.html:305 | 14. Responsabilité | #a14 | cgv.html |

| cgv.html:306 | 15. Force majeure | #a15 | cgv.html |

| cgv.html:307 | 16. Litiges &amp; droit applicable | #a16 | cgv.html |

| cgv.html:460 | lrenov-ia.studio/confidentialite.html | confidentialite.html | confidentialite.html |

| cgv.html:492 | Retour à l'accueil | index.html | index.html |

| confidentialite.html:462 | Retour à l'accueil | index.html | index.html |

| contact.html:578 | Formulaire détaillé Quelques questions pour situer votre contexte, votre secteur et votre besoin. Réponse sous 48h ouvrées. Remplir le formulaire | #formulaire | contact.html |

| contact.html:666 | politique de confidentialité | confidentialite.html | confidentialite.html |

| contact.html:734 | Tester le Radar IA | radar-ia.html | radar-ia.html |

| contact.html:738 | Remplir le formulaire | #formulaire | contact.html |

| formation-cpf.html:25 | Aller au contenu | #main | formation-cpf.html |

| formation-cpf.html:36 | ← Retour aux formations | formations.html#cpf | formations.html |

| formation-cpf.html:44 | Nous contacter | contact.html | contact.html |

| formations-batiment.html:18 | Aller au contenu | #main | formations-batiment.html → ateliers.html#cmd |

| formations-batiment.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-batiment.html:36 | nous contacter | contact.html | contact.html |

| formations-communication-marketing.html:18 | Aller au contenu | #main | formations-communication-marketing.html → ateliers.html#cmd |

| formations-communication-marketing.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-communication-marketing.html:36 | nous contacter | contact.html | contact.html |

| formations-developpement-commercial.html:18 | Aller au contenu | #main | formations-developpement-commercial.html → ateliers.html#cmd |

| formations-developpement-commercial.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-developpement-commercial.html:36 | nous contacter | contact.html | contact.html |

| formations-enter.html:18 | Aller au contenu | #main | formations-enter.html → ateliers.html#enter |

| formations-enter.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-enter.html:36 | nous contacter | contact.html | contact.html |

| formations-fafcea.html:25 | Aller au contenu | #main | formations-fafcea.html |

| formations-fafcea.html:36 | ← Vue d’ensemble des formations | formations.html | formations.html |

| formations-fafcea.html:42 | Étudier mon besoin | contact.html | contact.html |

| formations-finance-assurance.html:18 | Aller au contenu | #main | formations-finance-assurance.html → ateliers.html#cmd |

| formations-finance-assurance.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-finance-assurance.html:36 | nous contacter | contact.html | contact.html |

| formations-formation.html:18 | Aller au contenu | #main | formations-formation.html → ateliers.html#cmd |

| formations-formation.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-formation.html:36 | nous contacter | contact.html | contact.html |

| formations-immobilier.html:18 | Aller au contenu | #main | formations-immobilier.html → ateliers.html#cmd |

| formations-immobilier.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-immobilier.html:36 | nous contacter | contact.html | contact.html |

| formations-pilotage-organisation.html:18 | Aller au contenu | #main | formations-pilotage-organisation.html → ateliers.html#cmd |

| formations-pilotage-organisation.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-pilotage-organisation.html:36 | nous contacter | contact.html | contact.html |

| formations-services-entreprises.html:18 | Aller au contenu | #main | formations-services-entreprises.html → ateliers.html#cmd |

| formations-services-entreprises.html:33 | ← Toutes les formations SHIFT | formations.html | formations.html |

| formations-services-entreprises.html:36 | nous contacter | contact.html | contact.html |

| formations.html:24 | Aller au contenu | #main | formations.html |

| formations.html:45 | Découvrir les Ateliers SHIFT | ateliers.html | ateliers.html |

| formations.html:47 | Découvrir les parcours FAFCEA | formations-fafcea.html | formations-fafcea.html |

| formations.html:52 | Découvrir le parcours CPF | formation-cpf.html | formation-cpf.html |

| formations.html:56 | nous contacter | contact.html | contact.html |

| ia-et-moi.html:1165 | Je découvre l'IA | #decouverte | ia-et-moi.html |

| ia-et-moi.html:1166 | Je vois le potentiel | #potentiel | ia-et-moi.html |

| ia-et-moi.html:1167 | J'ai une idée précise | #idee | ia-et-moi.html |

| ia-et-moi.html:1211 | Diagnostic IA complet → | audit.html | audit.html → assistant.html |

| ia-et-moi.html:1279 | Voir les 4 paliers → | assistant.html | assistant.html |

| ia-et-moi.html:1366 | Voir le détail des paliers → | assistant.html | assistant.html |

| index.html:1144 | RADAR IA | radar-ia.html | radar-ia.html |

| index.html:1175 | Découvrir les formations → | formations.html | formations.html |

| index.html:1176 | Découvrir les solutions métier | assistant.html | assistant.html |

| index.html:1192 | Former Rendre l’équipe autonome et monter en compétences. | formations.html | formations.html |

| index.html:1193 | Structurer Adapter l’IA aux méthodes, aux outils et aux usages du métier. | assistant.html | assistant.html |

| index.html:1194 | Construire Créer ce qui manque : outils, routines, assistants, workflows. | assistant.html | assistant.html |

| index.html:1205 | Formations SHIFT · FAFCEA · CPF ↗ | formations.html | formations.html |

| index.html:1206 | Solutions métier Des usages et outils adaptés à votre activité ↗ | assistant.html | assistant.html |

| index.html:1207 | Radar IA Ce qui change vraiment dans l’IA ↗ | radar-ia.html | radar-ia.html |

| index.html:1208 | Contact Parler de votre besoin ↗ | contact.html | contact.html |

| index.html:1227 | Contacter → | contact.html | contact.html |

| index.html:1276 | Découvrir les Ateliers SHIFT | ateliers.html | ateliers.html |

| index.html:1283 | Découvrir les parcours FAFCEA | formations-fafcea.html | formations-fafcea.html |

| index.html:1290 | Découvrir le parcours CPF | formation-cpf.html | formation-cpf.html |

| index.html:1294 | Voir toutes les formations → | formations.html | formations.html |

| index.html:1313 | Découvrir les solutions métier | assistant.html | assistant.html |

| index.html:1417 | Consulter le radar → | radar-ia.html | radar-ia.html |

| index.html:1445 | Nous contacter | contact.html | contact.html |

| mentions-legales.html:377 | Politique de confidentialité | confidentialite.html | confidentialite.html |

| mentions-legales.html:393 | Retour à l'accueil | index.html | index.html |

| panorama-ia/index.html:24 | Aller au contenu | #contenu | panorama-ia/index.html |

| panorama-ia/index.html:59 | Voir qui fait quoi | #missions | panorama-ia/index.html |

| panorama-ia/index.html:60 | Comprendre les notes | #methode | panorama-ia/index.html |

| panorama-ia/index.html:94 | Voir tous les articles | ../radar-ia.html | radar-ia.html |

| panorama-ia/index.html:97 | ChatGPT · Plugins · Skills · Codex ChatGPT dépassé par Claude ? Le match se déplace vers les connexions et l'exécution. La compétition ne porte plus seulement sur la qualité d'une réponse, mais sur la capacité à accéder aux outils, réutiliser une méthode et agir. Lire l'analyse | ../radar-ia.html#article-16 | radar-ia.html |

| panorama-ia/index.html:103 | Claude · Fable 5 Fable 5 : une puissance supérieure, mais pas un choix automatique. Anthropic le destine aux tâches les plus longues et complexes. Son coût, ses garde-fous et le niveau réel du besoin restent déterminants. Lire l'analyse | ../radar-ia.html#article-15 | radar-ia.html |

| panorama-ia/index.html:267 | Lire le Radar IA | ../radar-ia.html | radar-ia.html |

| panorama.html:3 | Ouvrir le Panorama IA | panorama-ia/ | panorama-ia/index.html |

| secteur-assurance.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-assurance.html |

| secteur-assurance.html:1174 | On en parle 30 min | contact.html | contact.html |

| secteur-assurance.html:1280 | Audit IA Audit pour identifier les usages compatibles avec votre conformité DDA. 150-690 € . Découvrir | audit.html | audit.html → assistant.html |

| secteur-assurance.html:1288 | Outils métier Outil cabinet d'assurance sur-mesure avec Mistral EU pour les données sensibles. Recueil de besoins, devis, suivi sinistres. 1 490-6 990 €+ . Découvrir | outils.html | outils.html → assistant.html |

| secteur-assurance.html:1296 | Agents IA Agent pour les brouillons de mails de relance, les explications de garanties, la qualification de premier niveau. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-assurance.html:1304 | Ateliers Co-construction sur un cas (recueil de besoins, qualification sinistre). 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-assurance.html:1312 | Formations Formations IA pour le métier assurance. OPCO Atlas mobilisable via Labacademy. Parcours certifiants disponibles. Découvrir | formations.html | formations.html |

| secteur-assurance.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-btp.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-btp.html |

| secteur-btp.html:1174 | On en parle 30 min | contact.html | contact.html |

| secteur-btp.html:1280 | Audit IA Démarrer par un audit pour identifier ce qui prend du temps administratif vs ce qui rapporte. 150-690 € · déductible 60j. Découvrir | audit.html | audit.html → assistant.html |

| secteur-btp.html:1288 | Outils métier (mode hébergé recommandé) Outil clé en main hébergé chez L'Rénov : devis, suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. 1 490-6 990 €+ + licence annuelle . Découvrir | outils.html | outils.html → assistant.html |

| secteur-btp.html:1296 | Agents IA Agent qui répond aux mails standards, qualifie les demandes entrantes, brouillon des comptes-rendus de visite. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-btp.html:1304 | Ateliers Co-construction sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-btp.html:1312 | Formations Formations IA pour artisans / dirigeants BTP, finançables via OPCO (Labacademy) ou CPF (CréActifs/Labacademy). Découvrir | formations.html | formations.html |

| secteur-btp.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-communication.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-communication.html |

| secteur-communication.html:1280 | Audit IA Audit pour identifier ce qui vaut la peine d'être outillé. 150-690 € . Découvrir | audit.html | audit.html → assistant.html |

| secteur-communication.html:1288 | Outils métier Outil rédaction sur-mesure, calibré sur votre voix éditoriale (corpus existant analysé). 1 490-6 990 €+ . Découvrir | outils.html | outils.html → assistant.html |

| secteur-communication.html:1296 | Agents IA Agent rédacteur conversationnel, calibré sur votre style. Souvent le bon choix ici. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-communication.html:1304 | Ateliers Atelier de capture de voix éditoriale, puis configuration de l'outil. 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-communication.html:1312 | Formations Formation IA pour communicants, finançable OPCO (Labacademy) ou CPF (CréActifs). Découvrir | formations.html | formations.html |

| secteur-communication.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-finance-comptabilite.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-finance-comptabilite.html |

| secteur-finance-comptabilite.html:1280 | Audit IA Audit ciblé sur les usages compatibles avec votre conformité. 150-690 € · déductible 60j. Découvrir | audit.html | audit.html → assistant.html |

| secteur-finance-comptabilite.html:1288 | Outils métier Outil cabinet sur-mesure : structuration des données client, génération de notes de synthèse, suivi des missions. Garde-fous MIF II/LCB-FT. 1 490-6 990 €+ . Découvrir | outils.html | outils.html → assistant.html |

| secteur-finance-comptabilite.html:1296 | Agents IA Agent pour les brouillons de mails clients, les explications pédagogiques, la veille fiscale. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-finance-comptabilite.html:1304 | Ateliers Co-construction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-finance-comptabilite.html:1312 | Formations Formations IA spécifiques au métier comptable / CGP, finançables OPCO (Labacademy) ou paiement direct. Découvrir | formations.html | formations.html |

| secteur-finance-comptabilite.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-immobilier.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-immobilier.html |

| secteur-immobilier.html:1280 | Audit IA Démarrer par un audit pour identifier où l'IA a un vrai impact dans votre agence. Compte-rendu écrit, plan d'action chiffré. 150-690 € · déductible 60j si projet engagé. Découvrir | audit.html | audit.html → assistant.html |

| secteur-immobilier.html:1288 | Outils métier Outil sur-mesure dédié à l'immobilier : structuration des mandats, suivi des leads, génération d'annonces conformes. Vocabulaire ALUR natif. 1 490-6 990 €+ . Découvrir | outils.html | outils.html → assistant.html |

| secteur-immobilier.html:1296 | Agents IA Agent conversationnel pour la qualification des leads, la rédaction de réponses standards, les brouillons de comptes-rendus de visite. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-immobilier.html:1304 | Ateliers Co-construction avec l'équipe agence : configurer un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-immobilier.html:1312 | Formations Formations ALUR finançables. Cadrage avec AVA Formation (organisme Qualiopi spécialisé immobilier) pour l'obligation de formation continue. Découvrir | formations.html | formations.html |

| secteur-immobilier.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-juridique.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-juridique.html |

| secteur-juridique.html:1280 | Audit IA Audit pour identifier les usages compatibles avec le secret pro. 150-690 € . Découvrir | audit.html | audit.html → assistant.html |

| secteur-juridique.html:1288 | Outils métier Outil étude / cabinet sur-mesure, Mistral EU, hébergement Europe garanti. Pré-RDV, comptes-rendus, suivi. 1 490-6 990 €+ . Découvrir | outils.html | outils.html → assistant.html |

| secteur-juridique.html:1296 | Agents IA Agent pour les courriers de suivi, les notes de cadrage, les explications client. 690-4 500 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-juridique.html:1304 | Ateliers Co-construction sur un cas concret (pré-acte type, courrier type). 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-juridique.html:1312 | Formations Formations IA pour le métier juridique. Paiement direct ou financement OPCO via Labacademy. Découvrir | formations.html | formations.html |

| secteur-juridique.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteur-professions-liberales.html:1173 | Voir 3 exemples concrets → | #exemples | secteur-professions-liberales.html |

| secteur-professions-liberales.html:1280 | Audit IA Audit indispensable ici pour cadrer le bon périmètre. 150-690 € . Découvrir | audit.html | audit.html → assistant.html |

| secteur-professions-liberales.html:1288 | Outils métier Outil indépendant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro. 1 490-4 500 € . Découvrir | outils.html | outils.html → assistant.html |

| secteur-professions-liberales.html:1296 | Agents IA Agent pour la communication, les mails standards, la production de livrables. 690-2 900 € . Découvrir | agents.html | agents.html → assistant.html |

| secteur-professions-liberales.html:1304 | Ateliers Atelier individuel ou avec un associé pour configurer ensemble. 390-890 € . Découvrir | ateliers.html | ateliers.html |

| secteur-professions-liberales.html:1312 | Formations Formation IA pour libéraux, CPF mobilisable via CréActifs/Labacademy, ou paiement direct. Découvrir | formations.html | formations.html |

| secteur-professions-liberales.html:1360 | Voir l'ensemble des prestations | assistant.html | assistant.html |

| secteurs.html:1174 | Voir les 7 secteurs → | #secteurs | secteurs.html |

| secteurs.html:1175 | Voir d'abord les 5 prestations | assistant.html | assistant.html |

| secteurs.html:1215 | Immobilier · ALUR Agents, mandataires, agences. Obligation de formation continue. Mandats, annonces, leads, suivi client. Cas-type : agence 4 négociateurs, mandataire indépendant, franchise. Voir le secteur → | secteur-immobilier.html | secteur-immobilier.html |

| secteurs.html:1222 | BTP · Artisans Artisans, TPE BTP, franchises, conducteurs de travaux. Mode hébergé clé en main recommandé. Cas-type : entreprise aluminium 8p, cabinet MOE 3p, artisan plombier. Voir le secteur → | secteur-btp.html | secteur-btp.html |

| secteurs.html:1229 | Compta · Finance Cabinets EC, CGP, conseils financiers. Conformité MIF II/LCB-FT. Sans risque d'hallucination. Cas-type : cabinet CGP 5p, EC indépendant, cabinet EC 12p. Voir le secteur → | secteur-finance-comptabilite.html | secteur-finance-comptabilite.html |

| secteurs.html:1236 | Assurance · IARD Cabinets, mutuelles, agents. Conformité DDA. Mistral EU pour vos données client sensibles. Cas-type : mutuelle régionale, cabinet courtage 4p, agent général. Voir le secteur → | secteur-assurance.html | secteur-assurance.html |

| secteurs.html:1243 | Juridique · Notariat Notaires, avocats, juristes. Le secret pro respecté. Hébergement EU obligatoire. Cas-type : étude notariale, cabinet droit affaires 3p, juriste d'entreprise. Voir le secteur → | secteur-juridique.html | secteur-juridique.html |

| secteurs.html:1250 | Professions libérales Indépendants, consultants, cabinets de conseil. Outils transverses adaptés métier par métier. Cas-type : cabinet assistanat virtuel 4p, consultant RH, coach pro. Voir le secteur → | secteur-professions-liberales.html | secteur-professions-liberales.html |

| secteurs.html:1257 | Communication · Marketing Marketeurs indépendants, agences, responsables marketing PME. Voix éditoriale conservée — la priorité. Cas-type : consultante B2B, agence comm 5p, RM PME industrielle. Voir le secteur → | secteur-communication.html | secteur-communication.html |

| secteurs.html:1314 | Voir les 3 paliers d'audit | audit.html | audit.html → assistant.html |



## D. Pages orphelines ou quasi invisibles

| Page/groupe | Constat | Accès possible et distinction |

| --- | --- | --- |

| secteurs.html | Seul lien entrant public dans le corps : 404.html → /secteurs. Absent du footer et du menu. | Quasi orpheline commerciale (D), mais présente au sitemap ; ne pas conclure absence d’indexation. |

| secteur-communication.html ; secteur-professions-liberales.html | Un seul parent : secteurs.html ; aucun lien du footer. | C au sens des fichiers ; quasi invisibles dans le parcours commercial puisque leur parent dépend de 404. |

| panorama.html | Aucun lien entrant HTML public ; redirection Apache + meta vers panorama-ia/. | Alias historique E ; sitemap contient encore /panorama. |

| panorama-ia/index.html | Seul entrant HTML hors auto-liens : l’alias panorama.html. Aucun lien Radar → Panorama. | D dans le parcours courant ; son propre footer mène aux autres pages mais cela ne crée pas de lien entrant. |

| audit.html ; outils.html ; agents.html | Encore cités par les secteurs ; audit aussi par ia-et-moi et secteurs. | Les fichiers sont trouvables localement, mais la consultation par URL est redirigée ; ne pas les classer comme des offres actives C. |

| 9 anciennes pages formations-* hors FAFCEA | Aucun entrant hors leurs auto-liens ; redirections déjà prévues vers ateliers#cmd ou #enter. | Anciens documents E ; accès direct au fichier sur hébergement statique différent d’Apache ne prouve pas l’accès production. |

| index (1).html | Aucun lien entrant ; pas de copie déploiement. | Trame historique E, accessible seulement si le fichier est publié et son URL connue. |

| 404.html | Aucun entrant commercial attendu. | Fonction technique ErrorDocument légitime ; D documentaire ne signifie pas page à supprimer. |



## E. Contenus à récupérer, page par page

Les références de lignes correspondent aux fichiers du dépôt au moment de l’audit. Les blocs « à abandonner » sont des **propositions éditoriales**, sans retrait du code et sans décision exécutée. Aucun contenu n’est à réinjecter automatiquement.

### index.html

Fonction : Accueil et orientation vers formations, solutions métier, veille et contact.

**CONTENU À RÉCUPÉRER** — Manifeste « Mettre l’IA au travail dans votre métier » ; triptyque former / structurer / construire ; méthode de terrain, personnalisation et accompagnement (l.1160–1378). Portrait de Laurence ; CTA « Parlons de votre activité ».

**CONTENU À ACTUALISER** — Articulation desktop/mobile ; cohérence entre promesse de studio et passages très centrés sur l’assistant ; modalités du présentiel (« Je viens chez vous », « Pas de visio froide »).

**CONTENU OBSOLÈTE** — Les formulations qui réduisent le Studio à un bras droit unique ne décrivent plus toute l’offre visible.

**CONTENU À ABANDONNER** — Aucun bloc entier à abandonner d’office ; éviter les promesses absolues et la duplication de discours.

### formations.html

Fonction : Hub actuel : SHIFT, FAFCEA, CPF et prochaines sessions.

**CONTENU À RÉCUPÉRER** — Trois portes SHIFT / FAFCEA / CPF ; orientation par objectif ; calendrier et détail à la demande (l.39–58).

**CONTENU À ACTUALISER** — Sessions non renseignées ; information de financement et réservation à relire avec les partenaires.

**CONTENU OBSOLÈTE** — Aucun ancien montant dans le HTML actuel ; ne pas importer la trame index (1).html.

**CONTENU À ABANDONNER** — Catalogue historique à trois parcours comme structure imposée ; ce n’est pas la structure du hub actuel.

### ateliers.html

Fonction : Catalogue SHIFT actuel CTRL / CMD / ENTER, fiches et réservation générées en JavaScript.

**CONTENU À RÉCUPÉRER** — Progression CTRL → CMD → ENTER ; huit domaines métier ; formations concrètes ; fiches avec objectifs, pratique, résultats et prérequis via shift-catalogue.js.

**CONTENU À ACTUALISER** — Contrôle humain des montants 79 / 119 / 139 / 399 €, distinction types CMD, programmes encore à valider et calendrier vide.

**CONTENU OBSOLÈTE** — Ancienne co-construction demi-journée / journée / mois à 390–890 € décrite ailleurs ; elle ne correspond pas au catalogue affiché ici.

**CONTENU À ABANDONNER** — Réintégration automatique des anciennes fiches sectorielles ou des anciens formats au catalogue SHIFT.

### audit.html

Fonction : Ancien document pédagogique et commercial des trois audits ; URL redirigée vers Solutions métier.

**CONTENU À RÉCUPÉRER** — « Diagnostiquer. Cartographier. Planifier. » ; analyse des flux, irritants, données et contraintes ; livrables partageables ; priorisation et plan par phases ; avantages ET limites (l.1272–1629).

**CONTENU À ACTUALISER** — Durée, livrable, profondeur et délais de restitution ; reprendre la méthode dans Solutions métier sans imposer un forfait.

**CONTENU OBSOLÈTE** — Découverte 150 €, Express 390 €, Feuille de route 690 € ; déduction 60 jours ; calculateur ROI commercial.

**CONTENU À ABANDONNER** — Pilotage automatique du choix par trois paliers et ROI présenté comme arbitre unique ; réactivation de l’URL comme offre sans validation.

Repères de blocs : l.1266 « Les 3 paliers d'audit IA pour décider en connaissance »; l.1345 « Audit Découverte »; l.1454 « Audit Express »; l.1565 « Audit Feuille de Route »; l.1674 « Combien ce dispositif rapporte dans votre contexte »; l.1805 « Recevoir le cadrage express pour situer le bon palier d'audit. ».

### outils.html

Fonction : Ancien document des quatre paliers d’applications métier ; URL redirigée.

**CONTENU À RÉCUPÉRER** — Quatre briques : process / workflow / application / IA optionnelle ; distinction outil métier et agent ; réduire la double saisie ; périmètre, limites, intégrations et cadrage sur cas réel (l.1412–2169).

**CONTENU À ACTUALISER** — Propriété des comptes, mode autonome/hébergé, maintenance, capacités utilisateurs, quotas tokens/opérations et choix d’infrastructure.

**CONTENU OBSOLÈTE** — Starter / Pro / Expert / Tout-en-un ; setup, licences, mensualisation ; options signature/paiement/caution et délais figés.

**CONTENU À ABANDONNER** — Promesse d’une progression universelle en quatre packs ; retour à une vente par niveau avant diagnostic du besoin.

Repères de blocs : l.1406 « Les 4 paliers d'outil métier construit sur mesure »; l.1498 « Outil Starter »; l.1620 « Outil Pro »; l.1742 « Outil Expert »; l.1864 « Outil Tout-en-un »; l.1984 « Combien ce dispositif rapporte dans votre contexte »; l.2127 « Intégrations signature & paiement »; l.2168 « Recevoir le cadrage express pour situer le bon palier. ».

### agents.html

Fonction : Ancien document des quatre niveaux d’agents, très orienté agence ; URL redirigée.

**CONTENU À RÉCUPÉRER** — « 1 agent = 1 mission » ; différence assistant ponctuel / chaîne mail / cockpit / pilotage ; validation humaine ; limites d’intégration ; choix technique selon environnement (l.1261–1888).

**CONTENU À ACTUALISER** — Adapter les exemples agence/assurance à des métiers distincts ; reformuler les garanties Mistral EU/RGPD comme exigences à démontrer ; preuve des gains annoncés.

**CONTENU OBSOLÈTE** — Quatre niveaux et tarifs/licences correspondants ; notions Insuffisant / Partiel / Cible naturelle liées à un ancien cadrage ; ROI prérempli.

**CONTENU À ABANDONNER** — Association automatique besoin sensible → niveau commercial supérieur ; autonomie promise sans périmètre explicite.

Repères de blocs : l.1260 « Les 4 niveaux d'agent IA pour votre activité »; l.1347 « Agent simple L'Rénov »; l.1458 « Agent métier sécurisé »; l.1556 « Bras droit IA agence »; l.1655 « Cockpit agence complet »; l.1744 « Combien ce dispositif rapporte dans votre contexte »; l.1887 « Recevoir le cadrage express pour situer le bon niveau. ».

### assistant.html

Fonction : Hub actuel Solutions métier : audit, outils, automatisations, assistants/agents ; détails en fenêtres modales.

**CONTENU À RÉCUPÉRER** — Promesse « Votre métier en mémoire. Votre style en sortie » ; quatre familles de solution ; « Clarifier / Créer / Intégrer » ; exemples générateur, tableau de suivi, relances et assistant documentaire (l.38–52).

**CONTENU À ACTUALISER** — Enrichir les détails courts avec la pédagogie récupérée des anciennes pages ; garantir un chemin compréhensible sans ouverture de modale.

**CONTENU OBSOLÈTE** — Aucun prix ni ancien palier dans le HTML actuel.

**CONTENU À ABANDONNER** — Réintroduction du catalogue Mon assistant IA à paliers comme architecture du hub.

### ia-et-moi.html

Fonction : Orientation par maturité, encore liée à un ancien catalogue de bras droits IA et à un calculateur ROI.

**CONTENU À RÉCUPÉRER** — « Avant de construire, on se positionne » ; « Je découvre », « Je vois le potentiel », « J’ai une idée précise » ; diagnostic / cadrage / construction ; possibilité de cadrer directement un besoin clair ; FAQ commencer petit, données, délais, après-livraison (l.1156–1553).

**CONTENU À ACTUALISER** — Rebrancher chaque maturité sur l’offre actuelle ; réécrire FAQ sans packs ; valider cadrage offert, délai devis 48h et prise en main 3h ; rendre la simulation explicite et prudente.

**CONTENU OBSOLÈTE** — Tableau Starter / Pro / Expert / Tout-en-un ; diagnostic 390 €, déduction 60j ; setup 1 490–6 990 €, licences 590 / 1 190 / 1 790 € ; ROI 38 720 €/an et remboursement ~4 semaines.

**CONTENU À ABANDONNER** — Comparaison généralisante « Un audit gratuit a un objectif : vous vendre quelque chose après » ; Pro « Populaire » sans preuve ; liens promettant des paliers absents de leur destination.

Repères de blocs : l.1156 « Vous êtes dans quel cas ? »; l.1178 « Avant de construire, on se positionne. »; l.1196 « "L'IA, j'en entends parler. Je ne sais pas par où commencer." »; l.1230 « "J'ai testé ChatGPT, je vois où ça pourrait servir — sans savoir comment structurer." »; l.1264 « "Je sais exactement ce que je veux. Je veux qu'on me le construise." »; l.1298 « Quatre formats de bras droit IA. »; l.1383 « Avant de payer un audit, chiffrez ce que vous perdez. »; l.1393 « Ce que vous perdez aujourd'hui, en chiffres. »; l.1461 « Ce que vous vous posez avant d'engager. »; l.1552 « On en parle ensemble ? ».

### panorama.html

Fonction : Alias de migration vers /panorama-ia/ ; aucun H1, redirection meta et serveur.

**CONTENU À RÉCUPÉRER** — Le seul bloc utile est le lien de continuité « Ouvrir le Panorama IA ». Le contenu pédagogique est dans panorama-ia/index.html.

**CONTENU À ACTUALISER** — Vérifier ultérieurement l’utilité de conserver ensemble redirection serveur et meta ; aucune modification ici.

**CONTENU OBSOLÈTE** — Ancienne URL de contenu ; ne contient plus l’ancien panorama.

**CONTENU À ABANDONNER** — Recréer une deuxième page concurrente à cette URL.

### radar-ia.html

Fonction : Veille éditoriale avec recherche, filtres, archives et articles affichés en modale depuis un tableau JavaScript.

**CONTENU À RÉCUPÉRER** — Structure éditoriale Ce qui change / impact / cas à préparer / vigilance / à tester / verdict / sources ; recherche, tags, archives ; cas métier et distinction entre hypothèse et réalisation.

**CONTENU À ACTUALISER** — Examiner les articles embarqués en JS, dates de publication et fraîcheur des sources ; préserver le filtre de publication (un article est daté du 19 octobre, après cet audit).

**CONTENU OBSOLÈTE** — Les anciennes mentions de Radar comme diagnostic, présentes dans Contact et 404, ne décrivent pas cette page de veille.

**CONTENU À ABANDONNER** — Réemployer automatiquement des actualités comme vérité permanente ; confondre veille et diagnostic commercial.

### contact.html

Fonction : Prise de contact : cadrage 30 minutes, formulaire, email, téléphone et prise de rendez-vous.

**CONTENU À RÉCUPÉRER** — Cadrage de 30 minutes ; « vous repartez avec une lecture claire » ; choix formulaire / email / téléphone ; demande de contexte ciblé et confidentialité (l.569–732).

**CONTENU À ACTUALISER** — Choix du formulaire et des prestations, adresses de contact et promesse de réponse ; distinguer le RDV du diagnostic ; vérifier les destinations sans envoi de formulaire.

**CONTENU OBSOLÈTE** — « 5 prestations » et Radar présenté comme « un diagnostic court » à la fin de la page.

**CONTENU À ABANDONNER** — Orienter un visiteur en recherche de diagnostic vers le Radar éditorial comme s’il s’agissait d’un questionnaire.

### secteurs.html

Fonction : Ancien hub de sept métiers, encore associé aux cinq anciennes familles commerciales.

**CONTENU À RÉCUPÉRER** — Grille de sept métiers ; explication qu’une page métier décrit des usages et contraintes ; ouverture aux activités hors grille ; exemples transverses (l.1160–1306).

**CONTENU À ACTUALISER** — Statut et visibilité du hub ; vérité des références présentées comme réelles ; rediriger les intentions vers les familles actuelles si décision validée.

**CONTENU OBSOLÈTE** — Modèle « cinq prestations, paliers, tarifs, ROI » ; raccourci « RGPD au cœur » non suffisant comme preuve.

**CONTENU À ABANDONNER** — Recréer automatiquement une grosse rubrique de navigation principale pour rendre ce hub visible.

### secteur-assurance.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Recueil de besoins, qualification de sinistre, pièces à demander, explication des garanties et renouvellements ; rôle de validation du conseiller. Exemples à retravailler : Mutuelle 20 conseillers, courtier IARD 4 personnes, agent général ; recueil DDA / brouillon sinistre / suivi renouvellements. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-btp.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Devis, comptes-rendus de chantier, mails fournisseurs, suivi des demandes et réduction de la charge administrative ; outil simple pour artisan. Exemples à retravailler : Menuiserie 8 personnes, maîtrise d’œuvre 3 personnes, plombier ; devis et chantier / gestion autonome / devis-type avec relances. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-communication.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Capture de voix à partir d’un corpus, rédaction contextualisée, planning éditorial multiclients et validation interne. Exemples à retravailler : Consultante B2B (corpus de 200 posts), agence 5 personnes, responsable marketing PME ; rédaction / planning / capture du style. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-finance-comptabilite.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Structurer les données avant rédaction, préparation de rendez-vous patrimonial, relances pièces et suivi des missions ; décision humaine. Exemples à retravailler : CGP 5 conseillers, expert-comptable indépendant, cabinet 12 personnes ; synthèse RDV / mails pièces manquantes / tableau de bord. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-immobilier.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Qualification de prospects, annonces à partir des informations du bien, suivi mandats, comptes-rendus de visite et relances post-visite. Exemples à retravailler : Agence 4 négociateurs, mandataire en réseau, franchise 6 agents ; mandats / qualification mail et WhatsApp / relances. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-juridique.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Préparation rendez-vous, synthèse de notes, courriers de suivi et liste de pièces ; confidentialité, traçabilité, relecture par le professionnel. Exemples à retravailler : Étude notariale, cabinet droit des affaires 3 associés, juriste d’entreprise ; post-RDV / suivi dossiers / veille. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### secteur-professions-liberales.html

Fonction : Page métier secondaire : approche sectorielle, trois exemples, cas d’usage, cinq prestations et CTA de cadrage.

**CONTENU À RÉCUPÉRER** — Cadrage à partir de deux ou trois livrables récurrents ; centralisation des briefs, suivi des missions et comptes-rendus. Exemples à retravailler : Assistanat virtuel 4 personnes, consultant RH, coach ; centralisation / cadrage RH / suivi séances. (l.1189–1264).

**CONTENU À ACTUALISER** — Confirmer le caractère réel/anonymisé des cas, les gains et les partenariats. Revoir CTA, contraintes métier et infrastructure ; « Mistral EU » ne suffit pas à établir la conformité.

**CONTENU OBSOLÈTE** — Bloc des cinq prestations, fourchettes tarifaires et anciens formats d’ateliers (l.1273–1314) ; étiquette Pro du footer lorsqu’elle existe.

**CONTENU À ABANDONNER** — Catalogue sectoriel Pro, gains ou conformité garantis et cas clients présentés comme prouvés sans justificatif ; conserver les scénarios comme hypothèses si non documentés.

### 404.html

Fonction : Page d’erreur prévue par ErrorDocument 404 ; fonction technique légitime, pas une offre.

**CONTENU À RÉCUPÉRER** — Retour accueil, contact et voies de sortie ; fonction de secours.

**CONTENU À ACTUALISER** — « Tester le Radar IA » et « Voir les secteurs » entretiennent une ancienne lecture du site.

**CONTENU OBSOLÈTE** — Radar assimilé au diagnostic ; hub secteurs seulement retrouvable via cette sortie d’erreur.

**CONTENU À ABANDONNER** — Considérer les liens de la page d’erreur comme une vraie visibilité commerciale du hub secteurs.

### cgv.html

Fonction : Conditions commerciales transversales, contenant toujours les anciens paliers et licences.

**CONTENU À RÉCUPÉRER** — Repérage documentaire des périmètres, devis, avenants, obligations client, confidentialité et validation humaine ; ce rapport ne valide aucune clause.

**CONTENU À ACTUALISER** — Faire relire les clauses après choix de l’offre : propriété, licence, comptes/hébergement, financement, maintenance et déduction des audits.

**CONTENU OBSOLÈTE** — Anciens paliers, heures annuelles, 65 €/h, nomenclatures d’ateliers ; contradiction « Tout audit déductible » vs Découverte non déductible.

**CONTENU À ABANDONNER** — Reprendre comme engagements actuels les clauses commerciales historiques sans validation humaine compétente.

### confidentialite.html

Fonction : Information sur les traitements, hébergeurs, droits et données de prestation.

**CONTENU À RÉCUPÉRER** — Explications sur données collectées, accès, hébergement, droits et sécurité.

**CONTENU À ACTUALISER** — Comparer les prestataires et flux réellement utilisés avec la politique ; affirmation Europe/données sensibles à examiner lors de la refonte.

**CONTENU OBSOLÈTE** — Aucune tarification ; aucune décision de conformité n’est tirée de ce fichier.

**CONTENU À ABANDONNER** — Promesses absolues de confidentialité ou souveraineté reprises sans vérifier l’architecture réelle.

### formation-cpf.html

Fonction : Fiche actuelle du parcours TPE certifiant RS7311 ; programme, accompagnement et projet.

**CONTENU À RÉCUPÉRER** — Objectifs opérationnels, six modules, projet réel, jury ; 30 h dont 24 h autonomie, 3 visios et 2 ateliers de groupe (l.37–43).

**CONTENU À ACTUALISER** — Liens inscription/devis absents de FORMATIONS_CONFIG ; référence RS7311, durée et éligibilité à faire confirmer par le responsable de l’offre.

**CONTENU OBSOLÈTE** — Aucun prix dans le HTML ; ne pas récupérer le budget CPF 1 500 € de la vieille trame.

**CONTENU À ABANDONNER** — Garantir une prise en charge ou reprendre automatiquement les anciens parcours 7–14h.

### formations-batiment.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Bâtiment » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-communication-marketing.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Communication & marketing » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-developpement-commercial.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Développement commercial & vente » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-enter.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Parcours longs — Transformer » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#enter.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-fafcea.html

Fonction : Deux parcours individualisés de 20 h, chacun composé de deux blocs de 10 h.

**CONTENU À RÉCUPÉRER** — Deux programmes 20 h ; IA professionnelle + temps/priorités ; stratégie/pilotage + structuration/allègement ; objectifs, contenus et livrables ; matrice humain / IA / automatisation (l.37–46).

**CONTENU À ACTUALISER** — Éligibilité et accord FAFCEA, cumul 40h et distinction quota classique/individualisé à confirmer avant republication ; textes détaillés contenus dans des templates.

**CONTENU OBSOLÈTE** — Aucun prix public affiché ; les anciens budgets de formation ne s’appliquent pas automatiquement.

**CONTENU À ABANDONNER** — Présenter l’accord de financement comme acquis ; absorber l’individualisé dans les anciens ateliers courts.

### formations-finance-assurance.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Finance & assurance » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-formation.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Formation » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-immobilier.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Immobilier » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-pilotage-organisation.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Pilotage & organisation » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### formations-services-entreprises.html

Fonction : Ancienne entrée CMD par domaine ou ENTER, conservée dans les fichiers mais redirigée vers le catalogue SHIFT.

**CONTENU À RÉCUPÉRER** — Intention du domaine « Services aux entreprises » ; fiches partagées, objectifs/pratique/livrables dans le catalogue JS.

**CONTENU À ACTUALISER** — Comparer les références au catalogue canonique SHIFT avant toute extraction ; l’URL actuelle redirige déjà vers ateliers.html#cmd.

**CONTENU OBSOLÈTE** — Page distincte devenue une ancienne entrée ; pour ENTER, 399 € dupliqué du catalogue actuel et néanmoins à valider.

**CONTENU À ABANDONNER** — Rétablir neuf catalogues concurrents ou considérer leurs prix comme validés par leur existence dans le dépôt.

### index (1).html

Fonction : Ancienne trame de formations à trois parcours ; doublon historique non relié au site.

**CONTENU À RÉCUPÉRER** — Pédagogie socle → spécialisation → projet certifiant ; pratique métier, supports réutilisables, appropriation intersessions ; avantages et limites (l.1285–1831).

**CONTENU À ACTUALISER** — N’en extraire que les méthodes ; toutes mentions de partenaires, Qualiopi, CPF/OPCO, ~40 modules et prérequis SOC-01/02 exigent arbitrage.

**CONTENU OBSOLÈTE** — Initiation 290–690 €, spécialisation 390–650 €/module, certifiant 790–1 590 €, budget CPF 1 500 € et simulateur de prise en charge.

**CONTENU À ABANDONNER** — Cette trame en doublon comme nouvelle page d’accueil ; promesse générale « Toutes les formations… certifiables Qualiopi » sans justification.

### mentions-legales.html

Fonction : Identification du Studio et informations légales du site.

**CONTENU À RÉCUPÉRER** — Identité et coordonnées de l’entreprise ; identification de l’éditeur.

**CONTENU À ACTUALISER** — Exactitude des coordonnées, mentions d’hébergement et responsables à confirmer lors d’une future mise à jour.

**CONTENU OBSOLÈTE** — Aucune obsolescence commerciale chiffrée identifiée dans le HTML.

**CONTENU À ABANDONNER** — Aucun bloc désigné à abandonner sur la seule base de son caractère secondaire.

### panorama-ia/index.html

Fonction : Vrai Panorama : comparaison pédagogique des écosystèmes IA, sources et simulation de valeur.

**CONTENU À RÉCUPÉRER** — Choisir selon mission, environnement, données et autonomie ; absence de champion universel ; distinction faits fournisseurs / lecture éditoriale ; limites des notes ; coût utile incluant le contrôle humain (l.56–263).

**CONTENU À ACTUALISER** — Édition vérifiée au 22 juillet 2026 ; noms, capacités, disponibilités, liens et dates à revérifier avant reprise ; corriger les liens d’articles qui n’ouvrent pas la cible.

**CONTENU OBSOLÈTE** — Les références technologiques datées ne sont pas validées par cet audit ; valeurs ROI 50 / 60 / 265 / 325 € sont des exemples.

**CONTENU À ABANDONNER** — Classement ou notes présentés comme benchmark scientifique ou preuve garantie de performance.

## F. Inventaire exhaustif des tarifs et mentions financières

**TOUS LES MONTANTS CI-DESSOUS SONT ISOLÉS POUR ARBITRAGE HUMAIN. Aucun n’est approuvé pour la future architecture.** Le scan inclut tarifs, licences, maintenance, financements, hypothèses de calcul, résultats ROI et mentions sans montant. Une somme calculée ou un montant légal cité ne devient pas une offre. Les en-têtes HT sont distingués d’une précision HT sur la valeur ; aucune conversion HT/TTC n’est calculée.

Marqueurs cumulables : `TARIF_ACTUEL_POTENTIEL` = observé dans un parcours actif, à arbitrer ; `TARIF_ANCIEN` = lié à une ancienne présentation ; `TARIF_DOUBLON` = répétition du même montant, sans présumer même offre ; `TARIF_INCOHERENT` = contradiction documentaire précise ; `TARIF_A_VERIFIER` = nature, périmètre, taxes, financement ou engagement à confirmer. Tous portent au minimum TARIF_A_VERIFIER. Le marqueur ANCIEN sur une sauvegarde qualifie le support, sans prouver que la valeur a changé.

### F.1. Repères pour l’arbitrage (ne remplacent pas le registre complet)

| Offre / usage | Montants observés | Récurrence / durée | Pages | Marqueurs / réserve |

| --- | --- | --- | --- | --- |

| SHIFT CTRL | 79 € | 1 h 30 ; ponctuel | ateliers ; shift-catalogue / shift-formations | TARIF_ACTUEL_POTENTIEL ; TARIF_A_VERIFIER ; HT/TTC non précisé |

| SHIFT CMD standard / outil | 119 € / 139 € | 2 h 30 ; ponctuel | JS chargé dans ateliers et anciens catalogues | TARIF_ACTUEL_POTENTIEL ; TARIF_A_VERIFIER ; des fiches restent sans prix validé |

| SHIFT ENTER | 399 € | 7 h, 2 × 3 h 30, 4–8 participants | ateliers ; formations-enter ; JS | TARIF_ACTUEL_POTENTIEL ; TARIF_DOUBLON ; TARIF_A_VERIFIER |

| Audits Découverte / Express / Feuille de route | 150 / 390 / 690 € HT | 1 h / 2 h + écrit 48h / demi-journée 3–4h | audit ; ia-et-moi (390) ; secteurs ; outils (690) | TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_A_VERIFIER |

| Outils Starter / Pro / Expert / Tout-en-un | 1 490 / 2 900 / 4 500 / dès 6 990 € HT | Setup ; livraison 7 j / 15 j / 1 mois / devis | outils ; ia-et-moi ; secteurs | TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_A_VERIFIER |

| Licences outils | 590 / 1 190 / 1 790 € par an ; Tout-en-un sur devis | Pro 109 €/mois, Expert 164 €/mois ; support et quotas | outils ; ia-et-moi ; CGV (conditions) | TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_A_VERIFIER ; mensualisation distincte de l’annuel |

| Agents niveaux 1 / 2 / 3 / 4 | 690–990 / 1 900 / 2 900 / 4 500 € HT | Licences 290–490 / 590 / 1 190 / 1 790 €/an ; N3 109 €/mois, N4 164 €/mois | agents ; secteurs | TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_A_VERIFIER |

| Anciens ateliers de co-construction | 390 / 690 / fourchette 390–890 € | Demi-journée / journée / parcours jusqu’à 1 mois | 7 secteurs et CGV | TARIF_ANCIEN ; TARIF_INCOHERENT (renvoi vers nouveau SHIFT) ; TARIF_A_VERIFIER |

| Intégrations signature / acompte / caution / pack | 350 / 250 / 300 / 750 € HT | One-shot ; économie pack annoncée 150 € | outils, l.2135–2151 | TARIF_ANCIEN ; TARIF_A_VERIFIER |

| Connexion optionnelle et maintenance | 150 €/connexion ; 65 €/h HT au-delà du quota | Ponctuel / temps passé | outils l.1524 ; cgv l.446 | TARIF_ANCIEN ; TARIF_A_VERIFIER |

| Anciennes formations | 290–690 ; 390–650 /module ; 790–1 590 € HT ; Expert 1 090–1 590 € | 3–7h ; 3–4h/module ; 7–14h | index (1).html | TARIF_ANCIEN ; TARIF_A_VERIFIER |

| CPF / OPCO et simulateurs | CPF 1 500 € ; montants variables de prise en charge | Hypothèse de financement, pas un droit établi | index (1).html et scripts inline | TARIF_ANCIEN ; TARIF_A_VERIFIER |

| ROI et valeur du temps | 45 / 60 / 50 €/h ; 800 € marge ; 38 720 €/an ; 3 227 €/mois ; autres sorties détaillées ci-dessous | Hypothèses et résultats de simulation | ia-et-moi ; audit ; outils ; agents ; Panorama | TARIF_A_VERIFIER ; ne pas convertir en prix de vente ou garantie de gain |

| CGV frais de recouvrement | 40 € | Montant cité dans une clause ; aucune validation juridique ici | cgv l.389 | TARIF_A_VERIFIER ; ce n’est pas le tarif d’une offre |



### F.2. Blocs HTML : chaque emplacement, offre, contexte et répétition

#### 404.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### agents.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| agents.html:1282 | Les 4 niveaux d'agent IA pour votre activité — Niveau Setup HT Licence/an HT Adapté au cadrage | Setup HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Niveau Setup HT Licence/an HT Adapté au cadrage | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1283 | Les 4 niveaux d'agent IA pour votre activité — Niveau Setup HT Licence/an HT Adapté au cadrage | Licence/an HT | HT explicite | Licence/an HT | Non précisée ; voir bloc/offre F.1 | Niveau Setup HT Licence/an HT Adapté au cadrage | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1292 | Les 4 niveaux d'agent IA pour votre activité — 1 · Agent simple L'Rénov 690 - 990 € 290 - 490 € Insuffisant | 690 - 990 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 1 · Agent simple L'Rénov 690 - 990 € 290 - 490 € Insuffisant | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1293 | Les 4 niveaux d'agent IA pour votre activité — 1 · Agent simple L'Rénov 690 - 990 € 290 - 490 € Insuffisant | 290 - 490 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 1 · Agent simple L'Rénov 690 - 990 € 290 - 490 € Insuffisant | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1298 | Les 4 niveaux d'agent IA pour votre activité — 2 · Agent métier sécurisé 1 900 € 590 € Partiel | 1 900 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 2 · Agent métier sécurisé 1 900 € 590 € Partiel | `secteur-finance-comptabilite.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1299 | Les 4 niveaux d'agent IA pour votre activité — 2 · Agent métier sécurisé 1 900 € 590 € Partiel | 590 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 2 · Agent métier sécurisé 1 900 € 590 € Partiel | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1304 | Les 4 niveaux d'agent IA pour votre activité — 3 · Bras droit IA agence 2 900 € 1 190 € Cible naturelle | 2 900 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 3 · Bras droit IA agence 2 900 € 1 190 € Cible naturelle | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1305 | Les 4 niveaux d'agent IA pour votre activité — 3 · Bras droit IA agence 2 900 € 1 190 € Cible naturelle | 1 190 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 3 · Bras droit IA agence 2 900 € 1 190 € Cible naturelle | `ia-et-moi.html`, `index (1).html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1310 | Les 4 niveaux d'agent IA pour votre activité — 4 · Cockpit agence complet 4 500 € 1 790 € Si projection d'extension | 4 500 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 4 · Cockpit agence complet 4 500 € 1 790 € Si projection d'extension | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1311 | Les 4 niveaux d'agent IA pour votre activité — 4 · Cockpit agence complet 4 500 € 1 790 € Si projection d'extension | 1 790 € | HT : en-tête tableau | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 4 · Cockpit agence complet 4 500 € 1 790 € Si projection d'extension | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1349 | Agent simple L'Rénov — Agent simple L'Rénov Un agent IA construit sur-mesure pour 1 usage métier précis. Livré clé en main. 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | HT explicite | 990 € HT + 290 - 490 €/an de licence L'Rénov | Non précisée ; voir bloc/offre F.1 | Agent simple L'Rénov Un agent IA construit sur-mesure pour 1 usage métier précis. Livré clé en main. 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1350 | Agent simple L'Rénov — 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | 690 - 990 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1351 | Agent simple L'Rénov — 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | + 290 - 490 €/an de licence L'Rénov | Non précisé à cet emplacement | + 290 - 490 €/an de licence L'Rénov | Non précisée ; voir bloc/offre F.1 | 690 - 990 € HT + 290 - 490 €/an de licence L'Rénov | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1358 | Agent simple L'Rénov — Définition Un agent L'Rénov 100% sur-mesure — pas un abonnement à une plateforme générique ni un GPT public . Conception et paramétrage par L'Rénov : rôle, consignes, base de conna | Un agent L'Rénov 100% sur-mesure — pas un abonnement à une plateforme générique ni un GPT public . Conception et paramétrage par L'Rénov : rôle, consignes, base de connaissances, scénarios, garde-fous. Livraison dans un format technique au choix selon l'environnement existant. | Non précisé à cet emplacement | % sur-mesure — pas un abonnement à une plateforme générique ni un GPT public  | Non précisée ; voir bloc/offre F.1 | Définition Un agent L'Rénov 100% sur-mesure — pas un abonnement à une plateforme générique ni un GPT public . Conception et paramétrage par L'Rénov : rôle, consignes, base de connaissances, scénarios, garde-fous. Livraison dans un format technique au choix selon l'environnement existant. Adapté à 1 usage métier circonscrit : rédiger un type de mail, générer un brouillon de document récurrent, répondre à des questions standardisées. 1 agent = 1 mission. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1367 | Agent simple L'Rénov — A · Skill Claude Un Project Claude paramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puissant. | Un Project Claude paramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puissant. | Non précisé à cet emplacement | ramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puiss | Non précisée ; voir bloc/offre F.1 | A · Skill Claude Un Project Claude paramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puissant. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1375 | Agent simple L'Rénov — C · Artefact HTML Une page web autonome avec agent intégré. Aucun abonnement IA requis. Format isolé et indépendant. | Une page web autonome avec agent intégré. Aucun abonnement IA requis. Format isolé et indépendant. | Non précisé à cet emplacement |  agent intégré. Aucun abonnement IA requis. Format isolé et indépendant. | Non précisée ; voir bloc/offre F.1 | C · Artefact HTML Une page web autonome avec agent intégré. Aucun abonnement IA requis. Format isolé et indépendant. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1443 | Agent simple L'Rénov — La licence annuelle (290 - 490 €/an) Droit d'usage de l'agent L'Rénov configuré + ajustement des prompts et règles métier + mises à jour mineures + support d'usage raisonnable. 4h  | La licence annuelle (290 - 490 €/an) | Non précisé à cet emplacement | La licence annuelle (290 - 490 €/an) | 4h | La licence annuelle (290 - 490 €/an) Droit d'usage de l'agent L'Rénov configuré + ajustement des prompts et règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'intervention incluses par an. Garantit le maintien de la cohérence de l'agent avec l'évolution des usages. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1460 | Agent métier sécurisé — Agent métier sécurisé Un agent dédié à 1 chaîne de tâches métier, avec garde-fous RGPD et hébergement EU. 1 900 € HT + 590 €/an de licence L'Rénov | 1 900 € HT + 590 €/an de licence L'Rénov | HT explicite | 1 900 € HT + 590 €/an de licence L'Rénov | Non précisée ; voir bloc/offre F.1 | Agent métier sécurisé Un agent dédié à 1 chaîne de tâches métier, avec garde-fous RGPD et hébergement EU. 1 900 € HT + 590 €/an de licence L'Rénov | `ia-et-moi.html`, `outils.html`, `secteur-finance-comptabilite.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1461 | Agent métier sécurisé — 1 900 € HT + 590 €/an de licence L'Rénov | 1 900 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 1 900 € HT + 590 €/an de licence L'Rénov | `secteur-finance-comptabilite.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1462 | Agent métier sécurisé — 1 900 € HT + 590 €/an de licence L'Rénov | + 590 €/an de licence L'Rénov | Non précisé à cet emplacement | + 590 €/an de licence L'Rénov | Non précisée ; voir bloc/offre F.1 | 1 900 € HT + 590 €/an de licence L'Rénov | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1541 | Agent métier sécurisé — La licence annuelle (590 €/an) Droit d'usage du dispositif + maintien Mistral EU + ajustements prompts/règles métier + 6h d'intervention /an + mises à jour mineures + support. Gara | La licence annuelle (590 €/an) | Non précisé à cet emplacement | La licence annuelle (590 €/an) | 6h | La licence annuelle (590 €/an) Droit d'usage du dispositif + maintien Mistral EU + ajustements prompts/règles métier + 6h d'intervention /an + mises à jour mineures + support. Garantit que l'agent reste aligné avec les usages réels et les évolutions du flux mail. | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1542 | Agent métier sécurisé — La licence annuelle (590 €/an) Droit d'usage du dispositif + maintien Mistral EU + ajustements prompts/règles métier + 6h d'intervention /an + mises à jour mineures + support. Gara | Droit d'usage du dispositif + maintien Mistral EU + ajustements prompts/règles métier + 6h d'intervention /an + mises à jour mineures + support. Garantit que l'agent reste aligné avec les usages réels et les évolutions du flux mail. | Non précisé à cet emplacement | r + 6h d'intervention /an + mises à jour mineures + support. Garantit  | 6h | La licence annuelle (590 €/an) Droit d'usage du dispositif + maintien Mistral EU + ajustements prompts/règles métier + 6h d'intervention /an + mises à jour mineures + support. Garantit que l'agent reste aligné avec les usages réels et les évolutions du flux mail. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1558 | Bras droit IA agence — Bras droit IA agence Assistant Mail sécurisé + Mini-cockpit quotidien partagé en équipe. 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | HT explicite | 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | Non précisée ; voir bloc/offre F.1 | Bras droit IA agence Assistant Mail sécurisé + Mini-cockpit quotidien partagé en équipe. 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | `ia-et-moi.html`, `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1559 | Bras droit IA agence — 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | 2 900 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1560 | Bras droit IA agence — 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | + 1 190 €/an de licence L'Rénov · ou 109 €/mois | Non précisé à cet emplacement | + 1 190 €/an de licence L'Rénov · ou 109 €/mois | Non précisée ; voir bloc/offre F.1 | 2 900 € HT + 1 190 €/an de licence L'Rénov · ou 109 €/mois | `ia-et-moi.html`, `index (1).html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1640 | Bras droit IA agence — La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage + maintien environnement Mistral EU + ajustements prompts/règles métier + 8h d'intervention/an + mises à jour mineure | La licence annuelle (1 190 €/an · ou 109 €/mois) | Non précisé à cet emplacement | La licence annuelle (1 190 €/an · ou 109 €/mois) | 8h | La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage + maintien environnement Mistral EU + ajustements prompts/règles métier + 8h d'intervention/an + mises à jour mineures + support. Maintient le bras droit aligné avec l'évolution de l'activité. Sans licence, le dispositif fonctionne mais se dégrade lentement face aux nouvelles situations. | `ia-et-moi.html`, `index (1).html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1641 | Bras droit IA agence — La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage + maintien environnement Mistral EU + ajustements prompts/règles métier + 8h d'intervention/an + mises à jour mineure | Droit d'usage + maintien environnement Mistral EU + ajustements prompts/règles métier + 8h d'intervention/an + mises à jour mineures + support. Maintient le bras droit aligné avec l'évolution de l'activité. Sans licence, le dispositif fonctionne mais se dégrade lentement face aux nouvelles situations. | Non précisé à cet emplacement | er + 8h d'intervention/an + mises à jour mineures + support. Maintient / n de l'activité. Sans licence, le dispositif fonctionne mais se dégrade le | 8h | La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage + maintien environnement Mistral EU + ajustements prompts/règles métier + 8h d'intervention/an + mises à jour mineures + support. Maintient le bras droit aligné avec l'évolution de l'activité. Sans licence, le dispositif fonctionne mais se dégrade lentement face aux nouvelles situations. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1657 | Cockpit agence complet — Cockpit agence complet Bras droit + cockpit étendu + reporting + alertes IA + vue performance équipe. 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | HT explicite | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | Non précisée ; voir bloc/offre F.1 | Cockpit agence complet Bras droit + cockpit étendu + reporting + alertes IA + vue performance équipe. 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1658 | Cockpit agence complet — 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | 4 500 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1659 | Cockpit agence complet — 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | + 1 790 €/an de licence L'Rénov · ou 164 €/mois | Non précisé à cet emplacement | + 1 790 €/an de licence L'Rénov · ou 164 €/mois | Non précisée ; voir bloc/offre F.1 | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1732 | Cockpit agence complet — La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustements prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + | La licence annuelle (1 790 €/an · ou 164 €/mois) | Non précisé à cet emplacement | La licence annuelle (1 790 €/an · ou 164 €/mois) | 12h | La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustements prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1733 | Cockpit agence complet — La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustements prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + | Droit d'usage du système complet + Mistral EU + ajustements prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | Non précisé à cet emplacement | r + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + sup | 12h | La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustements prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1773 | Combien ce dispositif rapporte dans votre contexte — 💰 Coût horaire estimé 60 €/h | 60 €/h | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 💰 Coût horaire estimé 60 €/h | `outils.html`, `panorama-ia/index.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1776 | Combien ce dispositif rapporte dans votre contexte — 💰 Coût horaire estimé 60 €/h 30 € 150 € | 30 € 150 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 💰 Coût horaire estimé 60 €/h 30 € 150 € | `audit.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1776 | Combien ce dispositif rapporte dans votre contexte — 30 € 150 € | 30 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 30 € 150 € | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1776 | Combien ce dispositif rapporte dans votre contexte — 30 € 150 € | 150 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 30 € 150 € | `audit.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1812 | Combien ce dispositif rapporte dans votre contexte — 19 800 € valeur monétaire annuelle | 19 800 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 19 800 € valeur monétaire annuelle | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1823 | Combien ce dispositif rapporte dans votre contexte — Niveau 1 Agent simple 990 € + 490 €/an + 18 320 € ROI 1re année Amorti en ~ 4 sem. | 990 € + 490 €/an | Non précisé à cet emplacement | 990 € + 490 €/an | Non précisée ; voir bloc/offre F.1 | Niveau 1 Agent simple 990 € + 490 €/an + 18 320 € ROI 1re année Amorti en ~ 4 sem. | `index (1).html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1825 | Combien ce dispositif rapporte dans votre contexte — + 18 320 € ROI 1re année | + 18 320 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 18 320 € ROI 1re année | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1835 | Combien ce dispositif rapporte dans votre contexte — Niveau 2 Agent métier 1 900 € + 590 €/an + 17 310 € ROI 1re année Amorti en ~ 6 sem. | 1 900 € + 590 €/an | Non précisé à cet emplacement | 1 900 € + 590 €/an | Non précisée ; voir bloc/offre F.1 | Niveau 2 Agent métier 1 900 € + 590 €/an + 17 310 € ROI 1re année Amorti en ~ 6 sem. | `ia-et-moi.html`, `outils.html`, `secteur-finance-comptabilite.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1837 | Combien ce dispositif rapporte dans votre contexte — + 17 310 € ROI 1re année | + 17 310 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 17 310 € ROI 1re année | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| agents.html:1847 | Combien ce dispositif rapporte dans votre contexte — Niveau 3 Bras droit 2 900 € + 1 190 €/an + 15 710 € ROI 1re année Amorti en ~ 9 sem. | 2 900 € + 1 190 €/an | Non précisé à cet emplacement | 2 900 € + 1 190 €/an | Non précisée ; voir bloc/offre F.1 | Niveau 3 Bras droit 2 900 € + 1 190 €/an + 15 710 € ROI 1re année Amorti en ~ 9 sem. | `ia-et-moi.html`, `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1849 | Combien ce dispositif rapporte dans votre contexte — + 15 710 € ROI 1re année | + 15 710 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 15 710 € ROI 1re année | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1859 | Combien ce dispositif rapporte dans votre contexte — Niveau 4 Cockpit complet 4 500 € + 1 790 €/an + 13 510 € ROI 1re année Amorti en ~ 14 sem. | 4 500 € + 1 790 €/an | Non précisé à cet emplacement | 4 500 € + 1 790 €/an | Non précisée ; voir bloc/offre F.1 | Niveau 4 Cockpit complet 4 500 € + 1 790 €/an + 13 510 € ROI 1re année Amorti en ~ 14 sem. | `ia-et-moi.html`, `outils.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| agents.html:1861 | Combien ce dispositif rapporte dans votre contexte — + 13 510 € ROI 1re année | + 13 510 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 13 510 € ROI 1re année | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |



#### assistant.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### ateliers.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| ateliers.html:38 | CTRL / Contrôle — CTRL / Contrôle 7 formations transversales pour utiliser vos outils au quotidien. Format commun : 1 h 30 · Tarif public : 79 €. | 7 formations transversales pour utiliser vos outils au quotidien. Format commun : 1 h 30 · Tarif public : 79 €. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 1 h | CTRL / Contrôle 7 formations transversales pour utiliser vos outils au quotidien. Format commun : 1 h 30 · Tarif public : 79 €. | Aucun | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| ateliers.html:49 | ENTER — ENTER IA &amp; Méthodes, Communication &amp; IA, Pilotage &amp; IA : trois parcours pour transformer ses méthodes de travail. 7 h — 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participa | 7 h — 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7 h / 3 h | ENTER IA &amp; Méthodes, Communication &amp; IA, Pilotage &amp; IA : trois parcours pour transformer ses méthodes de travail. 7 h — 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants | `formations-enter.html` | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL ; TARIF_DOUBLON |



#### audit.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| audit.html:1288 | Les 3 paliers d'audit IA pour décider en connaissance — Palier Tarif HT Durée Livrable Déductible 60j | Tarif HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier Tarif HT Durée Livrable Déductible 60j | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1297 | Les 3 paliers d'audit IA pour décider en connaissance — 1 · Découverte 150 € 1 h Analyse orale + 3 priorités Non | 150 € | HT : en-tête tableau | Non indiquée dans ce bloc | 1 h | 1 · Découverte 150 € 1 h Analyse orale + 3 priorités Non | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1304 | Les 3 paliers d'audit IA pour décider en connaissance — 2 · Express 390 € 2 h CR écrit + feuille de route ROI Oui | 390 € | HT : en-tête tableau | Non indiquée dans ce bloc | 2 h | 2 · Express 390 € 2 h CR écrit + feuille de route ROI Oui | `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1311 | Les 3 paliers d'audit IA pour décider en connaissance — 3 · Feuille de route 690 € Demi-journée Plan d'action structuré Oui | 690 € | HT : en-tête tableau | Non indiquée dans ce bloc | Demi-journée | 3 · Feuille de route 690 € Demi-journée Plan d'action structuré Oui | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1347 | Audit Découverte — Audit Découverte 1 heure en visio pour défricher le terrain . Une cartographie orale des usages IA possibles, et 3 priorités identifiées pour ce métier. Le format le plus court — s | 150 € HT paiement à livraison · pas de déductibilité | HT explicite | Non indiquée dans ce bloc | 1 heure | Audit Découverte 1 heure en visio pour défricher le terrain . Une cartographie orale des usages IA possibles, et 3 priorités identifiées pour ce métier. Le format le plus court — sans livrable écrit. 150 € HT paiement à livraison · pas de déductibilité | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1348 | Audit Découverte — 150 € HT paiement à livraison · pas de déductibilité | 150 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 150 € HT paiement à livraison · pas de déductibilité | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1456 | Audit Express — Audit Express 2 heures d'échange + livrable écrit envoyé sous 48h . Compte-rendu structuré, feuille de route avec ROI chiffré. Déductible 60 jours si une mission est engagée à la s | 390 € HT déductible 60j · paiement à livraison | HT explicite | Non indiquée dans ce bloc | 2 heures / 48h / 60 jours | Audit Express 2 heures d'échange + livrable écrit envoyé sous 48h . Compte-rendu structuré, feuille de route avec ROI chiffré. Déductible 60 jours si une mission est engagée à la suite. 390 € HT déductible 60j · paiement à livraison | `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1457 | Audit Express — 390 € HT déductible 60j · paiement à livraison | 390 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 390 € HT déductible 60j · paiement à livraison | `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1467 | Audit Express — Définition Une session de 2h en visio suivie d'un compte-rendu écrit envoyé sous 48h ouvrées . Le format intermédiaire — assez court pour rester accessible, assez documenté pour se | Argument central : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 390 € sont intégralement déduits du devis. L'audit devient alors gratuit. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 2h / 48h / 60 jours | Définition Une session de 2h en visio suivie d'un compte-rendu écrit envoyé sous 48h ouvrées . Le format intermédiaire — assez court pour rester accessible, assez documenté pour servir de base de décision interne. Le livrable contient une feuille de route avec ROI chiffré : pour chaque priorité identifiée, estimation du gain potentiel (temps, qualité, sécurité, opportunités), de la complexité de mise en œuvre, et du palier d'outil L'Rénov qui y répondrait. Argument central : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 390 € sont intégralement déduits du devis. L'audit devient alors gratuit. | `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1567 | Audit Feuille de Route — Audit Feuille de Route Demi-journée immersive : audit en profondeur des process actuels + plan d'action structuré par phases avec ROI quantifié. Déductible 60 jours si une mission  | 690 € HT déductible 60j · acompte 50% | HT explicite | Non indiquée dans ce bloc | Demi-journée / 60 jours | Audit Feuille de Route Demi-journée immersive : audit en profondeur des process actuels + plan d'action structuré par phases avec ROI quantifié. Déductible 60 jours si une mission est engagée à la suite. 690 € HT déductible 60j · acompte 50% | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1568 | Audit Feuille de Route — 690 € HT déductible 60j · acompte 50% | 690 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 690 € HT déductible 60j · acompte 50% | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1578 | Audit Feuille de Route — Définition Le format le plus complet : une demi-journée (3 à 4h) en visio ou présentiel, suivie d'un plan d'action structuré par phases . Adapté aux structures avec une organisatio | Argument central : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 690 € sont intégralement déduits du devis. L'audit devient alors gratuit. | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / 4h / 24 mois / 60 jours | Définition Le format le plus complet : une demi-journée (3 à 4h) en visio ou présentiel, suivie d'un plan d'action structuré par phases . Adapté aux structures avec une organisation déjà process-pée et un historique de données métier exploitable. L'objectif n'est plus seulement d'identifier les priorités — c'est de cadrer un plan d'investissement IA sur 12 à 24 mois, avec phases successives, jalons mesurables, et ROI quantifié par phase. C'est l'audit qui sert de base pour engager un budget significatif. Argument central : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 690 € sont intégralement déduits du devis. L | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1606 | Audit Feuille de Route — 5 Suite ouverte — Le dirigeant dispose du plan. S'il souhaite engager une phase, devis L'Rénov correspondant, avec déduction intégrale des 690 € si signature sous 60 jours. | Suite ouverte — Le dirigeant dispose du plan. S'il souhaite engager une phase, devis L'Rénov correspondant, avec déduction intégrale des 690 € si signature sous 60 jours. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 60 jours | 5 Suite ouverte — Le dirigeant dispose du plan. S'il souhaite engager une phase, devis L'Rénov correspondant, avec déduction intégrale des 690 € si signature sous 60 jours. | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1685 | Combien ce dispositif rapporte dans votre contexte — CA annuel actuel 200 k€ | 200 k€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | CA annuel actuel 200 k€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1688 | Combien ce dispositif rapporte dans votre contexte — CA annuel actuel 200 k€ 50 k€ 2 M€ | 50 k€ 2 M€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | CA annuel actuel 200 k€ 50 k€ 2 M€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1688 | Combien ce dispositif rapporte dans votre contexte — 50 k€ 2 M€ | 50 k€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 50 k€ 2 M€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1688 | Combien ce dispositif rapporte dans votre contexte — 50 k€ 2 M€ | 2 M€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 50 k€ 2 M€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1711 | Combien ce dispositif rapporte dans votre contexte — Décisions stratégiques majeures / an 5 | Décisions stratégiques majeures / an | Non précisé à cet emplacement | stratégiques majeures / an | Non précisée ; voir bloc/offre F.1 | Décisions stratégiques majeures / an 5 | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1721 | Combien ce dispositif rapporte dans votre contexte — ⚠️ Coût d'1 mauvaise décision 10 000 € | 10 000 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | ⚠️ Coût d'1 mauvaise décision 10 000 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1724 | Combien ce dispositif rapporte dans votre contexte — ⚠️ Coût d'1 mauvaise décision 10 000 € 1 k€ 50 k€ | 1 k€ 50 k€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | ⚠️ Coût d'1 mauvaise décision 10 000 € 1 k€ 50 k€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1724 | Combien ce dispositif rapporte dans votre contexte — 1 k€ 50 k€ | 1 k€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 1 k€ 50 k€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1724 | Combien ce dispositif rapporte dans votre contexte — 1 k€ 50 k€ | 50 k€ | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 1 k€ 50 k€ | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1732 | Combien ce dispositif rapporte dans votre contexte — 6 000 € pertes annuelles dues à l'inefficacité | 6 000 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 6 000 € pertes annuelles dues à l'inefficacité | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1737 | Combien ce dispositif rapporte dans votre contexte — 50 000 € risque annuel mauvaises décisions | 50 000 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 50 000 € risque annuel mauvaises décisions | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1742 | Combien ce dispositif rapporte dans votre contexte — 56 000 € valeur potentielle d'un audit éclairant | 56 000 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 56 000 € valeur potentielle d'un audit éclairant | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1753 | Combien ce dispositif rapporte dans votre contexte — Palier 1 Découverte 150 € 55 850 € valeur potentielle nette Coût d'opportunité : &lt; 1 % | 150 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier 1 Découverte 150 € 55 850 € valeur potentielle nette Coût d'opportunité : &lt; 1 % | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1755 | Combien ce dispositif rapporte dans votre contexte — 55 850 € valeur potentielle nette | 55 850 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 55 850 € valeur potentielle nette | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1765 | Combien ce dispositif rapporte dans votre contexte — Palier 2 Express 390 € · déductible 60j 55 610 € valeur potentielle nette Coût d'opportunité : &lt; 1 % | 390 € · déductible 60j | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier 2 Express 390 € · déductible 60j 55 610 € valeur potentielle nette Coût d'opportunité : &lt; 1 % | `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1767 | Combien ce dispositif rapporte dans votre contexte — 55 610 € valeur potentielle nette | 55 610 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 55 610 € valeur potentielle nette | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| audit.html:1777 | Combien ce dispositif rapporte dans votre contexte — Palier 3 Feuille de route 690 € · déductible 60j 55 310 € valeur potentielle nette Coût d'opportunité : ~ 1,2 % | 690 € · déductible 60j | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier 3 Feuille de route 690 € · déductible 60j 55 310 € valeur potentielle nette Coût d'opportunité : ~ 1,2 % | `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| audit.html:1779 | Combien ce dispositif rapporte dans votre contexte — 55 310 € valeur potentielle nette | 55 310 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 55 310 € valeur potentielle nette | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |



#### cgv.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| cgv.html:302 | CGV L'Rénov IA Studio — 1. Champ d'application 2. Prestations proposées 3. Devis &amp; commande 4. Prix &amp; TVA 5. Acomptes 6. Paiement 7. Retard &amp; pénalités 8. Délais &amp; obligations 9. Annulation &amp; report 10. P | 11. Licence outils &amp; limites | Non précisé à cet emplacement | 11. Licence outils &amp; limites | Non précisée ; voir bloc/offre F.1 | 1. Champ d'application 2. Prestations proposées 3. Devis &amp; commande 4. Prix &amp; TVA 5. Acomptes 6. Paiement 7. Retard &amp; pénalités 8. Délais &amp; obligations 9. Annulation &amp; report 10. Propriété intellectuelle 11. Licence outils &amp; limites 12. Données &amp; RGPD 13. Confidentialité 14. Responsabilité 15. Force majeure 16. Litiges &amp; droit applicable | Aucun | TARIF_A_VERIFIER |

| cgv.html:329 | 02 Prestations proposées — Audit IA — diagnostic, cartographie des usages, feuille de route Outils métier sur-mesure — conception, paramétrage et déploiement d'outils IA + automatisations, avec licence annue | Outils métier sur-mesure — conception, paramétrage et déploiement d'outils IA + automatisations, avec licence annuelle | Non précisé à cet emplacement | automatisations, avec licence annuelle | demi-journée / journée | Audit IA — diagnostic, cartographie des usages, feuille de route Outils métier sur-mesure — conception, paramétrage et déploiement d'outils IA + automatisations, avec licence annuelle Agents IA — paramétrage d'agents conversationnels métier avec garde-fous RGPD Ateliers — co-construction d'un système opérationnel sur une demi-journée, journée ou format groupe Formations — sessions individuelles ou intra-entreprise, certifiables Qualiopi, finançables OPCO/CPF via partenaires Intégrations — signature électronique, paiement, caution, en avenant aux outils Pro ou Expert Prestations annexes — plans, cartes NFC, conseil ponctuel | Aucun | TARIF_A_VERIFIER |

| cgv.html:341 | 03 Devis &amp; commande — 03 Devis &amp; commande Toute prestation fait l'objet d'un devis écrit préalable , émis par le Prestataire via la plateforme Pennylane ou sous format équivalent. Le devis détaille le p | Toute prestation fait l'objet d'un devis écrit préalable , émis par le Prestataire via la plateforme Pennylane ou sous format équivalent. Le devis détaille le périmètre, le calendrier prévisionnel, les livrables, le prix HT et les conditions de règlement. | HT explicite | Non indiquée dans ce bloc | 30 jours | 03 Devis &amp; commande Toute prestation fait l'objet d'un devis écrit préalable , émis par le Prestataire via la plateforme Pennylane ou sous format équivalent. Le devis détaille le périmètre, le calendrier prévisionnel, les livrables, le prix HT et les conditions de règlement. Validité du devis : 30 jours calendaires à compter de son émission, sauf mention contraire. La commande est ferme et définitive à compter de : (i) la signature du devis par le Client (signature électronique YouSign ou retour signé par email), et (ii) le versement effectif de l'acompte stipulé. L'absence de l'un de ces deux éléments suspend l'exécution de la prestation. To | Aucun | TARIF_A_VERIFIER |

| cgv.html:351 | 04 Prix &amp; TVA — 04 Prix &amp; TVA Les prix sont exprimés en euros, hors taxes . En application de l'article 293 B du Code général des impôts , L'Rénov IA Studio bénéficie du régime de la franchise en  | Charges tierces : les abonnements et licences techniques nécessaires au fonctionnement des outils (notamment Mistral Pro, Notion, Make, Tally, Stripe, YouSign, et toute API tierce) sont à la charge directe du Client, souscrits à son nom, et payés en sus de la prestation L'Rénov. Ces coûts ne sont jamais refacturés par le Prestataire. | Non précisé à cet emplacement | Charges tierces : les abonnements et licences techniques nécessaires au fonct | Non précisée ; voir bloc/offre F.1 | 04 Prix &amp; TVA Les prix sont exprimés en euros, hors taxes . En application de l'article 293 B du Code général des impôts , L'Rénov IA Studio bénéficie du régime de la franchise en base de TVA. La TVA n'est donc pas applicable aux prestations facturées par le Prestataire. Aucun montant de TVA ne figure sur les devis et les factures émis. Charges tierces : les abonnements et licences techniques nécessaires au fonctionnement des outils (notamment Mistral Pro, Notion, Make, Tally, Stripe, YouSign, et toute API tierce) sont à la charge directe du Client, souscrits à son nom, et payés en sus de la prestation L'Rénov. Ces coûts ne sont jamais refact | Aucun | TARIF_A_VERIFIER |

| cgv.html:381 | 06 Paiement — 06 Paiement Délai de paiement : 30 jours date de facture, sauf mention contraire au devis. Modes de paiement acceptés : virement bancaire (RIB communiqué sur la facture — Crédit Ag | Pour les outils avec licence , la licence annuelle est facturée dès la livraison de l'outil, puis renouvelée chaque année à date anniversaire, sauf dénonciation écrite par l'une des parties au moins 30 jours avant l'échéance. | Non précisé à cet emplacement | Pour les outils avec licence , la licence annuelle est facturée dès la li | 30 jours | 06 Paiement Délai de paiement : 30 jours date de facture, sauf mention contraire au devis. Modes de paiement acceptés : virement bancaire (RIB communiqué sur la facture — Crédit Agricole Aquitaine), prélèvement Stripe pour les acomptes le cas échéant. Les paiements en espèces sont refusés. Les paiements par chèque sont acceptés à titre exceptionnel sur accord préalable du Prestataire. Pour les outils avec licence , la licence annuelle est facturée dès la livraison de l'outil, puis renouvelée chaque année à date anniversaire, sauf dénonciation écrite par l'une des parties au moins 30 jours avant l'échéance. | Aucun | TARIF_A_VERIFIER |

| cgv.html:389 | 07 Retard de paiement &amp; pénalités — L'application de pénalités de retard calculées au taux égal à 3 fois le taux d'intérêt légal en vigueur Une indemnité forfaitaire pour frais de recouvrement de 40 € (art. D.441-5 d | Une indemnité forfaitaire pour frais de recouvrement de 40 € (art. D.441-5 du Code de commerce) | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | L'application de pénalités de retard calculées au taux égal à 3 fois le taux d'intérêt légal en vigueur Une indemnité forfaitaire pour frais de recouvrement de 40 € (art. D.441-5 du Code de commerce) Le remboursement intégral des frais de recouvrement supérieurs à cette indemnité sur justification | Aucun | TARIF_A_VERIFIER |

| cgv.html:392 | 07 Retard de paiement &amp; pénalités — 07 Retard de paiement &amp; pénalités Conformément à l'article L.441-10 du Code de commerce , tout retard de paiement entraîne de plein droit, sans formalité préalable : L'application  | En cas de retard supérieur à 15 jours après mise en demeure restée infructueuse, le Prestataire se réserve le droit de suspendre l'exécution de toute prestation en cours, y compris l'accès à un outil livré sous licence. Le Prestataire pourra également exiger le paiement intégral du solde restant dû. | Non précisé à cet emplacement | à un outil livré sous licence. Le Prestataire pourra également exiger le p | 15 jours | 07 Retard de paiement &amp; pénalités Conformément à l'article L.441-10 du Code de commerce , tout retard de paiement entraîne de plein droit, sans formalité préalable : L'application de pénalités de retard calculées au taux égal à 3 fois le taux d'intérêt légal en vigueur Une indemnité forfaitaire pour frais de recouvrement de 40 € (art. D.441-5 du Code de commerce) Le remboursement intégral des frais de recouvrement supérieurs à cette indemnité sur justification En cas de retard supérieur à 15 jours après mise en demeure restée infructueuse, le Prestataire se réserve le droit de suspendre l'exécution de toute prestation en cours, y compris l'ac | Aucun | TARIF_A_VERIFIER |

| cgv.html:410 | Prestations générales (B2B) — 09 Annulation &amp; report Prestations générales (B2B) En cas d'annulation à l'initiative du Client après signature du devis et versement de l'acompte, l'acompte reste acquis au Presta | En cas d'annulation à l'initiative du Client après signature du devis et versement de l'acompte, l'acompte reste acquis au Prestataire à titre d'indemnité forfaitaire, sans préjudice de la facturation des travaux déjà réalisés au prorata. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 48 heures / 60 jours / 15 jours | 09 Annulation &amp; report Prestations générales (B2B) En cas d'annulation à l'initiative du Client après signature du devis et versement de l'acompte, l'acompte reste acquis au Prestataire à titre d'indemnité forfaitaire, sans préjudice de la facturation des travaux déjà réalisés au prorata. Ateliers &amp; formations Annulation ou report à moins de 48 heures avant la date prévue : 100 % du montant dû , sauf cas de force majeure dûment justifié. Au-delà de 48 heures, un report est possible sur accord du Prestataire, sans frais supplémentaires si la nouvelle date est fixée dans un délai de 60 jours. Annulation par le Prestataire En cas d'annulation pa | Aucun | TARIF_A_VERIFIER |

| cgv.html:429 | 10 Propriété intellectuelle — 10 Propriété intellectuelle L'ensemble des éléments conçus par le Prestataire (méthodologies, prompts, gabarits, scénarios d'automatisation, structures de bases, code, documentatio | Toute reproduction, diffusion, revente, sous-licence ou exploitation commerciale par le Client des méthodes, prompts et gabarits du Prestataire est strictement interdite, sous peine de poursuites au titre du Code de la propriété intellectuelle. | Non précisé à cet emplacement | fusion, revente, sous-licence ou exploitation commerciale par le Client de | Non précisée ; voir bloc/offre F.1 | 10 Propriété intellectuelle L'ensemble des éléments conçus par le Prestataire (méthodologies, prompts, gabarits, scénarios d'automatisation, structures de bases, code, documentation, supports pédagogiques) est et demeure la propriété intellectuelle exclusive du Prestataire jusqu'à paiement intégral du prix de la prestation. Une fois le paiement intégral encaissé : Le Client devient propriétaire de son outil métier (paramétrages, contenu spécifique à son activité, données) Les méthodologies génériques, gabarits réutilisables et savoir-faire du Prestataire restent sa propriété exclusive et peuvent être réutilisés pour d'autres clients Le Client | Aucun | TARIF_A_VERIFIER |

| cgv.html:433 | 11 Licence outils &amp; limites d'usage — 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint.  | 11 Licence outils &amp; limites d'usage | Non précisé à cet emplacement | 11 Licence outils &amp; limites d'usage | 4 h / 8 h / 12 h / 16 h / 60 jours | 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » Heures garanties incluses selon le  | Aucun | TARIF_A_VERIFIER |

| cgv.html:434 | 11 Licence outils &amp; limites d'usage — 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint.  | Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : | Non précisé à cet emplacement | ls métier livrés avec licence annuelle font l'objet de conditions particul / et dans le contrat de licence joint. Sauf stipulation contraire : | 4 h / 8 h / 12 h / 16 h / 60 jours | 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » Heures garanties incluses selon le  | Aucun | TARIF_A_VERIFIER |

| cgv.html:435 | 11 Licence outils &amp; limites d'usage — 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint.  | « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » | Non précisé à cet emplacement | « La licence annuelle inclut l'hébergement fonctionnel, la super / te de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépasse / ructurelles sont hors licence et font l'objet d'un avenant signé. » | 4 h / 8 h / 12 h / 16 h / 60 jours | 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » Heures garanties incluses selon le  | Aucun | TARIF_A_VERIFIER |

| cgv.html:438 | Heures garanties incluses selon le palier — Palier Heures / an Ajustements inclus | Heures / an | Non précisé à cet emplacement | Heures / an | Non précisée ; voir bloc/offre F.1 | Palier Heures / an Ajustements inclus | Aucun | TARIF_A_VERIFIER |

| cgv.html:446 | Heures garanties incluses selon le palier — 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint.  | Au-delà des heures incluses : 65 €/h HT , avenant écrit obligatoire avant intervention. | HT explicite | Non indiquée dans ce bloc | 4 h / 8 h / 12 h / 16 h / 60 jours | 11 Licence outils &amp; limites d'usage Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » Heures garanties incluses selon le  | Aucun | TARIF_A_VERIFIER |

| cgv.html:474 | 14 Responsabilité — 14 Responsabilité Le Prestataire est soumis à une obligation de moyens et non de résultat. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée dans l'exécution de l | En tout état de cause, la responsabilité globale du Prestataire est plafonnée au montant HT effectivement versé par le Client au titre de la prestation à l'origine du litige. | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 14 Responsabilité Le Prestataire est soumis à une obligation de moyens et non de résultat. Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée dans l'exécution de la prestation. Le Prestataire ne saurait être tenu responsable : des décisions prises par le Client sur la base des livrables fournis, des conséquences d'usages non conformes aux préconisations, des dysfonctionnements ou interruptions des outils tiers (Mistral, Make, Notion, Stripe, YouSign, etc.), des contenus générés par IA dans les outils livrés (la validation humaine demeure de la responsabilité du Client). En tout état de cause, la responsabilité globale du Pres | Aucun | TARIF_A_VERIFIER |



#### confidentialite.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### contact.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formation-cpf.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-batiment.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-communication-marketing.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-developpement-commercial.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-enter.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| formations-enter.html:35 | Les parcours ENTER — Les parcours ENTER 7 h · 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants | 7 h · 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7 h / 3 h | Les parcours ENTER 7 h · 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants | `ateliers.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |



#### formations-fafcea.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-finance-assurance.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-formation.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-immobilier.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-pilotage-organisation.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations-services-entreprises.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### formations.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### ia-et-moi.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| ia-et-moi.html:1212 | "L'IA, j'en entends parler. Je ne sais pas par où commencer." — Le bon parcours Diagnostic IA complet → dès 390 € · 2h visio + rapport Déductible si projet sous 60j | dès 390 € · 2h visio + rapport Déductible si projet sous 60j | Non précisé à cet emplacement | Non indiquée dans ce bloc | 2h | Le bon parcours Diagnostic IA complet → dès 390 € · 2h visio + rapport Déductible si projet sous 60j | `audit.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1239 | "J'ai testé ChatGPT, je vois où ça pourrait servir — sans savoir comment structurer." — Si plusieurs services sont concernés : on prend le diagnostic complet pour tout cartographier et chiffrer chaque zone. Si une seule zone est claire dans votre tête : on saute le di | Si vous prenez le diagnostic et qu'on construit derrière, les 390 € sont déduits du devis. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Si plusieurs services sont concernés : on prend le diagnostic complet pour tout cartographier et chiffrer chaque zone. Si une seule zone est claire dans votre tête : on saute le diagnostic et on passe au cadrage 30 min offert , puis devis direct. À la sortie : vous savez quoi construire en premier , à quel palier (Starter / Pro / Expert / Tout-en-un), avec quel budget. Si vous prenez le diagnostic et qu'on construit derrière, les 390 € sont déduits du devis. | `audit.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1280 | "Je sais exactement ce que je veux. Je veux qu'on me le construise." — Direct construction Voir les 4 paliers → de 1 490 € à 6 990 € Cadrage 30 min offert | de 1 490 € à 6 990 € Cadrage 30 min offert | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Direct construction Voir les 4 paliers → de 1 490 € à 6 990 € Cadrage 30 min offert | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1311 | Quatre formats de bras droit IA. — Palier Logique Périmètre Setup HT Licence/an Délai | Setup HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier Logique Périmètre Setup HT Licence/an Délai | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1312 | Quatre formats de bras droit IA. — Palier Logique Périmètre Setup HT Licence/an Délai | Licence/an | Non précisé à cet emplacement | Licence/an | Non précisée ; voir bloc/offre F.1 | Palier Logique Périmètre Setup HT Licence/an Délai | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1324 | Quatre formats de bras droit IA. — Starter Démarrer simple Tester sur une zone métier · valider que ça marche avant d'élargir 1 module métier (au choix) 1 490 € 590 € 7 jours | 1 490 € | HT : en-tête tableau | Non indiquée dans ce bloc | 7 jours | Starter Démarrer simple Tester sur une zone métier · valider que ça marche avant d'élargir 1 module métier (au choix) 1 490 € 590 € 7 jours | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1325 | Quatre formats de bras droit IA. — Starter Démarrer simple Tester sur une zone métier · valider que ça marche avant d'élargir 1 module métier (au choix) 1 490 € 590 € 7 jours | 590 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7 jours | Starter Démarrer simple Tester sur une zone métier · valider que ça marche avant d'élargir 1 module métier (au choix) 1 490 € 590 € 7 jours | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1335 | Quatre formats de bras droit IA. — Pro ★ Populaire Le bon équilibre Couvrir deux zones-clés · le format choisi par la majorité 1 module + 1 au choix 2 900 € 1 190 € 15 jours | 2 900 € | HT : en-tête tableau | Non indiquée dans ce bloc | 15 jours | Pro ★ Populaire Le bon équilibre Couvrir deux zones-clés · le format choisi par la majorité 1 module + 1 au choix 2 900 € 1 190 € 15 jours | `agents.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1336 | Quatre formats de bras droit IA. — Pro ★ Populaire Le bon équilibre Couvrir deux zones-clés · le format choisi par la majorité 1 module + 1 au choix 2 900 € 1 190 € 15 jours | 1 190 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 15 jours | Pro ★ Populaire Le bon équilibre Couvrir deux zones-clés · le format choisi par la majorité 1 module + 1 au choix 2 900 € 1 190 € 15 jours | `agents.html`, `index (1).html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1346 | Quatre formats de bras droit IA. — Expert Avec IA avancée Aller au-delà de l'exécution · piloter avec données et alertes 2 modules + IA avancée (reporting, alertes, dashboards) 4 500 € 1 790 € 1 mois | 4 500 € | HT : en-tête tableau | Non indiquée dans ce bloc | 1 mois | Expert Avec IA avancée Aller au-delà de l'exécution · piloter avec données et alertes 2 modules + IA avancée (reporting, alertes, dashboards) 4 500 € 1 790 € 1 mois | `agents.html`, `outils.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1347 | Quatre formats de bras droit IA. — Expert Avec IA avancée Aller au-delà de l'exécution · piloter avec données et alertes 2 modules + IA avancée (reporting, alertes, dashboards) 4 500 € 1 790 € 1 mois | 1 790 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 1 mois | Expert Avec IA avancée Aller au-delà de l'exécution · piloter avec données et alertes 2 modules + IA avancée (reporting, alertes, dashboards) 4 500 € 1 790 € 1 mois | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1357 | Quatre formats de bras droit IA. — Tout-en-un Pack complet Couvrir l'ensemble de l'activité · automatisations sur mesure 3 modules + IA avancée + automatisations sur mesure dès 6 990 € sur devis sur devis | dès 6 990 € | HT : en-tête tableau | Non indiquée dans ce bloc | sur devis | Tout-en-un Pack complet Couvrir l'ensemble de l'activité · automatisations sur mesure 3 modules + IA avancée + automatisations sur mesure dès 6 990 € sur devis sur devis | `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1409 | Ce que vous perdez aujourd'hui, en chiffres. — Coût horaire moyen équipe 45 €/h | Coût horaire moyen équipe 45 €/h | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Coût horaire moyen équipe 45 €/h | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1411 | Ce que vous perdez aujourd'hui, en chiffres. — Coût horaire moyen équipe 45 €/h | 45 €/h | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Coût horaire moyen équipe 45 €/h | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1417 | Ce que vous perdez aujourd'hui, en chiffres. — Dossiers ratés / mois (manque de réactivité) 2 | Dossiers ratés / mois (manque de réactivité) 2 | Non précisé à cet emplacement | Dossiers ratés / mois (manque de réactivité) 2 | Non précisée ; voir bloc/offre F.1 | Dossiers ratés / mois (manque de réactivité) 2 | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1418 | Ce que vous perdez aujourd'hui, en chiffres. — Dossiers ratés / mois (manque de réactivité) 2 | Dossiers ratés / mois (manque de réactivité) | Non précisé à cet emplacement | Dossiers ratés / mois (manque de réactivité) | Non précisée ; voir bloc/offre F.1 | Dossiers ratés / mois (manque de réactivité) 2 | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1425 | Ce que vous perdez aujourd'hui, en chiffres. — Marge moyenne par dossier 800 € | Marge moyenne par dossier 800 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Marge moyenne par dossier 800 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1427 | Ce que vous perdez aujourd'hui, en chiffres. — Marge moyenne par dossier 800 € | 800 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Marge moyenne par dossier 800 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1437 | Ce que vous perdez aujourd'hui, en chiffres. — Vous perdez environ 38 720 € par an · 3 227 € par mois | 38 720 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Vous perdez environ 38 720 € par an · 3 227 € par mois | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1438 | Ce que vous perdez aujourd'hui, en chiffres. — Vous perdez environ 38 720 € par an · 3 227 € par mois | par an · 3 227 € par mois | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Vous perdez environ 38 720 € par an · 3 227 € par mois | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| ia-et-moi.html:1441 | Ce que vous perdez aujourd'hui, en chiffres. — Vous perdez environ 38 720 € par an · 3 227 € par mois Un assistant IA Pro à 2 900 € se rembourse en ~4 semaines . On en parle ? — Cadrage 30 min offert | Un assistant IA Pro à 2 900 € se rembourse en ~4 semaines . | Non précisé à cet emplacement | Non indiquée dans ce bloc | 4 semaines | Vous perdez environ 38 720 € par an · 3 227 € par mois Un assistant IA Pro à 2 900 € se rembourse en ~4 semaines . On en parle ? — Cadrage 30 min offert | `agents.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1479 | Ce que vous vous posez avant d'engager. — Pourquoi un diagnostic à 390 € si la concurrence en propose à 0 € ? Un audit gratuit a un objectif : vous vendre quelque chose après. Le mien a un objectif : vous donner une vraie  | Pourquoi un diagnostic à 390 € si la concurrence en propose à 0 € ? | Non précisé à cet emplacement | Non indiquée dans ce bloc | 60 jours | Pourquoi un diagnostic à 390 € si la concurrence en propose à 0 € ? Un audit gratuit a un objectif : vous vendre quelque chose après. Le mien a un objectif : vous donner une vraie cartographie écrite, exploitable même sans nous . Les 390 € sont déduits si on construit derrière (sous 60 jours) — donc en pratique, vous ne payez que si vous repartez sans rien faire. Et même là, vous repartez avec un livrable. | `audit.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1484 | Ce que vous vous posez avant d'engager. — Un audit gratuit a un objectif : vous vendre quelque chose après. Le mien a un objectif : vous donner une vraie cartographie écrite, exploitable même sans nous . Les 390 € sont déd | Un audit gratuit a un objectif : vous vendre quelque chose après. Le mien a un objectif : vous donner une vraie cartographie écrite, exploitable même sans nous . Les 390 € sont déduits si on construit derrière (sous 60 jours) — donc en pratique, vous ne payez que si vous repartez sans rien faire. Et même là, vous repartez avec un livrable. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 60 jours | Un audit gratuit a un objectif : vous vendre quelque chose après. Le mien a un objectif : vous donner une vraie cartographie écrite, exploitable même sans nous . Les 390 € sont déduits si on construit derrière (sous 60 jours) — donc en pratique, vous ne payez que si vous repartez sans rien faire. Et même là, vous repartez avec un livrable. | `audit.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1497 | Ce que vous vous posez avant d'engager. — Oui. Le palier Starter existe pour ça : un assistant cadré sur une seule zone métier (par exemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de 1 490 | Oui. Le palier Starter existe pour ça : un assistant cadré sur une seule zone métier (par exemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de 1 490 € HT + 590 €/an de licence. On valide d'abord que ça marche chez vous. On élargit ensuite si vous voulez (passage en Pro ou Expert sans repartir de zéro). | HT explicite |  de 1 490 € HT + 590 €/an de licence. On valide d'abord que ça marche  | 7 jours | Oui. Le palier Starter existe pour ça : un assistant cadré sur une seule zone métier (par exemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de 1 490 € HT + 590 €/an de licence. On valide d'abord que ça marche chez vous. On élargit ensuite si vous voulez (passage en Pro ou Expert sans repartir de zéro). | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| ia-et-moi.html:1536 | Ce que vous vous posez avant d'engager. — La licence annuelle couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). Une séance de prise en main d | La licence annuelle couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). Une séance de prise en main de 3h est incluse à la livraison — vous repartez autonome. Pour aller plus loin (ajouter un module, créer un nouveau cas d'usage), c'est sur devis dédié. | Non précisé à cet emplacement | La licence annuelle couvre les mises à jour, l'hébergement Mis / lution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert | 3h / sur devis | La licence annuelle couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). Une séance de prise en main de 3h est incluse à la livraison — vous repartez autonome. Pour aller plus loin (ajouter un module, créer un nouveau cas d'usage), c'est sur devis dédié. | `agents.html`, `index (1).html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |



#### index (1).html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| index (1).html:1292 | Les 3 parcours de formation IA par L'Rénov — Découvrir. Se spécialiser. Certifier son équipe. Une formation L'Rénov n'est pas un cours théorique sur ce qu'est l'IA. C'est un format pratique, sectorisé, finançable conçu pour f | Toutes les formations L'Rénov sont certifiables Qualiopi et finançables OPCO, AFDAS ou CPF selon le profil de l'apprenant. Tarifs visibles en HT — la prise en charge dépend du statut (salarié, indépendant, dirigeant) et de l'OPCO concerné. | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Découvrir. Se spécialiser. Certifier son équipe. Une formation L'Rénov n'est pas un cours théorique sur ce qu'est l'IA. C'est un format pratique, sectorisé, finançable conçu pour faire entrer l'IA générative dans les usages quotidiens d'un métier précis. Toutes les formations L'Rénov sont certifiables Qualiopi et finançables OPCO, AFDAS ou CPF selon le profil de l'apprenant. Tarifs visibles en HT — la prise en charge dépend du statut (salarié, indépendant, dirigeant) et de l'OPCO concerné. Voici les 3 parcours possibles , du socle universel au parcours certifiant complet. Aucune mention "recommandé" n'est apposée — c'est le cadrage initial qu | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1308 | Les 3 parcours de formation IA par L'Rénov — Parcours Durée Tarif HT Niveau Financement | Tarif HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours Durée Tarif HT Niveau Financement | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1317 | Les 3 parcours de formation IA par L'Rénov — 1 · Initiation socle 3-7 h 290 – 690 € Essentiel OPCO · CPF | 290 – 690 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7 h | 1 · Initiation socle 3-7 h 290 – 690 € Essentiel OPCO · CPF | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1324 | Les 3 parcours de formation IA par L'Rénov — 2 · Spécialisation sectorielle 3-4 h / module 390 – 650 € / module Professionnel · Expert OPCO sectoriel | 390 – 650 € / module | Non précisé à cet emplacement | Non indiquée dans ce bloc | 4 h | 2 · Spécialisation sectorielle 3-4 h / module 390 – 650 € / module Professionnel · Expert OPCO sectoriel | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1331 | Les 3 parcours de formation IA par L'Rénov — 3 · Parcours certifiant 7-14 h 790 – 1 590 € Professionnel · Expert OPCO · CPF (1 500 €) | 790 – 1 590 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 14 h | 3 · Parcours certifiant 7-14 h 790 – 1 590 € Professionnel · Expert OPCO · CPF (1 500 €) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1333 | Les 3 parcours de formation IA par L'Rénov — 3 · Parcours certifiant 7-14 h 790 – 1 590 € Professionnel · Expert OPCO · CPF (1 500 €) | OPCO · CPF (1 500 €) | Non précisé à cet emplacement | Non indiquée dans ce bloc | 14 h | 3 · Parcours certifiant 7-14 h 790 – 1 590 € Professionnel · Expert OPCO · CPF (1 500 €) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1366 | Initiation socle — Initiation socle Le socle universel pour comprendre concrètement ce que l'IA générative peut apporter à un métier. Format court, applicable à tout secteur, sans prérequis technique | 290 – 690 € HT 3 à 7 h · Niveau Essentiel · OPCO · CPF | HT explicite | Non indiquée dans ce bloc | 7 h | Initiation socle Le socle universel pour comprendre concrètement ce que l'IA générative peut apporter à un métier. Format court, applicable à tout secteur, sans prérequis technique. 290 – 690 € HT 3 à 7 h · Niveau Essentiel · OPCO · CPF | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1367 | Initiation socle — 290 – 690 € HT 3 à 7 h · Niveau Essentiel · OPCO · CPF | 290 – 690 € HT | HT explicite | Non indiquée dans ce bloc | 7 h | 290 – 690 € HT 3 à 7 h · Niveau Essentiel · OPCO · CPF | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1384 | Initiation socle — SOC-01 · Découverte de l'IA générative 3 h · 290 € HT · Niveau Essentiel. Bases de l'IA générative, panorama des outils (ChatGPT, Claude, Mistral, etc.), premiers prompts, cas d'us | 3 h · 290 € HT · Niveau Essentiel. Bases de l'IA générative, panorama des outils (ChatGPT, Claude, Mistral, etc.), premiers prompts, cas d'usage par métier. Aucun prérequis technique. | HT explicite | Non indiquée dans ce bloc | 3 h | SOC-01 · Découverte de l'IA générative 3 h · 290 € HT · Niveau Essentiel. Bases de l'IA générative, panorama des outils (ChatGPT, Claude, Mistral, etc.), premiers prompts, cas d'usage par métier. Aucun prérequis technique. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1388 | Initiation socle — SOC-02 · Maîtriser les prompts en pratique 4 h · 390 € HT · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD | 4 h · 390 € HT · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD. Prérequis : SOC-01 ou équivalent. | HT explicite | Non indiquée dans ce bloc | 4 h | SOC-02 · Maîtriser les prompts en pratique 4 h · 390 € HT · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD. Prérequis : SOC-01 ou équivalent. | `audit.html`, `ia-et-moi.html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1392 | Initiation socle — Pack Socle complet (SOC-01 + SOC-02) 7 h · 690 € HT · Niveau Essentiel. Les 2 formations enchaînées sur 2 demi-journées espacées de 7 jours minimum. Format recommandé pour démarrer | 7 h · 690 € HT · Niveau Essentiel. Les 2 formations enchaînées sur 2 demi-journées espacées de 7 jours minimum. Format recommandé pour démarrer sereinement. | HT explicite | Non indiquée dans ce bloc | 7 h / demi-journée / 7 jours | Pack Socle complet (SOC-01 + SOC-02) 7 h · 690 € HT · Niveau Essentiel. Les 2 formations enchaînées sur 2 demi-journées espacées de 7 jours minimum. Format recommandé pour démarrer sereinement. | `audit.html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1460 | Initiation socle — Modalités Format : individuel ou petit groupe (max 6 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO et CPF · Acompte 30 % à la commande · Annulation &lt; 48 | Format : individuel ou petit groupe (max 6 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO et CPF · Acompte 30 % à la commande · Annulation &lt; 48 h = 100 % du montant dû. Tarifs HT — la prise en charge dépend du statut et de l'OPCO. | HT explicite | Non indiquée dans ce bloc | 48 h | Modalités Format : individuel ou petit groupe (max 6 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO et CPF · Acompte 30 % à la commande · Annulation &lt; 48 h = 100 % du montant dû. Tarifs HT — la prise en charge dépend du statut et de l'OPCO. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1476 | Spécialisation sectorielle — Spécialisation sectorielle Modules pratiques par secteur pour aller au-delà du socle universel : usages métier précis, contraintes réglementaires sectorielles, cas concrets du quot | 390 – 650 € HT / module 3-4 h / module · Niveau Professionnel ou Expert · OPCO sectoriel | HT explicite | Non indiquée dans ce bloc | 4 h | Spécialisation sectorielle Modules pratiques par secteur pour aller au-delà du socle universel : usages métier précis, contraintes réglementaires sectorielles, cas concrets du quotidien. 390 – 650 € HT / module 3-4 h / module · Niveau Professionnel ou Expert · OPCO sectoriel | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1477 | Spécialisation sectorielle — 390 – 650 € HT / module 3-4 h / module · Niveau Professionnel ou Expert · OPCO sectoriel | 390 – 650 € HT / module | HT explicite | Non indiquée dans ce bloc | 4 h | 390 – 650 € HT / module 3-4 h / module · Niveau Professionnel ou Expert · OPCO sectoriel | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1494 | Spécialisation sectorielle — Assurance · 8 modules disponibles Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection  | Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €). | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Assurance · 8 modules disponibles Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €). | `agents.html`, `audit.html`, `ia-et-moi.html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1546 | Spécialisation sectorielle — Assurance ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€) Immob | Assurance ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€) | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Assurance ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€) Immobilier Rédaction mandats ALUR · Qualification leads · Communication multi-canale · Veille marché · Réponse objections (tarifs sur demande) BTP/Artisans Devis terrain assisté · Chiffrage automatique · Rédaction CR chantier · Communication client · Suivi administratif Compta/Libéraux Réponses fiscales · Communication mission · Fiches techniques · Veille réglementaire · Synthèses rapports Communication COM-01 Création contenu à grande échelle (790€) · COM-02 Stratégie é | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1550 | Spécialisation sectorielle — Assurance ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€) Immob | Communication COM-01 Création contenu à grande échelle (790€) · COM-02 Stratégie éditoriale (490€) · Posts réseaux sociaux · RGPD contenu · Briefs créatifs | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Assurance ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€) Immobilier Rédaction mandats ALUR · Qualification leads · Communication multi-canale · Veille marché · Réponse objections (tarifs sur demande) BTP/Artisans Devis terrain assisté · Chiffrage automatique · Rédaction CR chantier · Communication client · Suivi administratif Compta/Libéraux Réponses fiscales · Communication mission · Fiches techniques · Veille réglementaire · Synthèses rapports Communication COM-01 Création contenu à grande échelle (790€) · COM-02 Stratégie é | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1589 | Parcours certifiant — Parcours certifiant Le format complet et structuré : 2 modules enchaînés (7-14 h) pour qualifier toute une équipe et accéder aux financements les plus avantageux (CPF, OPCO renforc | 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | HT explicite | Non indiquée dans ce bloc | 14 h | Parcours certifiant Le format complet et structuré : 2 modules enchaînés (7-14 h) pour qualifier toute une équipe et accéder aux financements les plus avantageux (CPF, OPCO renforcé). 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1590 | Parcours certifiant — 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | 790 – 1 590 € HT | HT explicite | Non indiquée dans ce bloc | 14 h | 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1591 | Parcours certifiant — 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | Non précisé à cet emplacement | Non indiquée dans ce bloc | 14 h | 790 – 1 590 € HT 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1599 | Parcours certifiant — Définition Le parcours certifiant complet : 2 modules sectoriels enchaînés sur 2 sessions espacées (généralement 2 × 3h30 ou 2 × 7h selon le niveau). Format conçu pour les structur | Niveau Expert (1 090 – 1 590 €) accessible avec prérequis : SOC-01 + SOC-02 validés + expérience terrain active dans le secteur. Compatible CPF à 1 500 € : permet à un salarié de financer la formation sur son propre compte personnel de formation. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7h | Définition Le parcours certifiant complet : 2 modules sectoriels enchaînés sur 2 sessions espacées (généralement 2 × 3h30 ou 2 × 7h selon le niveau). Format conçu pour les structures qui veulent monter en compétence une équipe entière et accéder aux financements les plus structurants. Niveau Expert (1 090 – 1 590 €) accessible avec prérequis : SOC-01 + SOC-02 validés + expérience terrain active dans le secteur. Compatible CPF à 1 500 € : permet à un salarié de financer la formation sur son propre compte personnel de formation. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1607 | Parcours certifiant — ASS-P1 · Parcours Agent 7 h (2×3h30) · 790 € HT · Niveau Professionnel . Essentiel IA assurance : panorama, communications client, suivi pipeline, premiers cas DDA. OPCO Atlas. | 7 h (2×3h30) · 790 € HT · Niveau Professionnel . Essentiel IA assurance : panorama, communications client, suivi pipeline, premiers cas DDA. OPCO Atlas. | HT explicite | Non indiquée dans ce bloc | 7 h | ASS-P1 · Parcours Agent 7 h (2×3h30) · 790 € HT · Niveau Professionnel . Essentiel IA assurance : panorama, communications client, suivi pipeline, premiers cas DDA. OPCO Atlas. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1611 | Parcours certifiant — ASS-P2 · Parcours Manager 7 h (2×3h30) · 1 090 € HT · Niveau Expert . IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SO | 7 h (2×3h30) · 1 090 € HT · Niveau Expert . IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SOC-01/02 + expérience. OPCO Atlas. | HT explicite | Non indiquée dans ce bloc | 7 h | ASS-P2 · Parcours Manager 7 h (2×3h30) · 1 090 € HT · Niveau Expert . IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SOC-01/02 + expérience. OPCO Atlas. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1615 | Parcours certifiant — Parcours Expert sectoriel · 14 h 14 h · 1 590 € HT · Niveau Expert . Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation co | 14 h · 1 590 € HT · Niveau Expert . Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation complexes, accompagnement post-formation. Compatible CPF. | HT explicite | Non indiquée dans ce bloc | 14 h | Parcours Expert sectoriel · 14 h 14 h · 1 590 € HT · Niveau Expert . Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation complexes, accompagnement post-formation. Compatible CPF. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1638 | Parcours certifiant — Certificat de réussite officiel · valeur reconnue Compatible CPF (1 500 € de prise en charge possible) Format groupe : monte en compétence toute l'équipe Accompagnement post-format | Compatible CPF (1 500 € de prise en charge possible) | Non précisé à cet emplacement | Non indiquée dans ce bloc | 1 mois | Certificat de réussite officiel · valeur reconnue Compatible CPF (1 500 € de prise en charge possible) Format groupe : monte en compétence toute l'équipe Accompagnement post-formation 1 mois inclus Inter-sessions = vraie appropriation entre les modules | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1660 | Parcours certifiant — Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) Immobilier Parcours ALUR co | Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7h / 14h | Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) Immobilier Parcours ALUR conforme · Parcours Agent immobilier IA · Parcours Manager agence (tarifs Ava Formation, communiqués au cadrage) BTP/Artisans Parcours Dirigeant TPE BTP · Parcours Conducteur de travaux · Parcours Pilotage chantier IA (tarifs sur demande selon OPCO) Compta/Libéraux Parcours Expert-comptable IA · Parcours Collaborateur cabinet · Parcours Manager cabinet (tarifs sur demande selon OPCO) Communication COM-01 Création contenu à grande échelle (790€ · 7h · Pro) · Parcours M | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1664 | Parcours certifiant — Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) Immobilier Parcours ALUR co | Communication COM-01 Création contenu à grande échelle (790€ · 7h · Pro) · Parcours Manager éditorial · Parcours Expert IA générative communication | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7h / 14h | Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) Immobilier Parcours ALUR conforme · Parcours Agent immobilier IA · Parcours Manager agence (tarifs Ava Formation, communiqués au cadrage) BTP/Artisans Parcours Dirigeant TPE BTP · Parcours Conducteur de travaux · Parcours Pilotage chantier IA (tarifs sur demande selon OPCO) Compta/Libéraux Parcours Expert-comptable IA · Parcours Collaborateur cabinet · Parcours Manager cabinet (tarifs sur demande selon OPCO) Communication COM-01 Création contenu à grande échelle (790€ · 7h · Pro) · Parcours M | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1687 | Parcours certifiant — Modalités Format : groupe (3-10 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO renforcé et CPF (1 500 €) · Acompte 30 % à la commande · Annulation &lt; 48 h | Format : groupe (3-10 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO renforcé et CPF (1 500 €) · Acompte 30 % à la commande · Annulation &lt; 48 h = 100 % du montant dû. Accompagnement post-formation 1 mois inclus . Montage du dossier de financement accompagné par L'Rénov. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 48 h / 1 mois | Modalités Format : groupe (3-10 personnes) · Présentiel ou visio · Certifiable Qualiopi · Finançable OPCO renforcé et CPF (1 500 €) · Acompte 30 % à la commande · Annulation &lt; 48 h = 100 % du montant dû. Accompagnement post-formation 1 mois inclus . Montage du dossier de financement accompagné par L'Rénov. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1718 | Combien vous payez réellement après prise en charge — Tarif HT estimé / personne 790 € | Tarif HT estimé / personne | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Tarif HT estimé / personne 790 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1719 | Combien vous payez réellement après prise en charge — Tarif HT estimé / personne 790 € | 790 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Tarif HT estimé / personne 790 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1722 | Combien vous payez réellement après prise en charge — Tarif HT estimé / personne 790 € 290 € 1 590 € | 290 € 1 590 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Tarif HT estimé / personne 790 € 290 € 1 590 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1722 | Combien vous payez réellement après prise en charge — 290 € 1 590 € | 290 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 290 € 1 590 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1722 | Combien vous payez réellement après prise en charge — 290 € 1 590 € | 1 590 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 290 € 1 590 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1757 | Combien vous payez réellement après prise en charge — 790 € coût brut HT total | 790 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 790 € coût brut HT total | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1758 | Combien vous payez réellement après prise en charge — 790 € coût brut HT total | coût brut HT total | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 790 € coût brut HT total | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1762 | Combien vous payez réellement après prise en charge — 553 € prise en charge estimée | 553 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 553 € prise en charge estimée | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1767 | Combien vous payez réellement après prise en charge — 237 € reste à charge réel | 237 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 237 € reste à charge réel | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1778 | Combien vous payez réellement après prise en charge — Parcours 1 Initiation socle 290 – 690 € HT 207 € reste à charge moy. Sur tarif moyen 690 € | 290 – 690 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 1 Initiation socle 290 – 690 € HT 207 € reste à charge moy. Sur tarif moyen 690 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1780 | Combien vous payez réellement après prise en charge — 207 € reste à charge moy. | 207 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 207 € reste à charge moy. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1783 | Combien vous payez réellement après prise en charge — Parcours 1 Initiation socle 290 – 690 € HT 207 € reste à charge moy. Sur tarif moyen 690 € | Sur tarif moyen 690 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 1 Initiation socle 290 – 690 € HT 207 € reste à charge moy. Sur tarif moyen 690 € | `audit.html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1790 | Combien vous payez réellement après prise en charge — Parcours 2 Spécialisation 390 – 650 € / module 156 € reste à charge / module Sur tarif moyen 520 € | 390 – 650 € / module | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 2 Spécialisation 390 – 650 € / module 156 € reste à charge / module Sur tarif moyen 520 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1792 | Combien vous payez réellement après prise en charge — 156 € reste à charge / module | 156 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 156 € reste à charge / module | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1795 | Combien vous payez réellement après prise en charge — Parcours 2 Spécialisation 390 – 650 € / module 156 € reste à charge / module Sur tarif moyen 520 € | Sur tarif moyen 520 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 2 Spécialisation 390 – 650 € / module 156 € reste à charge / module Sur tarif moyen 520 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1802 | Combien vous payez réellement après prise en charge — Parcours 3 Certifiant 790 – 1 590 € HT 357 € reste à charge moy. Sur tarif moyen 1 190 € | 790 – 1 590 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 3 Certifiant 790 – 1 590 € HT 357 € reste à charge moy. Sur tarif moyen 1 190 € | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1804 | Combien vous payez réellement après prise en charge — 357 € reste à charge moy. | 357 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 357 € reste à charge moy. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| index (1).html:1807 | Combien vous payez réellement après prise en charge — Parcours 3 Certifiant 790 – 1 590 € HT 357 € reste à charge moy. Sur tarif moyen 1 190 € | Sur tarif moyen 1 190 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Parcours 3 Certifiant 790 – 1 590 € HT 357 € reste à charge moy. Sur tarif moyen 1 190 € | `agents.html`, `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| index (1).html:1814 | Combien vous payez réellement après prise en charge — Calculateur de financement OPCO / CPF Combien vous payez réellement après prise en charge Ajustez les curseurs selon votre situation. Le calcul estime votre reste à charge réel sel | Particularité de la prise en charge formation : le montant affiché est une estimation basée sur les taux moyens constatés. Le taux réel dépend de votre OPCO, de votre statut (salarié, indépendant, dirigeant), et de votre solde CPF (pour les particuliers). L'Rénov accompagne le montage du dossier de financement gratuitement — c'est inclus dans le cadrage. Les financements possibles : OPCO (Atlas, AFDAS, OPCO EP, etc.), CPF (1 500 € max pour les formations éligibles), FIF-PL pour les indépendants. | Non précisé à cet emplacement | Non indiquée dans ce bloc | 7 h / 3 h / 14 h | Calculateur de financement OPCO / CPF Combien vous payez réellement après prise en charge Ajustez les curseurs selon votre situation. Le calcul estime votre reste à charge réel selon le type de financement et le taux de prise en charge. Pas un calcul officiel — pour la décision finale, le montage est validé avec votre OPCO et L'Rénov. Durée formation visée 7 h 3 h 14 h Tarif HT estimé / personne 790 € 290 € 1 590 € Personnes à former 1 1 10 Type de financement OPCO standard Aucun CPF Taux de prise en charge 70 % 0% 100% 790 € coût brut HT total − 553 € prise en charge estimée = 237 € reste à charge réel Confrontation avec les 3 parcours Forma | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |



#### index.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### mentions-legales.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| mentions-legales.html:371 | 05 Crédits — 05 Crédits Conception, rédaction, design et développement : Laurence Borras — L'Rénov IA Studio . Polices utilisées : Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font  | Polices utilisées : Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font License). | Non précisé à cet emplacement | M Sans (Google Fonts, licence Open Font License). | Non précisée ; voir bloc/offre F.1 | 05 Crédits Conception, rédaction, design et développement : Laurence Borras — L'Rénov IA Studio . Polices utilisées : Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font License). Certaines illustrations ou photographies d'illustration sectorielle proviennent de banques d'images sous licence (Unsplash, Pexels). Le crédit individuel est mentionné lorsqu'il est exigé par la licence. | Aucun | TARIF_A_VERIFIER |

| mentions-legales.html:372 | 05 Crédits — 05 Crédits Conception, rédaction, design et développement : Laurence Borras — L'Rénov IA Studio . Polices utilisées : Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font  | Certaines illustrations ou photographies d'illustration sectorielle proviennent de banques d'images sous licence (Unsplash, Pexels). Le crédit individuel est mentionné lorsqu'il est exigé par la licence. | Non précisé à cet emplacement | banques d'images sous licence (Unsplash, Pexels). Le crédit individuel est / u'il est exigé par la licence. | Non précisée ; voir bloc/offre F.1 | 05 Crédits Conception, rédaction, design et développement : Laurence Borras — L'Rénov IA Studio . Polices utilisées : Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font License). Certaines illustrations ou photographies d'illustration sectorielle proviennent de banques d'images sous licence (Unsplash, Pexels). Le crédit individuel est mentionné lorsqu'il est exigé par la licence. | Aucun | TARIF_A_VERIFIER |



#### outils.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| outils.html:1435 | Les 4 paliers d'outil métier construit sur mesure — Palier Setup HT Licence/an HT Livraison | Setup HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Palier Setup HT Licence/an HT Livraison | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1436 | Les 4 paliers d'outil métier construit sur mesure — Palier Setup HT Licence/an HT Livraison | Licence/an HT | HT explicite | Licence/an HT | Non précisée ; voir bloc/offre F.1 | Palier Setup HT Licence/an HT Livraison | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1443 | Les 4 paliers d'outil métier construit sur mesure — 1 · Outil Starter 1 490 € 590 € 7 jours | 1 490 € | HT : en-tête tableau | Non indiquée dans ce bloc | 7 jours | 1 · Outil Starter 1 490 € 590 € 7 jours | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1444 | Les 4 paliers d'outil métier construit sur mesure — 1 · Outil Starter 1 490 € 590 € 7 jours | 590 € | HT : en-tête tableau | Non indiquée dans ce bloc | 7 jours | 1 · Outil Starter 1 490 € 590 € 7 jours | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1449 | Les 4 paliers d'outil métier construit sur mesure — 2 · Outil Pro 2 900 € 1 190 € 15 jours | 2 900 € | HT : en-tête tableau | Non indiquée dans ce bloc | 15 jours | 2 · Outil Pro 2 900 € 1 190 € 15 jours | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1450 | Les 4 paliers d'outil métier construit sur mesure — 2 · Outil Pro 2 900 € 1 190 € 15 jours | 1 190 € | HT : en-tête tableau | Non indiquée dans ce bloc | 15 jours | 2 · Outil Pro 2 900 € 1 190 € 15 jours | `agents.html`, `ia-et-moi.html`, `index (1).html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1455 | Les 4 paliers d'outil métier construit sur mesure — 3 · Outil Expert 4 500 € 1 790 € 1 mois | 4 500 € | HT : en-tête tableau | Non indiquée dans ce bloc | 1 mois | 3 · Outil Expert 4 500 € 1 790 € 1 mois | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1456 | Les 4 paliers d'outil métier construit sur mesure — 3 · Outil Expert 4 500 € 1 790 € 1 mois | 1 790 € | HT : en-tête tableau | Non indiquée dans ce bloc | 1 mois | 3 · Outil Expert 4 500 € 1 790 € 1 mois | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1461 | Les 4 paliers d'outil métier construit sur mesure — 4 · Outil Tout-en-un dès 6 990 € sur devis sur devis | dès 6 990 € | HT : en-tête tableau | Non indiquée dans ce bloc | sur devis | 4 · Outil Tout-en-un dès 6 990 € sur devis sur devis | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1500 | Outil Starter — Outil Starter Un outil métier autour de 1 module métier prioritaire , livré clé en main. Le ticket d'entrée pour structurer un premier flux opérationnel. 1 490 € HT + 590 €/an de l | 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | HT explicite | 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | 7 jours | Outil Starter Un outil métier autour de 1 module métier prioritaire , livré clé en main. Le ticket d'entrée pour structurer un premier flux opérationnel. 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1501 | Outil Starter — 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | 1 490 € HT | HT explicite | Non indiquée dans ce bloc | 7 jours | 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1502 | Outil Starter — 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | + 590 €/an de licence L'Rénov · livraison 7 jours | Non précisé à cet emplacement | + 590 €/an de licence L'Rénov · livraison 7 jours | 7 jours | 1 490 € HT + 590 €/an de licence L'Rénov · livraison 7 jours | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1524 | Outil Starter — ⚡ Workflow Non inclus (option +150 €/connexion) | Non inclus (option +150 €/connexion) | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | ⚡ Workflow Non inclus (option +150 €/connexion) | `agents.html`, `audit.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1562 | Outil Starter — Ticket d'entrée maîtrisé · ROI rapide sur 1 flux Structuration de données + interface dédiée incluses Validation de l'approche L'Rénov avant d'investir plus 4h d'intervention annue | 4h d'intervention annuelles incluses dans la licence | Non précisé à cet emplacement | 4h d'intervention annuelles incluses dans la licence | 4h | Ticket d'entrée maîtrisé · ROI rapide sur 1 flux Structuration de données + interface dédiée incluses Validation de l'approche L'Rénov avant d'investir plus 4h d'intervention annuelles incluses dans la licence Possibilité d'évoluer vers Pro ou Expert plus tard | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1605 | Outil Starter — La licence annuelle (590 €/an) Droit d'usage de l'outil L'Rénov configuré + ajustement du module et des règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'in | La licence annuelle (590 €/an) | Non précisé à cet emplacement | La licence annuelle (590 €/an) | 4h | La licence annuelle (590 €/an) Droit d'usage de l'outil L'Rénov configuré + ajustement du module et des règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'intervention incluses par an + 2 ajustements mineurs . Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1606 | Outil Starter — La licence annuelle (590 €/an) Droit d'usage de l'outil L'Rénov configuré + ajustement du module et des règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'in | Droit d'usage de l'outil L'Rénov configuré + ajustement du module et des règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'intervention incluses par an + 2 ajustements mineurs . Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | Non précisé à cet emplacement | tes : 50 000 tokens IA/mois · 10 000 opérations/mois. | 4h | La licence annuelle (590 €/an) Droit d'usage de l'outil L'Rénov configuré + ajustement du module et des règles métier + mises à jour mineures + support d'usage raisonnable. 4h d'intervention incluses par an + 2 ajustements mineurs . Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1622 | Outil Pro — Outil Pro Un outil métier sur 2 modules au choix . Le palier le plus souple — le client décide de son deuxième module en fonction de ses priorités opérationnelles. 2 900 € HT + 1 1 | 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | HT explicite | 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | 15 jours | Outil Pro Un outil métier sur 2 modules au choix . Le palier le plus souple — le client décide de son deuxième module en fonction de ses priorités opérationnelles. 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | `agents.html`, `ia-et-moi.html`, `index (1).html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1623 | Outil Pro — 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | 2 900 € HT | HT explicite | Non indiquée dans ce bloc | 15 jours | 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1624 | Outil Pro — 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | + 1 190 €/an de licence L'Rénov · livraison 15 jours | Non précisé à cet emplacement | + 1 190 €/an de licence L'Rénov · livraison 15 jours | 15 jours | 2 900 € HT + 1 190 €/an de licence L'Rénov · livraison 15 jours | `agents.html`, `ia-et-moi.html`, `index (1).html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1727 | Outil Pro — La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage de l'outil L'Rénov 2 modules + ajustements croisés + mises à jour + support. 8h d'intervention incluses par an + 3 aj | La licence annuelle (1 190 €/an · ou 109 €/mois) | Non précisé à cet emplacement | La licence annuelle (1 190 €/an · ou 109 €/mois) | 8h | La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage de l'outil L'Rénov 2 modules + ajustements croisés + mises à jour + support. 8h d'intervention incluses par an + 3 ajustements mineurs . Mensualisation possible (+10%). Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | `agents.html`, `ia-et-moi.html`, `index (1).html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1728 | Outil Pro — La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage de l'outil L'Rénov 2 modules + ajustements croisés + mises à jour + support. 8h d'intervention incluses par an + 3 aj | Droit d'usage de l'outil L'Rénov 2 modules + ajustements croisés + mises à jour + support. 8h d'intervention incluses par an + 3 ajustements mineurs . Mensualisation possible (+10%). Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | Non précisé à cet emplacement | tes : 50 000 tokens IA/mois · 10 000 opérations/mois. | 8h | La licence annuelle (1 190 €/an · ou 109 €/mois) Droit d'usage de l'outil L'Rénov 2 modules + ajustements croisés + mises à jour + support. 8h d'intervention incluses par an + 3 ajustements mineurs . Mensualisation possible (+10%). Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1744 | Outil Expert — Outil Expert Un outil métier sur 2 modules + couche analytique avancée : analyses transversales, alertes intelligentes, reporting structuré. Pour ceux qui veulent que l'outil ne se | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | HT explicite | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livrais | 1 mois | Outil Expert Un outil métier sur 2 modules + couche analytique avancée : analyses transversales, alertes intelligentes, reporting structuré. Pour ceux qui veulent que l'outil ne se contente plus de traiter, mais éclaire la décision. 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1745 | Outil Expert — 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | 4 500 € HT | HT explicite | Non indiquée dans ce bloc | 1 mois | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1746 | Outil Expert — 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | Non précisé à cet emplacement | + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | 1 mois | 4 500 € HT + 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1807 | Outil Expert — Bascule d'un outil opérationnel à un système de pilotage Les 4 briques techniques assemblées (structure + workflow + app + IA) Alertes proactives — évite les oublis coûteux Mistral | 12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 €/mois | Non précisé à cet emplacement | 12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 /  €/mois | 12h | Bascule d'un outil opérationnel à un système de pilotage Les 4 briques techniques assemblées (structure + workflow + app + IA) Alertes proactives — évite les oublis coûteux Mistral EU inclus par défaut · cadre RGPD renforcé 12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 €/mois | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1849 | Outil Expert — La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustement des prompts/règles métier + 12h d'intervention/an + 5 ajustements mineur | La licence annuelle (1 790 €/an · ou 164 €/mois) | Non précisé à cet emplacement | La licence annuelle (1 790 €/an · ou 164 €/mois) | 12h | La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustement des prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1850 | Outil Expert — La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustement des prompts/règles métier + 12h d'intervention/an + 5 ajustements mineur | Droit d'usage du système complet + Mistral EU + ajustement des prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | Non précisé à cet emplacement | r + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + sup | 12h | La licence annuelle (1 790 €/an · ou 164 €/mois) Droit d'usage du système complet + Mistral EU + ajustement des prompts/règles métier + 12h d'intervention/an + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1866 | Outil Tout-en-un — Outil Tout-en-un Le système complet : 3 modules métier + couche analytique + automatisations externes sur mesure . Pour les structures qui veulent un dispositif unique pour orchest | dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | HT explicite | dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage  | sur devis | Outil Tout-en-un Le système complet : 3 modules métier + couche analytique + automatisations externes sur mesure . Pour les structures qui veulent un dispositif unique pour orchestrer l'ensemble de leur activité. dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1867 | Outil Tout-en-un — dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | dès 6 990 € HT | HT explicite | Non indiquée dans ce bloc | sur devis | dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1868 | Outil Tout-en-un — dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | Non précisé à cet emplacement | + licence/an sur devis · livraison sur devis (cadrage app | sur devis | dès 6 990 € HT + licence/an sur devis · livraison sur devis (cadrage approfondi requis) | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1911 | Outil Tout-en-un — 1 Audit Feuille de Route (demi-journée immersive · 690 € · déductible) — Cartographie des flux actuels, identification des automatisations à construire, scope des connexions extern | Audit Feuille de Route (demi-journée immersive · 690 € · déductible) — Cartographie des flux actuels, identification des automatisations à construire, scope des connexions externes. | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée | 1 Audit Feuille de Route (demi-journée immersive · 690 € · déductible) — Cartographie des flux actuels, identification des automatisations à construire, scope des connexions externes. | `audit.html`, `index (1).html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:1929 | Outil Tout-en-un — Système unique pour orchestrer toute l'activité Les 4 briques au maximum + 3 modules + connexions externes Cockpit dirigeant consolidé en temps réel 16h d'intervention/an · 8 ajust | 16h d'intervention/an · 8 ajustements mineurs · support prioritaire | Non précisé à cet emplacement | 16h d'intervention/an · 8 ajustements mineurs · support prioritair | 16h | Système unique pour orchestrer toute l'activité Les 4 briques au maximum + 3 modules + connexions externes Cockpit dirigeant consolidé en temps réel 16h d'intervention/an · 8 ajustements mineurs · support prioritaire Économies d'échelle vs achat séparé des 3 paliers | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1972 | Outil Tout-en-un — La licence annuelle (sur devis) Droit d'usage du système complet + Mistral EU + maintenance des 3 modules + couche analytique + automatisations externes + 16h d'intervention/an + 8 | La licence annuelle (sur devis) | Non précisé à cet emplacement | La licence annuelle (sur devis) | sur devis / 16h | La licence annuelle (sur devis) Droit d'usage du système complet + Mistral EU + maintenance des 3 modules + couche analytique + automatisations externes + 16h d'intervention/an + 8 ajustements mineurs + support prioritaire + mises à jour. Tarif licence variable selon scope final (nombre de connexions, volume utilisateurs, complexité automatisations). | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:1973 | Outil Tout-en-un — La licence annuelle (sur devis) Droit d'usage du système complet + Mistral EU + maintenance des 3 modules + couche analytique + automatisations externes + 16h d'intervention/an + 8 | Droit d'usage du système complet + Mistral EU + maintenance des 3 modules + couche analytique + automatisations externes + 16h d'intervention/an + 8 ajustements mineurs + support prioritaire + mises à jour. Tarif licence variable selon scope final (nombre de connexions, volume utilisateurs, complexité automatisations). | Non précisé à cet emplacement | s + 16h d'intervention/an + 8 ajustements mineurs + support prioritair / + mises à jour. Tarif licence variable selon scope final (nombre de connex | sur devis / 16h | La licence annuelle (sur devis) Droit d'usage du système complet + Mistral EU + maintenance des 3 modules + couche analytique + automatisations externes + 16h d'intervention/an + 8 ajustements mineurs + support prioritaire + mises à jour. Tarif licence variable selon scope final (nombre de connexions, volume utilisateurs, complexité automatisations). | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2013 | Combien ce dispositif rapporte dans votre contexte — 💰 Coût horaire estimé 60 €/h | 60 €/h | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 💰 Coût horaire estimé 60 €/h | `agents.html`, `panorama-ia/index.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2016 | Combien ce dispositif rapporte dans votre contexte — 💰 Coût horaire estimé 60 €/h 30 € 150 € | 30 € 150 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 💰 Coût horaire estimé 60 €/h 30 € 150 € | `agents.html`, `audit.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2016 | Combien ce dispositif rapporte dans votre contexte — 30 € 150 € | 30 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 30 € 150 € | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2016 | Combien ce dispositif rapporte dans votre contexte — 30 € 150 € | 150 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 30 € 150 € | `agents.html`, `audit.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2052 | Combien ce dispositif rapporte dans votre contexte — 19 800 € valeur monétaire annuelle | 19 800 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | 19 800 € valeur monétaire annuelle | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2063 | Combien ce dispositif rapporte dans votre contexte — Palier 1 Starter 1 490 € + 590 €/an + 17 720 € ROI 1re année Amorti en ~ 6 sem. | 1 490 € + 590 €/an | Non précisé à cet emplacement | 1 490 € + 590 €/an | Non précisée ; voir bloc/offre F.1 | Palier 1 Starter 1 490 € + 590 €/an + 17 720 € ROI 1re année Amorti en ~ 6 sem. | `agents.html`, `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2065 | Combien ce dispositif rapporte dans votre contexte — + 17 720 € ROI 1re année | + 17 720 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 17 720 € ROI 1re année | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2075 | Combien ce dispositif rapporte dans votre contexte — Palier 2 Pro 2 900 € + 1 190 €/an + 15 710 € ROI 1re année Amorti en ~ 9 sem. | 2 900 € + 1 190 €/an | Non précisé à cet emplacement | 2 900 € + 1 190 €/an | Non précisée ; voir bloc/offre F.1 | Palier 2 Pro 2 900 € + 1 190 €/an + 15 710 € ROI 1re année Amorti en ~ 9 sem. | `agents.html`, `ia-et-moi.html`, `index (1).html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2077 | Combien ce dispositif rapporte dans votre contexte — + 15 710 € ROI 1re année | + 15 710 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 15 710 € ROI 1re année | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2087 | Combien ce dispositif rapporte dans votre contexte — Palier 3 Expert 4 500 € + 1 790 €/an + 13 510 € ROI 1re année Amorti en ~ 14 sem. | 4 500 € + 1 790 €/an | Non précisé à cet emplacement | 4 500 € + 1 790 €/an | Non précisée ; voir bloc/offre F.1 | Palier 3 Expert 4 500 € + 1 790 €/an + 13 510 € ROI 1re année Amorti en ~ 14 sem. | `agents.html`, `ia-et-moi.html`, `secteur-assurance.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2089 | Combien ce dispositif rapporte dans votre contexte — + 13 510 € ROI 1re année | + 13 510 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 13 510 € ROI 1re année | `agents.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2099 | Combien ce dispositif rapporte dans votre contexte — Palier 4 Tout-en-un dès 6 990 € + licence sur devis + 10 510 € ROI 1re année Amorti en ~ 22 sem. | dès 6 990 € + licence sur devis | Non précisé à cet emplacement | dès 6 990 € + licence sur devis | sur devis | Palier 4 Tout-en-un dès 6 990 € + licence sur devis + 10 510 € ROI 1re année Amorti en ~ 22 sem. | `ia-et-moi.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2101 | Combien ce dispositif rapporte dans votre contexte — + 10 510 € ROI 1re année | + 10 510 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | + 10 510 € ROI 1re année | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2128 | Intégrations signature &amp; paiement — Options à ajouter au scope Intégrations signature &amp; paiement Ces intégrations s'ajoutent en avenant sur un Outil Pro, Expert ou Tout-en-un — pas sur un Starter. Format one-shot (se | Ces intégrations s'ajoutent en avenant sur un Outil Pro, Expert ou Tout-en-un — pas sur un Starter. Format one-shot (setup unique, pas de licence). Usage B2B exclusivement — non applicable aux contrats consommateurs particuliers soumis au droit de rétractation (art. L.221-18 Code conso). | Non précisé à cet emplacement | (setup unique, pas de licence). Usage B2B exclusivement — non applicable a | Non précisée ; voir bloc/offre F.1 | Options à ajouter au scope Intégrations signature &amp; paiement Ces intégrations s'ajoutent en avenant sur un Outil Pro, Expert ou Tout-en-un — pas sur un Starter. Format one-shot (setup unique, pas de licence). Usage B2B exclusivement — non applicable aux contrats consommateurs particuliers soumis au droit de rétractation (art. L.221-18 Code conso). Signature électronique 350 € HT Mise en place de la signature électronique B2B avec audit trail et valeur probatoire. Devis, mandats, contrats signés en ligne sans impression. Paiement acompte automatique 250 € HT Lien de paiement généré automatiquement à la signature. Prélèvement 30-50% à la comman | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2135 | Intégrations signature &amp; paiement — Signature électronique 350 € HT Mise en place de la signature électronique B2B avec audit trail et valeur probatoire. Devis, mandats, contrats signés en ligne sans impression. | 350 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Signature électronique 350 € HT Mise en place de la signature électronique B2B avec audit trail et valeur probatoire. Devis, mandats, contrats signés en ligne sans impression. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2140 | Intégrations signature &amp; paiement — Paiement acompte automatique 250 € HT Lien de paiement généré automatiquement à la signature. Prélèvement 30-50% à la commande, fluidifie l'engagement client. | 250 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Paiement acompte automatique 250 € HT Lien de paiement généré automatiquement à la signature. Prélèvement 30-50% à la commande, fluidifie l'engagement client. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2145 | Intégrations signature &amp; paiement — Caution / Autorisation bancaire 300 € HT Autorisation bloquée à la signature, libérée ou prélevée en fin de mission. Sécurise les annulations tardives. | 300 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Caution / Autorisation bancaire 300 € HT Autorisation bloquée à la signature, libérée ou prélevée en fin de mission. Sécurise les annulations tardives. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2150 | Intégrations signature &amp; paiement — Stack complète (3 en 1) 750 € HT Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement  | 750 € HT | HT explicite | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Stack complète (3 en 1) 750 € HT Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement client. | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| outils.html:2151 | Intégrations signature &amp; paiement — Stack complète (3 en 1) 750 € HT Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement  | Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement client. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Stack complète (3 en 1) 750 € HT Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement client. | `agents.html`, `audit.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| outils.html:2161 | Intégrations signature &amp; paiement — Comprendre avant de choisir Les 4 paliers d'outil métier construit sur mesure Un éclairage pédagogique sur ce qui existe entre "un module simple" et "un système complet". Selon le  | À noter : par défaut, les outils L'Rénov fonctionnent en mode autonome — le client ouvre et porte lui-même ses comptes techniques (modèles IA, automatisations, bases de données). Un mode hébergé L'Rénov est aussi possible pour les structures qui ne souhaitent pas gérer ces comptes (typiquement artisans, BTP terrain, indépendants) : forfait de maintenance dédié, à cadrer en fonction du périmètre. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Comprendre avant de choisir Les 4 paliers d'outil métier construit sur mesure Un éclairage pédagogique sur ce qui existe entre "un module simple" et "un système complet". Selon le palier, l'outil assemble plus ou moins de briques : structuration de données, automatisations, interface métier, intelligence artificielle. Avec les vrais avantages et les limites assumées à chaque niveau. Un outil L'Rénov, ce n'est pas un assistant qui répond, ni un chatbot qui converse. C'est une application métier complète qui assemble plusieurs briques techniques au service d'un flux opérationnel précis. Selon le palier, l'outil intègre une combinaison adaptée d | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |



#### panorama-ia/index.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| panorama-ia/index.html:206 | Le bon calcul n'est pas le prix de l'abonnement. — Calculateur de valeur Le bon calcul n'est pas le prix de l'abonnement. Il faut comparer le coût à la valeur du temps utile récupéré — sans oublier le temps de contrôle humain. | Le bon calcul n'est pas le prix de l'abonnement. | Non précisé à cet emplacement | 'est pas le prix de l'abonnement. | Non précisée ; voir bloc/offre F.1 | Calculateur de valeur Le bon calcul n'est pas le prix de l'abonnement. Il faut comparer le coût à la valeur du temps utile récupéré — sans oublier le temps de contrôle humain. | Aucun | TARIF_A_VERIFIER |

| panorama-ia/index.html:213 | Le bon calcul n'est pas le prix de l'abonnement. — Temps hebdomadaire sur des tâches répétitives 5 h Part réellement récupérable 30 % Valeur d'une heure de travail 50 € Budget mensuel outils et accompagnement 60 € | Valeur d'une heure de travail 50 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 5 h | Temps hebdomadaire sur des tâches répétitives 5 h Part réellement récupérable 30 % Valeur d'une heure de travail 50 € Budget mensuel outils et accompagnement 60 € | Aucun | TARIF_A_VERIFIER |

| panorama-ia/index.html:214 | Le bon calcul n'est pas le prix de l'abonnement. — Temps hebdomadaire sur des tâches répétitives 5 h Part réellement récupérable 30 % Valeur d'une heure de travail 50 € Budget mensuel outils et accompagnement 60 € | Budget mensuel outils et accompagnement 60 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 5 h | Temps hebdomadaire sur des tâches répétitives 5 h Part réellement récupérable 30 % Valeur d'une heure de travail 50 € Budget mensuel outils et accompagnement 60 € | `agents.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| panorama-ia/index.html:218 | Le bon calcul n'est pas le prix de l'abonnement. — Valeur nette mensuelle estimée 265 € Temps récupéré 6,5 h Valeur brute 325 € Retour sur budget 442 % Simulation indicative : elle ne tient pas compte des coûts d'intégration, de fo | 265 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 5 h | Valeur nette mensuelle estimée 265 € Temps récupéré 6,5 h Valeur brute 325 € Retour sur budget 442 % Simulation indicative : elle ne tient pas compte des coûts d'intégration, de formation, de maintenance, des erreurs ni du temps de validation. | Aucun | TARIF_A_VERIFIER |

| panorama-ia/index.html:221 | Le bon calcul n'est pas le prix de l'abonnement. — Temps récupéré 6,5 h Valeur brute 325 € Retour sur budget 442 % | Valeur brute 325 € | Non précisé à cet emplacement | Non indiquée dans ce bloc | 5 h | Temps récupéré 6,5 h Valeur brute 325 € Retour sur budget 442 % | Aucun | TARIF_A_VERIFIER |



#### panorama.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### radar-ia.html

Aucun bloc de prix/licence/abonnement détecté dans le HTML statique ; voir les registres JS et source brute pour les contenus injectés.

#### secteur-assurance.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-assurance.html:1211 | À quoi ressemble une intervention dans ce secteur. — Outil Une mutuelle régionale a fait construire un outil de recueil de besoins DDA pour ses 20 conseillers : questionnaire structuré, synthèse rédigée, archivage traçable, hébergeme | Une mutuelle régionale a fait construire un outil de recueil de besoins DDA pour ses 20 conseillers : questionnaire structuré, synthèse rédigée, archivage traçable, hébergement Mistral EU. Palier Expert · 4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Une mutuelle régionale a fait construire un outil de recueil de besoins DDA pour ses 20 conseillers : questionnaire structuré, synthèse rédigée, archivage traçable, hébergement Mistral EU. Palier Expert · 4 500 € . | `agents.html`, `ia-et-moi.html`, `outils.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1215 | À quoi ressemble une intervention dans ce secteur. — Agent Un cabinet de courtage IARD de 4 personnes a fait paramétrer un agent qui prépare les premiers brouillons de qualification de sinistre (analyse du déclaratif, pièces à demand | Un cabinet de courtage IARD de 4 personnes a fait paramétrer un agent qui prépare les premiers brouillons de qualification de sinistre (analyse du déclaratif, pièces à demander). Niveau Bras droit · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Un cabinet de courtage IARD de 4 personnes a fait paramétrer un agent qui prépare les premiers brouillons de qualification de sinistre (analyse du déclaratif, pièces à demander). Niveau Bras droit · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Un agent général d'assurance a fait une journée d'atelier pour configurer un suivi de renouvellement de contrats avec alertes 60j avant échéance. Journée · 690 € . | Un agent général d'assurance a fait une journée d'atelier pour configurer un suivi de renouvellement de contrats avec alertes 60j avant échéance. Journée · 690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | journée / Journée | Atelier Un agent général d'assurance a fait une journée d'atelier pour configurer un suivi de renouvellement de contrats avec alertes 60j avant échéance. Journée · 690 € . | `audit.html`, `index (1).html`, `outils.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1282 | Audit IA — Audit IA Audit pour identifier les usages compatibles avec votre conformité DDA. 150-690 € . Découvrir | Audit pour identifier les usages compatibles avec votre conformité DDA. 150-690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Audit pour identifier les usages compatibles avec votre conformité DDA. 150-690 € . Découvrir | `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1290 | Outils métier — Outils métier Outil cabinet d'assurance sur-mesure avec Mistral EU pour les données sensibles. Recueil de besoins, devis, suivi sinistres. 1 490-6 990 €+ . Découvrir | Outil cabinet d'assurance sur-mesure avec Mistral EU pour les données sensibles. Recueil de besoins, devis, suivi sinistres. 1 490-6 990 €+ . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil cabinet d'assurance sur-mesure avec Mistral EU pour les données sensibles. Recueil de besoins, devis, suivi sinistres. 1 490-6 990 €+ . Découvrir | `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1298 | Agents IA — Agents IA Agent pour les brouillons de mails de relance, les explications de garanties, la qualification de premier niveau. 690-4 500 € . Découvrir | Agent pour les brouillons de mails de relance, les explications de garanties, la qualification de premier niveau. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent pour les brouillons de mails de relance, les explications de garanties, la qualification de premier niveau. 690-4 500 € . Découvrir | `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-assurance.html:1306 | Ateliers — Ateliers Co-construction sur un cas (recueil de besoins, qualification sinistre). 390-890 € . Découvrir | Co-construction sur un cas (recueil de besoins, qualification sinistre). 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Ateliers Co-construction sur un cas (recueil de besoins, qualification sinistre). 390-890 € . Découvrir | `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-btp.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-btp.html:1211 | À quoi ressemble une intervention dans ce secteur. — Outil hébergé Une entreprise d'aluminium-menuiserie de 8 personnes a fait construire un outil hébergé chez L'Rénov : devis structurés, suivi de chantiers, mails fournisseurs. Le di | Une entreprise d'aluminium-menuiserie de 8 personnes a fait construire un outil hébergé chez L'Rénov : devis structurés, suivi de chantiers, mails fournisseurs. Le dirigeant n'a aucune charge technique à porter. Palier Pro hébergé · 2 900 € + licence . | Non précisé à cet emplacement | o hébergé · 2 900 € + licence . | Non précisée ; voir bloc/offre F.1 | Outil hébergé Une entreprise d'aluminium-menuiserie de 8 personnes a fait construire un outil hébergé chez L'Rénov : devis structurés, suivi de chantiers, mails fournisseurs. Le dirigeant n'a aucune charge technique à porter. Palier Pro hébergé · 2 900 € + licence . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1215 | À quoi ressemble une intervention dans ce secteur. — Outil autonome Un cabinet de maîtrise d'œuvre de 3 personnes a fait construire un outil autonome de gestion de chantiers (CRM, planning, devis). L'équipe gère elle-même sur sa prop | Un cabinet de maîtrise d'œuvre de 3 personnes a fait construire un outil autonome de gestion de chantiers (CRM, planning, devis). L'équipe gère elle-même sur sa propre stack Notion. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil autonome Un cabinet de maîtrise d'œuvre de 3 personnes a fait construire un outil autonome de gestion de chantiers (CRM, planning, devis). L'équipe gère elle-même sur sa propre stack Notion. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / Demi-journée | Atelier Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | `audit.html`, `ia-et-moi.html`, `index (1).html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1282 | Audit IA — Audit IA Démarrer par un audit pour identifier ce qui prend du temps administratif vs ce qui rapporte. 150-690 € · déductible 60j. Découvrir | Démarrer par un audit pour identifier ce qui prend du temps administratif vs ce qui rapporte. 150-690 € · déductible 60j. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Démarrer par un audit pour identifier ce qui prend du temps administratif vs ce qui rapporte. 150-690 € · déductible 60j. Découvrir | `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1290 | Outils métier (mode hébergé recommandé) — Outils métier (mode hébergé recommandé) Outil clé en main hébergé chez L'Rénov : devis, suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. 1 490-6 990  | Outil clé en main hébergé chez L'Rénov : devis, suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. 1 490-6 990 €+ + licence annuelle . | Non précisé à cet emplacement | que. 1 490-6 990 €+ + licence annuelle . | Non précisée ; voir bloc/offre F.1 | Outils métier (mode hébergé recommandé) Outil clé en main hébergé chez L'Rénov : devis, suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. 1 490-6 990 €+ + licence annuelle . Découvrir | `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1298 | Agents IA — Agents IA Agent qui répond aux mails standards, qualifie les demandes entrantes, brouillon des comptes-rendus de visite. 690-4 500 € . Découvrir | Agent qui répond aux mails standards, qualifie les demandes entrantes, brouillon des comptes-rendus de visite. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent qui répond aux mails standards, qualifie les demandes entrantes, brouillon des comptes-rendus de visite. 690-4 500 € . Découvrir | `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-btp.html:1306 | Ateliers — Ateliers Co-construction sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. 390-890 € . Découvrir | Co-construction sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Demi-journée / 1 mois | Ateliers Co-construction sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-communication.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-communication.html:1211 | À quoi ressemble une intervention dans ce secteur. — Agent Une consultante en marketing B2B (indépendante) a fait paramétrer un agent rédacteur qui produit ses posts LinkedIn calibrés sur 200 posts existants de son corpus. Voix édito | Une consultante en marketing B2B (indépendante) a fait paramétrer un agent rédacteur qui produit ses posts LinkedIn calibrés sur 200 posts existants de son corpus. Voix éditoriale conservée à 90 %. Niveau Bras droit · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Une consultante en marketing B2B (indépendante) a fait paramétrer un agent rédacteur qui produit ses posts LinkedIn calibrés sur 200 posts existants de son corpus. Voix éditoriale conservée à 90 %. Niveau Bras droit · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1215 | À quoi ressemble une intervention dans ce secteur. — Outil Une petite agence de communication (5 personnes) a fait construire un outil de planning éditorial multi-clients : voix éditoriale par client, planning trimestriel, validation | Une petite agence de communication (5 personnes) a fait construire un outil de planning éditorial multi-clients : voix éditoriale par client, planning trimestriel, validation interne, archivage. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Une petite agence de communication (5 personnes) a fait construire un outil de planning éditorial multi-clients : voix éditoriale par client, planning trimestriel, validation interne, archivage. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Un responsable marketing en PME industrielle (1 personne, 80 salariés) a fait une journée d'atelier pour capturer sa voix éditoriale puis configurer son outil de rédaction  | Un responsable marketing en PME industrielle (1 personne, 80 salariés) a fait une journée d'atelier pour capturer sa voix éditoriale puis configurer son outil de rédaction d'articles SEO. Journée · 690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | journée / Journée | Atelier Un responsable marketing en PME industrielle (1 personne, 80 salariés) a fait une journée d'atelier pour capturer sa voix éditoriale puis configurer son outil de rédaction d'articles SEO. Journée · 690 € . | `audit.html`, `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1282 | Audit IA — Audit IA Audit pour identifier ce qui vaut la peine d'être outillé. 150-690 € . Découvrir | Audit pour identifier ce qui vaut la peine d'être outillé. 150-690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Audit pour identifier ce qui vaut la peine d'être outillé. 150-690 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1290 | Outils métier — Outils métier Outil rédaction sur-mesure, calibré sur votre voix éditoriale (corpus existant analysé). 1 490-6 990 €+ . Découvrir | Outil rédaction sur-mesure, calibré sur votre voix éditoriale (corpus existant analysé). 1 490-6 990 €+ . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil rédaction sur-mesure, calibré sur votre voix éditoriale (corpus existant analysé). 1 490-6 990 €+ . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1298 | Agents IA — Agents IA Agent rédacteur conversationnel, calibré sur votre style. Souvent le bon choix ici. 690-4 500 € . Découvrir | Agent rédacteur conversationnel, calibré sur votre style. Souvent le bon choix ici. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent rédacteur conversationnel, calibré sur votre style. Souvent le bon choix ici. 690-4 500 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-communication.html:1306 | Ateliers — Ateliers Atelier de capture de voix éditoriale, puis configuration de l'outil. 390-890 € . Découvrir | Atelier de capture de voix éditoriale, puis configuration de l'outil. 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Ateliers Atelier de capture de voix éditoriale, puis configuration de l'outil. 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-finance-comptabilite.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-finance-comptabilite.html:1211 | À quoi ressemble une intervention dans ce secteur. — Outil Un cabinet de gestion de patrimoine de 5 conseillers a fait construire un outil de structuration des RDV patrimoniaux : questionnaire client MIF II + synthèse rédigée + archi | Un cabinet de gestion de patrimoine de 5 conseillers a fait construire un outil de structuration des RDV patrimoniaux : questionnaire client MIF II + synthèse rédigée + archivage traçable. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Un cabinet de gestion de patrimoine de 5 conseillers a fait construire un outil de structuration des RDV patrimoniaux : questionnaire client MIF II + synthèse rédigée + archivage traçable. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1215 | À quoi ressemble une intervention dans ce secteur. — Agent Un expert-comptable indépendant a fait paramétrer un agent rédacteur qui prépare les mails de relance pour pièces manquantes, calibré sur sa voix. Niveau Métier sécurisé · 1  | Un expert-comptable indépendant a fait paramétrer un agent rédacteur qui prépare les mails de relance pour pièces manquantes, calibré sur sa voix. Niveau Métier sécurisé · 1 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Un expert-comptable indépendant a fait paramétrer un agent rédacteur qui prépare les mails de relance pour pièces manquantes, calibré sur sa voix. Niveau Métier sécurisé · 1 900 € . | `agents.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Un cabinet d'EC de 12 personnes a fait une journée d'atelier pour configurer un tableau de bord de suivi des missions sur Notion (jalons, alertes pièces manquantes). Journé | Un cabinet d'EC de 12 personnes a fait une journée d'atelier pour configurer un tableau de bord de suivi des missions sur Notion (jalons, alertes pièces manquantes). Journée · 690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | journée / Journée | Atelier Un cabinet d'EC de 12 personnes a fait une journée d'atelier pour configurer un tableau de bord de suivi des missions sur Notion (jalons, alertes pièces manquantes). Journée · 690 € . | `audit.html`, `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1282 | Audit IA — Audit IA Audit ciblé sur les usages compatibles avec votre conformité. 150-690 € · déductible 60j. Découvrir | Audit ciblé sur les usages compatibles avec votre conformité. 150-690 € · déductible 60j. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Audit ciblé sur les usages compatibles avec votre conformité. 150-690 € · déductible 60j. Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1290 | Outils métier — Outils métier Outil cabinet sur-mesure : structuration des données client, génération de notes de synthèse, suivi des missions. Garde-fous MIF II/LCB-FT. 1 490-6 990 €+ . Découvrir | Outil cabinet sur-mesure : structuration des données client, génération de notes de synthèse, suivi des missions. Garde-fous MIF II/LCB-FT. 1 490-6 990 €+ . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil cabinet sur-mesure : structuration des données client, génération de notes de synthèse, suivi des missions. Garde-fous MIF II/LCB-FT. 1 490-6 990 €+ . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1298 | Agents IA — Agents IA Agent pour les brouillons de mails clients, les explications pédagogiques, la veille fiscale. 690-4 500 € . Découvrir | Agent pour les brouillons de mails clients, les explications pédagogiques, la veille fiscale. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent pour les brouillons de mails clients, les explications pédagogiques, la veille fiscale. 690-4 500 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-finance-comptabilite.html:1306 | Ateliers — Ateliers Co-construction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. 390-890 € . Découvrir | Co-construction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Ateliers Co-construction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-immobilier.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-immobilier.html:1211 | À quoi ressemble une intervention dans ce secteur. — Outil Une agence immobilière indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALU | Une agence immobilière indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Une agence immobilière indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1215 | À quoi ressemble une intervention dans ce secteur. — Agent Un mandataire indépendant en réseau a fait paramétrer un agent IA qui qualifie les demandes entrantes (mail + WhatsApp) selon budget/zone/typologie, et propose des biens corr | Un mandataire indépendant en réseau a fait paramétrer un agent IA qui qualifie les demandes entrantes (mail + WhatsApp) selon budget/zone/typologie, et propose des biens correspondants depuis son portefeuille. Niveau Bras droit · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Un mandataire indépendant en réseau a fait paramétrer un agent IA qui qualifie les demandes entrantes (mail + WhatsApp) selon budget/zone/typologie, et propose des biens correspondants depuis son portefeuille. Niveau Bras droit · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Une agence en franchise immobilière a fait un atelier d'une journée pour co-construire avec ses 6 agents un outil de relance clients post-visite. Méthode transmise, outil u | Une agence en franchise immobilière a fait un atelier d'une journée pour co-construire avec ses 6 agents un outil de relance clients post-visite. Méthode transmise, outil utilisé depuis. Journée · 690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | journée / Journée | Atelier Une agence en franchise immobilière a fait un atelier d'une journée pour co-construire avec ses 6 agents un outil de relance clients post-visite. Méthode transmise, outil utilisé depuis. Journée · 690 € . | `audit.html`, `index (1).html`, `outils.html`, `secteur-assurance.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1282 | Audit IA — Audit IA Démarrer par un audit pour identifier où l'IA a un vrai impact dans votre agence. Compte-rendu écrit, plan d'action chiffré. 150-690 € · déductible 60j si projet engagé. D | Démarrer par un audit pour identifier où l'IA a un vrai impact dans votre agence. Compte-rendu écrit, plan d'action chiffré. 150-690 € · déductible 60j si projet engagé. | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Démarrer par un audit pour identifier où l'IA a un vrai impact dans votre agence. Compte-rendu écrit, plan d'action chiffré. 150-690 € · déductible 60j si projet engagé. Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1290 | Outils métier — Outils métier Outil sur-mesure dédié à l'immobilier : structuration des mandats, suivi des leads, génération d'annonces conformes. Vocabulaire ALUR natif. 1 490-6 990 €+ . Découvri | Outil sur-mesure dédié à l'immobilier : structuration des mandats, suivi des leads, génération d'annonces conformes. Vocabulaire ALUR natif. 1 490-6 990 €+ . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil sur-mesure dédié à l'immobilier : structuration des mandats, suivi des leads, génération d'annonces conformes. Vocabulaire ALUR natif. 1 490-6 990 €+ . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1298 | Agents IA — Agents IA Agent conversationnel pour la qualification des leads, la rédaction de réponses standards, les brouillons de comptes-rendus de visite. 690-4 500 € . Découvrir | Agent conversationnel pour la qualification des leads, la rédaction de réponses standards, les brouillons de comptes-rendus de visite. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent conversationnel pour la qualification des leads, la rédaction de réponses standards, les brouillons de comptes-rendus de visite. 690-4 500 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-immobilier.html:1306 | Ateliers — Ateliers Co-construction avec l'équipe agence : configurer un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. 390-890 € . Découvrir | Co-construction avec l'équipe agence : configurer un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / journée / 1 mois | Ateliers Co-construction avec l'équipe agence : configurer un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-juridique.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-juridique.html:1211 | À quoi ressemble une intervention dans ce secteur. — Agent Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des pièces à deman | Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des pièces à demander. Hébergement Mistral EU. Niveau Bras droit · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des pièces à demander. Hébergement Mistral EU. Niveau Bras droit · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1215 | À quoi ressemble une intervention dans ce secteur. — Outil Un cabinet d'avocats spécialisé droit des affaires (3 associés) a fait construire un tableau de bord de suivi des dossiers : jalons, deadlines, relances client, archivage des | Un cabinet d'avocats spécialisé droit des affaires (3 associés) a fait construire un tableau de bord de suivi des dossiers : jalons, deadlines, relances client, archivage des courriers types. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Un cabinet d'avocats spécialisé droit des affaires (3 associés) a fait construire un tableau de bord de suivi des dossiers : jalons, deadlines, relances client, archivage des courriers types. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Un juriste d'entreprise a fait une demi-journée d'atelier pour configurer un agent de synthèse réglementaire (alertes hebdo sur évolutions législatives du secteur). Demi-jo | Un juriste d'entreprise a fait une demi-journée d'atelier pour configurer un agent de synthèse réglementaire (alertes hebdo sur évolutions législatives du secteur). Demi-journée · 390 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / Demi-journée | Atelier Un juriste d'entreprise a fait une demi-journée d'atelier pour configurer un agent de synthèse réglementaire (alertes hebdo sur évolutions législatives du secteur). Demi-journée · 390 € . | `audit.html`, `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-professions-liberales.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1282 | Audit IA — Audit IA Audit pour identifier les usages compatibles avec le secret pro. 150-690 € . Découvrir | Audit pour identifier les usages compatibles avec le secret pro. 150-690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Audit pour identifier les usages compatibles avec le secret pro. 150-690 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1290 | Outils métier — Outils métier Outil étude / cabinet sur-mesure, Mistral EU, hébergement Europe garanti. Pré-RDV, comptes-rendus, suivi. 1 490-6 990 €+ . Découvrir | Outil étude / cabinet sur-mesure, Mistral EU, hébergement Europe garanti. Pré-RDV, comptes-rendus, suivi. 1 490-6 990 €+ . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil étude / cabinet sur-mesure, Mistral EU, hébergement Europe garanti. Pré-RDV, comptes-rendus, suivi. 1 490-6 990 €+ . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1298 | Agents IA — Agents IA Agent pour les courriers de suivi, les notes de cadrage, les explications client. 690-4 500 € . Découvrir | Agent pour les courriers de suivi, les notes de cadrage, les explications client. 690-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent pour les courriers de suivi, les notes de cadrage, les explications client. 690-4 500 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-juridique.html:1306 | Ateliers — Ateliers Co-construction sur un cas concret (pré-acte type, courrier type). 390-890 € . Découvrir | Co-construction sur un cas concret (pré-acte type, courrier type). 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Ateliers Co-construction sur un cas concret (pré-acte type, courrier type). 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteur-professions-liberales.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteur-professions-liberales.html:1211 | À quoi ressemble une intervention dans ce secteur. — Outil Un cabinet d'assistanat virtuel (4 personnes en télétravail) a fait construire un outil de centralisation des missions clients : briefs, livrables, facturation, archivage. Pa | Un cabinet d'assistanat virtuel (4 personnes en télétravail) a fait construire un outil de centralisation des missions clients : briefs, livrables, facturation, archivage. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil Un cabinet d'assistanat virtuel (4 personnes en télétravail) a fait construire un outil de centralisation des missions clients : briefs, livrables, facturation, archivage. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-professions-liberales.html:1215 | À quoi ressemble une intervention dans ce secteur. — Agent Un consultant RH indépendant a fait paramétrer un agent qui prépare les brouillons de comptes-rendus de cadrage RH + matrices d'évaluation, calibrés sur son style. Niveau Mét | Un consultant RH indépendant a fait paramétrer un agent qui prépare les brouillons de comptes-rendus de cadrage RH + matrices d'évaluation, calibrés sur son style. Niveau Métier sécurisé · 1 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent Un consultant RH indépendant a fait paramétrer un agent qui prépare les brouillons de comptes-rendus de cadrage RH + matrices d'évaluation, calibrés sur son style. Niveau Métier sécurisé · 1 900 € . | `agents.html`, `secteur-finance-comptabilite.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-professions-liberales.html:1219 | À quoi ressemble une intervention dans ce secteur. — Atelier Une coach professionnelle a fait une demi-journée d'atelier pour configurer un outil de suivi des séances clients + envoi automatique des synthèses post-séance. Demi-journé | Une coach professionnelle a fait une demi-journée d'atelier pour configurer un outil de suivi des séances clients + envoi automatique des synthèses post-séance. Demi-journée · 390 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / Demi-journée | Atelier Une coach professionnelle a fait une demi-journée d'atelier pour configurer un outil de suivi des séances clients + envoi automatique des synthèses post-séance. Demi-journée · 390 € . | `audit.html`, `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteurs.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-professions-liberales.html:1282 | Audit IA — Audit IA Audit indispensable ici pour cadrer le bon périmètre. 150-690 € . Découvrir | Audit indispensable ici pour cadrer le bon périmètre. 150-690 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Audit IA Audit indispensable ici pour cadrer le bon périmètre. 150-690 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON |

| secteur-professions-liberales.html:1290 | Outils métier — Outils métier Outil indépendant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro. 1 490-4 500 € . Découvrir | Outil indépendant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro. 1 490-4 500 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outils métier Outil indépendant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro. 1 490-4 500 € . Découvrir | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| secteur-professions-liberales.html:1298 | Agents IA — Agents IA Agent pour la communication, les mails standards, la production de livrables. 690-2 900 € . Découvrir | Agent pour la communication, les mails standards, la production de livrables. 690-2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agents IA Agent pour la communication, les mails standards, la production de livrables. 690-2 900 € . Découvrir | Aucun | TARIF_A_VERIFIER ; TARIF_ANCIEN |

| secteur-professions-liberales.html:1306 | Ateliers — Ateliers Atelier individuel ou avec un associé pour configurer ensemble. 390-890 € . Découvrir | Atelier individuel ou avec un associé pour configurer ensemble. 390-890 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Ateliers Atelier individuel ou avec un associé pour configurer ensemble. 390-890 € . Découvrir | `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html` | TARIF_A_VERIFIER ; TARIF_ANCIEN ; TARIF_DOUBLON ; TARIF_INCOHERENT |



#### secteurs.html

| Page:ligne | Bloc / intitulé contextualisé | Montant ou mention exacte | HT/TTC | Licence / récurrence | Durée dans le contexte | Texte environnant | Autres pages avec même montant | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| secteurs.html:1283 | Quelques exemples tous secteurs confondus. — Outil · Immobilier Une agence indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes AL | Une agence indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR. Palier Pro · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Outil · Immobilier Une agence indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR. Palier Pro · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| secteurs.html:1287 | Quelques exemples tous secteurs confondus. — Agent · Notariat Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des piè | Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des pièces. Mistral EU. Niveau Bras droit · 2 900 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | Non précisée ; voir bloc/offre F.1 | Agent · Notariat Une étude notariale a fait paramétrer un agent post-RDV qui transforme les notes manuscrites du notaire en compte-rendu structuré + mail client + checklist des pièces. Mistral EU. Niveau Bras droit · 2 900 € . | `agents.html`, `ia-et-moi.html`, `outils.html`, `secteur-assurance.html`, `secteur-btp.html`, `secteur-communication.html`, `secteur-finance-comptabilite.html`, `secteur-immobilier.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| secteurs.html:1291 | Quelques exemples tous secteurs confondus. — Atelier · BTP Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | Non précisé à cet emplacement | Non indiquée dans ce bloc | demi-journée / Demi-journée | Atelier · BTP Un artisan plombier indépendant a fait une demi-journée d'atelier pour configurer un devis-type personnalisé avec relances automatiques. Demi-journée · 390 € . | `audit.html`, `ia-et-moi.html`, `index (1).html`, `secteur-btp.html`, `secteur-juridique.html`, `secteur-professions-liberales.html` | TARIF_A_VERIFIER ; TARIF_DOUBLON |



### F.3. Montants injectés par JavaScript dans les pages actives

Les fichiers HTML ne suffisent pas à voir CMD. `assets/shift-formations.js:4–13` applique un tarif par famille/type aux données, sauf si statut `programme_a_valider`. Le tarif effectivement préparé par le rendu prime sur la seule lecture du champ catalogue. La liste ci-dessous reprend **chaque fiche canonique**, y compris sans prix ; les références par domaine peuvent afficher une même fiche plusieurs fois sans constituer de nouvelles offres. Les prix restent non approuvés pour la future architecture.

| Source | Fiche | Famille/type | Valeur catalogue | Valeur préparée par rendu | Durée | Taxes / récurrence | Marqueurs |

| --- | --- | --- | --- | --- | --- | --- | --- |

| assets/shift-catalogue.js:4 | ctrl-1 — Personnaliser son IA | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:38 | ctrl-2 — Créer ses contenus avec l’IA | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:72 | ctrl-3 — Créer ses documents professionnels avec l’IA | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:106 | ctrl-4 — Exploiter ses données avec l’IA | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:140 | ctrl-5 — Créer ses visuels professionnels avec l’IA | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:173 | ctrl-6 — Exploiter ses documents et ses sources avec NotebookLM | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:206 | ctrl-7 — Découvrir Notion et créer sa première base | CTRL / — | 79 | 79 € | 1 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:239 | cmd-transversal-quotidien — Alléger son quotidien avec l’IA | CMD / standard | 119 | 119 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:268 | cmd-transversal-documentaire — Construire sa base documentaire métier | CMD / standard | 119 | 119 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:302 | cmd-pilotage-organisation-4 — Construire son tableau de bord de pilotage | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:339 | cmd-transversal-communication — Construire sa stratégie de communication avec l’IA | CMD / standard | 119 | 119 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:374 | cmd-missions-clients — Construire son outil de gestion des missions clients | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:384 | cmd-generateur-cctp — Construire son générateur de CCTP avec l’IA | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:394 | cmd-appel-offres — Répondre à un appel d’offres avec l’IA | CMD / standard | 119 | 119 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:404 | cmd-generateur-annonces — Construire son générateur d’annonces immobilières | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:414 | cmd-simulateur-metier — Construire son simulateur métier | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:424 | cmd-generateur-propositions — Construire son générateur de propositions commerciales | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:434 | cmd-generateur-pedagogique — Construire son générateur de séquences et supports pédagogiques | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:444 | cmd-generateur-campagne — Construire son générateur de campagne multicanale | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:454 | cmd-suivi-processus — Construire son outil de suivi de processus | CMD / outil | 139 | 139 € | 2 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:464 | enter-1 — IA &amp; Méthodes | ENTER / — | 399 | 399 € | 7 h — 2 × 3 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:497 | enter-2 — Communication &amp; IA | ENTER / — | 399 | 399 € | 7 h — 2 × 3 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |

| assets/shift-catalogue.js:530 | enter-3 — Pilotage &amp; IA | ENTER / — | 399 | 399 € | 7 h — 2 × 3 h 30 | Non précisé ; ponctuel | TARIF_A_VERIFIER ; TARIF_ACTUEL_POTENTIEL |



Les fiches sont rendues dans ateliers.html et les anciens catalogues formations-* qui les chargent ; les URL de ces derniers sont déjà redirigées. Réservation générée : https://www.billetweb.fr/pro/lrenov-ia-studio ; aucune réservation effectuée. `assets/formations-config.js` laisse `cpfInscriptionUrl` et `cpfDevisUrl` vides : absence de destination configurée, pas une URL 404 démontrée.

### F.4. Registre lexical intégral des HTML, copies et sauvegardes

Pour éviter toute omission des scripts inline, données JSON, commentaires et anciennes versions, ce registre recense **chaque occurrence source** de `€`, `EUR`, `HT`, `TTC`, `/mois`, `/an`, licence/license, abonnement, setup, forfait, ainsi que euros et hors taxes. Les occurrences identiques sont groupées uniquement si leur token et leur contexte sont identiques ; **tous les emplacements fichier:ligne:colonne sont conservés**. Les colonnes et lignes sont comptées à partir de 1. Un contexte peut être un fragment de code, un exemple ou une clause et non un prix. F.2 fournit les blocs lisibles, F.4 assure la couverture brute y compris dans les sauvegardes. Le mot EUR est recherché comme mot entier : CURSEUR n’est pas un prix.

Couverture : **2316 occurrences**, **450 groupes de contexte**, **212 HTML parcourus**. Les autres mots monétaires génériques, « devis » et mentions d’absence de prix sont documentés dans les blocs/offres ; un « sur devis » sans chiffre ne devient pas un tarif fixé.

| Token exact | Contexte source | Emplacements exhaustifs | Marqueurs |

| --- | --- | --- | --- |

| € | &lt;meta name="description" content="Sept formations transversales CTRL : 1 h 30, 79 €."&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:7:85 ; _backups/ateliers-shift-2026-10-09/ateliers.html:7:85 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ons transversales pour utiliser vos outils au quotidien. Format commun : 1 h 30 · Tarif public : 79 €.&lt;/p&gt;&lt;/header&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:36:226 ; _backups/ateliers-shift-2026-10-09/ateliers.html:36:226 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;li&gt;&lt;a href="#a11"&gt;11. Licence outils &amp;amp; limites&lt;/a&gt;&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:316:32 ; _backups/ateliers-shift-2026-10-09/cgv.html:316:32 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:302:32 ; _backups/navigation-formations-2026-10-09/cgv.html:302:32 ; _DEPLOIEMENT_PROD/cgv.html:302:32 ; cgv.html:302:32 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | er sur-mesure&lt;/strong&gt; — conception, paramétrage et déploiement d'outils IA + automatisations, avec licence annuelle&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:343:132 ; _backups/ateliers-shift-2026-10-09/cgv.html:343:132 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:329:132 ; _backups/navigation-formations-2026-10-09/cgv.html:329:132 ; _DEPLOIEMENT_PROD/cgv.html:329:132 ; cgv.html:329:132 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | rmat équivalent. Le devis détaille le périmètre, le calendrier prévisionnel, les livrables, le prix HT et les conditions de règlement.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:355:247 ; _backups/ateliers-shift-2026-10-09/cgv.html:355:247 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:341:247 ; _backups/navigation-formations-2026-10-09/cgv.html:341:247 ; _DEPLOIEMENT_PROD/cgv.html:341:247 ; cgv.html:341:247 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| euros | &lt;p&gt;Les prix sont exprimés en &lt;strong&gt;euros, hors taxes&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:363:44 ; _backups/ateliers-shift-2026-10-09/cgv.html:363:44 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:349:44 ; _backups/navigation-formations-2026-10-09/cgv.html:349:44 ; _DEPLOIEMENT_PROD/cgv.html:349:44 ; cgv.html:349:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| hors taxes | &lt;p&gt;Les prix sont exprimés en &lt;strong&gt;euros, hors taxes&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:363:51 ; _backups/ateliers-shift-2026-10-09/cgv.html:363:51 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:349:51 ; _backups/navigation-formations-2026-10-09/cgv.html:349:51 ; _DEPLOIEMENT_PROD/cgv.html:349:51 ; cgv.html:349:51 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;p&gt;&lt;strong&gt;Charges tierces&amp;nbsp;:&lt;/strong&gt; les abonnements et licences techniques nécessaires au fonctionnement des outils (notamment Mistral Pro, Notion, Make, Tally, Stripe, YouSign, et toute API tierce) sont à la c | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:365:54 ; _backups/ateliers-shift-2026-10-09/cgv.html:365:54 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:351:54 ; _backups/navigation-formations-2026-10-09/cgv.html:351:54 ; _DEPLOIEMENT_PROD/cgv.html:351:54 ; cgv.html:351:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;&lt;strong&gt;Charges tierces&amp;nbsp;:&lt;/strong&gt; les abonnements et licences techniques nécessaires au fonctionnement des outils (notamment Mistral Pro, Notion, Make, Tally, Stripe, YouSign, et toute API tierce) sont à la charge direct | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:365:69 ; _backups/ateliers-shift-2026-10-09/cgv.html:365:69 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:351:69 ; _backups/navigation-formations-2026-10-09/cgv.html:351:69 ; _DEPLOIEMENT_PROD/cgv.html:351:69 ; cgv.html:351:69 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;Pour les &lt;strong&gt;outils avec licence&lt;/strong&gt;, la licence annuelle est facturée dès la livraison de l'outil, puis renouvelée chaque année à date anniversaire, sauf dénonciation écrite par l'une de | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:395:39 ; _backups/ateliers-shift-2026-10-09/cgv.html:395:39 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:381:39 ; _backups/navigation-formations-2026-10-09/cgv.html:381:39 ; _DEPLOIEMENT_PROD/cgv.html:381:39 ; cgv.html:381:39 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;Pour les &lt;strong&gt;outils avec licence&lt;/strong&gt;, la licence annuelle est facturée dès la livraison de l'outil, puis renouvelée chaque année à date anniversaire, sauf dénonciation écrite par l'une des parties au moins 30 | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:395:60 ; _backups/ateliers-shift-2026-10-09/cgv.html:395:60 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:381:60 ; _backups/navigation-formations-2026-10-09/cgv.html:381:60 ; _DEPLOIEMENT_PROD/cgv.html:381:60 ; cgv.html:381:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| forfait | &lt;li&gt;Une &lt;strong&gt;indemnité forfaitaire pour frais de recouvrement de 40 €&lt;/strong&gt; (art. D.441-5 du Code de commerce)&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:403:35 ; _backups/ateliers-shift-2026-10-09/cgv.html:403:35 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:389:35 ; _backups/navigation-formations-2026-10-09/cgv.html:389:35 ; _DEPLOIEMENT_PROD/cgv.html:389:35 ; cgv.html:389:35 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;li&gt;Une &lt;strong&gt;indemnité forfaitaire pour frais de recouvrement de 40 €&lt;/strong&gt; (art. D.441-5 du Code de commerce)&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:403:80 ; _backups/ateliers-shift-2026-10-09/cgv.html:403:80 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:389:80 ; _backups/navigation-formations-2026-10-09/cgv.html:389:80 ; _DEPLOIEMENT_PROD/cgv.html:389:80 ; cgv.html:389:80 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | uspendre l'exécution&lt;/strong&gt; de toute prestation en cours, y compris l'accès à un outil livré sous licence. Le Prestataire pourra également exiger le paiement intégral du solde restant dû.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:406:238 ; _backups/ateliers-shift-2026-10-09/cgv.html:406:238 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:392:238 ; _backups/navigation-formations-2026-10-09/cgv.html:392:238 ; _DEPLOIEMENT_PROD/cgv.html:392:238 ; cgv.html:392:238 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| forfait | versement de l'acompte, &lt;strong&gt;l'acompte reste acquis au Prestataire&lt;/strong&gt; à titre d'indemnité forfaitaire, sans préjudice de la facturation des travaux déjà réalisés au prorata.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:424:182 ; _backups/ateliers-shift-2026-10-09/cgv.html:424:182 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:410:182 ; _backups/navigation-formations-2026-10-09/cgv.html:410:182 ; _DEPLOIEMENT_PROD/cgv.html:410:182 ; cgv.html:410:182 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;Toute reproduction, diffusion, revente, sous-licence ou exploitation commerciale par le Client des méthodes, prompts et gabarits du Prestataire est strictement interdite, sous peine de poursuites au titre du Code | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:443:55 ; _backups/ateliers-shift-2026-10-09/cgv.html:443:55 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:429:55 ; _backups/navigation-formations-2026-10-09/cgv.html:429:55 ; _DEPLOIEMENT_PROD/cgv.html:429:55 ; cgv.html:429:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;h2&gt;&lt;span class="num"&gt;11&lt;/span&gt;Licence outils &amp;amp; limites d'usage&lt;/h2&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:447:38 ; _backups/ateliers-shift-2026-10-09/cgv.html:447:38 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:433:38 ; _backups/navigation-formations-2026-10-09/cgv.html:433:38 ; _DEPLOIEMENT_PROD/cgv.html:433:38 ; cgv.html:433:38 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire&amp;nbsp;:&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:448:40 ; _backups/ateliers-shift-2026-10-09/cgv.html:448:40 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:434:40 ; _backups/navigation-formations-2026-10-09/cgv.html:434:40 ; _DEPLOIEMENT_PROD/cgv.html:434:40 ; cgv.html:434:40 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire&amp;nbsp;:&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:448:139 ; _backups/ateliers-shift-2026-10-09/cgv.html:448:139 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:434:139 ; _backups/navigation-formations-2026-10-09/cgv.html:434:139 ; _DEPLOIEMENT_PROD/cgv.html:434:139 ; cgv.html:434:139 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="quote"&gt;«&amp;nbsp;La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X]&amp;nbsp;h d'intervention et [X] ajustements mineurs par an, dans la limite de 50&amp;nbsp;000 | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:449:36 ; _backups/ateliers-shift-2026-10-09/cgv.html:449:36 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:435:36 ; _backups/navigation-formations-2026-10-09/cgv.html:435:36 ; _DEPLOIEMENT_PROD/cgv.html:435:36 ; cgv.html:435:36 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | [X]&amp;nbsp;h d'intervention et [X] ajustements mineurs par an, dans la limite de 50&amp;nbsp;000 tokens IA/mois et 10&amp;nbsp;000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évoluti | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:449:213 ; _backups/ateliers-shift-2026-10-09/cgv.html:449:213 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:435:213 ; _backups/navigation-formations-2026-10-09/cgv.html:435:213 ; _DEPLOIEMENT_PROD/cgv.html:435:213 ; cgv.html:435:213 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | stements mineurs par an, dans la limite de 50&amp;nbsp;000 tokens IA/mois et 10&amp;nbsp;000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:449:249 ; _backups/ateliers-shift-2026-10-09/cgv.html:449:249 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:435:249 ; _backups/navigation-formations-2026-10-09/cgv.html:435:249 ; _DEPLOIEMENT_PROD/cgv.html:435:249 ; cgv.html:435:249 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | mplémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé.&amp;nbsp;»&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:449:406 ; _backups/ateliers-shift-2026-10-09/cgv.html:449:406 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:435:406 ; _backups/navigation-formations-2026-10-09/cgv.html:435:406 ; _DEPLOIEMENT_PROD/cgv.html:435:406 ; cgv.html:435:406 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| / an | &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Palier&lt;/th&gt;&lt;th&gt;Heures / an&lt;/th&gt;&lt;th&gt;Ajustements inclus&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:452:46 ; _backups/ateliers-shift-2026-10-09/cgv.html:452:46 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:438:46 ; _backups/navigation-formations-2026-10-09/cgv.html:438:46 ; _DEPLOIEMENT_PROD/cgv.html:438:46 ; cgv.html:438:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;p&gt;Au-delà des heures incluses&amp;nbsp;: &lt;strong&gt;65&amp;nbsp;€/h HT&lt;/strong&gt;, avenant écrit obligatoire avant intervention.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:460:61 ; _backups/ateliers-shift-2026-10-09/cgv.html:460:61 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:446:61 ; _backups/navigation-formations-2026-10-09/cgv.html:446:61 ; _DEPLOIEMENT_PROD/cgv.html:446:61 ; cgv.html:446:61 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;p&gt;Au-delà des heures incluses&amp;nbsp;: &lt;strong&gt;65&amp;nbsp;€/h HT&lt;/strong&gt;, avenant écrit obligatoire avant intervention.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:460:65 ; _backups/ateliers-shift-2026-10-09/cgv.html:460:65 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:446:65 ; _backups/navigation-formations-2026-10-09/cgv.html:446:65 ; _DEPLOIEMENT_PROD/cgv.html:446:65 ; cgv.html:446:65 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;p&gt;En tout état de cause, la responsabilité globale du Prestataire est &lt;strong&gt;plafonnée au montant HT effectivement versé par le Client&lt;/strong&gt; au titre de la prestation à l'origine du litige.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:488:107 ; _backups/ateliers-shift-2026-10-09/cgv.html:488:107 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html:474:107 ; _backups/navigation-formations-2026-10-09/cgv.html:474:107 ; _DEPLOIEMENT_PROD/cgv.html:474:107 ; cgv.html:474:107 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;meta name="description" content="Trois parcours ENTER : 7 h en deux sessions de 3 h 30, 399 €, groupe de 4 à 8 participants."&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html:7:96 ; _backups/ateliers-shift-2026-10-09/formations-enter.html:7:96 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html:7:96 ; _backups/navigation-formations-2026-10-09/formations-enter.html:7:96 ; _DEPLOIEMENT_PROD/formations-enter.html:7:96 ; formations-enter.html:7:96 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | gue-title"&gt;&lt;h2 id="catalogue-title"&gt;Les parcours ENTER&lt;/h2&gt;&lt;p&gt;7 h · 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants&lt;/p&gt;&lt;div class="rows" data-catalogue data-niveau="ENTER"&gt;&lt;/div&gt;&lt;/section&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html:37:161 ; _backups/ateliers-shift-2026-10-09/formations-enter.html:37:161 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html:34:161 ; _backups/navigation-formations-2026-10-09/formations-enter.html:34:161 ; _DEPLOIEMENT_PROD/formations-enter.html:35:161 ; formations-enter.html:35:161 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | dès &lt;strong&gt;390 €&lt;/strong&gt; · 2h visio + rapport&lt;br&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1227:33 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1227:33 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1213:33 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1213:33 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1213:33 ; ia-et-moi.html:1213:33 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;li&gt;Si vous prenez le diagnostic et qu'on construit derrière, les &lt;strong&gt;390 €&lt;/strong&gt; sont déduits du devis.&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1253:95 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1253:95 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1239:95 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1239:95 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1239:95 ; ia-et-moi.html:1239:95 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | de &lt;strong&gt;1 490 €&lt;/strong&gt; à &lt;strong&gt;6 990 €&lt;/strong&gt;&lt;br&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1295:34 ; _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1295:61 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1295:34 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1295:61 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1281:34 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1281:61 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1281:34 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1281:61 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1281:34 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1281:61 ; ia-et-moi.html:1281:34 ; ia-et-moi.html:1281:61 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Setup | &lt;th&gt;Setup HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1325:19 ; _backups/ateliers-shift-2026-10-09/agents.html:1296:15 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1325:19 ; _backups/ateliers-shift-2026-10-09/outils.html:1449:15 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1311:19 ; _backups/navigation-formations-2026-10-09/agents.html:1282:15 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1311:19 ; _backups/navigation-formations-2026-10-09/outils.html:1435:15 ; _DEPLOIEMENT_PROD/agents.html:1282:15 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1311:19 ; _DEPLOIEMENT_PROD/outils.html:1435:15 ; agents.html:1282:15 ; ia-et-moi.html:1311:19 ; outils.html:1435:15 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;th&gt;Setup HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1325:25 ; _backups/ateliers-shift-2026-10-09/agents.html:1296:21 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1325:25 ; _backups/ateliers-shift-2026-10-09/outils.html:1449:21 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1311:25 ; _backups/navigation-formations-2026-10-09/agents.html:1282:21 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1311:25 ; _backups/navigation-formations-2026-10-09/outils.html:1435:21 ; _DEPLOIEMENT_PROD/agents.html:1282:21 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1311:25 ; _DEPLOIEMENT_PROD/outils.html:1435:21 ; agents.html:1282:21 ; ia-et-moi.html:1311:25 ; outils.html:1435:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;th&gt;Licence/an&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1326:19 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1326:19 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1312:19 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1312:19 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1312:19 ; ia-et-moi.html:1312:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;th&gt;Licence/an&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1326:26 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1326:26 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1312:26 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1312:26 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1312:26 ; ia-et-moi.html:1312:26 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Setup | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;1 490 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1338:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1338:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1324:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1324:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1324:31 ; ia-et-moi.html:1324:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;1 490 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1338:37 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1338:37 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1324:37 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1324:37 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1324:37 ; ia-et-moi.html:1324:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;1 490 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1338:55 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1338:55 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1324:55 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1324:55 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1324:55 ; ia-et-moi.html:1324:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;td data-label="Licence/an"&gt;590 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1339:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1339:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1325:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1325:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1325:31 ; ia-et-moi.html:1325:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;td data-label="Licence/an"&gt;590 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1339:38 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1339:38 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1325:38 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1325:38 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1325:38 ; ia-et-moi.html:1325:38 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Licence/an"&gt;590 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1339:47 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1339:47 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1325:47 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1325:47 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1325:47 ; ia-et-moi.html:1325:47 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Setup | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;2 900 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1349:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1349:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1335:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1335:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1335:31 ; ia-et-moi.html:1335:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;2 900 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1349:37 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1349:37 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1335:37 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1335:37 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1335:37 ; ia-et-moi.html:1335:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;2 900 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1349:55 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1349:55 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1335:55 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1335:55 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1335:55 ; ia-et-moi.html:1335:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;td data-label="Licence/an"&gt;1 190 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1350:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1350:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1336:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1336:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1336:31 ; ia-et-moi.html:1336:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;td data-label="Licence/an"&gt;1 190 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1350:38 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1350:38 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1336:38 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1336:38 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1336:38 ; ia-et-moi.html:1336:38 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Licence/an"&gt;1 190 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1350:49 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1350:49 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1336:49 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1336:49 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1336:49 ; ia-et-moi.html:1336:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Setup | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;4 500 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1360:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1360:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1346:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1346:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1346:31 ; ia-et-moi.html:1346:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;4 500 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1360:37 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1360:37 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1346:37 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1346:37 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1346:37 ; ia-et-moi.html:1346:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;4 500 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1360:55 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1360:55 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1346:55 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1346:55 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1346:55 ; ia-et-moi.html:1346:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;td data-label="Licence/an"&gt;1 790 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1361:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1361:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1347:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1347:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1347:31 ; ia-et-moi.html:1347:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;td data-label="Licence/an"&gt;1 790 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1361:38 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1361:38 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1347:38 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1347:38 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1347:38 ; ia-et-moi.html:1347:38 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Licence/an"&gt;1 790 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1361:49 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1361:49 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1347:49 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1347:49 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1347:49 ; ia-et-moi.html:1347:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Setup | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;dès 6 990 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1371:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1371:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1357:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1357:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1357:31 ; ia-et-moi.html:1357:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;dès 6 990 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1371:37 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1371:37 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1357:37 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1357:37 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1357:37 ; ia-et-moi.html:1357:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td data-label="Setup HT"&gt;&lt;strong&gt;dès 6 990 €&lt;/strong&gt;&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1371:59 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1371:59 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1357:59 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1357:59 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1357:59 ; ia-et-moi.html:1357:59 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;td data-label="Licence/an"&gt;sur devis&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1372:31 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1372:31 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1358:31 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1358:31 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1358:31 ; ia-et-moi.html:1358:31 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;td data-label="Licence/an"&gt;sur devis&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1372:38 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1372:38 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1358:38 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1358:38 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1358:38 ; ia-et-moi.html:1358:38 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="roi-slider-value" id="vRate"&gt;45 €/h&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1425:64 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1425:64 ; _backups/index_avant_shift_2026-09-30.html:2348:58 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1411:64 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1411:64 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1411:64 ; ia-et-moi.html:1411:64 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| / mois | &lt;span class="roi-slider-name"&gt;Dossiers ratés / mois (manque de réactivité)&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1432:64 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1432:64 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1418:64 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1418:64 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1418:64 ; ia-et-moi.html:1418:64 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="roi-slider-value" id="vMargin"&gt;800 €&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1441:67 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1441:67 ; _backups/index_avant_shift_2026-09-30.html:2364:61 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1427:67 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1427:67 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1427:67 ; ia-et-moi.html:1427:67 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-result-value" id="roiTotal"&gt;38 720 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1451:66 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1451:66 ; _backups/index_avant_shift_2026-09-30.html:2372:60 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1437:66 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1437:66 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1437:66 ; ia-et-moi.html:1437:66 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-result-meta"&gt;par an · &lt;strong id="roiMonth"&gt;3 227 €&lt;/strong&gt; par mois&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1452:81 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1452:81 ; _backups/index_avant_shift_2026-09-30.html:2373:75 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1438:81 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1438:81 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1438:81 ; ia-et-moi.html:1438:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | Un assistant IA Pro à &lt;strong&gt;2 900 €&lt;/strong&gt; se rembourse en &lt;strong id="paybackTime"&gt;~4 semaines&lt;/strong&gt;. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1456:51 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1456:51 ; _backups/index_avant_shift_2026-09-30.html:2377:45 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1442:51 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1442:51 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1442:51 ; ia-et-moi.html:1442:51 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | Pourquoi un diagnostic à 390 € si la concurrence en propose à 0 € ? | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1494:42 ; _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1494:77 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1494:42 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1494:77 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1480:42 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1480:77 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1480:42 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1480:77 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1480:42 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1480:77 ; ia-et-moi.html:1480:42 ; ia-et-moi.html:1480:77 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | Les 390 € sont déduits si on construit derrière (sous 60 jours) — donc en pratique, vous ne payez que si vous repartez sans rien faire. Et même là, vous repartez avec un | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1500:23 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1500:23 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1486:23 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1486:23 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1486:23 ; ia-et-moi.html:1486:23 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | exemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de &lt;strong&gt;1 490 € HT&lt;/strong&gt; + 590 €/an de licence. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1512:238 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1512:238 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1498:238 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1498:238 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1498:238 ; ia-et-moi.html:1498:238 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | xemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de &lt;strong&gt;1 490 € HT&lt;/strong&gt; + 590 €/an de licence. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1512:240 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1512:240 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1498:240 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1498:240 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1498:240 ; ia-et-moi.html:1498:240 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ommerciales OU onboarding clients), livré en 7 jours, à partir de &lt;strong&gt;1 490 € HT&lt;/strong&gt; + 590 €/an de licence. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1512:258 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1512:258 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1498:258 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1498:258 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1498:258 ; ia-et-moi.html:1498:258 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | mmerciales OU onboarding clients), livré en 7 jours, à partir de &lt;strong&gt;1 490 € HT&lt;/strong&gt; + 590 €/an de licence. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1512:259 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1512:259 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1498:259 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1498:259 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1498:259 ; ia-et-moi.html:1498:259 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | les OU onboarding clients), livré en 7 jours, à partir de &lt;strong&gt;1 490 € HT&lt;/strong&gt; + 590 €/an de licence. | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1512:266 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1512:266 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1498:266 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1498:266 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1498:266 ; ia-et-moi.html:1498:266 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | La &lt;strong&gt;licence annuelle&lt;/strong&gt; couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:26 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:26 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:26 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:26 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:26 ; ia-et-moi.html:1537:26 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ce annuelle&lt;/strong&gt; couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:131 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:131 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:131 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:131 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:131 ; ia-et-moi.html:1537:131 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | e annuelle&lt;/strong&gt; couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:132 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:132 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:132 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:132 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:132 ; ia-et-moi.html:1537:132 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:152 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:152 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:152 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:152 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:152 ; ia-et-moi.html:1537:152 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | ouvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:153 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:153 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:153 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:153 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:153 ; ia-et-moi.html:1537:153 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:169 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:169 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:169 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:169 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:169 ; ia-et-moi.html:1537:169 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1551:170 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1551:170 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1537:170 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1537:170 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1537:170 ; ia-et-moi.html:1537:170 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | return n.toLocaleString('fr-FR') + ' €'; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1802:42 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1802:42 ; _backups/index_avant_shift_2026-09-30.html:3002:42 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1788:42 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1788:42 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1788:42 ; ia-et-moi.html:1788:42 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | document.getElementById('vRate').textContent = rate + ' €/h'; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1817:61 ; _backups/ateliers-shift-2026-10-09/ia-et-moi.html:1817:61 ; _backups/index_avant_shift_2026-09-30.html:3019:61 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html:1803:61 ; _backups/navigation-formations-2026-10-09/ia-et-moi.html:1803:61 ; _DEPLOIEMENT_PROD/ia-et-moi.html:1803:61 ; ia-et-moi.html:1803:61 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;p&gt;Polices utilisées&amp;nbsp;: Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font License).&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:385:79 ; _backups/ateliers-shift-2026-10-09/mentions-legales.html:385:79 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:371:79 ; _backups/navigation-formations-2026-10-09/mentions-legales.html:371:79 ; _DEPLOIEMENT_PROD/mentions-legales.html:371:79 ; mentions-legales.html:371:79 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| License | &lt;p&gt;Polices utilisées&amp;nbsp;: Plus Jakarta Sans et DM Sans (Google Fonts, licence Open Font License).&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:385:97 ; _backups/ateliers-shift-2026-10-09/mentions-legales.html:385:97 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:371:97 ; _backups/navigation-formations-2026-10-09/mentions-legales.html:371:97 ; _DEPLOIEMENT_PROD/mentions-legales.html:371:97 ; mentions-legales.html:371:97 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | ines illustrations ou photographies d'illustration sectorielle proviennent de banques d'images sous licence (Unsplash, Pexels). Le crédit individuel est mentionné lorsqu'il est exigé par la licence.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:386:115 ; _backups/ateliers-shift-2026-10-09/mentions-legales.html:386:115 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:372:115 ; _backups/navigation-formations-2026-10-09/mentions-legales.html:372:115 ; _DEPLOIEMENT_PROD/mentions-legales.html:372:115 ; mentions-legales.html:372:115 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | ages sous licence (Unsplash, Pexels). Le crédit individuel est mentionné lorsqu'il est exigé par la licence.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:386:205 ; _backups/ateliers-shift-2026-10-09/mentions-legales.html:386:205 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html:372:205 ; _backups/navigation-formations-2026-10-09/mentions-legales.html:372:205 ; _DEPLOIEMENT_PROD/mentions-legales.html:372:205 ; mentions-legales.html:372:205 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | if(a.q5==='outil') return {cls:'utile',txt:'✅ &lt;strong&gt;Ton besoin dépasse le simple abonnement IA.&lt;/strong&gt; Tu cherches un vrai outil métier. Les Skills et Codex peuvent accélérer sa conception, mais il faut d’abord cadrer les utilisateurs, les données e | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:620:86 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:620:86 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:606:86 ; _backups/navigation-formations-2026-10-09/radar-ia.html:606:86 ; _DEPLOIEMENT_PROD/radar-ia.html:623:86 ; radar-ia.html:623:86 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | à comparer son coût au temps humain évité sur une mission complexe — pas à comparer le prix de deux abonnements. Plus la tâche est longue, structurée et coûteuse à réaliser manuellement, plus Fable devient pertinent.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:641:361 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:641:361 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:627:361 ; _backups/navigation-formations-2026-10-09/radar-ia.html:627:361 ; _DEPLOIEMENT_PROD/radar-ia.html:644:361 ; radar-ia.html:644:361 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | truit supprime cette friction pour de bon. Le coût, ce n’est pas l’outil — il est inclus dans votre abonnement — c’est le temps de cadrage initial. Une demi-journée pour capturer une procédure que vous répétez 20 fois par mois : le calcul se fait tout seul.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:675:337 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:675:337 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:661:337 ; _backups/navigation-formations-2026-10-09/radar-ia.html:661:337 ; _DEPLOIEMENT_PROD/radar-ia.html:678:337 ; radar-ia.html:678:337 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | et ce que ça change sur le délai et le prix. C’est là que se trouve votre gain, pas dans un énième abonnement.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:710:371 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:710:371 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:696:371 ; _backups/navigation-formations-2026-10-09/radar-ia.html:696:371 ; _DEPLOIEMENT_PROD/radar-ia.html:713:371 ; radar-ia.html:713:371 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | z ChatGPT depuis l'application ou le site, vous n'êtes pas concerné par ces prix — vous payez votre abonnement habituel, point. Et « meilleur en maths et en code » : si votre métier n'est pas d'écrire du code, ce n'est pas votre critère.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:736:230 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:736:230 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:722:230 ; _backups/navigation-formations-2026-10-09/radar-ia.html:722:230 ; _DEPLOIEMENT_PROD/radar-ia.html:739:230 ; radar-ia.html:739:230 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Changer d'abonnement pour la dernière version « parce que c'est la dernière » : inutile. Si vous êtes déjà sur une offre payante, vous l'avez. Si vous êtes sur la version gratuite | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:744:74 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:744:74 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:730:74 ; _backups/navigation-formations-2026-10-09/radar-ia.html:730:74 ; _DEPLOIEMENT_PROD/radar-ia.html:747:74 ; radar-ia.html:747:74 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | i vous êtes sur la version gratuite et que vous l'utilisez tous les jours pour votre travail, les 20€/mois de l'offre payante se rentabilisent dès la première heure de temps gagnée. Le vrai investissement n'est pas l'abonnement — c'est d'apprendre à bien s'en s | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:744:308 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:744:308 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:730:308 ; _backups/navigation-formations-2026-10-09/radar-ia.html:730:308 ; _DEPLOIEMENT_PROD/radar-ia.html:747:308 ; radar-ia.html:747:308 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | vous êtes sur la version gratuite et que vous l'utilisez tous les jours pour votre travail, les 20€/mois de l'offre payante se rentabilisent dès la première heure de temps gagnée. Le vrai investissement n'est pas l'abonnement — c'est d'apprendre à bien s'en servir | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:744:309 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:744:309 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:730:309 ; _backups/navigation-formations-2026-10-09/radar-ia.html:730:309 ; _DEPLOIEMENT_PROD/radar-ia.html:747:309 ; radar-ia.html:747:309 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | payante se rentabilisent dès la première heure de temps gagnée. Le vrai investissement n'est pas l'abonnement — c'est d'apprendre à bien s'en servir.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:744:425 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:744:425 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:730:425 ; _backups/navigation-formations-2026-10-09/radar-ia.html:730:425 ; _DEPLOIEMENT_PROD/radar-ia.html:747:425 ; radar-ia.html:747:425 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | iv&gt;Un outil = une secrétaire qui travaille sur votre poste. Elle trie, rédige, range, relance. Sans abonnement cloud, sans données qui circulent. Pour les professions réglementées, c'est une rupture.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:812:167 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:812:167 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:798:167 ; _backups/navigation-formations-2026-10-09/radar-ia.html:798:167 ; _DEPLOIEMENT_PROD/radar-ia.html:815:167 ; radar-ia.html:815:167 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Claude Max : 90€/mois. Si ça vous remplace 10h de tâches de secrétariat par semaine — à 25€/h de valeur temps — vous êtes à 1 000€ de valeur produite pour 90€ investis. La ques | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:816:79 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:816:79 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:802:79 ; _backups/navigation-formations-2026-10-09/radar-ia.html:802:79 ; _DEPLOIEMENT_PROD/radar-ia.html:819:79 ; radar-ia.html:819:79 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Claude Max : 90€/mois. Si ça vous remplace 10h de tâches de secrétariat par semaine — à 25€/h de valeur temps — vous êtes à 1 000€ de valeur produite pour 90€ investis. La question | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:816:80 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:816:80 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:802:80 ; _backups/navigation-formations-2026-10-09/radar-ia.html:802:80 ; _DEPLOIEMENT_PROD/radar-ia.html:819:80 ; radar-ia.html:819:80 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | lcul&lt;/div&gt;Claude Max : 90€/mois. Si ça vous remplace 10h de tâches de secrétariat par semaine — à 25€/h de valeur temps — vous êtes à 1 000€ de valeur produite pour 90€ investis. La question n'est pas "est-ce que c'est cher". La question c'est : combien coûte u | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:816:154 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:816:154 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:802:154 ; _backups/navigation-formations-2026-10-09/radar-ia.html:802:154 ; _DEPLOIEMENT_PROD/radar-ia.html:819:154 ; radar-ia.html:819:154 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | vous remplace 10h de tâches de secrétariat par semaine — à 25€/h de valeur temps — vous êtes à 1 000€ de valeur produite pour 90€ investis. La question n'est pas "est-ce que c'est cher". La question c'est : combien coûte une heure de votre temps ?&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:816:193 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:816:193 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:802:193 ; _backups/navigation-formations-2026-10-09/radar-ia.html:802:193 ; _DEPLOIEMENT_PROD/radar-ia.html:819:193 ; radar-ia.html:819:193 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | de secrétariat par semaine — à 25€/h de valeur temps — vous êtes à 1 000€ de valeur produite pour 90€ investis. La question n'est pas "est-ce que c'est cher". La question c'est : combien coûte une heure de votre temps ?&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:816:221 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:816:221 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:802:221 ; _backups/navigation-formations-2026-10-09/radar-ia.html:802:221 ; _DEPLOIEMENT_PROD/radar-ia.html:819:221 ; radar-ia.html:819:221 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | ées — il peut agir sur votre ordinateur, pas seulement répondre. Et GPT-5.4 mini est disponible sur abonnement gratuit.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:847:247 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:847:247 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:833:247 ; _backups/navigation-formations-2026-10-09/radar-ia.html:833:247 ; _DEPLOIEMENT_PROD/radar-ia.html:850:247 ; radar-ia.html:850:247 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | lass="bloc-label"&gt;⚠️ La vraie contrainte&lt;/div&gt;GPT-5.4 Thinking (le meilleur niveau) est réservé aux abonnements Plus et Pro — à partir de 20€/mois. Si vous n'êtes pas encore abonné et que vous n'avez pas de pratique régulière, cette mise à jour ne change rien pour vous | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:849:136 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:849:136 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:835:136 ; _backups/navigation-formations-2026-10-09/radar-ia.html:835:136 ; _DEPLOIEMENT_PROD/radar-ia.html:852:136 ; radar-ia.html:852:136 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;/div&gt;GPT-5.4 Thinking (le meilleur niveau) est réservé aux abonnements Plus et Pro — à partir de 20€/mois. Si vous n'êtes pas encore abonné et que vous n'avez pas de pratique régulière, cette mise à jour ne change rien pour vous aujourd'hui. Le meilleur outil | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:849:176 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:849:176 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:835:176 ; _backups/navigation-formations-2026-10-09/radar-ia.html:835:176 ; _DEPLOIEMENT_PROD/radar-ia.html:852:176 ; radar-ia.html:852:176 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | /div&gt;GPT-5.4 Thinking (le meilleur niveau) est réservé aux abonnements Plus et Pro — à partir de 20€/mois. Si vous n'êtes pas encore abonné et que vous n'avez pas de pratique régulière, cette mise à jour ne change rien pour vous aujourd'hui. Le meilleur outil du mo | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:849:177 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:849:177 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:835:177 ; _backups/navigation-formations-2026-10-09/radar-ia.html:835:177 ; _DEPLOIEMENT_PROD/radar-ia.html:852:177 ; radar-ia.html:852:177 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;20€/mois pour Plus. Si vous gagnez 1h par semaine sur la rédaction et l'analyse — à votre taux horaire — vous êtes rentable dès le premier mois. La vraie question | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:851:66 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:851:66 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:837:66 ; _backups/navigation-formations-2026-10-09/radar-ia.html:837:66 ; _DEPLOIEMENT_PROD/radar-ia.html:854:66 ; radar-ia.html:854:66 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;20€/mois pour Plus. Si vous gagnez 1h par semaine sur la rédaction et l'analyse — à votre taux horaire — vous êtes rentable dès le premier mois. La vraie question : est | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:851:67 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:851:67 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:837:67 ; _backups/navigation-formations-2026-10-09/radar-ia.html:837:67 ; _DEPLOIEMENT_PROD/radar-ia.html:854:67 ; radar-ia.html:854:67 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;div class="bloc-verdict"&gt;&lt;strong&gt;Le verdict :&lt;/strong&gt; Si vous avez déjà un abonnement et une pratique régulière — passez dessus, c'est mieux. Si vous démarrez — commencez. La version que vous utilisez déjà suffit pour apprendre. On s'occupe de l | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:853:78 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:853:78 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:839:78 ; _backups/navigation-formations-2026-10-09/radar-ia.html:839:78 ; _DEPLOIEMENT_PROD/radar-ia.html:856:78 ; radar-ia.html:856:78 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | {id:'q4', text:'Tu as un abonnement payant à un outil IA (ChatGPT Plus, Claude Pro...) ?', opts:[{v:'oui',l:'Oui'},{v:'non',l:'Non, version gratuite uniquement'},{v:'sais',l:'Je ne sais pas ce qu | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:858:32 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:858:32 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:844:32 ; _backups/navigation-formations-2026-10-09/radar-ia.html:844:32 ; _DEPLOIEMENT_PROD/radar-ia.html:861:32 ; radar-ia.html:861:32 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | e',txt:'✅ &lt;strong&gt;Utile.&lt;/strong&gt; Tu as les bons usages. Si tu n\'es pas encore abonné, un Plus à 20€/mois se rembourse vite sur le temps gagné.'}; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:869:120 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:869:120 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:855:120 ; _backups/navigation-formations-2026-10-09/radar-ia.html:855:120 ; _DEPLOIEMENT_PROD/radar-ia.html:872:120 ; radar-ia.html:872:120 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | ',txt:'✅ &lt;strong&gt;Utile.&lt;/strong&gt; Tu as les bons usages. Si tu n\'es pas encore abonné, un Plus à 20€/mois se rembourse vite sur le temps gagné.'}; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:869:121 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:869:121 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:855:121 ; _backups/navigation-formations-2026-10-09/radar-ia.html:855:121 ; _DEPLOIEMENT_PROD/radar-ia.html:872:121 ; radar-ia.html:872:121 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | circulent partout. Parfois pour parler de la même chose. Parfois pour vendre des prestations à 5 000€ qui valent 500€. Voilà ce que c\'est vraiment.', | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:129 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:876:129 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:862:129 ; _backups/navigation-formations-2026-10-09/radar-ia.html:862:129 ; _DEPLOIEMENT_PROD/radar-ia.html:879:129 ; radar-ia.html:879:129 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | t. Parfois pour parler de la même chose. Parfois pour vendre des prestations à 5 000€ qui valent 500€. Voilà ce que c\'est vraiment.', | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:145 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:876:145 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:862:145 ; _backups/navigation-formations-2026-10-09/radar-ia.html:862:145 ; _DEPLOIEMENT_PROD/radar-ia.html:879:145 ; radar-ia.html:879:145 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | de centimes selon le modèle. Sur 1 000 traitements par mois, ça chiffre. Et il faut en plus payer l'abonnement à l'outil d'orchestration. Un agent mal conçu peut coûter plus cher qu'il ne rapporte. La configuration initiale est aussi plus longue et demande une vraie exp | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:888:412 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:888:412 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:874:412 ; _backups/navigation-formations-2026-10-09/radar-ia.html:874:412 ; _DEPLOIEMENT_PROD/radar-ia.html:891:412 ; radar-ia.html:891:412 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Workflow simple : 0 à 50€/mois. Automation intermédiaire : 50 à 150€/mois. Agent IA sur-mesure : configuration 490 à 890€ + crédits API variables selon usage. La règle : on commence tou | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:890:88 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:890:88 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:88 ; _backups/navigation-formations-2026-10-09/radar-ia.html:876:88 ; _DEPLOIEMENT_PROD/radar-ia.html:893:88 ; radar-ia.html:893:88 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;div class="bloc-roi"&gt;&lt;div class="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Workflow simple : 0 à 50€/mois. Automation intermédiaire : 50 à 150€/mois. Agent IA sur-mesure : configuration 490 à 890€ + crédits API variables selon usage. La règle : on commence toujours | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:890:89 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:890:89 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:89 ; _backups/navigation-formations-2026-10-09/radar-ia.html:876:89 ; _DEPLOIEMENT_PROD/radar-ia.html:893:89 ; radar-ia.html:893:89 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ss="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Workflow simple : 0 à 50€/mois. Automation intermédiaire : 50 à 150€/mois. Agent IA sur-mesure : configuration 490 à 890€ + crédits API variables selon usage. La règle : on commence toujours par le workflow. Si le workflow ne su | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:890:131 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:890:131 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:131 ; _backups/navigation-formations-2026-10-09/radar-ia.html:876:131 ; _DEPLOIEMENT_PROD/radar-ia.html:893:131 ; radar-ia.html:893:131 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | s="bloc-label"&gt;💸 Le calcul&lt;/div&gt;Workflow simple : 0 à 50€/mois. Automation intermédiaire : 50 à 150€/mois. Agent IA sur-mesure : configuration 490 à 890€ + crédits API variables selon usage. La règle : on commence toujours par le workflow. Si le workflow ne suffit | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:890:132 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:890:132 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:132 ; _backups/navigation-formations-2026-10-09/radar-ia.html:876:132 ; _DEPLOIEMENT_PROD/radar-ia.html:893:132 ; radar-ia.html:893:132 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | à 50€/mois. Automation intermédiaire : 50 à 150€/mois. Agent IA sur-mesure : configuration 490 à 890€ + crédits API variables selon usage. La règle : on commence toujours par le workflow. Si le workflow ne suffit pas, on passe à l'automation. L'agent IA, c'est | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:890:184 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:890:184 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:876:184 ; _backups/navigation-formations-2026-10-09/radar-ia.html:876:184 ; _DEPLOIEMENT_PROD/radar-ia.html:893:184 ; radar-ia.html:893:184 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;p&gt;Le quota : sur abonnement gratuit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:19 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:19 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:19 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:19 ; _DEPLOIEMENT_PROD/radar-ia.html:923:19 ; radar-ia.html:923:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;p&gt;Le quota : sur abonnement gratuit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:52 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:52 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:52 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:52 ; _DEPLOIEMENT_PROD/radar-ia.html:923:52 ; radar-ia.html:923:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;p&gt;Le quota : sur abonnement gratuit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus de 3 | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:53 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:53 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:53 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:53 ; _DEPLOIEMENT_PROD/radar-ia.html:923:53 ; radar-ia.html:923:53 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | sur abonnement gratuit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus de 3 fois par mois — ils choisissent leurs sujets et c'est suffisant.&lt;/ | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:115 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:115 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:115 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:115 ; _DEPLOIEMENT_PROD/radar-ia.html:923:115 ; radar-ia.html:923:115 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | uit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus de 3 fois par mois — ils choisissent leurs sujets et c'est suffisant.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:134 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:134 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:134 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:134 ; _DEPLOIEMENT_PROD/radar-ia.html:923:134 ; radar-ia.html:923:134 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | it ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus de 3 fois par mois — ils choisissent leurs sujets et c'est suffisant.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:920:135 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:920:135 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:906:135 ; _backups/navigation-formations-2026-10-09/radar-ia.html:906:135 ; _DEPLOIEMENT_PROD/radar-ia.html:923:135 ; radar-ia.html:923:135 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | s="bloc-contrainte"&gt;&lt;div class="bloc-label"&gt;⚠️ La vraie contrainte&lt;/div&gt;3 utilisations par mois sur abonnement standard — c'est peu si vous faites de la veille quotidienne. Et la qualité dépend de la façon dont vous posez la question. Une mauvaise question = un rapport | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:924:110 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:924:110 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:910:110 ; _backups/navigation-formations-2026-10-09/radar-ia.html:910:110 ; _DEPLOIEMENT_PROD/radar-ia.html:927:110 ; radar-ia.html:927:110 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | elles sur internet, c'est 8h par mois. Le deep research en couvre une bonne partie en 30 minutes. L'abonnement Plus à 20€/mois se rembourse à la première veille réglementaire sérieuse.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:926:233 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:926:233 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:912:233 ; _backups/navigation-formations-2026-10-09/radar-ia.html:912:233 ; _DEPLOIEMENT_PROD/radar-ia.html:929:233 ; radar-ia.html:929:233 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | c'est 8h par mois. Le deep research en couvre une bonne partie en 30 minutes. L'abonnement Plus à 20€/mois se rembourse à la première veille réglementaire sérieuse.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:926:253 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:926:253 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:912:253 ; _backups/navigation-formations-2026-10-09/radar-ia.html:912:253 ; _DEPLOIEMENT_PROD/radar-ia.html:929:253 ; radar-ia.html:929:253 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | 'est 8h par mois. Le deep research en couvre une bonne partie en 30 minutes. L'abonnement Plus à 20€/mois se rembourse à la première veille réglementaire sérieuse.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:926:254 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:926:254 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:912:254 ; _backups/navigation-formations-2026-10-09/radar-ia.html:912:254 ; _DEPLOIEMENT_PROD/radar-ia.html:929:254 ; radar-ia.html:929:254 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | ssions qui font de la veille réglementaire régulière — immo, assurance, droit, BTP. Pas besoin de l'abonnement Pro pour commencer. Testez sur 3 sujets que vous connaissez bien — vous verrez immédiatement si la qualité est au niveau.&lt;/div&gt;`, | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:928:177 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:928:177 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:914:177 ; _backups/navigation-formations-2026-10-09/radar-ia.html:914:177 ; _DEPLOIEMENT_PROD/radar-ia.html:931:177 ; radar-ia.html:931:177 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | e"&gt;&lt;div class="bloc-label"&gt;⚠️ La vraie contrainte&lt;/div&gt;Gemini dans Workspace est disponible sur les abonnements Business Standard (12€/mois par utilisateur) et au-dessus. Si vous êtes sur la version gratuite de Gmail, vous n'y avez pas accès. Et pour les données très se | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:959:127 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:959:127 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:945:127 ; _backups/navigation-formations-2026-10-09/radar-ia.html:945:127 ; _DEPLOIEMENT_PROD/radar-ia.html:962:127 ; radar-ia.html:962:127 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | vraie contrainte&lt;/div&gt;Gemini dans Workspace est disponible sur les abonnements Business Standard (12€/mois par utilisateur) et au-dessus. Si vous êtes sur la version gratuite de Gmail, vous n'y avez pas accès. Et pour les données très sensibles (clients, donnée | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:959:160 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:959:160 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:945:160 ; _backups/navigation-formations-2026-10-09/radar-ia.html:945:160 ; _DEPLOIEMENT_PROD/radar-ia.html:962:160 ; radar-ia.html:962:160 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | raie contrainte&lt;/div&gt;Gemini dans Workspace est disponible sur les abonnements Business Standard (12€/mois par utilisateur) et au-dessus. Si vous êtes sur la version gratuite de Gmail, vous n'y avez pas accès. Et pour les données très sensibles (clients, données fin | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:959:161 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:959:161 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:945:161 ; _backups/navigation-formations-2026-10-09/radar-ia.html:945:161 ; _DEPLOIEMENT_PROD/radar-ia.html:962:161 ; radar-ia.html:962:161 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | ensibles (clients, données financières), vérifiez les conditions de traitement des données de votre abonnement avant d'activer.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:959:396 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:959:396 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:945:396 ; _backups/navigation-formations-2026-10-09/radar-ia.html:945:396 ; _DEPLOIEMENT_PROD/radar-ia.html:962:396 ; radar-ia.html:962:396 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | eut en couvrir 30 à 40% en quelques clics. Sur un mois de travail, c'est 8 à 10h récupérées. Pour 12€/mois par utilisateur (souvent déjà dans votre abonnement existant), le calcul est vite fait.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:961:238 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:961:238 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:947:238 ; _backups/navigation-formations-2026-10-09/radar-ia.html:947:238 ; _DEPLOIEMENT_PROD/radar-ia.html:964:238 ; radar-ia.html:964:238 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | ut en couvrir 30 à 40% en quelques clics. Sur un mois de travail, c'est 8 à 10h récupérées. Pour 12€/mois par utilisateur (souvent déjà dans votre abonnement existant), le calcul est vite fait.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:961:239 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:961:239 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:947:239 ; _backups/navigation-formations-2026-10-09/radar-ia.html:947:239 ; _DEPLOIEMENT_PROD/radar-ia.html:964:239 ; radar-ia.html:964:239 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | n mois de travail, c'est 8 à 10h récupérées. Pour 12€/mois par utilisateur (souvent déjà dans votre abonnement existant), le calcul est vite fait.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:961:286 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:961:286 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:947:286 ; _backups/navigation-formations-2026-10-09/radar-ia.html:947:286 ; _DEPLOIEMENT_PROD/radar-ia.html:964:286 ; radar-ia.html:964:286 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | rong&gt;Le verdict :&lt;/strong&gt; Si vous utilisez Gmail et Google Docs tous les jours et que vous avez un abonnement Workspace payant — activez-le maintenant, vous l'avez peut-être déjà sans le savoir. Si vous n'êtes pas sur Google, ce n'est pas une raison de migrer uniquemen | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:963:130 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:963:130 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:949:130 ; _backups/navigation-formations-2026-10-09/radar-ia.html:949:130 ; _DEPLOIEMENT_PROD/radar-ia.html:966:130 ; radar-ia.html:966:130 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | {id:'q5', text:'Tu sais si tu as un abonnement Google Workspace payant ?', opts:[{v:'oui',l:'Oui, j\'ai Business ou Workspace'},{v:'non',l:'Non, j\'ai la version gratuite'},{v:'sais',l:'Je ne sais pas ce qu | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:969:43 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:969:43 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:955:43 ; _backups/navigation-formations-2026-10-09/radar-ia.html:955:43 ; _DEPLOIEMENT_PROD/radar-ia.html:972:43 ; radar-ia.html:972:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | if(a.q5==='non') return {cls:'attente',txt:'⏳ &lt;strong&gt;Vérifie d\'abord ton abonnement.&lt;/strong&gt; Sur la version gratuite, Gemini n\'est pas inclus. Mais si tu passes plus de 30 min/jour sur Gmail, le passage à Business Standard à 12€/mois est ren | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:978:78 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:978:78 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:964:78 ; _backups/navigation-formations-2026-10-09/radar-ia.html:964:78 ; _DEPLOIEMENT_PROD/radar-ia.html:981:78 ; radar-ia.html:981:78 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | est pas inclus. Mais si tu passes plus de 30 min/jour sur Gmail, le passage à Business Standard à 12€/mois est rentable.'}; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:978:234 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:978:234 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:964:234 ; _backups/navigation-formations-2026-10-09/radar-ia.html:964:234 ; _DEPLOIEMENT_PROD/radar-ia.html:981:234 ; radar-ia.html:981:234 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | st pas inclus. Mais si tu passes plus de 30 min/jour sur Gmail, le passage à Business Standard à 12€/mois est rentable.'}; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:978:235 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:978:235 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:964:235 ; _backups/navigation-formations-2026-10-09/radar-ia.html:964:235 ; _DEPLOIEMENT_PROD/radar-ia.html:981:235 ; radar-ia.html:981:235 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | onfiguration maintenant = du gain à chaque utilisation. C'est une fonctionnalité disponible sur les abonnements payants — une raison de plus de passer à l'abonnement si ce n'est pas encore fait.&lt;/div&gt;`, | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:998:192 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:998:192 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:984:192 ; _backups/navigation-formations-2026-10-09/radar-ia.html:984:192 ; _DEPLOIEMENT_PROD/radar-ia.html:1001:192 ; radar-ia.html:1001:192 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | C'est une fonctionnalité disponible sur les abonnements payants — une raison de plus de passer à l'abonnement si ce n'est pas encore fait.&lt;/div&gt;`, | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:998:247 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:998:247 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:984:247 ; _backups/navigation-formations-2026-10-09/radar-ia.html:984:247 ; _DEPLOIEMENT_PROD/radar-ia.html:1001:247 ; radar-ia.html:1001:247 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | div&gt;Une violation de données RGPD peut coûter jusqu'à 4% du chiffre d'affaires annuel en amende. Un abonnement Enterprise ChatGPT ou Claude : entre 25 et 40€/mois par utilisateur. Le choix est rapide à faire.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1032:160 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1032:160 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1018:160 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1018:160 ; _DEPLOIEMENT_PROD/radar-ia.html:1035:160 ; radar-ia.html:1035:160 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | du chiffre d'affaires annuel en amende. Un abonnement Enterprise ChatGPT ou Claude : entre 25 et 40€/mois par utilisateur. Le choix est rapide à faire.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1032:216 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1032:216 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1018:216 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1018:216 ; _DEPLOIEMENT_PROD/radar-ia.html:1035:216 ; radar-ia.html:1035:216 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | du chiffre d'affaires annuel en amende. Un abonnement Enterprise ChatGPT ou Claude : entre 25 et 40€/mois par utilisateur. Le choix est rapide à faire.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1032:217 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1032:217 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1018:217 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1018:217 ; _DEPLOIEMENT_PROD/radar-ia.html:1035:217 ; radar-ia.html:1035:217 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | abel"&gt;💸 Le calcul&lt;/div&gt;Version gratuite : déjà très capable pour un usage régulier. Version Pro : 20€/mois — le même prix qu'un abonnement ChatGPT Plus. Si vous passez plus de 30 minutes par semaine à chercher des informations professionnelles sur internet, Per | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1067:141 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1067:141 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1053:141 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1053:141 ; _DEPLOIEMENT_PROD/radar-ia.html:1070:141 ; radar-ia.html:1070:141 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | bel"&gt;💸 Le calcul&lt;/div&gt;Version gratuite : déjà très capable pour un usage régulier. Version Pro : 20€/mois — le même prix qu'un abonnement ChatGPT Plus. Si vous passez plus de 30 minutes par semaine à chercher des informations professionnelles sur internet, Perplexi | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1067:142 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1067:142 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1053:142 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1053:142 ; _DEPLOIEMENT_PROD/radar-ia.html:1070:142 ; radar-ia.html:1070:142 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | on gratuite : déjà très capable pour un usage régulier. Version Pro : 20€/mois — le même prix qu'un abonnement ChatGPT Plus. Si vous passez plus de 30 minutes par semaine à chercher des informations professionnelles sur internet, Perplexity vous rembourse son abonnement | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1067:169 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1067:169 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1053:169 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1053:169 ; _DEPLOIEMENT_PROD/radar-ia.html:1070:169 ; radar-ia.html:1070:169 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | ar semaine à chercher des informations professionnelles sur internet, Perplexity vous rembourse son abonnement dès la première semaine.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1067:329 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1067:329 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1053:329 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1053:329 ; _DEPLOIEMENT_PROD/radar-ia.html:1070:329 ; radar-ia.html:1070:329 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | {id:'q5', text:'Est-ce que tu as un abonnement à des newsletters ou des sources de veille professionnelle ?', opts:[{v:'oui',l:'Oui, plusieurs'},{v:'un',l:'Une ou deux'},{v:'non',l:'Non, je cherche au cas p | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1075:43 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1075:43 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1061:43 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1061:43 ; _DEPLOIEMENT_PROD/radar-ia.html:1078:43 ; radar-ia.html:1078:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | oureux et conforme. GPT pour tout ce qui doit être fluide et convaincant. Si vous n'avez qu'un seul abonnement : commencez par Claude — la rigueur est plus importante que le style dans les secteurs que j'accompagne.&lt;/div&gt;`, | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1105:194 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1105:194 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1091:194 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1091:194 ; _DEPLOIEMENT_PROD/radar-ia.html:1108:194 ; radar-ia.html:1108:194 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | est formel et réglementé, GPT pour tout ce qui est commercial et communication. Si tu n\'as qu\'un abonnement : commence par Claude.'}; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1121:205 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1121:205 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1107:205 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1107:205 ; _DEPLOIEMENT_PROD/radar-ia.html:1124:205 ; radar-ia.html:1124:205 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | title:'Automatiser son suivi client sans CRM à 200€/mois. Ce que font déjà les pros qui prennent de l\'avance.', | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1129:55 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1129:55 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1115:55 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1115:55 ; _DEPLOIEMENT_PROD/radar-ia.html:1132:55 ; radar-ia.html:1132:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | title:'Automatiser son suivi client sans CRM à 200€/mois. Ce que font déjà les pros qui prennent de l\'avance.', | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1129:56 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1129:56 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1115:56 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1115:56 ; _DEPLOIEMENT_PROD/radar-ia.html:1132:56 ; radar-ia.html:1132:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | e j'ai mis en place pour plusieurs clients cette année : un système simple, sans CRM complexe, sans abonnement à 200€/mois. Un formulaire de contact déclenche automatiquement un email de confirmation personnalisé, crée une fiche dans un tableau de suivi partagé, et prog | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1133:109 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1133:109 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1119:109 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1119:109 ; _DEPLOIEMENT_PROD/radar-ia.html:1136:109 ; radar-ia.html:1136:109 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ace pour plusieurs clients cette année : un système simple, sans CRM complexe, sans abonnement à 200€/mois. Un formulaire de contact déclenche automatiquement un email de confirmation personnalisé, crée une fiche dans un tableau de suivi partagé, et programme u | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1133:125 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1133:125 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1119:125 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1119:125 ; _DEPLOIEMENT_PROD/radar-ia.html:1136:125 ; radar-ia.html:1136:125 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | ce pour plusieurs clients cette année : un système simple, sans CRM complexe, sans abonnement à 200€/mois. Un formulaire de contact déclenche automatiquement un email de confirmation personnalisé, crée une fiche dans un tableau de suivi partagé, et programme un rap | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1133:126 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1133:126 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1119:126 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1119:126 ; _DEPLOIEMENT_PROD/radar-ia.html:1136:126 ; radar-ia.html:1136:126 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | pect oublié = un devis non envoyé = une affaire perdue. Sur un artisan avec un panier moyen de 3 000€ par chantier, deux prospects récupérés par mois grâce à une relance automatique = 6 000€ de CA supplémentaire. Pour un système qui coûte 30 à 50€/mois en abonn | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1141:171 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1141:171 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1127:171 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1127:171 ; _DEPLOIEMENT_PROD/radar-ia.html:1144:171 ; radar-ia.html:1144:171 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | en de 3 000€ par chantier, deux prospects récupérés par mois grâce à une relance automatique = 6 000€ de CA supplémentaire. Pour un système qui coûte 30 à 50€/mois en abonnements. Le calcul est simple.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1141:260 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1141:260 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1127:260 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1127:260 ; _DEPLOIEMENT_PROD/radar-ia.html:1144:260 ; radar-ia.html:1144:260 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ois grâce à une relance automatique = 6 000€ de CA supplémentaire. Pour un système qui coûte 30 à 50€/mois en abonnements. Le calcul est simple.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1141:317 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1141:317 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1127:317 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1127:317 ; _DEPLOIEMENT_PROD/radar-ia.html:1144:317 ; radar-ia.html:1144:317 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | is grâce à une relance automatique = 6 000€ de CA supplémentaire. Pour un système qui coûte 30 à 50€/mois en abonnements. Le calcul est simple.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1141:318 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1141:318 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1127:318 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1127:318 ; _DEPLOIEMENT_PROD/radar-ia.html:1144:318 ; radar-ia.html:1144:318 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | à une relance automatique = 6 000€ de CA supplémentaire. Pour un système qui coûte 30 à 50€/mois en abonnements. Le calcul est simple.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1141:327 ; _backups/ateliers-shift-2026-10-09/radar-ia.html:1141:327 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html:1127:327 ; _backups/navigation-formations-2026-10-09/radar-ia.html:1127:327 ; _DEPLOIEMENT_PROD/radar-ia.html:1144:327 ; radar-ia.html:1144:327 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ucturé, synthèse rédigée, archivage traçable, hébergement Mistral EU. &lt;strong&gt;Palier Expert · 4 500 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1225:256 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1225:256 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1211:256 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1211:256 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1211:256 ; secteur-assurance.html:1211:256 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ification de sinistre (analyse du déclaratif, pièces à demander). &lt;strong&gt;Niveau Bras droit · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1229:250 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1229:250 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1215:250 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1215:250 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1215:250 ; secteur-assurance.html:1215:250 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | gurer un suivi de renouvellement de contrats avec alertes 60j avant échéance. &lt;strong&gt;Journée · 690 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1233:205 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1233:205 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1219:205 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1219:205 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1219:205 ; secteur-assurance.html:1219:205 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ize:.88rem"&gt;Audit pour identifier les usages compatibles avec votre conformité DDA. &lt;strong&gt;150-690 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1296:147 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1296:147 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1282:147 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1282:147 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1282:147 ; secteur-assurance.html:1282:147 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | tral EU pour les données sensibles. Recueil de besoins, devis, suivi sinistres. &lt;strong&gt;1 490-6 990 €+&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1304:204 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1304:204 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1290:204 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1290:204 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1290:204 ; secteur-assurance.html:1290:204 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ls de relance, les explications de garanties, la qualification de premier niveau. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1312:191 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1312:191 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1298:191 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1298:191 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1298:191 ; secteur-assurance.html:1298:191 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ze:.88rem"&gt;Co-construction sur un cas (recueil de besoins, qualification sinistre). &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1320:148 ; _backups/ateliers-shift-2026-10-09/secteur-assurance.html:1320:148 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html:1306:148 ; _backups/navigation-formations-2026-10-09/secteur-assurance.html:1306:148 ; _DEPLOIEMENT_PROD/secteur-assurance.html:1306:148 ; secteur-assurance.html:1306:148 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | fournisseurs. Le dirigeant n'a aucune charge technique à porter. &lt;strong&gt;Palier Pro hébergé · 2 900 € + licence&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1225:284 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1225:284 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1211:284 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1211:284 ; _DEPLOIEMENT_PROD/secteur-btp.html:1211:284 ; secteur-btp.html:1211:284 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | nisseurs. Le dirigeant n'a aucune charge technique à porter. &lt;strong&gt;Palier Pro hébergé · 2 900 € + licence&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1225:288 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1225:288 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1211:288 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1211:288 ; _DEPLOIEMENT_PROD/secteur-btp.html:1211:288 ; secteur-btp.html:1211:288 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | M, planning, devis). L'équipe gère elle-même sur sa propre stack Notion. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1229:246 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1229:246 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1215:246 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1215:246 ; _DEPLOIEMENT_PROD/secteur-btp.html:1215:246 ; secteur-btp.html:1215:246 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | r pour configurer un devis-type personnalisé avec relances automatiques. &lt;strong&gt;Demi-journée · 390 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1233:201 ; _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1305:201 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1233:201 ; _backups/ateliers-shift-2026-10-09/secteurs.html:1305:201 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1219:201 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1291:201 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1219:201 ; _backups/navigation-formations-2026-10-09/secteurs.html:1291:201 ; _DEPLOIEMENT_PROD/secteur-btp.html:1219:201 ; _DEPLOIEMENT_PROD/secteurs.html:1291:201 ; secteur-btp.html:1219:201 ; secteurs.html:1291:201 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ar un audit pour identifier ce qui prend du temps administratif vs ce qui rapporte. &lt;strong&gt;150-690 €&lt;/strong&gt; · déductible 60j.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1296:169 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1296:169 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1282:169 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1282:169 ; _DEPLOIEMENT_PROD/secteur-btp.html:1282:169 ; secteur-btp.html:1282:169 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. &lt;strong&gt;1 490-6 990 €+ + licence annuelle&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1304:207 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1304:207 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1290:207 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1290:207 ; _DEPLOIEMENT_PROD/secteur-btp.html:1290:207 ; secteur-btp.html:1290:207 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique. &lt;strong&gt;1 490-6 990 €+ + licence annuelle&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1304:212 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1304:212 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1290:212 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1290:212 ; _DEPLOIEMENT_PROD/secteur-btp.html:1290:212 ; secteur-btp.html:1290:212 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | andards, qualifie les demandes entrantes, brouillon des comptes-rendus de visite. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1312:188 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1312:188 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1298:188 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1298:188 ; _DEPLOIEMENT_PROD/secteur-btp.html:1298:188 ; secteur-btp.html:1298:188 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1320:174 ; _backups/ateliers-shift-2026-10-09/secteur-btp.html:1320:174 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html:1306:174 ; _backups/navigation-formations-2026-10-09/secteur-btp.html:1306:174 ; _DEPLOIEMENT_PROD/secteur-btp.html:1306:174 ; secteur-btp.html:1306:174 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | posts existants de son corpus. Voix éditoriale conservée à 90 %. &lt;strong&gt;Niveau Bras droit · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1225:269 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1225:269 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1211:269 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1211:269 ; _DEPLOIEMENT_PROD/secteur-communication.html:1211:269 ; secteur-communication.html:1211:269 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | toriale par client, planning trimestriel, validation interne, archivage. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1229:259 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1229:259 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1215:259 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1215:259 ; _DEPLOIEMENT_PROD/secteur-communication.html:1215:259 ; secteur-communication.html:1215:259 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | rer sa voix éditoriale puis configurer son outil de rédaction d'articles SEO. &lt;strong&gt;Journée · 690 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1233:247 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1233:247 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1219:247 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1219:247 ; _DEPLOIEMENT_PROD/secteur-communication.html:1219:247 ; secteur-communication.html:1219:247 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | style="font-size:.88rem"&gt;Audit pour identifier ce qui vaut la peine d'être outillé. &lt;strong&gt;150-690 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1296:134 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1296:134 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1282:134 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1282:134 ; _DEPLOIEMENT_PROD/secteur-communication.html:1282:134 ; secteur-communication.html:1282:134 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | action sur-mesure, calibré sur votre voix éditoriale (corpus existant analysé). &lt;strong&gt;1 490-6 990 €+&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1304:168 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1304:168 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1290:168 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1290:168 ; _DEPLOIEMENT_PROD/secteur-communication.html:1290:168 ; secteur-communication.html:1290:168 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ent rédacteur conversationnel, calibré sur votre style. Souvent le bon choix ici. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1312:161 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1312:161 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1298:161 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1298:161 ; _DEPLOIEMENT_PROD/secteur-communication.html:1298:161 ; secteur-communication.html:1298:161 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | -size:.88rem"&gt;Atelier de capture de voix éditoriale, puis configuration de l'outil. &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1320:145 ; _backups/ateliers-shift-2026-10-09/secteur-communication.html:1320:145 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html:1306:145 ; _backups/navigation-formations-2026-10-09/secteur-communication.html:1306:145 ; _DEPLOIEMENT_PROD/secteur-communication.html:1306:145 ; secteur-communication.html:1306:145 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | x : questionnaire client MIF II + synthèse rédigée + archivage traçable. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1225:253 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1225:253 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1211:253 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1211:253 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1211:253 ; secteur-finance-comptabilite.html:1211:253 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ails de relance pour pièces manquantes, calibré sur sa voix. &lt;strong&gt;Niveau Métier sécurisé · 1 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1229:223 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1229:223 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1215:223 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1215:223 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1215:223 ; secteur-finance-comptabilite.html:1215:223 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | de bord de suivi des missions sur Notion (jalons, alertes pièces manquantes). &lt;strong&gt;Journée · 690 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1233:225 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1233:225 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1219:225 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1219:225 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1219:225 ; secteur-finance-comptabilite.html:1219:225 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | le="font-size:.88rem"&gt;Audit ciblé sur les usages compatibles avec votre conformité. &lt;strong&gt;150-690 €&lt;/strong&gt; · déductible 60j.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1296:137 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1296:137 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1282:137 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1282:137 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1282:137 ; secteur-finance-comptabilite.html:1282:137 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | génération de notes de synthèse, suivi des missions. Garde-fous MIF II/LCB-FT. &lt;strong&gt;1 490-6 990 €+&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1304:219 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1304:219 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1290:219 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1290:219 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1290:219 ; secteur-finance-comptabilite.html:1290:219 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | es brouillons de mails clients, les explications pédagogiques, la veille fiscale. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1312:171 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1312:171 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1298:171 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1298:171 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1298:171 ; secteur-finance-comptabilite.html:1298:171 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1320:169 ; _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html:1320:169 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1306:169 ; _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html:1306:169 ; _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html:1306:169 ; secteur-finance-comptabilite.html:1306:169 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | : structure Notion + génération automatique des annonces conformes ALUR. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1225:241 ; _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1297:229 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1225:241 ; _backups/ateliers-shift-2026-10-09/secteurs.html:1297:229 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1211:241 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1283:229 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1211:241 ; _backups/navigation-formations-2026-10-09/secteurs.html:1283:229 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1211:241 ; _DEPLOIEMENT_PROD/secteurs.html:1283:229 ; secteur-immobilier.html:1211:241 ; secteurs.html:1283:229 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | gie, et propose des biens correspondants depuis son portefeuille. &lt;strong&gt;Niveau Bras droit · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1229:281 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1229:281 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1215:281 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1215:281 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1215:281 ; secteur-immobilier.html:1215:281 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | util de relance clients post-visite. Méthode transmise, outil utilisé depuis. &lt;strong&gt;Journée · 690 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1233:246 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1233:246 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1219:246 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1219:246 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1219:246 ; secteur-immobilier.html:1219:246 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | l'IA a un vrai impact dans votre agence. Compte-rendu écrit, plan d'action chiffré. &lt;strong&gt;150-690 €&lt;/strong&gt; · déductible 60j si projet engagé.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1296:200 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1296:200 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1282:200 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1282:200 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1282:200 ; secteur-immobilier.html:1282:200 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | dats, suivi des leads, génération d'annonces conformes. Vocabulaire ALUR natif. &lt;strong&gt;1 490-6 990 €+&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1304:220 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1304:220 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1290:220 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1290:220 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1290:220 ; secteur-immobilier.html:1290:220 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | , la rédaction de réponses standards, les brouillons de comptes-rendus de visite. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1312:212 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1312:212 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1298:212 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1298:212 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1298:212 ; secteur-immobilier.html:1298:212 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | er un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1320:206 ; _backups/ateliers-shift-2026-10-09/secteur-immobilier.html:1320:206 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html:1306:206 ; _backups/navigation-formations-2026-10-09/secteur-immobilier.html:1306:206 ; _DEPLOIEMENT_PROD/secteur-immobilier.html:1306:206 ; secteur-immobilier.html:1306:206 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | client + checklist des pièces à demander. Hébergement Mistral EU. &lt;strong&gt;Niveau Bras droit · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1225:274 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1225:274 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1211:274 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1211:274 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1211:274 ; secteur-juridique.html:1211:274 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ers : jalons, deadlines, relances client, archivage des courriers types. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1229:256 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1229:256 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1215:256 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1215:256 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1215:256 ; secteur-juridique.html:1215:256 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | se réglementaire (alertes hebdo sur évolutions législatives du secteur). &lt;strong&gt;Demi-journée · 390 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1233:229 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1233:229 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1219:229 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1219:229 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1219:229 ; secteur-juridique.html:1219:229 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | "font-size:.88rem"&gt;Audit pour identifier les usages compatibles avec le secret pro. &lt;strong&gt;150-690 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1296:140 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1296:140 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1282:140 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1282:140 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1282:140 ; secteur-juridique.html:1282:140 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | mesure, Mistral EU, hébergement Europe garanti. Pré-RDV, comptes-rendus, suivi. &lt;strong&gt;1 490-6 990 €+&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1304:185 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1304:185 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1290:185 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1290:185 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1290:185 ; secteur-juridique.html:1290:185 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | Agent pour les courriers de suivi, les notes de cadrage, les explications client. &lt;strong&gt;690-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1312:159 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1312:159 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1298:159 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1298:159 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1298:159 ; secteur-juridique.html:1298:159 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ont-size:.88rem"&gt;Co-construction sur un cas concret (pré-acte type, courrier type). &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1320:142 ; _backups/ateliers-shift-2026-10-09/secteur-juridique.html:1320:142 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html:1306:142 ; _backups/navigation-formations-2026-10-09/secteur-juridique.html:1306:142 ; _DEPLOIEMENT_PROD/secteur-juridique.html:1306:142 ; secteur-juridique.html:1306:142 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | sation des missions clients : briefs, livrables, facturation, archivage. &lt;strong&gt;Palier Pro · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1225:236 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1225:236 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1211:236 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1211:236 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1211:236 ; secteur-professions-liberales.html:1211:236 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | cadrage RH + matrices d'évaluation, calibrés sur son style. &lt;strong&gt;Niveau Métier sécurisé · 1 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1229:240 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1229:240 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1215:240 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1215:240 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1215:240 ; secteur-professions-liberales.html:1215:240 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | suivi des séances clients + envoi automatique des synthèses post-séance. &lt;strong&gt;Demi-journée · 390 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1233:225 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1233:225 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1219:225 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1219:225 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1219:225 ; secteur-professions-liberales.html:1219:225 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | esc" style="font-size:.88rem"&gt;Audit indispensable ici pour cadrer le bon périmètre. &lt;strong&gt;150-690 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1296:129 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1296:129 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1282:129 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1282:129 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1282:129 ; secteur-professions-liberales.html:1282:129 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro. &lt;strong&gt;1 490-4 500 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1304:173 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1304:173 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1290:173 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1290:173 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1290:173 ; secteur-professions-liberales.html:1290:173 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | em"&gt;Agent pour la communication, les mails standards, la production de livrables. &lt;strong&gt;690-2 900 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1312:155 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1312:155 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1298:155 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1298:155 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1298:155 ; secteur-professions-liberales.html:1298:155 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ="font-size:.88rem"&gt;Atelier individuel ou avec un associé pour configurer ensemble. &lt;strong&gt;390-890 €&lt;/strong&gt;.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1320:139 ; _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html:1320:139 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html:1306:139 ; _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html:1306:139 ; _DEPLOIEMENT_PROD/secteur-professions-liberales.html:1306:139 ; secteur-professions-liberales.html:1306:139 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | rendu structuré + mail client + checklist des pièces. Mistral EU. &lt;strong&gt;Niveau Bras droit · 2 900 €&lt;/strong&gt;.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1301:251 ; _backups/ateliers-shift-2026-10-09/secteurs.html:1301:251 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html:1287:251 ; _backups/navigation-formations-2026-10-09/secteurs.html:1287:251 ; _DEPLOIEMENT_PROD/secteurs.html:1287:251 ; secteurs.html:1287:251 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| LICENCE | /* LICENCE BOX */ | _backups/ateliers-shift-2026-10-09/agents.html:427:6 ; _backups/ateliers-shift-2026-10-09/audit.html:433:6 ; _backups/ateliers-shift-2026-10-09/outils.html:427:6 ; _backups/navigation-formations-2026-10-09/agents.html:427:6 ; _backups/navigation-formations-2026-10-09/audit.html:433:6 ; _backups/navigation-formations-2026-10-09/outils.html:427:6 ; _DEPLOIEMENT_PROD/agents.html:427:6 ; _DEPLOIEMENT_PROD/audit.html:433:6 ; _DEPLOIEMENT_PROD/outils.html:427:6 ; agents.html:427:6 ; audit.html:433:6 ; index (1).html:438:6 ; outils.html:427:6 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | .licence-box { | _backups/ateliers-shift-2026-10-09/agents.html:428:4 ; _backups/ateliers-shift-2026-10-09/audit.html:434:4 ; _backups/ateliers-shift-2026-10-09/outils.html:428:4 ; _backups/navigation-formations-2026-10-09/agents.html:428:4 ; _backups/navigation-formations-2026-10-09/audit.html:434:4 ; _backups/navigation-formations-2026-10-09/outils.html:428:4 ; _DEPLOIEMENT_PROD/agents.html:428:4 ; _DEPLOIEMENT_PROD/audit.html:434:4 ; _DEPLOIEMENT_PROD/outils.html:428:4 ; agents.html:428:4 ; audit.html:434:4 ; index (1).html:439:4 ; outils.html:428:4 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | .licence-box strong { color: var(--gold-light); } | _backups/ateliers-shift-2026-10-09/agents.html:437:4 ; _backups/ateliers-shift-2026-10-09/audit.html:443:4 ; _backups/ateliers-shift-2026-10-09/outils.html:437:4 ; _backups/navigation-formations-2026-10-09/agents.html:437:4 ; _backups/navigation-formations-2026-10-09/audit.html:443:4 ; _backups/navigation-formations-2026-10-09/outils.html:437:4 ; _DEPLOIEMENT_PROD/agents.html:437:4 ; _DEPLOIEMENT_PROD/audit.html:443:4 ; _DEPLOIEMENT_PROD/outils.html:437:4 ; agents.html:437:4 ; audit.html:443:4 ; index (1).html:448:4 ; outils.html:437:4 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| Licence | &lt;th&gt;Licence/an HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1297:15 ; _backups/ateliers-shift-2026-10-09/outils.html:1450:15 ; _backups/navigation-formations-2026-10-09/agents.html:1283:15 ; _backups/navigation-formations-2026-10-09/outils.html:1436:15 ; _DEPLOIEMENT_PROD/agents.html:1283:15 ; _DEPLOIEMENT_PROD/outils.html:1436:15 ; agents.html:1283:15 ; outils.html:1436:15 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;th&gt;Licence/an HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1297:22 ; _backups/ateliers-shift-2026-10-09/outils.html:1450:22 ; _backups/navigation-formations-2026-10-09/agents.html:1283:22 ; _backups/navigation-formations-2026-10-09/outils.html:1436:22 ; _DEPLOIEMENT_PROD/agents.html:1283:22 ; _DEPLOIEMENT_PROD/outils.html:1436:22 ; agents.html:1283:22 ; outils.html:1436:22 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;th&gt;Licence/an HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1297:26 ; _backups/ateliers-shift-2026-10-09/outils.html:1450:26 ; _backups/navigation-formations-2026-10-09/agents.html:1283:26 ; _backups/navigation-formations-2026-10-09/outils.html:1436:26 ; _DEPLOIEMENT_PROD/agents.html:1283:26 ; _DEPLOIEMENT_PROD/outils.html:1436:26 ; agents.html:1283:26 ; outils.html:1436:26 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;690 - 990 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1306:25 ; _backups/navigation-formations-2026-10-09/agents.html:1292:25 ; _DEPLOIEMENT_PROD/agents.html:1292:25 ; agents.html:1292:25 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;290 - 490 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1307:25 ; _backups/navigation-formations-2026-10-09/agents.html:1293:25 ; _DEPLOIEMENT_PROD/agents.html:1293:25 ; agents.html:1293:25 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;1 900 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1312:21 ; _backups/navigation-formations-2026-10-09/agents.html:1298:21 ; _DEPLOIEMENT_PROD/agents.html:1298:21 ; agents.html:1298:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;590 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1313:19 ; _backups/ateliers-shift-2026-10-09/outils.html:1458:19 ; _backups/navigation-formations-2026-10-09/agents.html:1299:19 ; _backups/navigation-formations-2026-10-09/outils.html:1444:19 ; _DEPLOIEMENT_PROD/agents.html:1299:19 ; _DEPLOIEMENT_PROD/outils.html:1444:19 ; agents.html:1299:19 ; outils.html:1444:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;2 900 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1318:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1463:21 ; _backups/navigation-formations-2026-10-09/agents.html:1304:21 ; _backups/navigation-formations-2026-10-09/outils.html:1449:21 ; _DEPLOIEMENT_PROD/agents.html:1304:21 ; _DEPLOIEMENT_PROD/outils.html:1449:21 ; agents.html:1304:21 ; outils.html:1449:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;1 190 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1319:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1464:21 ; _backups/navigation-formations-2026-10-09/agents.html:1305:21 ; _backups/navigation-formations-2026-10-09/outils.html:1450:21 ; _DEPLOIEMENT_PROD/agents.html:1305:21 ; _DEPLOIEMENT_PROD/outils.html:1450:21 ; agents.html:1305:21 ; outils.html:1450:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;4 500 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1324:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1469:21 ; _backups/navigation-formations-2026-10-09/agents.html:1310:21 ; _backups/navigation-formations-2026-10-09/outils.html:1455:21 ; _DEPLOIEMENT_PROD/agents.html:1310:21 ; _DEPLOIEMENT_PROD/outils.html:1455:21 ; agents.html:1310:21 ; outils.html:1455:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;1 790 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1325:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1470:21 ; _backups/navigation-formations-2026-10-09/agents.html:1311:21 ; _backups/navigation-formations-2026-10-09/outils.html:1456:21 ; _DEPLOIEMENT_PROD/agents.html:1311:21 ; _DEPLOIEMENT_PROD/outils.html:1456:21 ; agents.html:1311:21 ; outils.html:1456:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;690 - 990 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1364:50 ; _backups/navigation-formations-2026-10-09/agents.html:1350:50 ; _DEPLOIEMENT_PROD/agents.html:1350:50 ; agents.html:1350:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;690 - 990 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1364:52 ; _backups/navigation-formations-2026-10-09/agents.html:1350:52 ; _DEPLOIEMENT_PROD/agents.html:1350:52 ; agents.html:1350:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 290 - 490 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1365:52 ; _backups/navigation-formations-2026-10-09/agents.html:1351:52 ; _DEPLOIEMENT_PROD/agents.html:1351:52 ; agents.html:1351:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 290 - 490 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1365:53 ; _backups/navigation-formations-2026-10-09/agents.html:1351:53 ; _DEPLOIEMENT_PROD/agents.html:1351:53 ; agents.html:1351:53 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 290 - 490 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1365:60 ; _backups/navigation-formations-2026-10-09/agents.html:1351:60 ; _DEPLOIEMENT_PROD/agents.html:1351:60 ; agents.html:1351:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;p&gt;Un agent L'Rénov 100% sur-mesure — &lt;strong&gt;pas un abonnement à une plateforme générique ni un GPT public&lt;/strong&gt;. Conception et paramétrage par L'Rénov : rôle, consignes, base de connaissances, scénarios, garde-fous. Li | _backups/ateliers-shift-2026-10-09/agents.html:1372:62 ; _backups/navigation-formations-2026-10-09/agents.html:1358:62 ; _DEPLOIEMENT_PROD/agents.html:1358:62 ; agents.html:1358:62 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;div class="format-card-text"&gt;Un Project Claude paramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puissant.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1381:85 ; _backups/navigation-formations-2026-10-09/agents.html:1367:85 ; _DEPLOIEMENT_PROD/agents.html:1367:85 ; agents.html:1367:85 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| abonnement | &lt;div class="format-card-text"&gt;Une page web autonome avec agent intégré. Aucun abonnement IA requis. Format isolé et indépendant.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1389:91 ; _backups/navigation-formations-2026-10-09/agents.html:1375:91 ; _DEPLOIEMENT_PROD/agents.html:1375:91 ; agents.html:1375:91 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="tab-section-title"&gt;La licence annuelle (290 - 490 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1457:43 ; _backups/navigation-formations-2026-10-09/agents.html:1443:43 ; _DEPLOIEMENT_PROD/agents.html:1443:43 ; agents.html:1443:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="tab-section-title"&gt;La licence annuelle (290 - 490 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1457:71 ; _backups/navigation-formations-2026-10-09/agents.html:1443:71 ; _DEPLOIEMENT_PROD/agents.html:1443:71 ; agents.html:1443:71 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="tab-section-title"&gt;La licence annuelle (290 - 490 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1457:72 ; _backups/navigation-formations-2026-10-09/agents.html:1443:72 ; _DEPLOIEMENT_PROD/agents.html:1443:72 ; agents.html:1443:72 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="licence-box"&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1458:21 ; _backups/ateliers-shift-2026-10-09/agents.html:1556:21 ; _backups/ateliers-shift-2026-10-09/agents.html:1655:21 ; _backups/ateliers-shift-2026-10-09/agents.html:1747:21 ; _backups/ateliers-shift-2026-10-09/audit.html:1454:21 ; _backups/ateliers-shift-2026-10-09/audit.html:1565:21 ; _backups/ateliers-shift-2026-10-09/audit.html:1677:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1620:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1742:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1864:21 ; _backups/ateliers-shift-2026-10-09/outils.html:1987:21 ; _backups/navigation-formations-2026-10-09/agents.html:1444:21 ; _backups/navigation-formations-2026-10-09/agents.html:1542:21 ; _backups/navigation-formations-2026-10-09/agents.html:1641:21 ; _backups/navigation-formations-2026-10-09/agents.html:1733:21 ; _backups/navigation-formations-2026-10-09/audit.html:1440:21 ; _backups/navigation-formations-2026-10-09/audit.html:1551:21 ; _backups/navigation-formations-2026-10-09/audit.html:1663:21 ; _backups/navigation-formations-2026-10-09/outils.html:1606:21 ; _backups/navigation-formations-2026-10-09/outils.html:1728:21 ; _backups/navigation-formations-2026-10-09/outils.html:1850:21 ; _backups/navigation-formations-2026-10-09/outils.html:1973:21 ; _DEPLOIEMENT_PROD/agents.html:1444:21 ; _DEPLOIEMENT_PROD/agents.html:1542:21 ; _DEPLOIEMENT_PROD/agents.html:1641:21 ; _DEPLOIEMENT_PROD/agents.html:1733:21 ; _DEPLOIEMENT_PROD/audit.html:1440:21 ; _DEPLOIEMENT_PROD/audit.html:1551:21 ; _DEPLOIEMENT_PROD/audit.html:1663:21 ; _DEPLOIEMENT_PROD/outils.html:1606:21 ; _DEPLOIEMENT_PROD/outils.html:1728:21 ; _DEPLOIEMENT_PROD/outils.html:1850:21 ; _DEPLOIEMENT_PROD/outils.html:1973:21 ; agents.html:1444:21 ; agents.html:1542:21 ; agents.html:1641:21 ; agents.html:1733:21 ; audit.html:1440:21 ; audit.html:1551:21 ; audit.html:1663:21 ; index (1).html:1460:21 ; index (1).html:1573:21 ; index (1).html:1687:21 ; outils.html:1606:21 ; outils.html:1728:21 ; outils.html:1850:21 ; outils.html:1973:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;1 900 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1475:46 ; _backups/navigation-formations-2026-10-09/agents.html:1461:46 ; _DEPLOIEMENT_PROD/agents.html:1461:46 ; agents.html:1461:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;1 900 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1475:48 ; _backups/navigation-formations-2026-10-09/agents.html:1461:48 ; _DEPLOIEMENT_PROD/agents.html:1461:48 ; agents.html:1461:48 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1476:46 ; _backups/navigation-formations-2026-10-09/agents.html:1462:46 ; _DEPLOIEMENT_PROD/agents.html:1462:46 ; agents.html:1462:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1476:47 ; _backups/navigation-formations-2026-10-09/agents.html:1462:47 ; _DEPLOIEMENT_PROD/agents.html:1462:47 ; agents.html:1462:47 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1476:54 ; _backups/navigation-formations-2026-10-09/agents.html:1462:54 ; _DEPLOIEMENT_PROD/agents.html:1462:54 ; agents.html:1462:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="tab-section-title"&gt;La licence annuelle (590 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1555:43 ; _backups/ateliers-shift-2026-10-09/outils.html:1619:43 ; _backups/navigation-formations-2026-10-09/agents.html:1541:43 ; _backups/navigation-formations-2026-10-09/outils.html:1605:43 ; _DEPLOIEMENT_PROD/agents.html:1541:43 ; _DEPLOIEMENT_PROD/outils.html:1605:43 ; agents.html:1541:43 ; outils.html:1605:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="tab-section-title"&gt;La licence annuelle (590 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1555:65 ; _backups/ateliers-shift-2026-10-09/outils.html:1619:65 ; _backups/navigation-formations-2026-10-09/agents.html:1541:65 ; _backups/navigation-formations-2026-10-09/outils.html:1605:65 ; _DEPLOIEMENT_PROD/agents.html:1541:65 ; _DEPLOIEMENT_PROD/outils.html:1605:65 ; agents.html:1541:65 ; outils.html:1605:65 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="tab-section-title"&gt;La licence annuelle (590 €/an)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1555:66 ; _backups/ateliers-shift-2026-10-09/outils.html:1619:66 ; _backups/navigation-formations-2026-10-09/agents.html:1541:66 ; _backups/navigation-formations-2026-10-09/outils.html:1605:66 ; _DEPLOIEMENT_PROD/agents.html:1541:66 ; _DEPLOIEMENT_PROD/outils.html:1605:66 ; agents.html:1541:66 ; outils.html:1605:66 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | sitif + maintien Mistral EU + ajustements prompts/règles métier + &lt;strong&gt;6h d'intervention&lt;/strong&gt;/an + mises à jour mineures + support. Garantit que l'agent reste aligné avec les usages réels et les évolutions du flux mail. | _backups/ateliers-shift-2026-10-09/agents.html:1557:150 ; _backups/navigation-formations-2026-10-09/agents.html:1543:150 ; _DEPLOIEMENT_PROD/agents.html:1543:150 ; agents.html:1543:150 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;2 900 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1573:46 ; _backups/ateliers-shift-2026-10-09/outils.html:1637:46 ; _backups/navigation-formations-2026-10-09/agents.html:1559:46 ; _backups/navigation-formations-2026-10-09/outils.html:1623:46 ; _DEPLOIEMENT_PROD/agents.html:1559:46 ; _DEPLOIEMENT_PROD/outils.html:1623:46 ; agents.html:1559:46 ; outils.html:1623:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;2 900 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1573:48 ; _backups/ateliers-shift-2026-10-09/outils.html:1637:48 ; _backups/navigation-formations-2026-10-09/agents.html:1559:48 ; _backups/navigation-formations-2026-10-09/outils.html:1623:48 ; _DEPLOIEMENT_PROD/agents.html:1559:48 ; _DEPLOIEMENT_PROD/outils.html:1623:48 ; agents.html:1559:48 ; outils.html:1623:48 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · ou 109 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1574:48 ; _backups/ateliers-shift-2026-10-09/agents.html:1574:81 ; _backups/navigation-formations-2026-10-09/agents.html:1560:48 ; _backups/navigation-formations-2026-10-09/agents.html:1560:81 ; _DEPLOIEMENT_PROD/agents.html:1560:48 ; _DEPLOIEMENT_PROD/agents.html:1560:81 ; agents.html:1560:48 ; agents.html:1560:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · ou 109 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1574:49 ; _backups/navigation-formations-2026-10-09/agents.html:1560:49 ; _DEPLOIEMENT_PROD/agents.html:1560:49 ; agents.html:1560:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · ou 109 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1574:56 ; _backups/navigation-formations-2026-10-09/agents.html:1560:56 ; _DEPLOIEMENT_PROD/agents.html:1560:56 ; agents.html:1560:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · ou 109 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1574:82 ; _backups/navigation-formations-2026-10-09/agents.html:1560:82 ; _DEPLOIEMENT_PROD/agents.html:1560:82 ; agents.html:1560:82 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="tab-section-title"&gt;La licence annuelle (1 190 €/an · ou 109 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1654:43 ; _backups/ateliers-shift-2026-10-09/outils.html:1741:43 ; _backups/navigation-formations-2026-10-09/agents.html:1640:43 ; _backups/navigation-formations-2026-10-09/outils.html:1727:43 ; _DEPLOIEMENT_PROD/agents.html:1640:43 ; _DEPLOIEMENT_PROD/outils.html:1727:43 ; agents.html:1640:43 ; outils.html:1727:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="tab-section-title"&gt;La licence annuelle (1 190 €/an · ou 109 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1654:67 ; _backups/ateliers-shift-2026-10-09/agents.html:1654:81 ; _backups/ateliers-shift-2026-10-09/outils.html:1741:67 ; _backups/ateliers-shift-2026-10-09/outils.html:1741:81 ; _backups/navigation-formations-2026-10-09/agents.html:1640:67 ; _backups/navigation-formations-2026-10-09/agents.html:1640:81 ; _backups/navigation-formations-2026-10-09/outils.html:1727:67 ; _backups/navigation-formations-2026-10-09/outils.html:1727:81 ; _DEPLOIEMENT_PROD/agents.html:1640:67 ; _DEPLOIEMENT_PROD/agents.html:1640:81 ; _DEPLOIEMENT_PROD/outils.html:1727:67 ; _DEPLOIEMENT_PROD/outils.html:1727:81 ; agents.html:1640:67 ; agents.html:1640:81 ; outils.html:1727:67 ; outils.html:1727:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="tab-section-title"&gt;La licence annuelle (1 190 €/an · ou 109 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1654:68 ; _backups/ateliers-shift-2026-10-09/outils.html:1741:68 ; _backups/navigation-formations-2026-10-09/agents.html:1640:68 ; _backups/navigation-formations-2026-10-09/outils.html:1727:68 ; _DEPLOIEMENT_PROD/agents.html:1640:68 ; _DEPLOIEMENT_PROD/outils.html:1727:68 ; agents.html:1640:68 ; outils.html:1727:68 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;div class="tab-section-title"&gt;La licence annuelle (1 190 €/an · ou 109 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1654:82 ; _backups/ateliers-shift-2026-10-09/outils.html:1741:82 ; _backups/navigation-formations-2026-10-09/agents.html:1640:82 ; _backups/navigation-formations-2026-10-09/outils.html:1727:82 ; _DEPLOIEMENT_PROD/agents.html:1640:82 ; _DEPLOIEMENT_PROD/outils.html:1727:82 ; agents.html:1640:82 ; outils.html:1727:82 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | + maintien environnement Mistral EU + ajustements prompts/règles métier + &lt;strong&gt;8h d'intervention/an&lt;/strong&gt; + mises à jour mineures + support. &lt;strong&gt;Maintient le bras droit aligné avec l'évolution de l'activité.&lt;/strong&gt; Sans licence, le dispositif fonctio | _backups/ateliers-shift-2026-10-09/agents.html:1656:141 ; _backups/navigation-formations-2026-10-09/agents.html:1642:141 ; _DEPLOIEMENT_PROD/agents.html:1642:141 ; agents.html:1642:141 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | res + support. &lt;strong&gt;Maintient le bras droit aligné avec l'évolution de l'activité.&lt;/strong&gt; Sans licence, le dispositif fonctionne mais se dégrade lentement face aux nouvelles situations. | _backups/ateliers-shift-2026-10-09/agents.html:1656:274 ; _backups/navigation-formations-2026-10-09/agents.html:1642:274 ; _DEPLOIEMENT_PROD/agents.html:1642:274 ; agents.html:1642:274 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;4 500 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1672:46 ; _backups/ateliers-shift-2026-10-09/outils.html:1759:46 ; _backups/navigation-formations-2026-10-09/agents.html:1658:46 ; _backups/navigation-formations-2026-10-09/outils.html:1745:46 ; _DEPLOIEMENT_PROD/agents.html:1658:46 ; _DEPLOIEMENT_PROD/outils.html:1745:46 ; agents.html:1658:46 ; outils.html:1745:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;4 500 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1672:48 ; _backups/ateliers-shift-2026-10-09/outils.html:1759:48 ; _backups/navigation-formations-2026-10-09/agents.html:1658:48 ; _backups/navigation-formations-2026-10-09/outils.html:1745:48 ; _DEPLOIEMENT_PROD/agents.html:1658:48 ; _DEPLOIEMENT_PROD/outils.html:1745:48 ; agents.html:1658:48 ; outils.html:1745:48 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1673:48 ; _backups/ateliers-shift-2026-10-09/agents.html:1673:81 ; _backups/navigation-formations-2026-10-09/agents.html:1659:48 ; _backups/navigation-formations-2026-10-09/agents.html:1659:81 ; _DEPLOIEMENT_PROD/agents.html:1659:48 ; _DEPLOIEMENT_PROD/agents.html:1659:81 ; agents.html:1659:48 ; agents.html:1659:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1673:49 ; _backups/navigation-formations-2026-10-09/agents.html:1659:49 ; _DEPLOIEMENT_PROD/agents.html:1659:49 ; agents.html:1659:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1673:56 ; _backups/navigation-formations-2026-10-09/agents.html:1659:56 ; _DEPLOIEMENT_PROD/agents.html:1659:56 ; agents.html:1659:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1673:82 ; _backups/navigation-formations-2026-10-09/agents.html:1659:82 ; _DEPLOIEMENT_PROD/agents.html:1659:82 ; agents.html:1659:82 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="tab-section-title"&gt;La licence annuelle (1 790 €/an · ou 164 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1746:43 ; _backups/ateliers-shift-2026-10-09/outils.html:1863:43 ; _backups/navigation-formations-2026-10-09/agents.html:1732:43 ; _backups/navigation-formations-2026-10-09/outils.html:1849:43 ; _DEPLOIEMENT_PROD/agents.html:1732:43 ; _DEPLOIEMENT_PROD/outils.html:1849:43 ; agents.html:1732:43 ; outils.html:1849:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="tab-section-title"&gt;La licence annuelle (1 790 €/an · ou 164 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1746:67 ; _backups/ateliers-shift-2026-10-09/agents.html:1746:81 ; _backups/ateliers-shift-2026-10-09/outils.html:1863:67 ; _backups/ateliers-shift-2026-10-09/outils.html:1863:81 ; _backups/navigation-formations-2026-10-09/agents.html:1732:67 ; _backups/navigation-formations-2026-10-09/agents.html:1732:81 ; _backups/navigation-formations-2026-10-09/outils.html:1849:67 ; _backups/navigation-formations-2026-10-09/outils.html:1849:81 ; _DEPLOIEMENT_PROD/agents.html:1732:67 ; _DEPLOIEMENT_PROD/agents.html:1732:81 ; _DEPLOIEMENT_PROD/outils.html:1849:67 ; _DEPLOIEMENT_PROD/outils.html:1849:81 ; agents.html:1732:67 ; agents.html:1732:81 ; outils.html:1849:67 ; outils.html:1849:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="tab-section-title"&gt;La licence annuelle (1 790 €/an · ou 164 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1746:68 ; _backups/ateliers-shift-2026-10-09/outils.html:1863:68 ; _backups/navigation-formations-2026-10-09/agents.html:1732:68 ; _backups/navigation-formations-2026-10-09/outils.html:1849:68 ; _DEPLOIEMENT_PROD/agents.html:1732:68 ; _DEPLOIEMENT_PROD/outils.html:1849:68 ; agents.html:1732:68 ; outils.html:1849:68 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;div class="tab-section-title"&gt;La licence annuelle (1 790 €/an · ou 164 €/mois)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1746:82 ; _backups/ateliers-shift-2026-10-09/outils.html:1863:82 ; _backups/navigation-formations-2026-10-09/agents.html:1732:82 ; _backups/navigation-formations-2026-10-09/outils.html:1849:82 ; _DEPLOIEMENT_PROD/agents.html:1732:82 ; _DEPLOIEMENT_PROD/outils.html:1849:82 ; agents.html:1732:82 ; outils.html:1849:82 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | ng&gt; du système complet + Mistral EU + ajustements prompts/règles métier + &lt;strong&gt;12h d'intervention/an&lt;/strong&gt; + 5 ajustements mineurs + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | _backups/ateliers-shift-2026-10-09/agents.html:1748:138 ; _backups/navigation-formations-2026-10-09/agents.html:1734:138 ; _DEPLOIEMENT_PROD/agents.html:1734:138 ; agents.html:1734:138 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="roi-input-value"&gt;&lt;span id="cout-val"&gt;60&lt;/span&gt; €/h&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1787:71 ; _backups/ateliers-shift-2026-10-09/outils.html:2027:71 ; _backups/navigation-formations-2026-10-09/agents.html:1773:71 ; _backups/navigation-formations-2026-10-09/outils.html:2013:71 ; _DEPLOIEMENT_PROD/agents.html:1773:71 ; _DEPLOIEMENT_PROD/outils.html:2013:71 ; agents.html:1773:71 ; outils.html:2013:71 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-input-scale"&gt;&lt;span&gt;30 €&lt;/span&gt;&lt;span&gt;150 €&lt;/span&gt;&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1790:47 ; _backups/ateliers-shift-2026-10-09/agents.html:1790:65 ; _backups/ateliers-shift-2026-10-09/outils.html:2030:47 ; _backups/ateliers-shift-2026-10-09/outils.html:2030:65 ; _backups/navigation-formations-2026-10-09/agents.html:1776:47 ; _backups/navigation-formations-2026-10-09/agents.html:1776:65 ; _backups/navigation-formations-2026-10-09/outils.html:2016:47 ; _backups/navigation-formations-2026-10-09/outils.html:2016:65 ; _DEPLOIEMENT_PROD/agents.html:1776:47 ; _DEPLOIEMENT_PROD/agents.html:1776:65 ; _DEPLOIEMENT_PROD/outils.html:2016:47 ; _DEPLOIEMENT_PROD/outils.html:2016:65 ; agents.html:1776:47 ; agents.html:1776:65 ; outils.html:2016:47 ; outils.html:2016:65 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-synth-num" id="valeur-an"&gt;19 800 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1826:58 ; _backups/ateliers-shift-2026-10-09/outils.html:2066:58 ; _backups/navigation-formations-2026-10-09/agents.html:1812:58 ; _backups/navigation-formations-2026-10-09/outils.html:2052:58 ; _DEPLOIEMENT_PROD/agents.html:1812:58 ; _DEPLOIEMENT_PROD/outils.html:2052:58 ; agents.html:1812:58 ; outils.html:2052:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;990 € + 490 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1837:44 ; _backups/ateliers-shift-2026-10-09/agents.html:1837:52 ; _backups/navigation-formations-2026-10-09/agents.html:1823:44 ; _backups/navigation-formations-2026-10-09/agents.html:1823:52 ; _DEPLOIEMENT_PROD/agents.html:1823:44 ; _DEPLOIEMENT_PROD/agents.html:1823:52 ; agents.html:1823:44 ; agents.html:1823:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="roi-compare-price"&gt;990 € + 490 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1837:53 ; _backups/navigation-formations-2026-10-09/agents.html:1823:53 ; _DEPLOIEMENT_PROD/agents.html:1823:53 ; agents.html:1823:53 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-1"&gt;+ 18 320 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1839:60 ; _backups/navigation-formations-2026-10-09/agents.html:1825:60 ; _DEPLOIEMENT_PROD/agents.html:1825:60 ; agents.html:1825:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;1 900 € + 590 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1849:46 ; _backups/ateliers-shift-2026-10-09/agents.html:1849:54 ; _backups/navigation-formations-2026-10-09/agents.html:1835:46 ; _backups/navigation-formations-2026-10-09/agents.html:1835:54 ; _DEPLOIEMENT_PROD/agents.html:1835:46 ; _DEPLOIEMENT_PROD/agents.html:1835:54 ; agents.html:1835:46 ; agents.html:1835:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="roi-compare-price"&gt;1 900 € + 590 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1849:55 ; _backups/navigation-formations-2026-10-09/agents.html:1835:55 ; _DEPLOIEMENT_PROD/agents.html:1835:55 ; agents.html:1835:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-2"&gt;+ 17 310 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1851:60 ; _backups/navigation-formations-2026-10-09/agents.html:1837:60 ; _DEPLOIEMENT_PROD/agents.html:1837:60 ; agents.html:1837:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;2 900 € + 1 190 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1861:46 ; _backups/ateliers-shift-2026-10-09/agents.html:1861:56 ; _backups/ateliers-shift-2026-10-09/outils.html:2089:46 ; _backups/ateliers-shift-2026-10-09/outils.html:2089:56 ; _backups/navigation-formations-2026-10-09/agents.html:1847:46 ; _backups/navigation-formations-2026-10-09/agents.html:1847:56 ; _backups/navigation-formations-2026-10-09/outils.html:2075:46 ; _backups/navigation-formations-2026-10-09/outils.html:2075:56 ; _DEPLOIEMENT_PROD/agents.html:1847:46 ; _DEPLOIEMENT_PROD/agents.html:1847:56 ; _DEPLOIEMENT_PROD/outils.html:2075:46 ; _DEPLOIEMENT_PROD/outils.html:2075:56 ; agents.html:1847:46 ; agents.html:1847:56 ; outils.html:2075:46 ; outils.html:2075:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="roi-compare-price"&gt;2 900 € + 1 190 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1861:57 ; _backups/ateliers-shift-2026-10-09/outils.html:2089:57 ; _backups/navigation-formations-2026-10-09/agents.html:1847:57 ; _backups/navigation-formations-2026-10-09/outils.html:2075:57 ; _DEPLOIEMENT_PROD/agents.html:1847:57 ; _DEPLOIEMENT_PROD/outils.html:2075:57 ; agents.html:1847:57 ; outils.html:2075:57 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-3"&gt;+ 15 710 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1863:60 ; _backups/navigation-formations-2026-10-09/agents.html:1849:60 ; _DEPLOIEMENT_PROD/agents.html:1849:60 ; agents.html:1849:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;4 500 € + 1 790 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1873:46 ; _backups/ateliers-shift-2026-10-09/agents.html:1873:56 ; _backups/ateliers-shift-2026-10-09/outils.html:2101:46 ; _backups/ateliers-shift-2026-10-09/outils.html:2101:56 ; _backups/navigation-formations-2026-10-09/agents.html:1859:46 ; _backups/navigation-formations-2026-10-09/agents.html:1859:56 ; _backups/navigation-formations-2026-10-09/outils.html:2087:46 ; _backups/navigation-formations-2026-10-09/outils.html:2087:56 ; _DEPLOIEMENT_PROD/agents.html:1859:46 ; _DEPLOIEMENT_PROD/agents.html:1859:56 ; _DEPLOIEMENT_PROD/outils.html:2087:46 ; _DEPLOIEMENT_PROD/outils.html:2087:56 ; agents.html:1859:46 ; agents.html:1859:56 ; outils.html:2087:46 ; outils.html:2087:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="roi-compare-price"&gt;4 500 € + 1 790 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1873:57 ; _backups/ateliers-shift-2026-10-09/outils.html:2101:57 ; _backups/navigation-formations-2026-10-09/agents.html:1859:57 ; _backups/navigation-formations-2026-10-09/outils.html:2087:57 ; _DEPLOIEMENT_PROD/agents.html:1859:57 ; _DEPLOIEMENT_PROD/outils.html:2087:57 ; agents.html:1859:57 ; outils.html:2087:57 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-4"&gt;+ 13 510 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/agents.html:1875:60 ; _backups/navigation-formations-2026-10-09/agents.html:1861:60 ; _DEPLOIEMENT_PROD/agents.html:1861:60 ; agents.html:1861:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;th&gt;Tarif HT&lt;/th&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1302:21 ; _backups/navigation-formations-2026-10-09/audit.html:1288:21 ; _DEPLOIEMENT_PROD/audit.html:1288:21 ; audit.html:1288:21 ; index (1).html:1308:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;150 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1311:19 ; _backups/navigation-formations-2026-10-09/audit.html:1297:19 ; _DEPLOIEMENT_PROD/audit.html:1297:19 ; audit.html:1297:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;390 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1318:19 ; _backups/navigation-formations-2026-10-09/audit.html:1304:19 ; _DEPLOIEMENT_PROD/audit.html:1304:19 ; audit.html:1304:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;690 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1325:19 ; _backups/navigation-formations-2026-10-09/audit.html:1311:19 ; _DEPLOIEMENT_PROD/audit.html:1311:19 ; audit.html:1311:19 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;150 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1362:44 ; _backups/navigation-formations-2026-10-09/audit.html:1348:44 ; _DEPLOIEMENT_PROD/audit.html:1348:44 ; audit.html:1348:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;150 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1362:46 ; _backups/navigation-formations-2026-10-09/audit.html:1348:46 ; _DEPLOIEMENT_PROD/audit.html:1348:46 ; audit.html:1348:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;390 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1471:44 ; _backups/navigation-formations-2026-10-09/audit.html:1457:44 ; _DEPLOIEMENT_PROD/audit.html:1457:44 ; audit.html:1457:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;390 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1471:46 ; _backups/navigation-formations-2026-10-09/audit.html:1457:46 ; _DEPLOIEMENT_PROD/audit.html:1457:46 ; audit.html:1457:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | central&lt;/strong&gt; : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 390 € sont &lt;strong&gt;intégralement déduits&lt;/strong&gt; du devis. L'audit devient alors gratuit.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1481:129 ; _backups/navigation-formations-2026-10-09/audit.html:1467:129 ; _DEPLOIEMENT_PROD/audit.html:1467:129 ; audit.html:1467:129 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;690 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1582:44 ; _backups/navigation-formations-2026-10-09/audit.html:1568:44 ; _DEPLOIEMENT_PROD/audit.html:1568:44 ; audit.html:1568:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;690 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1582:46 ; _backups/navigation-formations-2026-10-09/audit.html:1568:46 ; _DEPLOIEMENT_PROD/audit.html:1568:46 ; audit.html:1568:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | central&lt;/strong&gt; : si une mission L'Rénov est engagée dans les 60 jours suivant la session, les 690 € sont &lt;strong&gt;intégralement déduits&lt;/strong&gt; du devis. L'audit devient alors gratuit.&lt;/p&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1592:129 ; _backups/navigation-formations-2026-10-09/audit.html:1578:129 ; _DEPLOIEMENT_PROD/audit.html:1578:129 ; audit.html:1578:129 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | lan. S'il souhaite engager une phase, devis L'Rénov correspondant, avec déduction intégrale des 690 € si signature sous 60 jours.&lt;/div&gt;&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1620:266 ; _backups/navigation-formations-2026-10-09/audit.html:1606:266 ; _DEPLOIEMENT_PROD/audit.html:1606:266 ; audit.html:1606:266 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="roi-input-value"&gt;&lt;span id="ca-val"&gt;200&lt;/span&gt; k€&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1699:71 ; _backups/navigation-formations-2026-10-09/audit.html:1685:71 ; _DEPLOIEMENT_PROD/audit.html:1685:71 ; audit.html:1685:71 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-input-scale"&gt;&lt;span&gt;50 k€&lt;/span&gt;&lt;span&gt;2 M€&lt;/span&gt;&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1702:48 ; _backups/ateliers-shift-2026-10-09/audit.html:1702:65 ; _backups/navigation-formations-2026-10-09/audit.html:1688:48 ; _backups/navigation-formations-2026-10-09/audit.html:1688:65 ; _DEPLOIEMENT_PROD/audit.html:1688:48 ; _DEPLOIEMENT_PROD/audit.html:1688:65 ; audit.html:1688:48 ; audit.html:1688:65 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| / an | &lt;label for="decisions"&gt;Décisions stratégiques majeures / an&lt;/label&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1725:66 ; _backups/navigation-formations-2026-10-09/audit.html:1711:66 ; _DEPLOIEMENT_PROD/audit.html:1711:66 ; audit.html:1711:66 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="roi-input-value"&gt;&lt;span id="erreur-val"&gt;10 000&lt;/span&gt; €&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1735:77 ; _backups/navigation-formations-2026-10-09/audit.html:1721:77 ; _DEPLOIEMENT_PROD/audit.html:1721:77 ; audit.html:1721:77 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-input-scale"&gt;&lt;span&gt;1 k€&lt;/span&gt;&lt;span&gt;50 k€&lt;/span&gt;&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1738:47 ; _backups/ateliers-shift-2026-10-09/audit.html:1738:65 ; _backups/navigation-formations-2026-10-09/audit.html:1724:47 ; _backups/navigation-formations-2026-10-09/audit.html:1724:65 ; _DEPLOIEMENT_PROD/audit.html:1724:47 ; _DEPLOIEMENT_PROD/audit.html:1724:65 ; audit.html:1724:47 ; audit.html:1724:65 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-synth-num" id="pertes-an"&gt;6 000 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1746:57 ; _backups/navigation-formations-2026-10-09/audit.html:1732:57 ; _DEPLOIEMENT_PROD/audit.html:1732:57 ; audit.html:1732:57 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-synth-num" id="risque-an"&gt;50 000 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1751:58 ; _backups/navigation-formations-2026-10-09/audit.html:1737:58 ; _DEPLOIEMENT_PROD/audit.html:1737:58 ; audit.html:1737:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-synth-num" id="valeur-an"&gt;56 000 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1756:58 ; _backups/navigation-formations-2026-10-09/audit.html:1742:58 ; _DEPLOIEMENT_PROD/audit.html:1742:58 ; audit.html:1742:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;150 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1767:44 ; _backups/navigation-formations-2026-10-09/audit.html:1753:44 ; _DEPLOIEMENT_PROD/audit.html:1753:44 ; audit.html:1753:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-1"&gt;55 850 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1769:58 ; _backups/navigation-formations-2026-10-09/audit.html:1755:58 ; _DEPLOIEMENT_PROD/audit.html:1755:58 ; audit.html:1755:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;390 € · déductible 60j&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1779:44 ; _backups/navigation-formations-2026-10-09/audit.html:1765:44 ; _DEPLOIEMENT_PROD/audit.html:1765:44 ; audit.html:1765:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-2"&gt;55 610 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1781:58 ; _backups/navigation-formations-2026-10-09/audit.html:1767:58 ; _DEPLOIEMENT_PROD/audit.html:1767:58 ; audit.html:1767:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;690 € · déductible 60j&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1791:44 ; _backups/navigation-formations-2026-10-09/audit.html:1777:44 ; _DEPLOIEMENT_PROD/audit.html:1777:44 ; audit.html:1777:44 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-3"&gt;55 310 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/audit.html:1793:58 ; _backups/navigation-formations-2026-10-09/audit.html:1779:58 ; _DEPLOIEMENT_PROD/audit.html:1779:58 ; audit.html:1779:58 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;1 490 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1457:21 ; _backups/navigation-formations-2026-10-09/outils.html:1443:21 ; _DEPLOIEMENT_PROD/outils.html:1443:21 ; outils.html:1443:21 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;td&gt;dès 6 990 €&lt;/td&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1475:25 ; _backups/navigation-formations-2026-10-09/outils.html:1461:25 ; _DEPLOIEMENT_PROD/outils.html:1461:25 ; outils.html:1461:25 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;1 490 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1515:46 ; _backups/navigation-formations-2026-10-09/outils.html:1501:46 ; _DEPLOIEMENT_PROD/outils.html:1501:46 ; outils.html:1501:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;1 490 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1515:48 ; _backups/navigation-formations-2026-10-09/outils.html:1501:48 ; _DEPLOIEMENT_PROD/outils.html:1501:48 ; outils.html:1501:48 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov · livraison 7 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1516:46 ; _backups/navigation-formations-2026-10-09/outils.html:1502:46 ; _DEPLOIEMENT_PROD/outils.html:1502:46 ; outils.html:1502:46 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov · livraison 7 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1516:47 ; _backups/navigation-formations-2026-10-09/outils.html:1502:47 ; _DEPLOIEMENT_PROD/outils.html:1502:47 ; outils.html:1502:47 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 590 €/an de licence L'Rénov · livraison 7 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1516:54 ; _backups/navigation-formations-2026-10-09/outils.html:1502:54 ; _DEPLOIEMENT_PROD/outils.html:1502:54 ; outils.html:1502:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="brique-state"&gt;Non inclus&lt;br&gt;(option +150 €/connexion)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1538:66 ; _backups/navigation-formations-2026-10-09/outils.html:1524:66 ; _DEPLOIEMENT_PROD/outils.html:1524:66 ; outils.html:1524:66 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;li&gt;4h d'intervention annuelles incluses dans la licence&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1576:64 ; _backups/navigation-formations-2026-10-09/outils.html:1562:64 ; _DEPLOIEMENT_PROD/outils.html:1562:64 ; outils.html:1562:64 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | ention&lt;/strong&gt; incluses par an + &lt;strong&gt;2 ajustements mineurs&lt;/strong&gt;. Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | _backups/ateliers-shift-2026-10-09/outils.html:1621:289 ; _backups/navigation-formations-2026-10-09/outils.html:1607:289 ; _DEPLOIEMENT_PROD/outils.html:1607:289 ; outils.html:1607:289 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | par an + &lt;strong&gt;2 ajustements mineurs&lt;/strong&gt;. Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | _backups/ateliers-shift-2026-10-09/outils.html:1621:314 ; _backups/navigation-formations-2026-10-09/outils.html:1607:314 ; _DEPLOIEMENT_PROD/outils.html:1607:314 ; outils.html:1607:314 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · livraison 15 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1638:48 ; _backups/navigation-formations-2026-10-09/outils.html:1624:48 ; _DEPLOIEMENT_PROD/outils.html:1624:48 ; outils.html:1624:48 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · livraison 15 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1638:49 ; _backups/navigation-formations-2026-10-09/outils.html:1624:49 ; _DEPLOIEMENT_PROD/outils.html:1624:49 ; outils.html:1624:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 1 190 €/an de licence L'Rénov · livraison 15 jours&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1638:56 ; _backups/navigation-formations-2026-10-09/outils.html:1624:56 ; _DEPLOIEMENT_PROD/outils.html:1624:56 ; outils.html:1624:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | + &lt;strong&gt;3 ajustements mineurs&lt;/strong&gt;. Mensualisation possible (+10%). Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | _backups/ateliers-shift-2026-10-09/outils.html:1743:270 ; _backups/navigation-formations-2026-10-09/outils.html:1729:270 ; _DEPLOIEMENT_PROD/outils.html:1729:270 ; outils.html:1729:270 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | ineurs&lt;/strong&gt;. Mensualisation possible (+10%). Limites : 50 000 tokens IA/mois · 10 000 opérations/mois. | _backups/ateliers-shift-2026-10-09/outils.html:1743:295 ; _backups/navigation-formations-2026-10-09/outils.html:1729:295 ; _DEPLOIEMENT_PROD/outils.html:1729:295 ; outils.html:1729:295 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1760:48 ; _backups/ateliers-shift-2026-10-09/outils.html:1760:81 ; _backups/navigation-formations-2026-10-09/outils.html:1746:48 ; _backups/navigation-formations-2026-10-09/outils.html:1746:81 ; _DEPLOIEMENT_PROD/outils.html:1746:48 ; _DEPLOIEMENT_PROD/outils.html:1746:81 ; outils.html:1746:48 ; outils.html:1746:81 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1760:49 ; _backups/navigation-formations-2026-10-09/outils.html:1746:49 ; _DEPLOIEMENT_PROD/outils.html:1746:49 ; outils.html:1746:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1760:56 ; _backups/navigation-formations-2026-10-09/outils.html:1746:56 ; _DEPLOIEMENT_PROD/outils.html:1746:56 ; outils.html:1746:56 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;span class="price-detail"&gt;+ 1 790 €/an de licence L'Rénov · ou 164 €/mois · livraison 1 mois&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1760:82 ; _backups/navigation-formations-2026-10-09/outils.html:1746:82 ; _DEPLOIEMENT_PROD/outils.html:1746:82 ; outils.html:1746:82 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;li&gt;12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 €/mois&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1821:37 ; _backups/navigation-formations-2026-10-09/outils.html:1807:37 ; _DEPLOIEMENT_PROD/outils.html:1807:37 ; outils.html:1807:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;li&gt;12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 €/mois&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1821:86 ; _backups/navigation-formations-2026-10-09/outils.html:1807:86 ; _DEPLOIEMENT_PROD/outils.html:1807:86 ; outils.html:1807:86 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /mois | &lt;li&gt;12h d'intervention/an · 5 ajustements mineurs · mensualisation 164 €/mois&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1821:87 ; _backups/navigation-formations-2026-10-09/outils.html:1807:87 ; _DEPLOIEMENT_PROD/outils.html:1807:87 ; outils.html:1807:87 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | du système complet + Mistral EU + ajustement des prompts/règles métier + &lt;strong&gt;12h d'intervention/an&lt;/strong&gt; + &lt;strong&gt;5 ajustements mineurs&lt;/strong&gt; + mises à jour + support prioritaire + adaptation continue des KPI au rythme de l'activité. | _backups/ateliers-shift-2026-10-09/outils.html:1865:141 ; _backups/navigation-formations-2026-10-09/outils.html:1851:141 ; _DEPLOIEMENT_PROD/outils.html:1851:141 ; outils.html:1851:141 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="price-amount"&gt;dès 6 990 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1881:50 ; _backups/navigation-formations-2026-10-09/outils.html:1867:50 ; _DEPLOIEMENT_PROD/outils.html:1867:50 ; outils.html:1867:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="price-amount"&gt;dès 6 990 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1881:52 ; _backups/navigation-formations-2026-10-09/outils.html:1867:52 ; _DEPLOIEMENT_PROD/outils.html:1867:52 ; outils.html:1867:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;span class="price-detail"&gt;+ licence/an sur devis · livraison sur devis (cadrage approfondi requis)&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1882:42 ; _backups/navigation-formations-2026-10-09/outils.html:1868:42 ; _DEPLOIEMENT_PROD/outils.html:1868:42 ; outils.html:1868:42 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;span class="price-detail"&gt;+ licence/an sur devis · livraison sur devis (cadrage approfondi requis)&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1882:49 ; _backups/navigation-formations-2026-10-09/outils.html:1868:49 ; _DEPLOIEMENT_PROD/outils.html:1868:49 ; outils.html:1868:49 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | class="process-step-content"&gt;&lt;strong&gt;Audit Feuille de Route&lt;/strong&gt; (demi-journée immersive · 690 € · déductible) — Cartographie des flux actuels, identification des automatisations à construire, scope des connexions externes.&lt;/div&gt;&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1925:178 ; _backups/navigation-formations-2026-10-09/outils.html:1911:178 ; _DEPLOIEMENT_PROD/outils.html:1911:178 ; outils.html:1911:178 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;li&gt;16h d'intervention/an · 8 ajustements mineurs · support prioritaire&lt;/li&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1943:37 ; _backups/navigation-formations-2026-10-09/outils.html:1929:37 ; _DEPLOIEMENT_PROD/outils.html:1929:37 ; outils.html:1929:37 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="tab-section-title"&gt;La licence annuelle (sur devis)&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:1986:43 ; _backups/navigation-formations-2026-10-09/outils.html:1972:43 ; _DEPLOIEMENT_PROD/outils.html:1972:43 ; outils.html:1972:43 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | aintenance des 3 modules + couche analytique + automatisations externes + &lt;strong&gt;16h d'intervention/an&lt;/strong&gt; + &lt;strong&gt;8 ajustements mineurs&lt;/strong&gt; + support prioritaire + mises à jour. Tarif licence variable selon scope final (nombre de connexions, volume | _backups/ateliers-shift-2026-10-09/outils.html:1988:177 ; _backups/navigation-formations-2026-10-09/outils.html:1974:177 ; _DEPLOIEMENT_PROD/outils.html:1974:177 ; outils.html:1974:177 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | on/an&lt;/strong&gt; + &lt;strong&gt;8 ajustements mineurs&lt;/strong&gt; + support prioritaire + mises à jour. Tarif licence variable selon scope final (nombre de connexions, volume utilisateurs, complexité automatisations). | _backups/ateliers-shift-2026-10-09/outils.html:1988:275 ; _backups/navigation-formations-2026-10-09/outils.html:1974:275 ; _DEPLOIEMENT_PROD/outils.html:1974:275 ; outils.html:1974:275 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;1 490 € + 590 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2077:46 ; _backups/ateliers-shift-2026-10-09/outils.html:2077:54 ; _backups/navigation-formations-2026-10-09/outils.html:2063:46 ; _backups/navigation-formations-2026-10-09/outils.html:2063:54 ; _DEPLOIEMENT_PROD/outils.html:2063:46 ; _DEPLOIEMENT_PROD/outils.html:2063:54 ; outils.html:2063:46 ; outils.html:2063:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| /an | &lt;div class="roi-compare-price"&gt;1 490 € + 590 €/an&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2077:55 ; _backups/navigation-formations-2026-10-09/outils.html:2063:55 ; _DEPLOIEMENT_PROD/outils.html:2063:55 ; outils.html:2063:55 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-1"&gt;+ 17 720 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2079:60 ; _backups/navigation-formations-2026-10-09/outils.html:2065:60 ; _DEPLOIEMENT_PROD/outils.html:2065:60 ; outils.html:2065:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-2"&gt;+ 15 710 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2091:60 ; _backups/navigation-formations-2026-10-09/outils.html:2077:60 ; _DEPLOIEMENT_PROD/outils.html:2077:60 ; outils.html:2077:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-3"&gt;+ 13 510 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2103:60 ; _backups/navigation-formations-2026-10-09/outils.html:2089:60 ; _DEPLOIEMENT_PROD/outils.html:2089:60 ; outils.html:2089:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-price"&gt;dès 6 990 € + licence sur devis&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2113:50 ; _backups/navigation-formations-2026-10-09/outils.html:2099:50 ; _DEPLOIEMENT_PROD/outils.html:2099:50 ; outils.html:2099:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | &lt;div class="roi-compare-price"&gt;dès 6 990 € + licence sur devis&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2113:54 ; _backups/navigation-formations-2026-10-09/outils.html:2099:54 ; _DEPLOIEMENT_PROD/outils.html:2099:54 ; outils.html:2099:54 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="roi-compare-roi" id="roi-4"&gt;+ 10 510 €&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2115:60 ; _backups/navigation-formations-2026-10-09/outils.html:2101:60 ; _DEPLOIEMENT_PROD/outils.html:2101:60 ; outils.html:2101:60 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| setup | ong&gt; sur un Outil Pro, Expert ou Tout-en-un — pas sur un Starter. Format &lt;strong&gt;one-shot&lt;/strong&gt; (setup unique, pas de licence). &lt;strong&gt;Usage B2B exclusivement&lt;/strong&gt; — non applicable aux contrats consommateurs particuliers soumis au droit de rétractation (art | _backups/ateliers-shift-2026-10-09/outils.html:2143:158 ; _backups/navigation-formations-2026-10-09/outils.html:2129:158 ; _DEPLOIEMENT_PROD/outils.html:2129:158 ; outils.html:2129:158 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| licence | , Expert ou Tout-en-un — pas sur un Starter. Format &lt;strong&gt;one-shot&lt;/strong&gt; (setup unique, pas de licence). &lt;strong&gt;Usage B2B exclusivement&lt;/strong&gt; — non applicable aux contrats consommateurs particuliers soumis au droit de rétractation (art. L.221-18 Code conso). | _backups/ateliers-shift-2026-10-09/outils.html:2143:179 ; _backups/navigation-formations-2026-10-09/outils.html:2129:179 ; _DEPLOIEMENT_PROD/outils.html:2129:179 ; outils.html:2129:179 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="integration-card-price"&gt;350 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2149:50 ; _backups/navigation-formations-2026-10-09/outils.html:2135:50 ; _DEPLOIEMENT_PROD/outils.html:2135:50 ; outils.html:2135:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="integration-card-price"&gt;350 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2149:52 ; _backups/navigation-formations-2026-10-09/outils.html:2135:52 ; _DEPLOIEMENT_PROD/outils.html:2135:52 ; outils.html:2135:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="integration-card-price"&gt;250 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2154:50 ; _backups/navigation-formations-2026-10-09/outils.html:2140:50 ; _DEPLOIEMENT_PROD/outils.html:2140:50 ; outils.html:2140:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="integration-card-price"&gt;250 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2154:52 ; _backups/navigation-formations-2026-10-09/outils.html:2140:52 ; _DEPLOIEMENT_PROD/outils.html:2140:52 ; outils.html:2140:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="integration-card-price"&gt;300 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2159:50 ; _backups/navigation-formations-2026-10-09/outils.html:2145:50 ; _DEPLOIEMENT_PROD/outils.html:2145:50 ; outils.html:2145:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="integration-card-price"&gt;300 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2159:52 ; _backups/navigation-formations-2026-10-09/outils.html:2145:52 ; _DEPLOIEMENT_PROD/outils.html:2145:52 ; outils.html:2145:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;span class="integration-card-price"&gt;750 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2164:50 ; _backups/navigation-formations-2026-10-09/outils.html:2150:50 ; _DEPLOIEMENT_PROD/outils.html:2150:50 ; outils.html:2150:50 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| HT | &lt;span class="integration-card-price"&gt;750 € HT&lt;/span&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2164:52 ; _backups/navigation-formations-2026-10-09/outils.html:2150:52 ; _DEPLOIEMENT_PROD/outils.html:2150:52 ; outils.html:2150:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="integration-card-desc"&gt;Signature + paiement acompte + caution. Économie de 150 € vs achat séparé. Pour les structures qui veulent fluidifier toute la chaîne d'engagement client.&lt;/div&gt; | _backups/ateliers-shift-2026-10-09/outils.html:2165:100 ; _backups/navigation-formations-2026-10-09/outils.html:2151:100 ; _DEPLOIEMENT_PROD/outils.html:2151:100 ; outils.html:2151:100 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| forfait | uctures qui ne souhaitent pas gérer ces comptes (typiquement artisans, BTP terrain, indépendants) : forfait de maintenance dédié, à cadrer en fonction du périmètre. | _backups/ateliers-shift-2026-10-09/outils.html:2176:390 ; _backups/navigation-formations-2026-10-09/outils.html:2162:390 ; _DEPLOIEMENT_PROD/outils.html:2162:390 ; outils.html:2162:390 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | ons transversales pour utiliser vos outils au quotidien. Format commun : 1 h 30 · Tarif public : 79 €.&lt;/p&gt;&lt;div class="rows" data-catalogue data-niveau="CTRL"&gt;&lt;/div&gt;&lt;/section&gt; | _backups/cartes-ateliers-2026-10-09/ateliers.html:36:242 ; _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:35:242 ; _backups/catalogue-shift-final-2026-10-09/ateliers.html:35:242 ; _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:35:242 ; _backups/catalogue-shift-final-application-2026-10-09/ateliers.html:35:242 ; _backups/categories-cmd-2026-10-09/ateliers.html:36:242 ; _backups/fiches-shift-2026-10-09/ateliers.html:36:242 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:36:242 ; _backups/navigation-formations-2026-10-09/ateliers.html:36:242 ; _DEPLOIEMENT_PROD/ateliers.html:38:242 ; ateliers.html:38:242 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | rois parcours pour transformer ses méthodes de travail.&lt;/p&gt;&lt;p&gt;7 h · 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants&lt;/p&gt;&lt;div class="rows" data-catalogue data-niveau="ENTER"&gt;&lt;/div&gt;&lt;/section&gt; | _backups/cartes-ateliers-2026-10-09/ateliers.html:47:290 ; _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:46:290 ; _backups/catalogue-shift-final-2026-10-09/ateliers.html:46:290 ; _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:46:290 ; _backups/catalogue-shift-final-application-2026-10-09/ateliers.html:46:290 ; _backups/categories-cmd-2026-10-09/ateliers.html:47:290 ; _backups/fiches-shift-2026-10-09/ateliers.html:47:290 ; _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html:47:290 ; _backups/navigation-formations-2026-10-09/ateliers.html:47:290 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | a-meta"&gt;&lt;div&gt;&lt;dt&gt;Durée totale&lt;/dt&gt;&lt;dd&gt;14 h&lt;/dd&gt;&lt;/div&gt;&lt;div&gt;&lt;dt&gt;Tarif&lt;/dt&gt;&lt;dd data-fafcea-price&gt;1 120 €&lt;/dd&gt;&lt;/div&gt;&lt;/dl&gt;&lt;p class="fafcea-financing"&gt;FAFCEA — parcours individualisé&lt;/p&gt;&lt;p class="fafcea-group"&gt;1 stagiaire — 1 formatrice dédiée&lt;/p&gt;&lt;details class="fafc | _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html:37:531 ; _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html:37:531 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | a-meta"&gt;&lt;div&gt;&lt;dt&gt;Durée totale&lt;/dt&gt;&lt;dd&gt;21 h&lt;/dd&gt;&lt;/div&gt;&lt;div&gt;&lt;dt&gt;Tarif&lt;/dt&gt;&lt;dd data-fafcea-price&gt;1 680 €&lt;/dd&gt;&lt;/div&gt;&lt;/dl&gt;&lt;p class="fafcea-financing"&gt;FAFCEA — parcours individualisé&lt;/p&gt;&lt;p class="fafcea-group"&gt;1 stagiaire — 1 formatrice dédiée&lt;/p&gt;&lt;details class="fafc | _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html:38:641 ; _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html:38:641 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | a-meta"&gt;&lt;div&gt;&lt;dt&gt;Durée totale&lt;/dt&gt;&lt;dd&gt;28 h&lt;/dd&gt;&lt;/div&gt;&lt;div&gt;&lt;dt&gt;Tarif&lt;/dt&gt;&lt;dd data-fafcea-price&gt;2 240 €&lt;/dd&gt;&lt;/div&gt;&lt;/dl&gt;&lt;p class="fafcea-financing"&gt;FAFCEA — parcours individualisé&lt;/p&gt;&lt;p class="fafcea-group"&gt;1 stagiaire — 1 formatrice dédiée&lt;/p&gt;&lt;details class="fafc | _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html:39:638 ; _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html:39:638 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | a-meta"&gt;&lt;div&gt;&lt;dt&gt;Durée totale&lt;/dt&gt;&lt;dd&gt;40 h&lt;/dd&gt;&lt;/div&gt;&lt;div&gt;&lt;dt&gt;Tarif&lt;/dt&gt;&lt;dd data-fafcea-price&gt;3 200 €&lt;/dd&gt;&lt;/div&gt;&lt;/dl&gt;&lt;p class="fafcea-financing"&gt;FAFCEA — parcours individualisé&lt;/p&gt;&lt;p class="fafcea-group"&gt;1 stagiaire — 1 formatrice dédiée&lt;/p&gt;&lt;details class="fafc | _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html:40:665 ; _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html:40:665 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| / mois | &lt;span class="roi-slider-name"&gt;Dossiers ratés / mois (par manque de réactivité)&lt;/span&gt; | _backups/index_avant_shift_2026-09-30.html:2355:58 | TARIF_A_VERIFIER ; TARIF_ANCIEN (supports historiques) |

| € | &lt;div class="faq-a"&gt;Du diagnostic à 390 € jusqu'à un outil Expert à 5 000 € et plus. Tarifs transparents et indiqués sur chaque page secteur.&lt;/div&gt; | _backups/index_avant_shift_2026-09-30.html:2663:54 ; _backups/index_avant_shift_2026-09-30.html:2663:88 | TARIF_A_VERIFIER ; TARIF_DOUBLON ; TARIF_ANCIEN (supports historiques) |

| € | // Calcul du payback : 2 900 € (Pro) / coût mensuel | _backups/index_avant_shift_2026-09-30.html:3026:34 | TARIF_A_VERIFIER ; TARIF_ANCIEN (supports historiques) |

| € | rois parcours pour transformer ses méthodes de travail.&lt;/p&gt;&lt;p&gt;7 h — 2 × 3 h 30 · Tarif public : 399 € · Groupe : 4 à 8 participants&lt;/p&gt;&lt;div class="rows" data-catalogue data-niveau="ENTER"&gt;&lt;/div&gt;&lt;/section&gt; | _DEPLOIEMENT_PROD/ateliers.html:49:290 ; ateliers.html:49:290 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| abonnement | &lt;h2&gt;Le bon calcul n'est pas le prix de l'abonnement.&lt;/h2&gt; | _DEPLOIEMENT_PROD/panorama-ia/index.html:206:52 ; panorama-ia/index.html:206:52 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| € | &lt;label&gt;Valeur d'une heure de travail &lt;strong id="hourly-value"&gt;50 €&lt;/strong&gt;&lt;input id="hourly" type="range" min="20" max="150" step="5" value="50"&gt;&lt;/label&gt; | _DEPLOIEMENT_PROD/panorama-ia/index.html:213:79 ; panorama-ia/index.html:213:79 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| € | &lt;label&gt;Budget mensuel outils et accompagnement &lt;strong id="cost-value"&gt;60 €&lt;/strong&gt;&lt;input id="cost" type="range" min="0" max="500" step="10" value="60"&gt;&lt;/label&gt; | _DEPLOIEMENT_PROD/panorama-ia/index.html:214:87 ; panorama-ia/index.html:214:87 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| € | &lt;div class="roi-main" id="roi-main"&gt;265 €&lt;/div&gt; | _DEPLOIEMENT_PROD/panorama-ia/index.html:218:53 ; panorama-ia/index.html:218:53 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| € | &lt;div&gt;&lt;span&gt;Valeur brute&lt;/span&gt;&lt;strong id="gross-value"&gt;325 €&lt;/strong&gt;&lt;/div&gt; | _DEPLOIEMENT_PROD/panorama-ia/index.html:221:74 ; panorama-ia/index.html:221:74 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| HT | &lt;strong&gt;finançables OPCO, AFDAS ou CPF&lt;/strong&gt; selon le profil de l'apprenant. Tarifs visibles en HT — la prise en charge dépend du statut (salarié, indépendant, dirigeant) et de l'OPCO concerné.&lt;/p&gt; | index (1).html:1292:184 | TARIF_A_VERIFIER |

| € | &lt;td&gt;290 – 690 €&lt;/td&gt; | index (1).html:1317:25 | TARIF_A_VERIFIER |

| € | &lt;td&gt;390 – 650 € / module&lt;/td&gt; | index (1).html:1324:25 | TARIF_A_VERIFIER |

| € | &lt;td&gt;790 – 1 590 €&lt;/td&gt; | index (1).html:1331:27 | TARIF_A_VERIFIER |

| € | &lt;td&gt;OPCO · CPF (1 500 €)&lt;/td&gt; | index (1).html:1333:33 | TARIF_A_VERIFIER |

| € | &lt;span class="price-amount"&gt;290 – 690 € HT&lt;/span&gt; | index (1).html:1367:50 | TARIF_A_VERIFIER |

| HT | &lt;span class="price-amount"&gt;290 – 690 € HT&lt;/span&gt; | index (1).html:1367:52 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;3 h · 290 € HT&lt;/strong&gt; · Niveau Essentiel. Bases de l'IA générative, panorama des outils (ChatGPT, Claude, Mistral, etc.), premiers prompts, cas d'usage par métier. Aucun | index (1).html:1384:61 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;3 h · 290 € HT&lt;/strong&gt; · Niveau Essentiel. Bases de l'IA générative, panorama des outils (ChatGPT, Claude, Mistral, etc.), premiers prompts, cas d'usage par métier. Aucun pr | index (1).html:1384:63 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;4 h · 390 € HT&lt;/strong&gt; · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD. Prérequis : SOC-01 ou é | index (1).html:1388:61 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;4 h · 390 € HT&lt;/strong&gt; · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD. Prérequis : SOC-01 ou équi | index (1).html:1388:63 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h · 690 € HT&lt;/strong&gt; · Niveau Essentiel. Les 2 formations enchaînées sur 2 demi-journées espacées de 7 jours minimum. Format recommandé pour démarrer sereinement.&lt;/div&gt; | index (1).html:1392:61 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h · 690 € HT&lt;/strong&gt; · Niveau Essentiel. Les 2 formations enchaînées sur 2 demi-journées espacées de 7 jours minimum. Format recommandé pour démarrer sereinement.&lt;/div&gt; | index (1).html:1392:63 | TARIF_A_VERIFIER |

| HT | çable OPCO et CPF · Acompte 30 % à la commande · Annulation &amp;lt; 48 h = 100 % du montant dû. Tarifs HT — la prise en charge dépend du statut et de l'OPCO. | index (1).html:1461:251 | TARIF_A_VERIFIER |

| € | &lt;span class="price-amount"&gt;390 – 650 € HT / module&lt;/span&gt; | index (1).html:1477:50 | TARIF_A_VERIFIER |

| HT | &lt;span class="price-amount"&gt;390 – 650 € HT / module&lt;/span&gt; | index (1).html:1477:52 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 | index (1).html:1494:69 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilota | index (1).html:1494:111 | TARIF_A_VERIFIER |

| € | -text"&gt;Analyse risques IARD (490 €) · Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt; | index (1).html:1494:136 | TARIF_A_VERIFIER |

| € | Rédaction communications client (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt;/div&gt; | index (1).html:1494:174 | TARIF_A_VERIFIER |

| € | ient (290 €) · RGPD assurance (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt;/div&gt; | index (1).html:1494:201 | TARIF_A_VERIFIER |

| € | (550 €) · Automatisation suivi client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt;/div&gt; | index (1).html:1494:230 | TARIF_A_VERIFIER |

| € | client (490 €) · Détection fraude (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt;/div&gt; | index (1).html:1494:261 | TARIF_A_VERIFIER |

| € | de (650 €) · Synthèses rapports (390 €) · Gestion réclamations (390 €) · Pilotage portefeuille (650 €).&lt;/div&gt; | index (1).html:1494:293 | TARIF_A_VERIFIER |

| € | &lt;div class="sector-line"&gt;&lt;strong&gt;Assurance&lt;/strong&gt;ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€)&lt;/div&gt; | index (1).html:1546:95 | TARIF_A_VERIFIER |

| € | ne"&gt;&lt;strong&gt;Assurance&lt;/strong&gt;ASS-02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€)&lt;/div&gt; | index (1).html:1546:132 | TARIF_A_VERIFIER |

| € | -02 Communications client (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€)&lt;/div&gt; | index (1).html:1546:165 | TARIF_A_VERIFIER |

| € | ient (290€) · ASS-04 Automatisation suivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€)&lt;/div&gt; | index (1).html:1546:186 | TARIF_A_VERIFIER |

| € | ivi (490€) · ASS-05 Détection fraude (650€) · ASS-03 RGPD (550€) · ASS-08 Pilotage portefeuille (650€)&lt;/div&gt; | index (1).html:1546:224 | TARIF_A_VERIFIER |

| € | &lt;div class="sector-line"&gt;&lt;strong&gt;Communication&lt;/strong&gt;COM-01 Création contenu à grande échelle (790€) · COM-02 Stratégie éditoriale (490€) · Posts réseaux sociaux · RGPD contenu · Briefs créatifs&lt;/div&gt; | index (1).html:1550:111 | TARIF_A_VERIFIER |

| € | unication&lt;/strong&gt;COM-01 Création contenu à grande échelle (790€) · COM-02 Stratégie éditoriale (490€) · Posts réseaux sociaux · RGPD contenu · Briefs créatifs&lt;/div&gt; | index (1).html:1550:148 | TARIF_A_VERIFIER |

| € | &lt;span class="price-amount"&gt;790 – 1 590 € HT&lt;/span&gt; | index (1).html:1590:52 | TARIF_A_VERIFIER |

| HT | &lt;span class="price-amount"&gt;790 – 1 590 € HT&lt;/span&gt; | index (1).html:1590:54 | TARIF_A_VERIFIER |

| € | &lt;span class="price-detail"&gt;7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €)&lt;/span&gt; | index (1).html:1591:100 | TARIF_A_VERIFIER |

| € | &lt;p&gt;Niveau Expert (1 090 – 1 590 €) accessible avec prérequis : SOC-01 + SOC-02 validés + expérience terrain active dans le secteur. &lt;strong&gt;Compatible CPF&lt;/strong&gt; à 1 500 € : permet à un salar | index (1).html:1599:41 | TARIF_A_VERIFIER |

| € | SOC-02 validés + expérience terrain active dans le secteur. &lt;strong&gt;Compatible CPF&lt;/strong&gt; à 1 500 € : permet à un salarié de financer la formation sur son propre compte personnel de formation.&lt;/p&gt; | index (1).html:1599:181 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h (2×3h30) · 790 € HT · Niveau Professionnel&lt;/strong&gt;. Essentiel IA assurance : panorama, communications client, suivi pipeline, premiers cas DDA. OPCO Atlas.&lt;/div&gt; | index (1).html:1607:70 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h (2×3h30) · 790 € HT · Niveau Professionnel&lt;/strong&gt;. Essentiel IA assurance : panorama, communications client, suivi pipeline, premiers cas DDA. OPCO Atlas.&lt;/div&gt; | index (1).html:1607:72 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h (2×3h30) · 1 090 € HT · Niveau Expert&lt;/strong&gt;. IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SOC-01/02 + expérience | index (1).html:1611:72 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;7 h (2×3h30) · 1 090 € HT · Niveau Expert&lt;/strong&gt;. IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SOC-01/02 + expérience. O | index (1).html:1611:74 | TARIF_A_VERIFIER |

| € | &lt;div class="format-card-text"&gt;&lt;strong&gt;14 h · 1 590 € HT · Niveau Expert&lt;/strong&gt;. Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation complexes, accompagne | index (1).html:1615:64 | TARIF_A_VERIFIER |

| HT | &lt;div class="format-card-text"&gt;&lt;strong&gt;14 h · 1 590 € HT · Niveau Expert&lt;/strong&gt;. Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation complexes, accompagnemen | index (1).html:1615:66 | TARIF_A_VERIFIER |

| € | &lt;li&gt;Compatible CPF (1 500 € de prise en charge possible)&lt;/li&gt; | index (1).html:1638:41 | TARIF_A_VERIFIER |

| € | &lt;div class="sector-line"&gt;&lt;strong&gt;Assurance&lt;/strong&gt;ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h)&lt;/div&gt; | index (1).html:1660:88 | TARIF_A_VERIFIER |

| € | "&gt;&lt;strong&gt;Assurance&lt;/strong&gt;ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h)&lt;/div&gt; | index (1).html:1660:134 | TARIF_A_VERIFIER |

| € | Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h)&lt;/div&gt; | index (1).html:1660:196 | TARIF_A_VERIFIER |

| € | &lt;div class="sector-line"&gt;&lt;strong&gt;Communication&lt;/strong&gt;COM-01 Création contenu à grande échelle (790€ · 7h · Pro) · Parcours Manager éditorial · Parcours Expert IA générative communication&lt;/div&gt; | index (1).html:1664:111 | TARIF_A_VERIFIER |

| € | résentiel ou visio · &lt;strong&gt;Certifiable Qualiopi&lt;/strong&gt; · Finançable OPCO renforcé et CPF (1 500 €) · &lt;strong&gt;Acompte 30 %&lt;/strong&gt; à la commande · Annulation &amp;lt; 48 h = 100 % du montant dû. &lt;strong&gt;Accompagnement post-formation 1 mois inclus&lt;/strong&gt;. Mont | index (1).html:1688:164 | TARIF_A_VERIFIER |

| HT | &lt;label for="tarif"&gt;Tarif HT estimé / personne&lt;/label&gt; | index (1).html:1718:36 | TARIF_A_VERIFIER |

| € | &lt;span class="roi-input-value"&gt;&lt;span id="tarif-val"&gt;790&lt;/span&gt; €&lt;/span&gt; | index (1).html:1719:73 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-input-scale"&gt;&lt;span&gt;290 €&lt;/span&gt;&lt;span&gt;1 590 €&lt;/span&gt;&lt;/div&gt; | index (1).html:1722:48 ; index (1).html:1722:68 | TARIF_A_VERIFIER ; TARIF_DOUBLON |

| € | &lt;div class="roi-synth-num" id="cout-brut"&gt;790 €&lt;/div&gt; | index (1).html:1757:55 | TARIF_A_VERIFIER |

| HT | &lt;div class="roi-synth-label"&gt;coût brut HT total&lt;/div&gt; | index (1).html:1758:48 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-synth-num" id="prise-charge"&gt;553 €&lt;/div&gt; | index (1).html:1762:58 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-synth-num" id="reste-charge"&gt;237 €&lt;/div&gt; | index (1).html:1767:58 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-price"&gt;290 – 690 € HT&lt;/div&gt; | index (1).html:1778:50 | TARIF_A_VERIFIER |

| HT | &lt;div class="roi-compare-price"&gt;290 – 690 € HT&lt;/div&gt; | index (1).html:1778:52 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-roi" id="reste-1"&gt;207 €&lt;/div&gt; | index (1).html:1780:57 | TARIF_A_VERIFIER |

| € | Sur tarif moyen &lt;strong&gt;690 €&lt;/strong&gt; | index (1).html:1784:39 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-price"&gt;390 – 650 € / module&lt;/div&gt; | index (1).html:1790:50 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-roi" id="reste-2"&gt;156 €&lt;/div&gt; | index (1).html:1792:57 | TARIF_A_VERIFIER |

| € | Sur tarif moyen &lt;strong&gt;520 €&lt;/strong&gt; | index (1).html:1796:39 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-price"&gt;790 – 1 590 € HT&lt;/div&gt; | index (1).html:1802:52 | TARIF_A_VERIFIER |

| HT | &lt;div class="roi-compare-price"&gt;790 – 1 590 € HT&lt;/div&gt; | index (1).html:1802:54 | TARIF_A_VERIFIER |

| € | &lt;div class="roi-compare-roi" id="reste-3"&gt;357 €&lt;/div&gt; | index (1).html:1804:57 | TARIF_A_VERIFIER |

| € | Sur tarif moyen &lt;strong&gt;1 190 €&lt;/strong&gt; | index (1).html:1808:41 | TARIF_A_VERIFIER |

| € | ements possibles : &lt;strong&gt;OPCO&lt;/strong&gt; (Atlas, AFDAS, OPCO EP, etc.), &lt;strong&gt;CPF&lt;/strong&gt; (1 500 € max pour les formations éligibles), &lt;strong&gt;FIF-PL&lt;/strong&gt; pour les indépendants. | index (1).html:1815:525 | TARIF_A_VERIFIER |



### F.5. Contradictions et ambiguïtés tarifaires à arbitrer

| Constat | Preuves | Marqueurs / arbitrage |

| --- | --- | --- |

| Ancien atelier à 390–890 € vs parcours SHIFT | Secteurs l.1306 et exemples l.1219 renvoient vers ateliers.html qui affiche CTRL 79 € et ENTER 399 € ; CMD JS 119 / 139 €. | TARIF_INCOHERENT pour le parcours de lien ; ne prouve pas une erreur de prix à prestation identique, les formats ont changé. |

| Tous audits déductibles vs Découverte exclue | cgv.html:449 dit « Tout audit » ; audit.html:1296–1300 et 1347 excluent Découverte. | TARIF_INCOHERENT ; périmètre déductibilité à décider. |

| Diagnostic = dès 390 € vs entrée audit 150 € | ia-et-moi.html:1213 et audit.html:1297. | TARIF_A_VERIFIER ; ce sont des livrables différents, pas une équivalence à corriger automatiquement. |

| Licence annuel vs paiement mensuel | 1 190 €/an vs 109 × 12 = 1 308 € (+118 €, ~9,92 %) ; 1 790 €/an vs 164 × 12 = 1 968 € (+178 €, ~9,94 %). outils mentionne une mensualisation +10 %. | TARIF_A_VERIFIER ; majoration approximative/arrondie annoncée, ne pas présenter comme égalité ni erreur certaine. |

| Valeurs de simulation réutilisées comme gain commercial | ia-et-moi:1437–1442 ; tableaux ROI audit/outils/agents. | TARIF_A_VERIFIER ; distinguer hypothèses de coût, économies théoriques et gain réellement constaté. |

| Taxes des nouveaux ateliers | 79 / 119 / 139 / 399 € : « Tarif public », sans HT/TTC à ces emplacements ; CGV disent prix HT/franchise TVA. | TARIF_A_VERIFIER ; aucune déduction automatique de régime ou prix TTC. |

| Hébergement, licence et coûts tiers | ia-et-moi annonce hébergement dans licence ; outils prévoit mode autonome et option hébergée ; CGV comptes et abonnements au nom client. | TARIF_A_VERIFIER ; définir ce que couvre réellement le prix, sans réinjecter le modèle historique. |



## G. Anciennes offres et nomenclatures

Référentiel de comparaison observé : navigation Formation & solutions métier ; hub actuel à quatre familles et formation SHIFT/FAFCEA/CPF. Le terme Pro dans Claude Pro, par exemple, désigne un produit tiers et n’est pas automatiquement une ancienne offre du Studio. Le registre ci-dessous distingue répétition, contradiction et contenu récupérable.

| Nomenclature | Où / existe ailleurs | Ce qu’elle décrit | Décalage ou contradiction | À récupérer sans nom ni prix |

| --- | --- | --- | --- | --- |

| Starter / Pro / Expert / Tout-en-un | outils ; ia-et-moi ; CGV ; Starter/Pro sur professions libérales ; Pro/Expert dans exemples sectoriels | 1 module → 2 modules → pilotage → orchestration complète. | Le hub Solutions métier ne propose plus ces packs ; les grilles ne sont pas validées. | Progression d’un périmètre simple, connexion des flux, choix raisonné de l’IA, maintenance et limites. |

| Découverte / Express / Feuille de route | audit ; CGV ; outils (cadrage Tout-en-un) ; ia-et-moi cite diagnostic | Trois profondeurs de diagnostic ; 150 / 390 / 690 €. | Ancienne URL redirigée ; divergence sur la déduction de Découverte. | Livrable oral/écrit, priorisation, plan par phases, évaluation des irritants et données. |

| 4 niveaux d’agents | agents ; cas sectoriels Bras droit et Métier sécurisé | Agent simple, Agent métier sécurisé, Bras droit IA agence, Cockpit agence complet. | Catalogue marqué par un cadrage agence ; le hub courant ne fixe pas ces quatre niveaux. | Une mission, chaîne de tâches, contrôle humain, cockpit et limites techniques. |

| Mon assistant IA / bras droit IA | ia-et-moi ; index (passages assistants) ; agents ; formulations anciennes dans sauvegardes | Ancienne focalisation de l’ensemble du Studio sur un assistant personnalisé à paliers. | Le fichier assistant est aujourd’hui le hub « Solutions métier » ; ancien nom n’est pas le title courant. | Contexte métier, vocabulaire, documents, style de sortie, accompagnement. |

| Licences annuelles, setup, maintenance par palier | outils ; agents ; ia-et-moi ; CGV ; BTP | Droit d’usage et support, heures incluses, quotas, abonnements techniques et hébergement. | Modèle commercial à arbitrer, pas un engagement pour la future architecture. | Explication du coût d’entretien, responsabilités et autonomie du client. |

| Anciens ateliers demi-journée / journée / 1 mois | sept secteurs ; CGV ; sauvegardes | Co-construire un outil ; 390 / 690 / 390–890 €. | Ateliers actuels = SHIFT CTRL / CMD / ENTER. | Travailler sur un cas réel, transmettre une méthode, produire un livrable. |

| Secteurs Pro : BTP Pro, Compta Pro, CGP Pro, Notariat Pro, Assurance Pro, Immo Pro | Footer commun ; ia-et-moi « base BTP Pro » | Anciens noms de catalogues verticaux. | Menus actuels sans rubrique Pro ; Compta et CGP mènent au même fichier. | Intitulés métier simples et scénarios adaptés ; landing discrète possible. |

| Initiation socle / Spécialisation sectorielle / Parcours certifiant ; SOC-01 / SOC-02 ; Essentiel / Professionnel / Expert | index (1).html ; anciennes sauvegardes | Ancienne gamme formation avec modules et budget CPF 1 500 €. | Doublon historique ; ne correspond pas au hub SHIFT / FAFCEA / CPF actuel. | Progression de compétences, prérequis utiles, pratique et projet certifiant. |

| Cinq prestations : audit / outils / agents / ateliers / formations | secteurs et sept pages métier ; contact ; CGV | Ancienne manière de présenter toutes les interventions. | Le hub solutions distingue aussi automatisations, tandis que formation et ateliers relèvent du pôle formation. | Intentions et cas d’usage, sans imposer cinq offres tarifées. |

| CTRL / CMD / ENTER ; FAFCEA ; CPF RS7311 | Pages formation et données JS actuelles | Formats visibles aujourd’hui. | Nomenclatures actuelles potentielles : ne pas les classer anciennes par simple proximité avec les archives. | Programmes et progression ; certification et financement restent soumis à validation. |



### Registre des occurrences de nomenclatures dans les sources publiques

| Page:ligne | Termes et colonnes | Contexte (peut inclure code ou marque tierce) |

| --- | --- | --- |

| 404.html:157 | Pro (col.75) | Découvrez où en est l'IA dans votre métier avec le Radar IA Pro. |

| 404.html:205 | Secteurs Pro (col.13) | Secteurs Pro |

| 404.html:206 | BTP Pro (col.37) | BTP Pro |

| 404.html:207 | Compta Pro (col.54) | Compta Pro |

| 404.html:208 | CGP Pro (col.54) | CGP Pro |

| 404.html:209 | Notariat Pro (col.43) | Notariat Pro |

| 404.html:210 | Assurance Pro (col.43) | Assurance Pro |

| 404.html:211 | Immo Pro (col.44) | Immo Pro |

| agents.html:18 | express (col.14) | Le cadrage express détaillé est envoyé séparément sur demande |

| agents.html:910 | express (col.56) | /* CTA CADRAGE — demande du questionnaire de cadrage express */ |

| agents.html:1273 | express (col.65) | Avant d'engager un projet  : un  cadrage express  est envoyé sur demande. C'est un court questionnaire qui aide à se situer en fonction des points de friction réels et du métier exercé — pour identifier si le bon niveau est plutôt 1, 2, 3 ou 4. Aucun engagement, simple éclairage. |

| agents.html:1367 | Pro (col.103) | Un Project Claude paramétré, livré dans l'abonnement Claude Pro existant du client. Le plus puissant. |

| agents.html:1383 | express (col.124) | 1   Cadrage express  (30 min visio) — Identification de l'usage exact, des scénarios couverts, des limites à poser, du format technique choisi |

| agents.html:1420 | express (col.76) | BTP "Brouillon de devis express" à partir d'une dictée vocale terrain |

| agents.html:1443 | licence annuelle (col.43) | La licence annuelle (290 - 490 €/an) |

| agents.html:1541 | licence annuelle (col.43) | La licence annuelle (590 €/an) |

| agents.html:1640 | licence annuelle (col.43) | La licence annuelle (1 190 €/an · ou 109 €/mois) |

| agents.html:1732 | licence annuelle (col.43) | La licence annuelle (1 790 €/an · ou 164 €/mois) |

| agents.html:1872 | pro (col.239) | 💡 Le ROI affiché ne tient compte que du  temps mail récupéré . Les gains additionnels (chantiers/dossiers/contrats sauvés grâce à des relances faites à temps, qualité de réponse améliorée, réduction des oublis, image pro renforcée) ne sont pas chiffrés ici —  ils s'ajoutent . |

| agents.html:1884 | EXPRESS (col.20) |  |

| agents.html:1887 | express (col.59) | Recevoir le  cadrage express  pour situer le bon niveau. |

| agents.html:1891 | express (col.104), express (col.325) |  |

| agents.html:1941 | Secteurs Pro (col.13) | Secteurs Pro |

| agents.html:1942 | BTP Pro (col.37) | BTP Pro |

| agents.html:1943 | Compta Pro (col.54) | Compta Pro |

| agents.html:1944 | CGP Pro (col.54) | CGP Pro |

| agents.html:1945 | Notariat Pro (col.43) | Notariat Pro |

| agents.html:1946 | Assurance Pro (col.43) | Assurance Pro |

| agents.html:1947 | Immo Pro (col.44) | Immo Pro |

| assistant.html:89 | Secteurs Pro (col.13) | Secteurs Pro |

| assistant.html:90 | BTP Pro (col.37) | BTP Pro |

| assistant.html:91 | Compta Pro (col.54) | Compta Pro |

| assistant.html:92 | CGP Pro (col.54) | CGP Pro |

| assistant.html:93 | Notariat Pro (col.43) | Notariat Pro |

| assistant.html:94 | Assurance Pro (col.43) | Assurance Pro |

| assistant.html:95 | Immo Pro (col.44) | Immo Pro |

| ateliers.html:92 | Secteurs Pro (col.13) | Secteurs Pro |

| ateliers.html:93 | BTP Pro (col.37) | BTP Pro |

| ateliers.html:94 | Compta Pro (col.54) | Compta Pro |

| ateliers.html:95 | CGP Pro (col.54) | CGP Pro |

| ateliers.html:96 | Notariat Pro (col.43) | Notariat Pro |

| ateliers.html:97 | Assurance Pro (col.43) | Assurance Pro |

| ateliers.html:98 | Immo Pro (col.44) | Immo Pro |

| audit.html:24 | express (col.14) | Le cadrage express détaillé est envoyé séparément sur demande |

| audit.html:916 | express (col.56) | /* CTA CADRAGE — demande du questionnaire de cadrage express */ |

| audit.html:1274 | Express (col.60), Feuille de route (col.71) | Argument central  : sur les paliers Express et Feuille de route, le montant de l'audit est  intégralement déduit  du devis si une mission est engagée dans les 60 jours suivant la session. |

| audit.html:1279 | express (col.53) | Avant l'audit  : un  cadrage express  est envoyé sur demande pour préparer la session — quelques questions sur le métier, la taille de la structure et les points de friction perçus. L'audit lui-même est plus efficace quand le contexte est posé en amont. Aucun engagement, simple éclairage. |

| audit.html:1296 | Découverte (col.19) | 1 · Découverte |

| audit.html:1303 | Express (col.19) | 2 · Express |

| audit.html:1306 | feuille de route (col.26) | CR écrit + feuille de route ROI |

| audit.html:1310 | Feuille de route (col.19) | 3 · Feuille de route |

| audit.html:1325 | Découverte (col.9) | Découverte |

| audit.html:1329 | Express (col.9) | Express |

| audit.html:1333 | Feuille de route (col.9) | Feuille de route |

| audit.html:1338 | DÉCOUVERTE (col.24) | TAB 1 — AUDIT DÉCOUVERTE |

| audit.html:1345 | Découverte (col.21) | Audit Découverte |

| audit.html:1383 | Express (col.233), Feuille de route (col.242) | 3   Suite ouverte  — Pas de relance commerciale automatique. Si le dirigeant souhaite passer à l'étape suivante (Express, Feuille de route, ou directement un outil), il revient en contact. |

| audit.html:1404 | feuille de route (col.26) | Pas de feuille de route ROI chiffrée |

| audit.html:1414 | Découverte (col.57) | Exemples d'audit Découverte par secteur |

| audit.html:1429 | découverte (col.61) | Dirigeant en phase de découverte qui veut valider rapidement s'il y a matière à investir dans l'IA. Structure simple à un métier. Pas besoin de document à partager en interne ou avec un associé. Budget de test maîtrisé. |

| audit.html:1433 | Express (col.220), Feuille de route (col.234) | Besoin d'un document écrit pour aligner une équipe ou justifier une décision en interne. Structure multi-métiers ou multi-sites. Souhait d'un plan d'action chiffré. Dans ces cas, l'Express ou la Feuille de route sont plus adaptés. |

| audit.html:1447 | EXPRESS (col.24) | TAB 2 — AUDIT EXPRESS |

| audit.html:1454 | Express (col.21) | Audit Express |

| audit.html:1455 | feuille de route (col.120) | 2 heures d'échange +  livrable écrit envoyé sous 48h . Compte-rendu structuré, feuille de route avec ROI chiffré.  Déductible 60 jours  si une mission est engagée à la suite. |

| audit.html:1466 | feuille de route (col.45) | Le livrable contient une  feuille de route avec ROI chiffré  : pour chaque priorité identifiée, estimation du gain potentiel (temps, qualité, sécurité, opportunités), de la complexité de mise en œuvre, et du palier d'outil L'Rénov qui y répondrait. |

| audit.html:1478 | Feuille de route (col.44) | Feuille de route ROI chiffrée |

| audit.html:1505 | Feuille de route (col.19) | Feuille de route ROI chiffrée — base de décision concrète |

| audit.html:1518 | Découverte (col.90) | Pas adapté si le dirigeant veut juste tester avant de s'engager — voir Découverte |

| audit.html:1525 | Express (col.57) | Exemples d'audit Express par secteur |

| audit.html:1530 | feuille de route (col.135) | Notariat Flux actes détaillé, charge pré/post-RDV chiffrée, communication client : feuille de route IA |

| audit.html:1544 | Feuille de route (col.243) | Structure complexe multi-sites, multi-métiers, ou réseau franchisé nécessitant un plan d'action détaillé par phases. Données internes à analyser en profondeur (historique de production). Dans ces cas, la Feuille de route est plus adaptée. |

| audit.html:1558 | FEUILLE DE ROUTE (col.24) | TAB 3 — AUDIT FEUILLE DE ROUTE |

| audit.html:1565 | Feuille de Route (col.21) | Audit Feuille de Route |

| audit.html:1637 | Feuille de route (col.57) | Exemples d'audit Feuille de route par secteur |

| audit.html:1639 | Starter (col.97) | BTP Plan d'action 12-24 mois : phase 1 Outil Starter Commercial, phase 2 extension Chantier, phase 3 IA avancée |

| audit.html:1656 | découverte (col.72), Découverte (col.89), Express (col.252) | Dirigeant en phase de test ou de découverte (voir Découverte). Structure avec process internes non documentés — il faut d'abord poser les bases. Besoin de simplement valider une idée avant d'aller plus loin (voir Express). |

| audit.html:1752 | Découverte (col.57) | Palier 1  Découverte |

| audit.html:1764 | Express (col.57) | Palier 2  Express |

| audit.html:1776 | Feuille de route (col.57) | Palier 3  Feuille de route |

| audit.html:1790 | Express (col.343), Feuille de route (col.354) | 💡  Particularité d'un audit  : il n'apporte pas de gain direct mesurable. Il  évite les pertes et les mauvaises décisions  sur les missions qui suivront. Le calcul ci-dessus chiffre la valeur potentielle d'un audit éclairant — la vraie valeur se mesure ensuite, sur les missions cadrées avec lucidité. Sur Express et Feuille de route, l'audit devient  gratuit  si une mission est engagée dans les 60 jours suivant la session. |

| audit.html:1798 | Découverte (col.57), Express (col.166), Feuille de route (col.282) | Selon l'usage qui sera fait du livrable.  Découverte  si la décision se prend seul·e, rapidement, sans besoin de partager un document.  Express  si un compte-rendu écrit chiffré aidera à aligner un associé ou à structurer une décision.  Feuille de route  si l'engagement à venir est structurant et mérite un plan d'action par phases. |

| audit.html:1802 | EXPRESS (col.20) |  |

| audit.html:1805 | express (col.59) | Recevoir le  cadrage express  pour situer le bon palier d'audit. |

| audit.html:1807 | Découverte (col.200), Express (col.212), Feuille de route (col.223) | Un court questionnaire personnalisé envoyé par email. Quelques questions sur l'usage souhaité du livrable et le contexte de décision — pour identifier ensemble si la cible naturelle est plutôt Découverte, Express ou Feuille de route. Aucun engagement, simple éclairage avant tout choix. |

| audit.html:1809 | express (col.104), express (col.324) |  |

| audit.html:1859 | Secteurs Pro (col.13) | Secteurs Pro |

| audit.html:1860 | BTP Pro (col.37) | BTP Pro |

| audit.html:1861 | Compta Pro (col.54) | Compta Pro |

| audit.html:1862 | CGP Pro (col.54) | CGP Pro |

| audit.html:1863 | Notariat Pro (col.43) | Notariat Pro |

| audit.html:1864 | Assurance Pro (col.43) | Assurance Pro |

| audit.html:1865 | Immo Pro (col.44) | Immo Pro |

| cgv.html:328 | feuille de route (col.78) | Audit IA  — diagnostic, cartographie des usages, feuille de route |

| cgv.html:329 | licence annuelle (col.132) | Outils métier sur-mesure  — conception, paramétrage et déploiement d'outils IA + automatisations, avec licence annuelle |

| cgv.html:333 | Pro (col.110), Expert (col.117) | Intégrations  — signature électronique, paiement, caution, en avenant aux outils Pro ou Expert |

| cgv.html:351 | Pro (col.149) | Charges tierces :  les abonnements et licences techniques nécessaires au fonctionnement des outils (notamment Mistral Pro, Notion, Make, Tally, Stripe, YouSign, et toute API tierce) sont à la charge directe du Client, souscrits à son nom, et payés en sus de la prestation L'Rénov. Ces coûts ne sont jamais refacturés par le Prestataire. |

| cgv.html:364 | Feuille de Route (col.25) | Audit Feuille de Route  50 % à la commande  50 % à la remise du livrable |

| cgv.html:368 | Découverte (col.25) | Audit Découverte &amp; sessions courtes  0 %  100 % à la prestation |

| cgv.html:381 | licence annuelle (col.60) | Pour les  outils avec licence , la licence annuelle est facturée dès la livraison de l'outil, puis renouvelée chaque année à date anniversaire, sauf dénonciation écrite par l'une des parties au moins 30 jours avant l'échéance. |

| cgv.html:402 | express (col.24) | Validation expresse des livrables intermédiaires dans un délai raisonnable |

| cgv.html:434 | licence annuelle (col.40) | Les outils métier livrés avec licence annuelle font l'objet de conditions particulières précisées au devis et dans le contrat de licence joint. Sauf stipulation contraire : |

| cgv.html:435 | licence annuelle (col.36) | « La licence annuelle inclut l'hébergement fonctionnel, la supervision technique, [X] h d'intervention et [X] ajustements mineurs par an, dans la limite de 50 000 tokens IA/mois et 10 000 opérations Make/mois. Tout dépassement fait l'objet d'une facturation complémentaire selon le barème technique remis à la signature. Les évolutions structurelles sont hors licence et font l'objet d'un avenant signé. » |

| cgv.html:440 | Starter (col.19) | Starter  4 h  2 ajustements mineurs |

| cgv.html:441 | Pro (col.19) | Pro  8 h  3 ajustements mineurs |

| cgv.html:442 | Expert (col.19) | Expert  12 h  5 ajustements mineurs |

| cgv.html:443 | Tout-en-un (col.19) | Tout-en-un  16 h  8 ajustements mineurs |

| cgv.html:467 | express (col.180) | Le Prestataire se réserve le droit de citer le Client à titre de référence commerciale (logo, nom, secteur d'activité, nature générique de la prestation) sauf opposition expresse du Client formulée par écrit. |

| cgv.html:488 | express (col.145) | Conformément à l' article R.631-3 du Code de la consommation  — bien que la relation soit B2B —,  compétence est expressément attribuée au Tribunal judiciaire de Bordeaux , lieu du siège du Prestataire, nonobstant pluralité de défendeurs ou appel en garantie. |

| cgv.html:536 | Secteurs Pro (col.13) | Secteurs Pro |

| cgv.html:537 | BTP Pro (col.37) | BTP Pro |

| cgv.html:538 | Compta Pro (col.54) | Compta Pro |

| cgv.html:539 | CGP Pro (col.54) | CGP Pro |

| cgv.html:540 | Notariat Pro (col.43) | Notariat Pro |

| cgv.html:541 | Assurance Pro (col.43) | Assurance Pro |

| cgv.html:542 | Immo Pro (col.44) | Immo Pro |

| confidentialite.html:506 | Secteurs Pro (col.13) | Secteurs Pro |

| confidentialite.html:507 | BTP Pro (col.37) | BTP Pro |

| confidentialite.html:508 | Compta Pro (col.54) | Compta Pro |

| confidentialite.html:509 | CGP Pro (col.54) | CGP Pro |

| confidentialite.html:510 | Notariat Pro (col.43) | Notariat Pro |

| confidentialite.html:511 | Assurance Pro (col.43) | Assurance Pro |

| confidentialite.html:512 | Immo Pro (col.44) | Immo Pro |

| contact.html:696 | pro (col.19) | Email pro |

| contact.html:783 | Secteurs Pro (col.13) | Secteurs Pro |

| contact.html:784 | BTP Pro (col.37) | BTP Pro |

| contact.html:785 | Compta Pro (col.54) | Compta Pro |

| contact.html:786 | CGP Pro (col.54) | CGP Pro |

| contact.html:787 | Notariat Pro (col.43) | Notariat Pro |

| contact.html:788 | Assurance Pro (col.43) | Assurance Pro |

| contact.html:789 | Immo Pro (col.44) | Immo Pro |

| formation-cpf.html:82 | Secteurs Pro (col.13) | Secteurs Pro |

| formation-cpf.html:83 | BTP Pro (col.37) | BTP Pro |

| formation-cpf.html:84 | Compta Pro (col.54) | Compta Pro |

| formation-cpf.html:85 | CGP Pro (col.54) | CGP Pro |

| formation-cpf.html:86 | Notariat Pro (col.43) | Notariat Pro |

| formation-cpf.html:87 | Assurance Pro (col.43) | Assurance Pro |

| formation-cpf.html:88 | Immo Pro (col.44) | Immo Pro |

| formations-batiment.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-batiment.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-batiment.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-batiment.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-batiment.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-batiment.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-batiment.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-communication-marketing.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-communication-marketing.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-communication-marketing.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-communication-marketing.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-communication-marketing.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-communication-marketing.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-communication-marketing.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-developpement-commercial.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-developpement-commercial.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-developpement-commercial.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-developpement-commercial.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-developpement-commercial.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-developpement-commercial.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-developpement-commercial.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-enter.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-enter.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-enter.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-enter.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-enter.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-enter.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-enter.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-fafcea.html:83 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-fafcea.html:84 | BTP Pro (col.37) | BTP Pro |

| formations-fafcea.html:85 | Compta Pro (col.54) | Compta Pro |

| formations-fafcea.html:86 | CGP Pro (col.54) | CGP Pro |

| formations-fafcea.html:87 | Notariat Pro (col.43) | Notariat Pro |

| formations-fafcea.html:88 | Assurance Pro (col.43) | Assurance Pro |

| formations-fafcea.html:89 | Immo Pro (col.44) | Immo Pro |

| formations-finance-assurance.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-finance-assurance.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-finance-assurance.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-finance-assurance.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-finance-assurance.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-finance-assurance.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-finance-assurance.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-formation.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-formation.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-formation.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-formation.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-formation.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-formation.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-formation.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-immobilier.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-immobilier.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-immobilier.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-immobilier.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-immobilier.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-immobilier.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-immobilier.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-pilotage-organisation.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-pilotage-organisation.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-pilotage-organisation.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-pilotage-organisation.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-pilotage-organisation.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-pilotage-organisation.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-pilotage-organisation.html:84 | Immo Pro (col.44) | Immo Pro |

| formations-services-entreprises.html:78 | Secteurs Pro (col.13) | Secteurs Pro |

| formations-services-entreprises.html:79 | BTP Pro (col.37) | BTP Pro |

| formations-services-entreprises.html:80 | Compta Pro (col.54) | Compta Pro |

| formations-services-entreprises.html:81 | CGP Pro (col.54) | CGP Pro |

| formations-services-entreprises.html:82 | Notariat Pro (col.43) | Notariat Pro |

| formations-services-entreprises.html:83 | Assurance Pro (col.43) | Assurance Pro |

| formations-services-entreprises.html:84 | Immo Pro (col.44) | Immo Pro |

| formations.html:95 | Secteurs Pro (col.13) | Secteurs Pro |

| formations.html:96 | BTP Pro (col.37) | BTP Pro |

| formations.html:97 | Compta Pro (col.54) | Compta Pro |

| formations.html:98 | CGP Pro (col.54) | CGP Pro |

| formations.html:99 | Notariat Pro (col.43) | Notariat Pro |

| formations.html:100 | Assurance Pro (col.43) | Assurance Pro |

| formations.html:101 | Immo Pro (col.44) | Immo Pro |

| ia-et-moi.html:1238 | Starter (col.106), Pro (col.116), Expert (col.122), Tout-en-un (col.131) | À la sortie : vous savez  quoi construire en premier , à quel palier (Starter / Pro / Expert / Tout-en-un), avec quel budget. |

| ia-et-moi.html:1270 | Starter (col.104), Pro (col.114), Expert (col.120), Tout-en-un (col.129) | On  cadre votre besoin  en 30 minutes (offert) : périmètre, palier (Starter / Pro / Expert / Tout-en-un), délai. |

| ia-et-moi.html:1272 | Tout-en-un (col.96) | Mise en route en  7 jours à 1 mois  selon le palier choisi (Tout-en-un sur devis). |

| ia-et-moi.html:1301 | BTP Pro (col.59) | au pack complet avec automatisations. Tarifs base BTP Pro · ajustés selon le secteur et la complexité métier. |

| ia-et-moi.html:1319 | Starter (col.42) | Starter |

| ia-et-moi.html:1330 | Pro (col.42) | Pro  ★ Populaire |

| ia-et-moi.html:1341 | Expert (col.42) | Expert |

| ia-et-moi.html:1352 | Tout-en-un (col.42) | Tout-en-un |

| ia-et-moi.html:1371 | Pro (col.37) | Pour  chaque secteur Pro  (BTP, Compta, CGP, Notariat, Assurance, Immo), les noms des modules s'adaptent au métier. |

| ia-et-moi.html:1442 | Pro (col.31) | Un assistant IA Pro à  2 900 €  se rembourse en  ~4 semaines . |

| ia-et-moi.html:1498 | Starter (col.38) | Oui. Le palier  Starter  existe pour ça : un assistant cadré sur  une seule zone métier  (par exemple, relances commerciales OU onboarding clients), livré en 7 jours, à partir de  1 490 € HT  + 590 €/an de licence. |

| ia-et-moi.html:1499 | Pro (col.104), Expert (col.111) | On valide d'abord que ça marche chez vous. On élargit ensuite si vous voulez (passage en Pro ou Expert sans repartir de zéro). |

| ia-et-moi.html:1512 | Expert (col.129) | Pour les métiers à forte sensibilité (notariat, assurance, gestion de patrimoine), on travaille au palier  Expert  avec hébergement dédié et clauses renforcées. |

| ia-et-moi.html:1524 | Starter (col.54), Pro (col.94), Expert (col.128), Tout-en-un (col.163) | Selon le palier :  7 jours pour Starter ,  15 jours pour Pro ,  1 mois pour Expert , sur devis pour le Tout-en-un. |

| ia-et-moi.html:1537 | licence annuelle (col.26), Starter (col.136), Pro (col.157), Expert (col.174) | La  licence annuelle  couvre les mises à jour, l'hébergement Mistral EU et l'évolution du socle (590 €/an Starter · 1 190 €/an Pro · 1 790 €/an Expert). |

| ia-et-moi.html:1617 | Secteurs Pro (col.13) | Secteurs Pro |

| ia-et-moi.html:1618 | BTP Pro (col.37) | BTP Pro |

| ia-et-moi.html:1619 | Compta Pro (col.54) | Compta Pro |

| ia-et-moi.html:1620 | CGP Pro (col.54) | CGP Pro |

| ia-et-moi.html:1621 | Notariat Pro (col.43) | Notariat Pro |

| ia-et-moi.html:1622 | Assurance Pro (col.43) | Assurance Pro |

| ia-et-moi.html:1623 | Immo Pro (col.44) | Immo Pro |

| index (1).html:25 | express (col.14) | Le cadrage express détaillé est envoyé séparément sur demande |

| index (1).html:921 | express (col.56) | /* CTA CADRAGE — demande du questionnaire de cadrage express */ |

| index (1).html:1298 | express (col.69) | Avant d'engager une formation  : un  cadrage express  est envoyé sur demande. Quelques questions sur le secteur, le niveau de l'équipe et l'objectif visé — pour identifier ensemble si le bon parcours est plutôt Initiation, Spécialisation ou Certifiant. Le catalogue complet (~40 formations par secteur) est envoyé à la suite. Aucun engagement. |

| index (1).html:1325 | Expert (col.31) | Professionnel · Expert |

| index (1).html:1332 | Expert (col.31) | Professionnel · Expert |

| index (1).html:1376 | SOC-01 (col.33), SOC-02 (col.43) | Les formations socle SOC-01 et SOC-02 sont des  prérequis universels  avant tout parcours sectoriel — elles donnent les bases pour profiter pleinement des spécialisations métiers. Tous les supports sont remis en fin de session, exploitables immédiatement. |

| index (1).html:1383 | SOC-01 (col.44), Découverte (col.53) | SOC-01 · Découverte de l'IA générative |

| index (1).html:1387 | SOC-02 (col.44) | SOC-02 · Maîtriser les prompts en pratique |

| index (1).html:1388 | SOC-01 (col.211) | 4 h · 390 € HT  · Niveau Essentiel. Méthodologie de prompting, structuration des demandes, contextes professionnels, bonnes pratiques RGPD. Prérequis : SOC-01 ou équivalent. |

| index (1).html:1391 | SOC-01 (col.64), SOC-02 (col.73) | Pack Socle complet (SOC-01 + SOC-02) |

| index (1).html:1401 | Découverte (col.128) | 2   Session 1 · Découverte  (3h) — Panorama IA, prise en main des outils, premiers prompts sur cas réels apportés par les participants. Manipulation directe pendant 80 % du temps. |

| index (1).html:1437 | découverte (col.122) | Assurance Rédaction d'emails clients, synthèses de dossiers, première découverte des cas DDA |

| index (1).html:1478 | Expert (col.81) | 3-4 h / module · Niveau Professionnel ou Expert · OPCO sectoriel |

| index (1).html:1486 | SOC-01 (col.183), Découverte (col.191) | Les modules sont indépendants et combinables : un dirigeant peut commencer par 1 ou 2 modules ciblés et compléter au fil du temps.  Prérequis recommandé  : SOC-01 (Découverte IA) — sauf si le participant maîtrise déjà les bases. |

| index (1).html:1510 | SOC-01 (col.215) | 1   Cadrage métier  — Recueil des cas d'usage précis du participant, validation des prérequis (SOC-01 idéalement), envoi du programme Qualiopi détaillé. |

| index (1).html:1533 | SOC-01 (col.29) | Prérequis SOC-01 recommandé · pas pour grand débutant |

| index (1).html:1562 | SOC-01 (col.90) | Professionnel ayant déjà manipulé l'IA générative (SOC-01 ou équivalent). Volonté de monter en compétence sur des usages métier précis. Capacité à se libérer 3-4 h par module. Profil compatible avec un financement OPCO sectoriel. |

| index (1).html:1591 | Expert (col.73) | 7-14 h · Niveau Professionnel ou Expert · OPCO · CPF (1 500 €) |

| index (1).html:1599 | Expert (col.19), SOC-01 (col.72), SOC-02 (col.81) | Niveau Expert (1 090 – 1 590 €) accessible avec prérequis : SOC-01 + SOC-02 validés + expérience terrain active dans le secteur.  Compatible CPF  à 1 500 € : permet à un salarié de financer la formation sur son propre compte personnel de formation. |

| index (1).html:1611 | Expert (col.86), SOC-01 (col.211) | 7 h (2×3h30) · 1 090 € HT · Niveau Expert . IA stratégique en assurance : pilotage portefeuille, détection fraude, conformité DDA, reporting. Prérequis SOC-01/02 + expérience. OPCO Atlas. |

| index (1).html:1614 | Expert (col.53) | Parcours Expert sectoriel · 14 h |

| index (1).html:1615 | Expert (col.78) | 14 h · 1 590 € HT · Niveau Expert . Parcours complet sur 4 sessions espacées (2 × 3h30 + 2 × 3h30). Approfondissement métier, mises en situation complexes, accompagnement post-formation. Compatible CPF. |

| index (1).html:1648 | Expert (col.26), SOC-01 (col.45) | Niveau Expert : prérequis SOC-01/02 + expérience terrain |

| index (1).html:1660 | Pro (col.97), Expert (col.143), Expert (col.162) | Assurance ASS-P1 Parcours Agent (790€ · 7h · Pro) · ASS-P2 Parcours Manager (1 090€ · 7h · Expert) · Parcours Expert sectoriel sur mesure (1 590€ · 14h) |

| index (1).html:1663 | Expert (col.77) | Compta/Libéraux Parcours Expert-comptable IA · Parcours Collaborateur cabinet · Parcours Manager cabinet (tarifs sur demande selon OPCO) |

| index (1).html:1664 | Pro (col.120), Expert (col.165) | Communication COM-01 Création contenu à grande échelle (790€ · 7h · Pro) · Parcours Manager éditorial · Parcours Expert IA générative communication |

| index (1).html:1827 | EXPRESS (col.20) |  |

| index (1).html:1884 | Secteurs Pro (col.13) | Secteurs Pro |

| index (1).html:1885 | BTP Pro (col.37) | BTP Pro |

| index (1).html:1886 | Compta Pro (col.54) | Compta Pro |

| index (1).html:1887 | CGP Pro (col.54) | CGP Pro |

| index (1).html:1888 | Notariat Pro (col.43) | Notariat Pro |

| index (1).html:1889 | Assurance Pro (col.43) | Assurance Pro |

| index (1).html:1890 | Immo Pro (col.44) | Immo Pro |

| index.html:1489 | Secteurs Pro (col.13) | Secteurs Pro |

| index.html:1490 | BTP Pro (col.37) | BTP Pro |

| index.html:1491 | Compta Pro (col.54) | Compta Pro |

| index.html:1492 | CGP Pro (col.54) | CGP Pro |

| index.html:1493 | Notariat Pro (col.43) | Notariat Pro |

| index.html:1494 | Assurance Pro (col.43) | Assurance Pro |

| index.html:1495 | Immo Pro (col.44) | Immo Pro |

| mentions-legales.html:437 | Secteurs Pro (col.13) | Secteurs Pro |

| mentions-legales.html:438 | BTP Pro (col.37) | BTP Pro |

| mentions-legales.html:439 | Compta Pro (col.54) | Compta Pro |

| mentions-legales.html:440 | CGP Pro (col.54) | CGP Pro |

| mentions-legales.html:441 | Notariat Pro (col.43) | Notariat Pro |

| mentions-legales.html:442 | Assurance Pro (col.43) | Assurance Pro |

| mentions-legales.html:443 | Immo Pro (col.44) | Immo Pro |

| outils.html:18 | express (col.14) | Le cadrage express détaillé est envoyé séparément sur demande |

| outils.html:1056 | express (col.56) | /* CTA CADRAGE — demande du questionnaire de cadrage express */ |

| outils.html:1421 | tout-en-un (col.99) | Voici les  4 paliers d'intervention possibles , du module unique au système tout-en-un. Aucune mention "recommandé" n'est apposée — c'est le cadrage initial qui permet de positionner le bon palier en fonction du métier, de la taille de la structure et des priorités opérationnelles. |

| outils.html:1426 | express (col.65), Starter (col.291), Pro (col.300), Expert (col.305), Tout-en-un (col.315) | Avant d'engager un projet  : un  cadrage express  est envoyé sur demande. C'est un court questionnaire qui aide à se situer en fonction des flux prioritaires, du volume opérationnel et du besoin réel en IA générative — pour identifier si le bon palier est plutôt Starter, Pro, Expert ou Tout-en-un. Aucun engagement, simple éclairage. |

| outils.html:1442 | Starter (col.25) | 1 · Outil Starter |

| outils.html:1448 | Pro (col.25) | 2 · Outil Pro |

| outils.html:1454 | Expert (col.25) | 3 · Outil Expert |

| outils.html:1460 | Tout-en-un (col.25) | 4 · Outil Tout-en-un |

| outils.html:1474 | Starter (col.9) | Starter |

| outils.html:1478 | Pro (col.9) | Pro |

| outils.html:1482 | Expert (col.9) | Expert |

| outils.html:1486 | Tout-en-un (col.9) | Tout-en-un |

| outils.html:1491 | STARTER (col.24) | TAB 1 — OUTIL STARTER |

| outils.html:1498 | Starter (col.21) | Outil Starter |

| outils.html:1538 | Starter (col.21) | Le palier Starter pose les fondations : architecture de données métier + interface dédiée pour traiter 1 flux. Pas d'automatisations multi-outils ni d'IA générative à ce niveau — c'est le ticket d'entrée pour valider l'approche avant d'investir plus. |

| outils.html:1545 | express (col.124) | 1   Cadrage express  (30 min visio) — Identification du module prioritaire, des scénarios couverts, des contraintes réglementaires, du périmètre de données. |

| outils.html:1563 | Pro (col.46), Expert (col.53) | Possibilité d'évoluer vers Pro ou Expert plus tard |

| outils.html:1580 | Starter (col.57) | Exemples d'outil Starter par secteur |

| outils.html:1599 | Pro (col.235) | Besoin de couvrir plusieurs flux métier simultanément (commercial + production + administratif). Besoin d'un cockpit dirigeant. Équipe de plus de 2 personnes utilisatrices au quotidien. Le palier Pro est plus adapté. |

| outils.html:1605 | licence annuelle (col.43) | La licence annuelle (590 €/an) |

| outils.html:1613 | PRO (col.24) | TAB 2 — OUTIL PRO |

| outils.html:1620 | Pro (col.21) | Outil Pro |

| outils.html:1632 | Pro (col.33) | La souplesse Pro est un argument fort  : ce n'est pas le prestataire qui décide du deuxième module, c'est le dirigeant en fonction de ce qui lui coûte vraiment du temps dans son organisation actuelle. |

| outils.html:1660 | Pro (col.21) | Le palier Pro ajoute l' automatisation entre modules  : les 2 flux partagent une base commune, pas de double saisie, le workflow gère la transmission. L'IA générative reste optionnelle — à activer uniquement si la rédaction par IA apporte une vraie valeur pour le métier visé. |

| outils.html:1667 | express (col.124) | 1   Cadrage express  (30-45 min visio) — Identification du 2e module prioritaire, des flux à connecter, des contraintes réglementaires, du périmètre utilisateurs. |

| outils.html:1695 | Expert (col.49), Tout-en-un (col.59) | 3e module nécessite passage à Expert ou Tout-en-un |

| outils.html:1702 | Pro (col.57) | Exemples d'outil Pro par secteur |

| outils.html:1721 | Expert (col.175), Tout-en-un (col.185) | Besoin d'analyses prédictives ou de reporting IA avancé. Besoin de piloter plusieurs sites ou plusieurs équipes en simultané. Le palier Expert ou Tout-en-un est plus adapté à ces cas. |

| outils.html:1727 | licence annuelle (col.43) | La licence annuelle (1 190 €/an · ou 109 €/mois) |

| outils.html:1735 | EXPERT (col.24) | TAB 3 — OUTIL EXPERT |

| outils.html:1742 | Expert (col.21) | Outil Expert |

| outils.html:1782 | Expert (col.21) | Le palier Expert assemble  les 4 briques  avec une couche d'analyse avancée par-dessus. L'IA générative est activée sur les usages ciblés où elle apporte de la valeur (rédaction, contextualisation). Mistral EU par défaut pour la souveraineté des données. |

| outils.html:1813 | Tout-en-un (col.60) | 2 modules métier seulement (pas les 3 du Tout-en-un) |

| outils.html:1824 | Expert (col.57) | Exemples d'outil Expert par secteur |

| outils.html:1843 | Starter (col.189), Pro (col.200), Tout-en-un (col.279) | Structure inférieure à 2 personnes utilisatrices · besoin uniquement de traiter des mails sans analyse. Pas d'historique de données métier. Le palier Starter ou Pro est plus adapté. Si besoin des 3 modules + automatisations complexes, voir Tout-en-un. |

| outils.html:1849 | licence annuelle (col.43) | La licence annuelle (1 790 €/an · ou 164 €/mois) |

| outils.html:1857 | TOUT-EN-UN (col.24) | TAB 4 — OUTIL TOUT-EN-UN |

| outils.html:1864 | Tout-en-un (col.21) | Outil Tout-en-un |

| outils.html:1875 | Tout-en-un (col.30), Expert (col.141) | Le palier  Tout-en-un  assemble les 3 modules métier complets du secteur + la couche analytique avancée du palier Expert + des  automatisations multi-outils sur mesure  (connexions externes, webhooks, API). C'est un système d'orchestration complet de l'activité. |

| outils.html:1904 | Tout-en-un (col.21) | Le palier Tout-en-un assemble  les 4 briques au maximum de leur capacité  : 3 modules au lieu de 2, automatisations connectées aux outils externes du client (compta, CRM, signature, paiement), cockpit consolidé multi-indicateurs, IA générative sur tous les usages où elle apporte de la valeur. |

| outils.html:1909 | Expert (col.90) | Le process en 6 étapes (1 étape supplémentaire vs Expert) |

| outils.html:1911 | Feuille de Route (col.122) | 1   Audit Feuille de Route  (demi-journée immersive · 690 € · déductible) — Cartographie des flux actuels, identification des automatisations à construire, scope des connexions externes. |

| outils.html:1947 | Tout-en-un (col.57) | Exemples d'outil Tout-en-un par secteur |

| outils.html:1966 | Expert (col.198), Pro (col.208) | Structure inférieure à 3 personnes · pas de besoin d'orchestration. Pas d'historique de données métier exploitable. Process internes non documentés. Le palier Expert ou Pro est plus adapté dans ces cas. |

| outils.html:1972 | licence annuelle (col.43) | La licence annuelle (sur devis) |

| outils.html:2062 | Starter (col.57) | Palier 1  Starter |

| outils.html:2074 | Pro (col.57) | Palier 2  Pro |

| outils.html:2086 | Expert (col.57) | Palier 3  Expert |

| outils.html:2098 | Tout-en-un (col.57) | Palier 4  Tout-en-un |

| outils.html:2112 | pro (col.246) | 💡 Le ROI affiché ne tient compte que du  temps opérationnel récupéré . Les gains additionnels (missions/dossiers/contrats sauvés grâce à des relances faites à temps, qualité de réponse améliorée, réduction des oublis, image pro renforcée, capacité de croissance sans embauche) ne sont pas chiffrés ici —  ils s'ajoutent . |

| outils.html:2129 | Pro (col.76), Expert (col.81), Tout-en-un (col.91), Starter (col.115) | Ces intégrations s'ajoutent  en avenant  sur un Outil Pro, Expert ou Tout-en-un — pas sur un Starter. Format  one-shot  (setup unique, pas de licence).  Usage B2B exclusivement  — non applicable aux contrats consommateurs particuliers soumis au droit de rétractation (art. L.221-18 Code conso). |

| outils.html:2165 | EXPRESS (col.20) |  |

| outils.html:2168 | express (col.59) | Recevoir le  cadrage express  pour situer le bon palier. |

| outils.html:2170 | Starter (col.202), Pro (col.211), Expert (col.216), Tout-en-un (col.226) | Un court questionnaire personnalisé envoyé par email. Quelques questions sur les modules métier prioritaires et le volume opérationnel — pour identifier ensemble si la cible naturelle est plutôt Starter, Pro, Expert ou Tout-en-un. Aucun engagement, simple éclairage avant tout RDV. |

| outils.html:2172 | express (col.104), express (col.353) |  |

| outils.html:2221 | Secteurs Pro (col.13) | Secteurs Pro |

| outils.html:2222 | BTP Pro (col.37) | BTP Pro |

| outils.html:2223 | Compta Pro (col.54) | Compta Pro |

| outils.html:2224 | CGP Pro (col.54) | CGP Pro |

| outils.html:2225 | Notariat Pro (col.43) | Notariat Pro |

| outils.html:2226 | Assurance Pro (col.43) | Assurance Pro |

| outils.html:2227 | Immo Pro (col.44) | Immo Pro |

| panorama-ia/index.html:310 | Secteurs Pro (col.13) | Secteurs Pro |

| panorama-ia/index.html:311 | BTP Pro (col.37) | BTP Pro |

| panorama-ia/index.html:312 | Compta Pro (col.54) | Compta Pro |

| panorama-ia/index.html:313 | CGP Pro (col.54) | CGP Pro |

| panorama-ia/index.html:314 | Notariat Pro (col.43) | Notariat Pro |

| panorama-ia/index.html:315 | Assurance Pro (col.43) | Assurance Pro |

| panorama-ia/index.html:316 | Immo Pro (col.44) | Immo Pro |

| radar-ia.html:676 | Pro (col.552) | ⚠️ La vraie contrainte Un Skill ne vaut que ce que vaut la procédure qu’on lui donne. Si votre méthode est floue dans votre tête, le Skill sera flou aussi. Documenter proprement une fois — vos étapes, vos exemples, vos cas particuliers — c’est un vrai travail de cadrage. Deux points d’attention : n’installez que des Skills de confiance (les vôtres ou ceux d’Anthropic), un Skill mal intentionné peut faire faire n’importe quoi à l’IA ; et créer vos propres Skills demande une offre payante (Pro, Max, Team ou Enterprise). |

| radar-ia.html:761 | pro (col.220) | if(usage&amp;&amp;a.q2==='gratuit') return {cls:'utile',txt:'✅  Tu t\'en sers déjà, mais en gratuit.  Tu te prives de la vitesse et de la fiabilité de la dernière version. Si l\'IA fait partie de ton quotidien pro, l\'offre payante se rentabilise en une heure. On voit ensemble si ça vaut le coup pour toi.'}; |

| radar-ia.html:852 | Pro (col.156) | ⚠️ La vraie contrainte GPT-5.4 Thinking (le meilleur niveau) est réservé aux abonnements Plus et Pro — à partir de 20€/mois. Si vous n'êtes pas encore abonné et que vous n'avez pas de pratique régulière, cette mise à jour ne change rien pour vous aujourd'hui. Le meilleur outil du monde ne vous sera utile que si vous savez l'utiliser. |

| radar-ia.html:861 | Pro (col.86) | {id:'q4', text:'Tu as un abonnement payant à un outil IA (ChatGPT Plus, Claude Pro...) ?', opts:[{v:'oui',l:'Oui'},{v:'non',l:'Non, version gratuite uniquement'},{v:'sais',l:'Je ne sais pas ce que j\'ai'}]}, |

| radar-ia.html:923 | Pro (col.126) | Le quota : sur abonnement gratuit ou de base (20€/mois), environ 3 utilisations de deep research par mois. Sur abonnement Pro (200€/mois) : illimité ou quasi. La plupart de mes clients n'ont pas besoin de plus de 3 fois par mois — ils choisissent leurs sujets et c'est suffisant. |

| radar-ia.html:931 | Pro (col.188) | Le verdict :  Utile pour les professions qui font de la veille réglementaire régulière — immo, assurance, droit, BTP. Pas besoin de l'abonnement Pro pour commencer. Testez sur 3 sujets que vous connaissez bien — vous verrez immédiatement si la qualité est au niveau. `, |

| radar-ia.html:1070 | Pro (col.133) | 💸 Le calcul Version gratuite : déjà très capable pour un usage régulier. Version Pro : 20€/mois — le même prix qu'un abonnement ChatGPT Plus. Si vous passez plus de 30 minutes par semaine à chercher des informations professionnelles sur internet, Perplexity vous rembourse son abonnement dès la première semaine. |

| radar-ia.html:1380 | Secteurs Pro (col.13) | Secteurs Pro |

| radar-ia.html:1381 | BTP Pro (col.37) | BTP Pro |

| radar-ia.html:1382 | Compta Pro (col.54) | Compta Pro |

| radar-ia.html:1383 | CGP Pro (col.54) | CGP Pro |

| radar-ia.html:1384 | Notariat Pro (col.43) | Notariat Pro |

| radar-ia.html:1385 | Assurance Pro (col.43) | Assurance Pro |

| radar-ia.html:1386 | Immo Pro (col.44) | Immo Pro |

| secteur-assurance.html:1211 | Expert (col.241) | Une mutuelle régionale a fait construire un outil de recueil de besoins DDA pour ses 20 conseillers : questionnaire structuré, synthèse rédigée, archivage traçable, hébergement Mistral EU.  Palier Expert · 4 500 € . |

| secteur-assurance.html:1245 | pro (col.102) | Génération de propositions multi-risques (auto, MRH, MRP, RC pro) avec comparatifs garanties. |

| secteur-assurance.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-assurance.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-assurance.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-assurance.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-assurance.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-assurance.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-assurance.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-btp.html:1211 | Pro (col.264) | Une entreprise d'aluminium-menuiserie de 8 personnes a fait construire un outil hébergé chez L'Rénov : devis structurés, suivi de chantiers, mails fournisseurs. Le dirigeant n'a aucune charge technique à porter.  Palier Pro hébergé · 2 900 € + licence . |

| secteur-btp.html:1215 | Pro (col.234) | Un cabinet de maîtrise d'œuvre de 3 personnes a fait construire un outil autonome de gestion de chantiers (CRM, planning, devis). L'équipe gère elle-même sur sa propre stack Notion.  Palier Pro · 2 900 € . |

| secteur-btp.html:1249 | pro (col.142) | Brouillons de mails techniques (demandes de prix, relances, comptes-rendus visite), avec vocabulaire pro. |

| secteur-btp.html:1290 | licence annuelle (col.212) | Outil clé en main hébergé chez L'Rénov : devis, suivi de chantier, mails fournisseurs. Vous l'utilisez sans gérer la technique.  1 490-6 990 €+ + licence annuelle . |

| secteur-btp.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-btp.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-btp.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-btp.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-btp.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-btp.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-btp.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-communication.html:1215 | Pro (col.247) | Une petite agence de communication (5 personnes) a fait construire un outil de planning éditorial multi-clients : voix éditoriale par client, planning trimestriel, validation interne, archivage.  Palier Pro · 2 900 € . |

| secteur-communication.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-communication.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-communication.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-communication.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-communication.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-communication.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-communication.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-finance-comptabilite.html:1211 | Pro (col.241) | Un cabinet de gestion de patrimoine de 5 conseillers a fait construire un outil de structuration des RDV patrimoniaux : questionnaire client MIF II + synthèse rédigée + archivage traçable.  Palier Pro · 2 900 € . |

| secteur-finance-comptabilite.html:1215 | expert (col.40) | Un expert-comptable indépendant a fait paramétrer un agent rédacteur qui prépare les mails de relance pour pièces manquantes, calibré sur sa voix.  Niveau Métier sécurisé · 1 900 € . |

| secteur-finance-comptabilite.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-finance-comptabilite.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-finance-comptabilite.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-finance-comptabilite.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-finance-comptabilite.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-finance-comptabilite.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-finance-comptabilite.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-immobilier.html:1211 | Pro (col.229) | Une agence immobilière indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR.  Palier Pro · 2 900 € . |

| secteur-immobilier.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-immobilier.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-immobilier.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-immobilier.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-immobilier.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-immobilier.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-immobilier.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-juridique.html:1168 | pro (col.61) | Notaires, avocats, juristes d'entreprise. Le secret pro respecté. |

| secteur-juridique.html:1215 | Pro (col.244) | Un cabinet d'avocats spécialisé droit des affaires (3 associés) a fait construire un tableau de bord de suivi des dossiers : jalons, deadlines, relances client, archivage des courriers types.  Palier Pro · 2 900 € . |

| secteur-juridique.html:1282 | pro (col.119) | Audit pour identifier les usages compatibles avec le secret pro.  150-690 € . |

| secteur-juridique.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-juridique.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-juridique.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-juridique.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-juridique.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-juridique.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-juridique.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteur-professions-liberales.html:1211 | Pro (col.224) | Un cabinet d'assistanat virtuel (4 personnes en télétravail) a fait construire un outil de centralisation des missions clients : briefs, livrables, facturation, archivage.  Palier Pro · 2 900 € . |

| secteur-professions-liberales.html:1290 | Starter (col.137), Pro (col.148) | Outil indépendant sur-mesure, calibré sur votre métier précis. Souvent palier Starter ou Pro.  1 490-4 500 € . |

| secteur-professions-liberales.html:1335 | expert (col.218) | Consultant ou coach indépendant qui produit beaucoup de livrables similaires. Petit cabinet de conseil (1-5 personnes) qui veut structurer sa production. RH indépendant, formateur, expert qui passe du temps sur des tâches répétitives à valeur faible. |

| secteur-professions-liberales.html:1407 | Secteurs Pro (col.13) | Secteurs Pro |

| secteur-professions-liberales.html:1408 | BTP Pro (col.37) | BTP Pro |

| secteur-professions-liberales.html:1409 | Compta Pro (col.54) | Compta Pro |

| secteur-professions-liberales.html:1410 | CGP Pro (col.54) | CGP Pro |

| secteur-professions-liberales.html:1411 | Notariat Pro (col.43) | Notariat Pro |

| secteur-professions-liberales.html:1412 | Assurance Pro (col.43) | Assurance Pro |

| secteur-professions-liberales.html:1413 | Immo Pro (col.44) | Immo Pro |

| secteurs.html:1246 | pro (col.100) | Notaires, avocats, juristes. Le secret pro respecté. Hébergement EU obligatoire. Cas-type : étude notariale, cabinet droit affaires 3p, juriste d'entreprise. |

| secteurs.html:1253 | pro (col.218) | Indépendants, consultants, cabinets de conseil. Outils transverses adaptés métier par métier. Cas-type : cabinet assistanat virtuel 4p, consultant RH, coach pro. |

| secteurs.html:1283 | Pro (col.217) | Une agence indépendante de 4 négociateurs a fait construire un outil de gestion des mandats : structure Notion + génération automatique des annonces conformes ALUR.  Palier Pro · 2 900 € . |

| secteurs.html:1360 | Secteurs Pro (col.13) | Secteurs Pro |

| secteurs.html:1361 | BTP Pro (col.37) | BTP Pro |

| secteurs.html:1362 | Compta Pro (col.54) | Compta Pro |

| secteurs.html:1363 | CGP Pro (col.54) | CGP Pro |

| secteurs.html:1364 | Notariat Pro (col.43) | Notariat Pro |

| secteurs.html:1365 | Assurance Pro (col.43) | Assurance Pro |

| secteurs.html:1366 | Immo Pro (col.44) | Immo Pro |



## H. Analyse des pages sectorielles

Scénario de travail : page de métier accessible au footer, par recherche, lien commercial ou QR code ; aucune nouvelle rubrique principale nécessaire. L’acquisition Google et les conversions doivent être mesurées avant tout retrait ou redirection. Les scénarios décrits comme des interventions réelles dans le HTML demandent des preuves internes : à défaut, les présenter à terme comme cas illustratifs. Cet audit ne confirme ni réalisation client ni résultat. Les affirmations DDA, ALUR, MIF II, LCB-FT, secret professionnel et financement sont des promesses éditoriales à revoir, sans validation de conformité ici.

| Page | Évaluation proposée | Landing envisageable | Pourquoi / contenu à sauver | Prérequis avant décision | Autres options examinées |

| --- | --- | --- | --- | --- | --- |

| secteur-assurance.html | REFONDRE | IA pour courtiers et cabinets d’assurance | Recueil de besoins, qualification de sinistre, pièces à demander, explication des garanties et renouvellements ; rôle de validation du conseiller. Exemples : Mutuelle 20 conseillers, courtier IARD 4 personnes, agent général ; recueil DDA / brouillon sinistre / suivi renouvellements. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-btp.html | REFONDRE | IA pour artisans et petites entreprises du bâtiment | Devis, comptes-rendus de chantier, mails fournisseurs, suivi des demandes et réduction de la charge administrative ; outil simple pour artisan. Exemples : Menuiserie 8 personnes, maîtrise d’œuvre 3 personnes, plombier ; devis et chantier / gestion autonome / devis-type avec relances. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-communication.html | REFONDRE | IA pour communication et marketing | Capture de voix à partir d’un corpus, rédaction contextualisée, planning éditorial multiclients et validation interne. Exemples : Consultante B2B (corpus de 200 posts), agence 5 personnes, responsable marketing PME ; rédaction / planning / capture du style. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-finance-comptabilite.html | REFONDRE | IA pour cabinets comptables et conseil patrimonial (ciblage à arbitrer) | Structurer les données avant rédaction, préparation de rendez-vous patrimonial, relances pièces et suivi des missions ; décision humaine. Exemples : CGP 5 conseillers, expert-comptable indépendant, cabinet 12 personnes ; synthèse RDV / mails pièces manquantes / tableau de bord. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-immobilier.html | REFONDRE | IA pour agences et mandataires immobiliers | Qualification de prospects, annonces à partir des informations du bien, suivi mandats, comptes-rendus de visite et relances post-visite. Exemples : Agence 4 négociateurs, mandataire en réseau, franchise 6 agents ; mandats / qualification mail et WhatsApp / relances. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-juridique.html | REFONDRE | IA pour le notariat (périmètre avocats/juristes à arbitrer) | Préparation rendez-vous, synthèse de notes, courriers de suivi et liste de pièces ; confidentialité, traçabilité, relecture par le professionnel. Exemples : Étude notariale, cabinet droit des affaires 3 associés, juriste d’entreprise ; post-RDV / suivi dossiers / veille. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion possible de cas transverses, mais conserver le vocabulaire spécifique du métier. |

| secteur-professions-liberales.html | FUSIONNER | Usages IA pour indépendants et cabinets de conseil | Cadrage à partir de deux ou trois livrables récurrents ; centralisation des briefs, suivi des missions et comptes-rendus. Exemples : Assistanat virtuel 4 personnes, consultant RH, coach ; centralisation / cadrage RH / suivi séances. | Isoler tous prix/paliers ; confirmer cas, données, infrastructure et partenaire ; fixer un CTA utile ; validation humaine obligatoire. | Garder presque telle quelle : non, bloc commercial à revoir. Archiver/supprimer : sans justification actuelle. Fusion à discuter avec solutions métier ; conserver une page autonome si trafic ou campagne ciblée. |



### H-footer. Cartographie exacte du footer actuel et classement proposé

Même texte et mêmes destinations dans **35 documents sources** ; seul panorama.html n’a pas de footer. Ce nombre inclut la trame index (1), les fichiers déjà redirigés et 404 : il ne représente pas 35 pages commerciales actives. Les 35 copies de déploiement correspondent à ces contenus, sauf la trame non copiée. L’architecture comporte **4 colonnes**, puis un bandeau inférieur ; ce n’est pas une hypothèse de reconstruction.

Colonne 1, marque : `L’Rénov IA Studio` ; signature exacte « Votre métier en mémoire. Votre style en sortie. Pas un outil de plus. Le vôtre. » ; réseaux LinkedIn, Instagram, Facebook ; YouTube est un **span “à venir” sans lien**, pas un lien mort. Colonne 2 : **Le Studio**. Colonne 3 : **Secteurs Pro**. Colonne 4 : **Contact**, localisation « Blanquefort 33 · Gironde / Bordeaux et toute la France ». Bandeau bas : © 2026 L’Rénov IA Studio · Laurence Borras · SIRET 912 942 869 00013, puis trois liens légaux.

| Preuve | Colonne | Intitulé exact | Href exact | Page visée | Classement proposé | Motif |

| --- | --- | --- | --- | --- | --- | --- |

| index.html:1462 | Marque / réseaux | LinkedIn | https://www.linkedin.com/in/laurence-borras-l-renov-ia-studio-31b0992a2 | Externe / email | À CONSERVER | Lien externe non testé ; pertinence et propriété à confirmer. |

| index.html:1465 | Marque / réseaux | Instagram | https://www.instagram.com/laurence_lrenov_ia_studio | Externe / email | À CONSERVER | Lien externe non testé ; pertinence et propriété à confirmer. |

| index.html:1468 | Marque / réseaux | Facebook | https://www.facebook.com/LaurenceBorrasLRenovEspacesetIA | Externe / email | À CONSERVER | Lien externe non testé ; pertinence et propriété à confirmer. |

| index.html:1479 | Le Studio | Solutions métier | /assistant.html | assistant.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1480 | Le Studio | L'IA et moi | /ia-et-moi.html | ia-et-moi.html | À REMPLACER | Reprise du parcours de maturité après retrait éditorial des anciens packs, à valider. |

| index.html:1481 | Le Studio | Formations | /formations.html | formations.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1482 | Le Studio | Ateliers SHIFT | /ateliers.html | ateliers.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1483 | Le Studio | Parcours CPF | /formation-cpf.html | formation-cpf.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1484 | Le Studio | Institut IA · Skool | https://www.skool.com/signup?ref=f96e251d07c54f30a7e93b423ea52fff | Externe / email | À CONSERVER | Communauté / affiliation éventuelle à confirmer ; option À RETIRER uniquement si le partenariat n’est plus actif. |

| index.html:1485 | Le Studio | Radar IA | /radar-ia.html | radar-ia.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1490 | Secteurs Pro | BTP Pro | /secteur-btp.html | secteur-btp.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1491 | Secteurs Pro | Compta Pro | /secteur-finance-comptabilite.html | secteur-finance-comptabilite.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1492 | Secteurs Pro | CGP Pro | /secteur-finance-comptabilite.html | secteur-finance-comptabilite.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1493 | Secteurs Pro | Notariat Pro | /secteur-juridique.html | secteur-juridique.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1494 | Secteurs Pro | Assurance Pro | /secteur-assurance.html | secteur-assurance.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1495 | Secteurs Pro | Immo Pro | /secteur-immobilier.html | secteur-immobilier.html | À TRANSFORMER EN LIEN SECTORIEL DISCRET | Remplacer l’étiquette Pro par le métier ; refondre la destination avant toute promotion. |

| index.html:1500 | Contact | contact@lrenov-ia.studio | mailto:contact@lrenov-ia.studio | Externe / email | À CONSERVER | Lien externe non testé ; pertinence et propriété à confirmer. |

| index.html:1501 | Contact | Contact | /contact.html | contact.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1502 | Contact | RDV 30 min offertes | https://calendly.com/laurence-lrenov-ia/30min | Externe / email | À CONSERVER | Lien externe non testé ; pertinence et propriété à confirmer. |

| index.html:1513 | Bandeau inférieur | Mentions légales | /mentions-legales.html | mentions-legales.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1514 | Bandeau inférieur | CGV | /cgv.html | cgv.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |

| index.html:1515 | Bandeau inférieur | Confidentialité | /confidentialite.html | confidentialite.html | À CONSERVER | Destination locale existante ; contenu à relire si engagements commerciaux. |



Incohérences footer/menu : Secteurs Pro absent du menu et vocabulaire historique ; Compta Pro et CGP Pro doublonnent la destination finance-comptabilite ; communication et professions libérales sont omises ; secteurs.html et Panorama sont absents ; FAFCEA absent de ce footer alors que présent sur accueil et hub. Ateliers SHIFT et CPF sont des liens secondaires cohérents avec Formations. Aucun lien du footer vers audit/outils/agents : ne pas confondre leurs liens sortants avec des entrants. **À RETIRER : aucun lien n’est déclaré à retirer automatiquement** ; Skool est une option conditionnelle après confirmation. Ce classement ne reconstruit pas le footer.

## I. Liens morts, destinations incohérentes et doublons fonctionnels

**Liens internes HTML vers fichiers absents : aucun détecté dans les 36 sources**, après normalisation des chemins et URL sans extension. Cela ne valide ni le serveur distant ni les ancres. Les anomalies avérées sont des promesses de destination incompatibles ou des fragments non pris en charge.

| Preuve | Anomalie | Effet | Priorité |

| --- | --- | --- | --- |

| panorama-ia/index.html:97 et :103 → radar-ia.html#article-16 / #article-15 | Ni id DOM correspondant, ni traitement location.hash/hashchange dans Radar. Les articles s’ouvrent par openModal(id). | Le lien atteint le Radar mais n’ouvre pas l’article annoncé ; ce n’est pas une 404 fichier. | P1 |

| ia-et-moi.html: liens « Voir les 4 paliers » et « Voir le détail des paliers » → assistant.html | La destination est le nouveau hub sans grille de paliers. | Promesse de détail non tenue. | P1 |

| Sept pages secteur: audit.html / outils.html / agents.html ; secteurs: audit.html | Les URL sont redirigées vers /assistant par .htaccess. | Navigation valide techniquement, mais les anciennes pages de tarifs/ROI promises ne sont plus présentées. | P1 |

| Sept pages secteur: ateliers.html et anciens montants | Descriptions co-construction 390–890 € ; destination SHIFT aux formats différents. | Incohérence éditoriale de parcours et de prix. | P1 |

| contact.html:731–732 ; 404.html lien « Tester le Radar IA » | Radar encore décrit comme outil de diagnostic. | Le contenu visé est une veille. | P1 |

| sitemap.xml | /audit, /outils, /agents et /panorama redirigés ; nouveaux ateliers/CPF/Panorama courant incomplets ou absents ; lastmod surtout 2026-05-26. | Signal SEO historique, sans preuve d’indexation. FAFCEA est bien ajouté. | P2 |

| formations-config.js | cpfInscriptionUrl et cpfDevisUrl vides. | Destinations non configurées ; les boutons annoncés sont différés. | P1 |

| formations.html + catalogue JS | Sessions affichées comme à venir ; pas de sessions renseignées dans les fiches canoniques. | CTA réservation générique ; aucune disponibilité garantie par le dépôt. | P2 |

| panorama.html et panorama-ia/index.html | Ancienne URL alias ; vraie page sans accès interne commercial. | Quasi invisibilité, même si sitemap connaît l’ancien chemin. | P2 |

| index (1).html vs formations.html | Ancienne trame longue et trois parcours concurrents. | Risque d’import de prix et financement historiques ; fichier absent du paquet de déploiement. | P1 |

| ia-et-moi / outils / agents / CGV | Mêmes montants répétés avec périmètres différents (outil vs agent, licence vs setup). | Un même prix ne signifie pas même offre ; dédupliquer seulement après arbitrage. | P1 |

| secteurs et pages métier | Mêmes cinq cartes de prestation ; deux métiers finance dans une destination ; cas transverses répétés. | Redondance de structure à simplifier tout en conservant les cas réellement spécifiques. | P2 |

| 00_LIRE_MOI.txt / 00_LIRE_AVANT_DEPLOIEMENT.txt | Le premier contient un SVG Mistral ; le second décrit un ancien paquet sans .htaccess ni pages légales, alors que le dépôt actuel les contient. | Consignes de publication historiques non utilisables comme vérité de déploiement actuelle. | P2 |



### Redirections déjà présentes, simplement constatées

| Source configurée | Destination prévue | Commentaire |

| --- | --- | --- |

| audit.html | assistant.html | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| outils.html | assistant.html | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| agents.html | assistant.html | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| panorama.html | panorama-ia/index.html | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-batiment.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-communication-marketing.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-developpement-commercial.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-enter.html | ateliers.html#enter | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-finance-assurance.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-formation.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-immobilier.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-pilotage-organisation.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |

| formations-services-entreprises.html | ateliers.html#cmd | Lecture de .htaccess ; règle non créée ni modifiée pendant cet audit. |



Autres règles préexistantes : catalogue-assurance.html → secteur-assurance ; catalogue-formation.html → formations ; catalogue-*.html → secteurs ; formation.html → formations ; fiche-IMM-02.html → secteur-immobilier ; fiche-*.html → secteurs ; retrait .html puis service interne du fichier HTML existant ; canonical HTTPS/non-www ; ErrorDocument 404 /404.html. Ne pas supprimer les fichiers cibles ou redirections sans revue du serveur.

## J. Recommandations de traitement — aucune exécution

1. **Arbitrage commercial P1** : fixer la future présentation et les engagements prix/durée/maintenance/déduction/financement. F.2 à F.4 constituent une quarantaine documentaire, pas un catalogue approuvé. Confirmer l’offre actuelle auprès du Studio avant de déduire qu’un tarif visible serait actuel.

2. **Sauvegarde éditoriale P1** : reprendre la logique de maturité de ia-et-moi et les méthodes des anciens audits/outils/agents ; isoler les phrases utiles, cas et FAQ des tableaux de paliers et calculateurs. Les sections E donnent les blocs et références à examiner ; aucune extraction dans le site n’a été effectuée.

3. **Cohérence des parcours P1** : préparer, après validation, les corrections des liens promettant paliers/ROI, des ateliers sectoriels et du Radar-diagnostic ; prévoir les destinations d’inscription CPF. Ne pas faire de redirection nouvelle dans ce rapport.

4. **Landing pages P1/P2** : étudier BTP, immobilier, notariat, assurance, finance/compta et communication comme pages discrètes. Pour chacune choisir audience, cas prouvables, contraintes et CTA. Discuter le regroupement des professions libérales. Ne conserver aucun ancien catalogue Pro par défaut.

5. **Visibilité et SEO P2** : mesurer visites, backlinks, conversions et campagnes avant décisions sur secteurs/Panorama et archives ; mettre ensuite sitemap/footer en cohérence après accord. Les labels Pro et le double lien Compta/CGP sont des sujets de validation, pas des suppressions actées.

6. **Documents transversaux** : soumettre CGV et politique de données à une revue adaptée aux offres retenues, puis synchroniser source et déploiement. Le présent audit ne propose pas de nouvelle rédaction juridique.

### Annexe J.1. Inventaire physique complet des 212 HTML

Les SHA-256 identifient sans ambiguïté les versions. Les sources publiques disposent de fiches B/E ; les copies et sauvegardes ne sont pas des pages supplémentaires de navigation. Chaque fichier ci-dessous est couvert par le scan financier F.4.

| Chemin exact | Rôle | Lignes | SHA-256 |

| --- | --- | --- | --- |

| 404.html | Source / document public potentiel | 236 | cb247385697a649d6081aa05c258dc95862244ef0695b8b687fb72b6669d2675 |

| _backups/accueil-fafcea-2026-10-09/_DEPLOIEMENT_PROD/index.html | Sauvegarde historique | 1697 | 95113d88a4bdde56eaee23fe711e632daa5af2d50a1bb4ee60e2e5a30ccc4f2f |

| _backups/accueil-fafcea-2026-10-09/index.html | Sauvegarde historique | 1697 | 95113d88a4bdde56eaee23fe711e632daa5af2d50a1bb4ee60e2e5a30ccc4f2f |

| _backups/ateliers-shift-2026-10-09/404.html | Sauvegarde historique | 238 | eab05d3dfdc1cbf0242f6794de7de0682ac3c50f65d60e8cd4f28e93fd597ea0 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/404.html | Sauvegarde historique | 238 | eab05d3dfdc1cbf0242f6794de7de0682ac3c50f65d60e8cd4f28e93fd597ea0 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | Sauvegarde historique | 133 | dddaf9f92d6c3728a409b7aa26edc5c48c5e098fb97980378d61af81b7b767f7 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Sauvegarde historique | 111 | 5eb26f4a7049c568900e9f4dea368710f8c38c354c75a61e9ff1673b00db5453 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | Sauvegarde historique | 589 | 5bd310da8e198df39cda82590f98205bb3b10fb7f1d99cd83714ee228a6c9a66 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | Sauvegarde historique | 559 | 850c95d0227fa0504a087f630b56ec6eaed3a3d33b443c71093a96b84a250b65 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/contact.html | Sauvegarde historique | 913 | 88d20a5344fb644f50777d1f175d36081d6fa4b1a3bb4575532b3ee17de755a4 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Sauvegarde historique | 113 | 1d46a7c57b38e44d9e7841adc97a5a7563081106ca68c12477bf0f664536d112 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | Sauvegarde historique | 111 | ab8b55a4d4d60e1ee78a170afef98b4461a76d1ca04e562436ad2491e1b8f662 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | Sauvegarde historique | 111 | eed3cefd7aaef698cdc5822e8448d1ae0767e11464d3879465e547d06585f969 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | Sauvegarde historique | 111 | 8bb5426680d277ad568ebaefb64fd90daf663e9626a0852b5efedbeaf78ca390 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | Sauvegarde historique | 111 | d5f7103c5f2da0a16df3b4546d8a1c663d87dcd5985bcc1811613f0f69f7f0da |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | Sauvegarde historique | 111 | 229e13914426df9342e8cebf271248f1f50df9bf1e4e6618c7f519c2663dc7b3 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | Sauvegarde historique | 111 | 59b09d527829469a2453e63df02a515e0ee1d87966fd0fd8dcea07aa6a4152cb |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | Sauvegarde historique | 111 | 88b724d070c8ec849bca40f8a3d761fcd87f6a44a4b4f30adc02f86c37df0db5 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Sauvegarde historique | 111 | 0abe8e68556e38737d7f2048d247b5d80ee0365ff7509c540bbe97ad8ffd7ada |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | Sauvegarde historique | 111 | 9456c55585565050cc872d8ca1e884aa12f7a1e84b89f2ba003b27b988971bb3 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html | Sauvegarde historique | 125 | e80ea5136130047fb58b5a2797d8c0756725c892ec8c291c32656140e38ec69b |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | Sauvegarde historique | 1848 | 9a38399db913a03daa598f0d01b4019017244c02ce1fb209ddf3cc5feb0499a5 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/index.html | Sauvegarde historique | 1713 | 2719d66fd29e00fda8f7b6396148eed774edc3bf8ca0073c55a0e6e5d7fc71ec |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | Sauvegarde historique | 490 | b73093e4cc934241c8e721cd11369b677145535bd2a93c69f7e5121729167112 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | Sauvegarde historique | 1431 | 7cab7938e9f8a85bcb8f2ee7a2e27f029de5ec94ac7fcde871d5ece78d8ddd82 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | Sauvegarde historique | 1567 | 1e0761a78d793edc1afceecff9aa80f6633b72f607faae534501f580b5757002 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | Sauvegarde historique | 1567 | b1a9ebb384a942a11963c0b86eacaa8b279740a0385fef4e27e33b9b5fb86123 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | Sauvegarde historique | 1567 | dfb10e642c57ebdfd4cec4da14eef77ad01a62485ab239f114c872b16213c04e |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | Sauvegarde historique | 1567 | 2a8c2884aaf03cebcc48c6d6955b00f8a1b1fc0a70a89810a7424cd3835f5694 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | Sauvegarde historique | 1567 | d42eb355d5f593efada08636c4903f5ee594e34c7130c7e5ca7989321492ebf4 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | Sauvegarde historique | 1567 | 71b6c0c89f8a4f3ef02566b36cb4158ad67bc179e21cfc5db8c82f555b51718a |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | Sauvegarde historique | 1567 | 3b1dfc9d83c48a8701912b712d34f2138ed9cf5231a57fbfeb23005611d71399 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | Sauvegarde historique | 1520 | c99dc20e8d4bb1f1b0fe3a48f9dbc38857e6d533276ac5e4b0e459f9b12a5cf4 |

| _backups/ateliers-shift-2026-10-09/agents.html | Sauvegarde historique | 2102 | e3be6748709168ff2f8909c0a99f778e0e9001daefc36c252ef462d05651f15e |

| _backups/ateliers-shift-2026-10-09/assistant.html | Sauvegarde historique | 133 | dddaf9f92d6c3728a409b7aa26edc5c48c5e098fb97980378d61af81b7b767f7 |

| _backups/ateliers-shift-2026-10-09/ateliers.html | Sauvegarde historique | 111 | 5eb26f4a7049c568900e9f4dea368710f8c38c354c75a61e9ff1673b00db5453 |

| _backups/ateliers-shift-2026-10-09/audit.html | Sauvegarde historique | 2020 | 0efdd3acb8f5c0275cb5fc6a6cff222c220223abe61ca8b207e7c1e1540b4dd5 |

| _backups/ateliers-shift-2026-10-09/cgv.html | Sauvegarde historique | 589 | 5bd310da8e198df39cda82590f98205bb3b10fb7f1d99cd83714ee228a6c9a66 |

| _backups/ateliers-shift-2026-10-09/confidentialite.html | Sauvegarde historique | 559 | 850c95d0227fa0504a087f630b56ec6eaed3a3d33b443c71093a96b84a250b65 |

| _backups/ateliers-shift-2026-10-09/contact.html | Sauvegarde historique | 913 | 88d20a5344fb644f50777d1f175d36081d6fa4b1a3bb4575532b3ee17de755a4 |

| _backups/ateliers-shift-2026-10-09/formation-cpf.html | Sauvegarde historique | 113 | 38a155045188603217891b4c74fefb629f31bb0da1183f2909bb97d5574f2e5a |

| _backups/ateliers-shift-2026-10-09/formations-batiment.html | Sauvegarde historique | 111 | ab8b55a4d4d60e1ee78a170afef98b4461a76d1ca04e562436ad2491e1b8f662 |

| _backups/ateliers-shift-2026-10-09/formations-communication-marketing.html | Sauvegarde historique | 111 | eed3cefd7aaef698cdc5822e8448d1ae0767e11464d3879465e547d06585f969 |

| _backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html | Sauvegarde historique | 111 | 8bb5426680d277ad568ebaefb64fd90daf663e9626a0852b5efedbeaf78ca390 |

| _backups/ateliers-shift-2026-10-09/formations-enter.html | Sauvegarde historique | 111 | d5f7103c5f2da0a16df3b4546d8a1c663d87dcd5985bcc1811613f0f69f7f0da |

| _backups/ateliers-shift-2026-10-09/formations-finance-assurance.html | Sauvegarde historique | 111 | 229e13914426df9342e8cebf271248f1f50df9bf1e4e6618c7f519c2663dc7b3 |

| _backups/ateliers-shift-2026-10-09/formations-formation.html | Sauvegarde historique | 111 | 59b09d527829469a2453e63df02a515e0ee1d87966fd0fd8dcea07aa6a4152cb |

| _backups/ateliers-shift-2026-10-09/formations-immobilier.html | Sauvegarde historique | 111 | 88b724d070c8ec849bca40f8a3d761fcd87f6a44a4b4f30adc02f86c37df0db5 |

| _backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html | Sauvegarde historique | 111 | 0abe8e68556e38737d7f2048d247b5d80ee0365ff7509c540bbe97ad8ffd7ada |

| _backups/ateliers-shift-2026-10-09/formations-services-entreprises.html | Sauvegarde historique | 111 | 9456c55585565050cc872d8ca1e884aa12f7a1e84b89f2ba003b27b988971bb3 |

| _backups/ateliers-shift-2026-10-09/formations.html | Sauvegarde historique | 125 | e80ea5136130047fb58b5a2797d8c0756725c892ec8c291c32656140e38ec69b |

| _backups/ateliers-shift-2026-10-09/ia-et-moi.html | Sauvegarde historique | 1848 | 6056d25616f6c69750e2b05b16d7c8cca2d25e5b46c24472d9ceec6a19e93686 |

| _backups/ateliers-shift-2026-10-09/index.html | Sauvegarde historique | 1713 | 2719d66fd29e00fda8f7b6396148eed774edc3bf8ca0073c55a0e6e5d7fc71ec |

| _backups/ateliers-shift-2026-10-09/mentions-legales.html | Sauvegarde historique | 490 | b73093e4cc934241c8e721cd11369b677145535bd2a93c69f7e5121729167112 |

| _backups/ateliers-shift-2026-10-09/outils.html | Sauvegarde historique | 2382 | e840d1635f92122b073aeb5578fc954c9368b7ba980a760c3d17f1c6a5e5e5ce |

| _backups/ateliers-shift-2026-10-09/radar-ia.html | Sauvegarde historique | 1431 | 7cab7938e9f8a85bcb8f2ee7a2e27f029de5ec94ac7fcde871d5ece78d8ddd82 |

| _backups/ateliers-shift-2026-10-09/secteur-assurance.html | Sauvegarde historique | 1567 | 5e315c52e4f3df78cfefb24c82e7f28f91774d671c3f29d63ee42dcf60107c90 |

| _backups/ateliers-shift-2026-10-09/secteur-btp.html | Sauvegarde historique | 1567 | 7b29d4277b1aae0f632265542d5b7771a92bb39b2dd3ab6a0e88ce402d7e3cc6 |

| _backups/ateliers-shift-2026-10-09/secteur-communication.html | Sauvegarde historique | 1567 | be1f697954d2109a58e1e35289af7e844666700e044eba2d5e4e68302b08c733 |

| _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html | Sauvegarde historique | 1567 | b1e9a3470e0a53c139302709e666e10a79bbfecaf7a676e0a2c49411adc037e0 |

| _backups/ateliers-shift-2026-10-09/secteur-immobilier.html | Sauvegarde historique | 1567 | 6ec472530f3c948c9aa5ffca1aa83dd7aa962cbea439c88eb053f494e65cf6a6 |

| _backups/ateliers-shift-2026-10-09/secteur-juridique.html | Sauvegarde historique | 1567 | 3b173a18b36548c7d0faba04e1f04f62071b002006653bcab908ab9b8eb7bd40 |

| _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html | Sauvegarde historique | 1567 | 8f4de43f65b907b1bf07a5676c8365846991568bb3faf6aa260e17ad45ae678e |

| _backups/ateliers-shift-2026-10-09/secteurs.html | Sauvegarde historique | 1520 | 00ebfad86fe5f9f00168efc9b98591b9b5f49f76860535c69a07ef282370838a |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | Sauvegarde historique | 121 | 6f53c6756745989ab3e33e57cc68e2835ee3f8469a7ac64a87fd9a76d3f88767 |

| _backups/cartes-ateliers-2026-10-09/formation-cpf.html | Sauvegarde historique | 110 | f2ffb4d76d338985613ce00d9c4a47fd0700a49270fa6596c6d7a50f0237b046 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Sauvegarde historique | 120 | 46b1b562cbc65fc257c60eb7ffd56739b619987d023bf7b7b2f8d8c156f88dc0 |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | Sauvegarde historique | 120 | 46b1b562cbc65fc257c60eb7ffd56739b619987d023bf7b7b2f8d8c156f88dc0 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Sauvegarde historique | 120 | 46b1b562cbc65fc257c60eb7ffd56739b619987d023bf7b7b2f8d8c156f88dc0 |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | Sauvegarde historique | 120 | 46b1b562cbc65fc257c60eb7ffd56739b619987d023bf7b7b2f8d8c156f88dc0 |

| _backups/categories-cmd-2026-10-09/ateliers.html | Sauvegarde historique | 121 | 6f53c6756745989ab3e33e57cc68e2835ee3f8469a7ac64a87fd9a76d3f88767 |

| _backups/categories-cmd-2026-10-09/formation-cpf.html | Sauvegarde historique | 110 | f2ffb4d76d338985613ce00d9c4a47fd0700a49270fa6596c6d7a50f0237b046 |

| _backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | Sauvegarde historique | 100 | 06be729c0dcca6ef8a66bfcbcfa68c20e3b1b06f7860da11175501e5794d6061 |

| _backups/fafcea-programmes-2026-10-09/formations-fafcea.html | Sauvegarde historique | 100 | 06be729c0dcca6ef8a66bfcbcfa68c20e3b1b06f7860da11175501e5794d6061 |

| _backups/fiches-shift-2026-10-09/ateliers.html | Sauvegarde historique | 121 | 6f53c6756745989ab3e33e57cc68e2835ee3f8469a7ac64a87fd9a76d3f88767 |

| _backups/fiches-shift-2026-10-09/formation-cpf.html | Sauvegarde historique | 110 | f2ffb4d76d338985613ce00d9c4a47fd0700a49270fa6596c6d7a50f0237b046 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Sauvegarde historique | 111 | 2b3f7c9fbd29b01a38fda3645fd008f45368d3d86fa98680f100953f6d27415b |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | Sauvegarde historique | 110 | cd3f1499098822a290f7e2ebb71128732e42577fb310b67bc7267a684c3a3bfc |

| _backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html | Sauvegarde historique | 111 | 2b3f7c9fbd29b01a38fda3645fd008f45368d3d86fa98680f100953f6d27415b |

| _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html | Sauvegarde historique | 110 | cd3f1499098822a290f7e2ebb71128732e42577fb310b67bc7267a684c3a3bfc |

| _backups/index_avant_shift_2026-09-30.html | Sauvegarde historique | 3079 | e47a01a2abd023126c1c85faa6dfcd760d436934ced0f2fdde52142907404fe2 |

| _backups/navigation-formations-2026-10-09/404.html | Sauvegarde historique | 239 | bcb1ae29714b80c894a0e55f51c5212ffbf3192ee59ec848b9391cd77202a1fe |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/404.html | Sauvegarde historique | 239 | bcb1ae29714b80c894a0e55f51c5212ffbf3192ee59ec848b9391cd77202a1fe |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | Sauvegarde historique | 119 | d84860c5f4bd79f6ff45c2a3a563c0ff099c956019d1d836ca7b72863e3bfca5 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Sauvegarde historique | 121 | 6f53c6756745989ab3e33e57cc68e2835ee3f8469a7ac64a87fd9a76d3f88767 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | Sauvegarde historique | 575 | 44203ae05a6ccb42d643aad00cbfb25d09e3b119ead12623e7dac6b6737a35f7 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | Sauvegarde historique | 545 | 576fde8c966d8053215e8d139cd30805ea66c742851ead53be4c6ad24d7ebd65 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/contact.html | Sauvegarde historique | 899 | 8e03f20f49d42ce36d12a56b997cac7c475b0063bd8191c17c9d01ea29e32cd8 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Sauvegarde historique | 110 | 98b1bb43d4198245d8c262f7654b91d1ac66814e1277055b7c4238eec34d0bea |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | Sauvegarde historique | 108 | 9b464fa54047a1cd1be568259c41200e3f751fa8970e62aee4f02f7585968a8e |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | Sauvegarde historique | 108 | 861850de61d2b7c3026e363d23e07e8f0ece45931225b3765c9505f013d0c496 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | Sauvegarde historique | 108 | afe00d4a4d25bb185972ca64c9b6e97d787e1aa686aa169c4893d54df67e878e |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | Sauvegarde historique | 108 | b4208a0e7e7f21de73e6b975d17acd7df3496644f2009f741e4baa52fe86c4b6 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | Sauvegarde historique | 108 | ca4c3593b335adea066c91a23d06a64c1d82dd5b2dcc42907ec47f21bb2dbdfa |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | Sauvegarde historique | 108 | 2fec719fcd8cd9446efb5d5dd8ab09ccca071c7b038252b37718ecd5d3004fb1 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | Sauvegarde historique | 108 | 0735185c7c8162bba569a6bd2fe797b73fb3a1c5e55dbaa70c3274c3ce59d73a |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Sauvegarde historique | 108 | f2948936fccbb515658dd92a2a9ac0a84cff71cd8eea91e80ec416a5f03333a8 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | Sauvegarde historique | 108 | 183d266f4a0e92a4b665239575a6bbf2805c83dec57b31ca711054f2bfcdf01b |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html | Sauvegarde historique | 122 | 49a1c6698ac38156a3dcabff30b732eda0c4b3c30a3573b7546dd5507927de66 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | Sauvegarde historique | 1834 | e20557fa6bfa16128e2bb9d908ff333ade16fb980fae561161119926c5c843fd |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/index.html | Sauvegarde historique | 1699 | 9e62e2689994d58487a1dffd436056015122d8c0d37f26a2b2fff330124c12de |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | Sauvegarde historique | 476 | 0f11aae78c62c905fe8a3d6e679ed10e63d1b0704ffb38facff85d078d8e0407 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | Sauvegarde historique | 1417 | 9ec30a3bcd0aa14db6d7c9d8094d20e408298be4c280527d9839e0908459498c |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | Sauvegarde historique | 1553 | 616464266f9ba94ed8d4dd9c3b2a7ebcada25263551704883bd3ccc0d7bd1ea8 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | Sauvegarde historique | 1553 | e1a39c81d1dbbedcc5c06e9faa77527a95e5bef570e46a90f9bca7058cc32a2f |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | Sauvegarde historique | 1553 | 252c343dca0b6ea8f6799f66fd62fcdcc96f2b3ecd111909d2f84d2243a3befc |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | Sauvegarde historique | 1553 | 527d8423e4262c72c441c661ec2651ea332f619a57b55c48dfd96570f1249d9a |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | Sauvegarde historique | 1553 | aea14ff0fef9a11989c4c6002fec5f0a8dd523fde170c536d09b9167f2e2391f |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | Sauvegarde historique | 1553 | aa37a7a7902fa57277bf292d977e447e6a8b737ebae29b1fa15e15d052ecd10e |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | Sauvegarde historique | 1553 | b2a3a99ec8490c145ef1682f1d366fcaaa9f81ba3f538ffbb12357a47f02e113 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | Sauvegarde historique | 1506 | f44a7be434f15c9dd7f7d791bdc74a4e506c1c9a455fbb5a12ab6ec2ae90188f |

| _backups/navigation-formations-2026-10-09/agents.html | Sauvegarde historique | 2088 | 13af47bc5684b852a9306220b3d72a8a1ee7d53240868cf72d23dfeedb89ea9c |

| _backups/navigation-formations-2026-10-09/assistant.html | Sauvegarde historique | 119 | d84860c5f4bd79f6ff45c2a3a563c0ff099c956019d1d836ca7b72863e3bfca5 |

| _backups/navigation-formations-2026-10-09/ateliers.html | Sauvegarde historique | 121 | 6f53c6756745989ab3e33e57cc68e2835ee3f8469a7ac64a87fd9a76d3f88767 |

| _backups/navigation-formations-2026-10-09/audit.html | Sauvegarde historique | 2006 | 82252a0ae88d093ff486adeb59251e782b30860c7036287c04be0c214b1b62be |

| _backups/navigation-formations-2026-10-09/cgv.html | Sauvegarde historique | 575 | 44203ae05a6ccb42d643aad00cbfb25d09e3b119ead12623e7dac6b6737a35f7 |

| _backups/navigation-formations-2026-10-09/confidentialite.html | Sauvegarde historique | 545 | 576fde8c966d8053215e8d139cd30805ea66c742851ead53be4c6ad24d7ebd65 |

| _backups/navigation-formations-2026-10-09/contact.html | Sauvegarde historique | 899 | 8e03f20f49d42ce36d12a56b997cac7c475b0063bd8191c17c9d01ea29e32cd8 |

| _backups/navigation-formations-2026-10-09/formation-cpf.html | Sauvegarde historique | 110 | f2ffb4d76d338985613ce00d9c4a47fd0700a49270fa6596c6d7a50f0237b046 |

| _backups/navigation-formations-2026-10-09/formations-batiment.html | Sauvegarde historique | 108 | 9b464fa54047a1cd1be568259c41200e3f751fa8970e62aee4f02f7585968a8e |

| _backups/navigation-formations-2026-10-09/formations-communication-marketing.html | Sauvegarde historique | 108 | 861850de61d2b7c3026e363d23e07e8f0ece45931225b3765c9505f013d0c496 |

| _backups/navigation-formations-2026-10-09/formations-developpement-commercial.html | Sauvegarde historique | 108 | afe00d4a4d25bb185972ca64c9b6e97d787e1aa686aa169c4893d54df67e878e |

| _backups/navigation-formations-2026-10-09/formations-enter.html | Sauvegarde historique | 108 | b4208a0e7e7f21de73e6b975d17acd7df3496644f2009f741e4baa52fe86c4b6 |

| _backups/navigation-formations-2026-10-09/formations-finance-assurance.html | Sauvegarde historique | 108 | ca4c3593b335adea066c91a23d06a64c1d82dd5b2dcc42907ec47f21bb2dbdfa |

| _backups/navigation-formations-2026-10-09/formations-formation.html | Sauvegarde historique | 108 | 2fec719fcd8cd9446efb5d5dd8ab09ccca071c7b038252b37718ecd5d3004fb1 |

| _backups/navigation-formations-2026-10-09/formations-immobilier.html | Sauvegarde historique | 108 | 0735185c7c8162bba569a6bd2fe797b73fb3a1c5e55dbaa70c3274c3ce59d73a |

| _backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html | Sauvegarde historique | 108 | f2948936fccbb515658dd92a2a9ac0a84cff71cd8eea91e80ec416a5f03333a8 |

| _backups/navigation-formations-2026-10-09/formations-services-entreprises.html | Sauvegarde historique | 108 | 183d266f4a0e92a4b665239575a6bbf2805c83dec57b31ca711054f2bfcdf01b |

| _backups/navigation-formations-2026-10-09/formations.html | Sauvegarde historique | 122 | 49a1c6698ac38156a3dcabff30b732eda0c4b3c30a3573b7546dd5507927de66 |

| _backups/navigation-formations-2026-10-09/ia-et-moi.html | Sauvegarde historique | 1834 | 37bc897e50f395be7b39959cf01ece3501af7bb5369e1907eb5643b1eb0493df |

| _backups/navigation-formations-2026-10-09/index.html | Sauvegarde historique | 1699 | 9e62e2689994d58487a1dffd436056015122d8c0d37f26a2b2fff330124c12de |

| _backups/navigation-formations-2026-10-09/mentions-legales.html | Sauvegarde historique | 476 | 0f11aae78c62c905fe8a3d6e679ed10e63d1b0704ffb38facff85d078d8e0407 |

| _backups/navigation-formations-2026-10-09/outils.html | Sauvegarde historique | 2368 | 27d1c4ac679e71070d0dd3953e1bf7a2c86280ffea67b4ad893cd45be01f634f |

| _backups/navigation-formations-2026-10-09/radar-ia.html | Sauvegarde historique | 1417 | 9ec30a3bcd0aa14db6d7c9d8094d20e408298be4c280527d9839e0908459498c |

| _backups/navigation-formations-2026-10-09/secteur-assurance.html | Sauvegarde historique | 1553 | bc59077ac9bade645dbd69dc3fbb2377878b1879e08758b8dca8ace35d343f88 |

| _backups/navigation-formations-2026-10-09/secteur-btp.html | Sauvegarde historique | 1553 | 9f9555b7529c4f2806e3892518f83e0f912d06fec0b96720bac5e8e1186ab04f |

| _backups/navigation-formations-2026-10-09/secteur-communication.html | Sauvegarde historique | 1553 | 80fdc0d3860bd4df5af07ad6db9c7130d6f62cc8645fc1a1d5f4e3183ec907c3 |

| _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html | Sauvegarde historique | 1553 | 63e183e3fe2de5130f1b67f2f640fa5cc0a2e38dd1691f64381c153d42f1295a |

| _backups/navigation-formations-2026-10-09/secteur-immobilier.html | Sauvegarde historique | 1553 | 5c21f630ae62589ede3fef9165e08f86faec3d012648d695a516f8d18f44b28d |

| _backups/navigation-formations-2026-10-09/secteur-juridique.html | Sauvegarde historique | 1553 | b167b18b00f69241308b6c81b1f609e2fe5f66280c52ddc8003e8a1d1d952e89 |

| _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html | Sauvegarde historique | 1553 | 0d6cfbdc0e67b8e97cf7b44a577647473fab90eda06596afa70f3c4b7a1b757d |

| _backups/navigation-formations-2026-10-09/secteurs.html | Sauvegarde historique | 1506 | c87c7b62a3eae1d32ad4a13c82e5a8724b8b594ee4b66389972c8deb4d6a25d9 |

| _DEPLOIEMENT_PROD/404.html | Copie de déploiement | 236 | cb247385697a649d6081aa05c258dc95862244ef0695b8b687fb72b6669d2675 |

| _DEPLOIEMENT_PROD/agents.html | Copie de déploiement | 2088 | f46c3e4b37f246fd6b8c56e355f306e9b402bfd52582d0bc52e5e4ea4690471b |

| _DEPLOIEMENT_PROD/assistant.html | Copie de déploiement | 119 | 06b02ad2e7236eaed8dcd2f1124ae114230045c47341872568d6126554f43d3b |

| _DEPLOIEMENT_PROD/ateliers.html | Copie de déploiement | 123 | 5ce1fcc1ff4128b839330099eef590d5ff774802f4bfede6715d0a4cadb22fd1 |

| _DEPLOIEMENT_PROD/audit.html | Copie de déploiement | 2006 | b0c4f6857b16b7acce23751d88a9db4c394bf34a2fc91df63fb337b9448862f1 |

| _DEPLOIEMENT_PROD/cgv.html | Copie de déploiement | 575 | 8a1a7884dbef45b791206d9e456674289187ef0f0e3ac00b4ccee8bba19b9325 |

| _DEPLOIEMENT_PROD/confidentialite.html | Copie de déploiement | 545 | b771adcf17f43ec81fad70e1c76a8eb8e0d716a234cd6a3b2b262b84dade9a8b |

| _DEPLOIEMENT_PROD/contact.html | Copie de déploiement | 899 | 7dc6d6f63f24b17fa951fb63a11e7510a8853df3b46c25078fa614c0b50f2493 |

| _DEPLOIEMENT_PROD/formation-cpf.html | Copie de déploiement | 113 | 9e75a50b8cb15e349f686b932f7ad90b95aa098eb4201645ac9d4cadafefe820 |

| _DEPLOIEMENT_PROD/formations-batiment.html | Copie de déploiement | 109 | bc6cd1ea04606125d77dae550f9b2cf96522407a8f7c51fb1d5213b1ec43c2d5 |

| _DEPLOIEMENT_PROD/formations-communication-marketing.html | Copie de déploiement | 109 | 25fbf59971fe56838ab3811a99cf7ad6e0711b877f38313cd3f60c05f5887870 |

| _DEPLOIEMENT_PROD/formations-developpement-commercial.html | Copie de déploiement | 109 | 68e158f2383e3e78b8d46b29f194e1570589846033e61ea5a4bb0d5819d1180f |

| _DEPLOIEMENT_PROD/formations-enter.html | Copie de déploiement | 109 | e2aa2f207ab177f601f4250154c243321bf5221b545385eda8a1f094bf5376f9 |

| _DEPLOIEMENT_PROD/formations-fafcea.html | Copie de déploiement | 114 | d929b135629cb482744cb44c445c29de6b82e0ca2da629697442eaa7ea94fc2e |

| _DEPLOIEMENT_PROD/formations-finance-assurance.html | Copie de déploiement | 109 | 8b7bee074917edc6221cd3c80cc7467fe6abb2f6ef1f6640acf90bc41f062aaa |

| _DEPLOIEMENT_PROD/formations-formation.html | Copie de déploiement | 109 | c7f2e9bce711ae60a04a49a6d2cf8a732594bbfbaef1a15bc8f7e241eacc2c01 |

| _DEPLOIEMENT_PROD/formations-immobilier.html | Copie de déploiement | 109 | 8d8b446db8835f9cf83afbe4a0eecd61c693a6c51d834fd23e865eed6f39a474 |

| _DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Copie de déploiement | 109 | ba8cf99037310815c0b904326f332e5f4c67c1f0fcc1c03baf13c43b148c5c80 |

| _DEPLOIEMENT_PROD/formations-services-entreprises.html | Copie de déploiement | 109 | 1a1446e7505e640dab261ee235a3bbddc16798fd5af4419a073394a7ccd0d3b4 |

| _DEPLOIEMENT_PROD/formations.html | Copie de déploiement | 126 | da0f35acd69cb103a421a22962c5bac7501304fe16f69b1fa62d84e543d2b965 |

| _DEPLOIEMENT_PROD/ia-et-moi.html | Copie de déploiement | 1834 | e7410939dac6695297b067fe56a5cc906c69495bc1afbbb9a74aa33171b0a942 |

| _DEPLOIEMENT_PROD/index.html | Copie de déploiement | 1769 | 8440f08427c375e925e10167d685c4537f1a54458fb43ef849886b21f1df1b41 |

| _DEPLOIEMENT_PROD/mentions-legales.html | Copie de déploiement | 476 | 6beedb45f84a9a6b8cef04abc709c6e0f27d312090c05d1415abec14a582b9f8 |

| _DEPLOIEMENT_PROD/outils.html | Copie de déploiement | 2368 | 66ae14d1a386e22cc37de3263000fdca3b49a04f41972379f6dd7954a67fedb2 |

| _DEPLOIEMENT_PROD/panorama-ia/index.html | Copie de déploiement | 341 | 0c0a665111885428e33c29a58a91bac328b2599cffdb93d7dfef64f4e6ba760b |

| _DEPLOIEMENT_PROD/panorama.html | Copie de déploiement | 3 | 503d240f610f49b225a0a81a0cdb6ee0a3ead45f9b4f673dd042bdacd3a3d6e9 |

| _DEPLOIEMENT_PROD/radar-ia.html | Copie de déploiement | 1428 | f20d073494aff8726a784689a6dbddcf8aa35e33c750e921c280ee1f131b9367 |

| _DEPLOIEMENT_PROD/secteur-assurance.html | Copie de déploiement | 1553 | 8e0a7e4c67ceee4169b304596bb407806ce61cd00b8bb8b4b57219e98191f59f |

| _DEPLOIEMENT_PROD/secteur-btp.html | Copie de déploiement | 1553 | 2f5a954f62913be4f19a08cb9037e08fea485a7388d3e24292e233334efd92d9 |

| _DEPLOIEMENT_PROD/secteur-communication.html | Copie de déploiement | 1553 | d30642e976d3256b33267505cd3811037bc9626d25ea9e2dd6a1a2efa4dc697b |

| _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | Copie de déploiement | 1553 | 85bf50a31452e2ac64da6b18a92405e3ec69f283b160b9dcf2b3ee9be6dc34a0 |

| _DEPLOIEMENT_PROD/secteur-immobilier.html | Copie de déploiement | 1553 | 033e14db1855d1a296a3bfe6dee11d09f51010e53d64740cc854d366c6e6ecd7 |

| _DEPLOIEMENT_PROD/secteur-juridique.html | Copie de déploiement | 1553 | ebd9477aa98469e01a14ae5bac3ef8405e1ec63fc0c119f903bf40ef27a7f25c |

| _DEPLOIEMENT_PROD/secteur-professions-liberales.html | Copie de déploiement | 1553 | 1b6135e3f11cb1bc769fd1a47374a2151d07f5ebdb326d5bfe20b5de2e7a80e5 |

| _DEPLOIEMENT_PROD/secteurs.html | Copie de déploiement | 1506 | 87330d98b248a67ebc865aafb976a07200796250a9d3b27a83eada44baed3468 |

| agents.html | Source / document public potentiel | 2088 | f46c3e4b37f246fd6b8c56e355f306e9b402bfd52582d0bc52e5e4ea4690471b |

| assistant.html | Source / document public potentiel | 119 | 06b02ad2e7236eaed8dcd2f1124ae114230045c47341872568d6126554f43d3b |

| ateliers.html | Source / document public potentiel | 123 | 5ce1fcc1ff4128b839330099eef590d5ff774802f4bfede6715d0a4cadb22fd1 |

| audit.html | Source / document public potentiel | 2006 | b0c4f6857b16b7acce23751d88a9db4c394bf34a2fc91df63fb337b9448862f1 |

| cgv.html | Source / document public potentiel | 575 | 8a1a7884dbef45b791206d9e456674289187ef0f0e3ac00b4ccee8bba19b9325 |

| confidentialite.html | Source / document public potentiel | 545 | b771adcf17f43ec81fad70e1c76a8eb8e0d716a234cd6a3b2b262b84dade9a8b |

| contact.html | Source / document public potentiel | 899 | 7dc6d6f63f24b17fa951fb63a11e7510a8853df3b46c25078fa614c0b50f2493 |

| formation-cpf.html | Source / document public potentiel | 113 | 9e75a50b8cb15e349f686b932f7ad90b95aa098eb4201645ac9d4cadafefe820 |

| formations-batiment.html | Source / document public potentiel | 109 | bc6cd1ea04606125d77dae550f9b2cf96522407a8f7c51fb1d5213b1ec43c2d5 |

| formations-communication-marketing.html | Source / document public potentiel | 109 | 25fbf59971fe56838ab3811a99cf7ad6e0711b877f38313cd3f60c05f5887870 |

| formations-developpement-commercial.html | Source / document public potentiel | 109 | 68e158f2383e3e78b8d46b29f194e1570589846033e61ea5a4bb0d5819d1180f |

| formations-enter.html | Source / document public potentiel | 109 | e2aa2f207ab177f601f4250154c243321bf5221b545385eda8a1f094bf5376f9 |

| formations-fafcea.html | Source / document public potentiel | 114 | d929b135629cb482744cb44c445c29de6b82e0ca2da629697442eaa7ea94fc2e |

| formations-finance-assurance.html | Source / document public potentiel | 109 | 8b7bee074917edc6221cd3c80cc7467fe6abb2f6ef1f6640acf90bc41f062aaa |

| formations-formation.html | Source / document public potentiel | 109 | c7f2e9bce711ae60a04a49a6d2cf8a732594bbfbaef1a15bc8f7e241eacc2c01 |

| formations-immobilier.html | Source / document public potentiel | 109 | 8d8b446db8835f9cf83afbe4a0eecd61c693a6c51d834fd23e865eed6f39a474 |

| formations-pilotage-organisation.html | Source / document public potentiel | 109 | ba8cf99037310815c0b904326f332e5f4c67c1f0fcc1c03baf13c43b148c5c80 |

| formations-services-entreprises.html | Source / document public potentiel | 109 | 1a1446e7505e640dab261ee235a3bbddc16798fd5af4419a073394a7ccd0d3b4 |

| formations.html | Source / document public potentiel | 126 | da0f35acd69cb103a421a22962c5bac7501304fe16f69b1fa62d84e543d2b965 |

| ia-et-moi.html | Source / document public potentiel | 1834 | e7410939dac6695297b067fe56a5cc906c69495bc1afbbb9a74aa33171b0a942 |

| index (1).html | Source / document public potentiel | 2031 | ef724e93e648ef82c8519adb21a08e4f44e6ddba737278cad0801054455d98e9 |

| index.html | Source / document public potentiel | 1769 | 8440f08427c375e925e10167d685c4537f1a54458fb43ef849886b21f1df1b41 |

| mentions-legales.html | Source / document public potentiel | 476 | 6beedb45f84a9a6b8cef04abc709c6e0f27d312090c05d1415abec14a582b9f8 |

| outils.html | Source / document public potentiel | 2368 | 66ae14d1a386e22cc37de3263000fdca3b49a04f41972379f6dd7954a67fedb2 |

| panorama-ia/index.html | Source / document public potentiel | 341 | 0c0a665111885428e33c29a58a91bac328b2599cffdb93d7dfef64f4e6ba760b |

| panorama.html | Source / document public potentiel | 3 | 503d240f610f49b225a0a81a0cdb6ee0a3ead45f9b4f673dd042bdacd3a3d6e9 |

| radar-ia.html | Source / document public potentiel | 1428 | f20d073494aff8726a784689a6dbddcf8aa35e33c750e921c280ee1f131b9367 |

| secteur-assurance.html | Source / document public potentiel | 1553 | 8e0a7e4c67ceee4169b304596bb407806ce61cd00b8bb8b4b57219e98191f59f |

| secteur-btp.html | Source / document public potentiel | 1553 | 2f5a954f62913be4f19a08cb9037e08fea485a7388d3e24292e233334efd92d9 |

| secteur-communication.html | Source / document public potentiel | 1553 | d30642e976d3256b33267505cd3811037bc9626d25ea9e2dd6a1a2efa4dc697b |

| secteur-finance-comptabilite.html | Source / document public potentiel | 1553 | 85bf50a31452e2ac64da6b18a92405e3ec69f283b160b9dcf2b3ee9be6dc34a0 |

| secteur-immobilier.html | Source / document public potentiel | 1553 | 033e14db1855d1a296a3bfe6dee11d09f51010e53d64740cc854d366c6e6ecd7 |

| secteur-juridique.html | Source / document public potentiel | 1553 | ebd9477aa98469e01a14ae5bac3ef8405e1ec63fc0c119f903bf40ef27a7f25c |

| secteur-professions-liberales.html | Source / document public potentiel | 1553 | 1b6135e3f11cb1bc769fd1a47374a2151d07f5ebdb326d5bfe20b5de2e7a80e5 |

| secteurs.html | Source / document public potentiel | 1506 | 87330d98b248a67ebc865aafb976a07200796250a9d3b27a83eada44baed3468 |



### Annexe J.2. Lecture des versions historiques distinctes

Une seule ligne par version de contenu (SHA-256) ; tous ses chemins sont indiqués. Les anciennes sections absentes des titres de blocs actuels sont des pistes de récupération, sans réintégration des offres. Les prix et mentions de chaque version sont déjà intégralement localisés en F.4.

| Fichiers de la même version | Empreinte abrégée | Title | H1 | Blocs distincts à examiner | Traitement documentaire |

| --- | --- | --- | --- | --- | --- |

| `_backups/accueil-fafcea-2026-10-09/_DEPLOIEMENT_PROD/index.html`, `_backups/accueil-fafcea-2026-10-09/index.html` | 95113d88a4bdde56 | L'Rénov IA Studio — Formation &amp; solutions IA métier | Mettre l'IA au travail dans votre métier. | Parcours CPF | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/404.html`, `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/404.html` | eab05d3dfdc1cbf0 | Page introuvable — L'Rénov IA Studio | Aucun signal — cette page est introuvable | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/assistant.html`, `_backups/ateliers-shift-2026-10-09/assistant.html` | dddaf9f92d6c3728 | Solutions métier · L’Rénov IA Studio | L’IA générique vous fait perdre du temps. Un assistant IA construit pour votre métier vous en fait gagner. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html`, `_backups/ateliers-shift-2026-10-09/ateliers.html` | 5eb26f4a7049c568 | Ateliers pratiques · CTRL · L’Rénov IA Studio | Ateliers pratiques — Prendre le contrôle | Les formations CTRL | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html`, `_backups/ateliers-shift-2026-10-09/cgv.html` | 5bd310da8e198df3 | Conditions Générales de Vente — L'Rénov IA Studio | CGV L'Rénov IA Studio | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html`, `_backups/ateliers-shift-2026-10-09/confidentialite.html` | 850c95d0227fa050 | Politique de confidentialité — L'Rénov IA Studio | Politique de confidentialité | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/contact.html`, `_backups/ateliers-shift-2026-10-09/contact.html` | 88d20a5344fb644f | Contact — L'Rénov IA Studio · 30 min pour en parler | Échangeons sur votre situation . | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html` | 1d46a7c57b38e44d | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | L’IA dans votre activité ; Découvrir le parcours | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html`, `_backups/ateliers-shift-2026-10-09/formations-batiment.html` | ab8b55a4d4d60e1e | CMD · Bâtiment · L’Rénov IA Studio | Bâtiment | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html`, `_backups/ateliers-shift-2026-10-09/formations-communication-marketing.html` | eed3cefd7aaef698 | CMD · Communication &amp; marketing · L’Rénov IA Studio | Communication &amp; marketing | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html`, `_backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html` | 8bb5426680d277ad | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | Développement commercial &amp; vente | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html`, `_backups/ateliers-shift-2026-10-09/formations-enter.html` | d5f7103c5f2da0a1 | Parcours longs · ENTER · L’Rénov IA Studio | Parcours longs — Transformer | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html`, `_backups/ateliers-shift-2026-10-09/formations-finance-assurance.html` | 229e13914426df93 | CMD · Finance &amp; assurance · L’Rénov IA Studio | Finance &amp; assurance | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html`, `_backups/ateliers-shift-2026-10-09/formations-formation.html` | 59b09d527829469a | CMD · Formation · L’Rénov IA Studio | Formation | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html`, `_backups/ateliers-shift-2026-10-09/formations-immobilier.html` | 88b724d070c8ec84 | CMD · Immobilier · L’Rénov IA Studio | Immobilier | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html`, `_backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html` | 0abe8e68556e3873 | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | Pilotage &amp; organisation | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html`, `_backups/ateliers-shift-2026-10-09/formations-services-entreprises.html` | 9456c55585565050 | CMD · Services aux entreprises · L’Rénov IA Studio | Services aux entreprises | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html`, `_backups/ateliers-shift-2026-10-09/formations.html` | e80ea5136130047f | Formations · L’Rénov IA Studio | Se former avec L’Rénov IA Studio | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html` | 9a38399db913a03d | L'IA et moi — Vous êtes dans quel cas ? · L'Rénov IA Studio | Vous êtes dans quel cas ? | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/index.html`, `_backups/ateliers-shift-2026-10-09/index.html` | 2719d66fd29e00fd | L'Rénov IA Studio — Formation &amp; solutions IA métier | Mettre l'IA au travail dans votre métier. | Parcours CPF | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html`, `_backups/ateliers-shift-2026-10-09/mentions-legales.html` | b73093e4cc934241 | Mentions légales — L'Rénov IA Studio | Mentions légales | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html`, `_backups/ateliers-shift-2026-10-09/radar-ia.html` | 7cab7938e9f8a85b | Radar IA — L'Rénov IA Studio | Ce qui buzze. Ce qui compte vraiment. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html` | 1e0761a78d793edc | Assurance · IARD — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Assurance · IARD. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html` | b1a9ebb384a942a1 | BTP · Artisans — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour BTP · Artisans. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html` | dfb10e642c57ebdf | Communication · Marketing — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Communication · Marketing. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html` | 2a8c2884aaf03ceb | Compta · Finance — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Compta · Finance. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html` | d42eb355d5f593ef | Immobilier · ALUR — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Immobilier · ALUR. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html` | 71b6c0c89f8a4f3e | Juridique · Notariat — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Juridique · Notariat. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html` | 3b1dfc9d83c48a87 | Professions libérales — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Professions libérales. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html` | c99dc20e8d4bb1f1 | Vos prestations dans votre métier — L'Rénov IA Studio · 7 secteurs | Sept secteurs où L'Rénov intervient concrètement. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/agents.html` | e3be6748709168ff | Les 4 niveaux d'agent IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 niveaux d'agent IA pour votre activité | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/audit.html` | 0efdd3acb8f5c027 | Les 3 paliers d'audit IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 3 paliers d'audit IA pour décider en connaissance | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/formation-cpf.html` | 38a1550451886032 | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | L’IA dans votre activité ; Découvrir le parcours | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/ia-et-moi.html` | 6056d25616f6c697 | L'IA et moi — Vous êtes dans quel cas ? · L'Rénov IA Studio | Vous êtes dans quel cas ? | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/outils.html` | e840d1635f92122b | Les 4 paliers d'outil métier · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 paliers d'outil métier construit sur mesure | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-assurance.html` | 5e315c52e4f3df78 | Assurance · IARD — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Assurance · IARD. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-btp.html` | 7b29d4277b1aae0f | BTP · Artisans — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour BTP · Artisans. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-communication.html` | be1f697954d2109a | Communication · Marketing — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Communication · Marketing. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html` | b1e9a3470e0a53c1 | Compta · Finance — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Compta · Finance. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-immobilier.html` | 6ec472530f3c948c | Immobilier · ALUR — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Immobilier · ALUR. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-juridique.html` | 3b173a18b36548c7 | Juridique · Notariat — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Juridique · Notariat. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html` | 8f4de43f65b907b1 | Professions libérales — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Professions libérales. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/ateliers-shift-2026-10-09/secteurs.html` | 00ebfad86fe5f9f0 | Vos prestations dans votre métier — L'Rénov IA Studio · 7 secteurs | Sept secteurs où L'Rénov intervient concrètement. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/cartes-ateliers-2026-10-09/ateliers.html`, `_backups/categories-cmd-2026-10-09/ateliers.html`, `_backups/fiches-shift-2026-10-09/ateliers.html`, `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html`, `_backups/navigation-formations-2026-10-09/ateliers.html` | 6f53c6756745989a | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | Ateliers SHIFT | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/cartes-ateliers-2026-10-09/formation-cpf.html`, `_backups/categories-cmd-2026-10-09/formation-cpf.html`, `_backups/fiches-shift-2026-10-09/formation-cpf.html`, `_backups/navigation-formations-2026-10-09/formation-cpf.html` | f2ffb4d76d338985 | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | L’IA dans votre activité ; Découvrir le parcours | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html`, `_backups/catalogue-shift-final-2026-10-09/ateliers.html`, `_backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html`, `_backups/catalogue-shift-final-application-2026-10-09/ateliers.html` | 46b1b562cbc65fc2 | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | Ateliers SHIFT | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html`, `_backups/fafcea-programmes-2026-10-09/formations-fafcea.html` | 06be729c0dcca6ef | Parcours individualisés FAFCEA · L’Rénov IA Studio | Parcours individualisés FAFCEA | Format envisagé — 14 h ; Format envisagé — 21 h ; Format envisagé — 28 h ; Format envisagé — 40 h | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html`, `_backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html` | 2b3f7c9fbd29b01a | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | L’IA dans votre activité ; Découvrir le parcours | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html`, `_backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html` | cd3f1499098822a2 | Parcours individualisés FAFCEA · L’Rénov IA Studio | Parcours individualisés FAFCEA | 14 h — Utiliser l’IA et mieux organiser son temps ; Développer le digital dans son activité — exploiter le potentiel de l’IA ; Gérer son temps et ses priorités ; 21 h — Utiliser, organiser et piloter son activité avec l’IA ; Stratégie de développement ; 28 h — Structurer son activité et alléger son organisation ; Réduire sa charge mentale ; 40 h — Déployer et optimiser son organisation avec l’IA ; Approfondissement, déploiement et optimisation opérationnelle ; Informations communes à tous les parcours ; Public ; Prérequis ; Modalité ; Pédagogie ; Évaluation | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/index_avant_shift_2026-09-30.html` | e47a01a2abd02312 | L'Rénov IA Studio — Un assistant IA construit pour votre métier | L'IA générique vous fait perdre du temps. Un assistant IA construit pour votre métier vous en fait gagner. | Comment je gagne du temps ? ; Vous êtes dans quel cas ? ; Aujourd'hui, sans IA construite pour vous. ; Avec un bras droit IA construit pour vous. ; On forme. Pour vous, ou pour vos équipes. ; Apprenez l'IA avec ceux qui font le métier. ; Votre place à la table des pros qui maîtrisent l'IA. ; Ce qui buzze. Ce qui compte vraiment. ; 30 minutes pour voir si on peut travailler ensemble. ; Prendre 30 min | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/404.html`, `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/404.html` | bcb1ae29714b80c8 | Page introuvable — L'Rénov IA Studio | Aucun signal — cette page est introuvable | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/assistant.html`, `_backups/navigation-formations-2026-10-09/assistant.html` | d84860c5f4bd79f6 | Solutions métier · L’Rénov IA Studio | L’IA générique vous fait perdre du temps. Un assistant IA construit pour votre métier vous en fait gagner. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html`, `_backups/navigation-formations-2026-10-09/cgv.html` | 44203ae05a6ccb42 | Conditions Générales de Vente — L'Rénov IA Studio | CGV L'Rénov IA Studio | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html`, `_backups/navigation-formations-2026-10-09/confidentialite.html` | 576fde8c966d8053 | Politique de confidentialité — L'Rénov IA Studio | Politique de confidentialité | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/contact.html`, `_backups/navigation-formations-2026-10-09/contact.html` | 8e03f20f49d42ce3 | Contact — L'Rénov IA Studio · 30 min pour en parler | Échangeons sur votre situation . | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html` | 98b1bb43d4198245 | Parcours CPF certifiant · L’Rénov IA Studio | Améliorer l’efficacité de sa TPE à l’aide de l’IA | L’IA dans votre activité ; Découvrir le parcours | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html`, `_backups/navigation-formations-2026-10-09/formations-batiment.html` | 9b464fa54047a1cd | CMD · Bâtiment · L’Rénov IA Studio | Bâtiment | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html`, `_backups/navigation-formations-2026-10-09/formations-communication-marketing.html` | 861850de61d2b7c3 | CMD · Communication &amp; marketing · L’Rénov IA Studio | Communication &amp; marketing | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html`, `_backups/navigation-formations-2026-10-09/formations-developpement-commercial.html` | afe00d4a4d25bb18 | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | Développement commercial &amp; vente | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html`, `_backups/navigation-formations-2026-10-09/formations-enter.html` | b4208a0e7e7f21de | Parcours longs · ENTER · L’Rénov IA Studio | Parcours longs — Transformer | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html`, `_backups/navigation-formations-2026-10-09/formations-finance-assurance.html` | ca4c3593b335adea | CMD · Finance &amp; assurance · L’Rénov IA Studio | Finance &amp; assurance | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html`, `_backups/navigation-formations-2026-10-09/formations-formation.html` | 2fec719fcd8cd944 | CMD · Formation · L’Rénov IA Studio | Formation | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html`, `_backups/navigation-formations-2026-10-09/formations-immobilier.html` | 0735185c7c8162bb | CMD · Immobilier · L’Rénov IA Studio | Immobilier | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html`, `_backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html` | f2948936fccbb515 | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | Pilotage &amp; organisation | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html`, `_backups/navigation-formations-2026-10-09/formations-services-entreprises.html` | 183d266f4a0e92a4 | CMD · Services aux entreprises · L’Rénov IA Studio | Services aux entreprises | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html`, `_backups/navigation-formations-2026-10-09/formations.html` | 49a1c6698ac38156 | Formations · L’Rénov IA Studio | Se former avec L’Rénov IA Studio | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html` | e20557fa6bfa1612 | L'IA et moi — Vous êtes dans quel cas ? · L'Rénov IA Studio | Vous êtes dans quel cas ? | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/index.html`, `_backups/navigation-formations-2026-10-09/index.html` | 9e62e2689994d584 | L'Rénov IA Studio — Formation &amp; solutions IA métier | Mettre l'IA au travail dans votre métier. | Parcours CPF | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html`, `_backups/navigation-formations-2026-10-09/mentions-legales.html` | 0f11aae78c62c905 | Mentions légales — L'Rénov IA Studio | Mentions légales | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html`, `_backups/navigation-formations-2026-10-09/radar-ia.html` | 9ec30a3bcd0aa14d | Radar IA — L'Rénov IA Studio | Ce qui buzze. Ce qui compte vraiment. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html` | 616464266f9ba94e | Assurance · IARD — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Assurance · IARD. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html` | e1a39c81d1dbbedc | BTP · Artisans — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour BTP · Artisans. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html` | 252c343dca0b6ea8 | Communication · Marketing — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Communication · Marketing. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html` | 527d8423e4262c72 | Compta · Finance — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Compta · Finance. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html` | aea14ff0fef9a119 | Immobilier · ALUR — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Immobilier · ALUR. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html` | aa37a7a7902fa572 | Juridique · Notariat — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Juridique · Notariat. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html` | b2a3a99ec8490c14 | Professions libérales — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Professions libérales. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html` | f44a7be434f15c9d | Vos prestations dans votre métier — L'Rénov IA Studio · 7 secteurs | Sept secteurs où L'Rénov intervient concrètement. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/agents.html` | 13af47bc5684b852 | Les 4 niveaux d'agent IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 niveaux d'agent IA pour votre activité | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/audit.html` | 82252a0ae88d093f | Les 3 paliers d'audit IA · Comprendre avant de choisir · L'Rénov IA Studio | Les 3 paliers d'audit IA pour décider en connaissance | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/ia-et-moi.html` | 37bc897e50f395be | L'IA et moi — Vous êtes dans quel cas ? · L'Rénov IA Studio | Vous êtes dans quel cas ? | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/outils.html` | 27d1c4ac679e7107 | Les 4 paliers d'outil métier · Comprendre avant de choisir · L'Rénov IA Studio | Les 4 paliers d'outil métier construit sur mesure | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-assurance.html` | bc59077ac9bade64 | Assurance · IARD — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Assurance · IARD. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-btp.html` | 9f9555b7529c4f28 | BTP · Artisans — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour BTP · Artisans. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-communication.html` | 80fdc0d3860bd4df | Communication · Marketing — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Communication · Marketing. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html` | 63e183e3fe2de513 | Compta · Finance — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Compta · Finance. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-immobilier.html` | 5c21f630ae62589e | Immobilier · ALUR — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Immobilier · ALUR. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-juridique.html` | b167b18b00f69241 | Juridique · Notariat — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Juridique · Notariat. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteur-professions-liberales.html` | 0d6cfbdc0e67b8e9 | Professions libérales — L'Rénov IA Studio · Vos prestations IA dans ce métier | L'IA pour Professions libérales. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |

| `_backups/navigation-formations-2026-10-09/secteurs.html` | c87c7b62a3eae1d3 | Vos prestations dans votre métier — L'Rénov IA Studio · 7 secteurs | Sept secteurs où L'Rénov intervient concrètement. | Pas de titre de bloc spécifique supplémentaire détecté. | À récupérer : pédagogie et exemples uniquement ; à actualiser : liens et promesses ; obsolète : prix/paliers de cette version ; à abandonner : toute restauration globale non arbitrée. |



### Contrôle de conservation et points à valider

Le contrôle final compare les empreintes des **212 HTML inventoriés** avec celles du début de l’extraction et vérifie l’absence de différence Git sur l’ensemble des fichiers préexistants suivis. Le statut Git était propre au début de l’audit ; seul le rapport demandé doit subsister comme ajout. Aucune requête d’envoi, déploiement, réservation ou mutation externe n’a été réalisée. Aucun test applicatif n’est requis par une création documentaire ; les vérifications portent sur couverture, références et conservation des sources.

### Tableau final d’arbitrage humain

| PAGE | STATUT ACTUEL | VALEUR DU CONTENU | TARIFS À ISOLER | ACTION ENVISAGEABLE | PRIORITÉ | VALIDATION HUMAINE REQUISE |

| --- | --- | --- | --- | --- | --- | --- |

| index.html | A | Forte | Aucun montant HTML identifié | GARDER | P1 | OUI — avant toute modification ou reprise |

| formations.html | A | Forte | Aucun montant HTML ; vérifier engagements et données JS | GARDER | P1 | OUI — avant toute modification ou reprise |

| ateliers.html | B | Forte | Oui : 399 € / catalogue SHIFT ; voir F.3 | GARDER | P2 | OUI — avant toute modification ou reprise |

| audit.html | E — URL déjà redirigée | Très forte : pédagogie et limites | Oui : voir F (prix, licences ou conditions) | FUSIONNER | P1 | OUI — avant toute modification ou reprise |

| outils.html | E — URL déjà redirigée | Très forte : pédagogie et limites | Oui : voir F (prix, licences ou conditions) | FUSIONNER | P1 | OUI — avant toute modification ou reprise |

| agents.html | E — URL déjà redirigée | Très forte : pédagogie et limites | Oui : voir F (prix, licences ou conditions) | FUSIONNER | P1 | OUI — avant toute modification ou reprise |

| assistant.html | A | Forte | Aucun montant HTML identifié | GARDER | P1 | OUI — avant toute modification ou reprise |

| ia-et-moi.html | B | Très forte : maturité et orientation | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| panorama.html | E — URL déjà redirigée | Faible : alias technique | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| radar-ia.html | A | Forte | Aucun montant HTML ; vérifier engagements et données JS | GARDER | P1 | OUI — avant toute modification ou reprise |

| contact.html | A | Forte : conversion / conditions | Aucun montant HTML identifié | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteurs.html | D | Moyenne : index et exemples | Oui : voir F (prix, licences ou conditions) | REFONDRE | P2 | OUI — avant toute modification ou reprise |

| secteur-assurance.html | B | Forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteur-btp.html | B | Très forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteur-communication.html | C | Forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P2 | OUI — avant toute modification ou reprise |

| secteur-finance-comptabilite.html | B | Forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteur-immobilier.html | B | Très forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteur-juridique.html | B | Très forte | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| secteur-professions-liberales.html | C | Moyenne à forte | Oui : voir F (prix, licences ou conditions) | FUSIONNER | P2 | OUI — avant toute modification ou reprise |

| 404.html | D | Forte | Aucun montant HTML identifié | GARDER | P2 | OUI — avant toute modification ou reprise |

| cgv.html | B | Forte : conversion / conditions | Oui : voir F (prix, licences ou conditions) | REFONDRE | P1 | OUI — avant toute modification ou reprise |

| confidentialite.html | B | Forte | Aucun montant HTML identifié | GARDER | P2 | OUI — avant toute modification ou reprise |

| formation-cpf.html | B | Forte | Aucun montant HTML ; vérifier engagements et données JS | GARDER | P2 | OUI — avant toute modification ou reprise |

| formations-batiment.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-communication-marketing.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-developpement-commercial.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-enter.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Oui : 399 € / catalogue SHIFT ; voir F.3 | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-fafcea.html | C | Forte | Aucun montant HTML ; vérifier engagements et données JS | GARDER | P2 | OUI — avant toute modification ou reprise |

| formations-finance-assurance.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-formation.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-immobilier.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-pilotage-organisation.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| formations-services-entreprises.html | E — URL déjà redirigée | Faible à moyenne : anciennes entrées | Aucun montant HTML identifié | REDIRIGER | P2 | OUI — avant toute action ; REDIRIGER décrit une règle existante à confirmer, sans nouvelle exécution |

| index (1).html | E | Moyenne : progression pédagogique | Oui : voir F (prix, licences ou conditions) | ARCHIVER | P1 | OUI — avant toute modification ou reprise |

| mentions-legales.html | B | Forte | Oui : voir F (prix, licences ou conditions) | GARDER | P2 | OUI — avant toute modification ou reprise |

| panorama-ia/index.html | D | Forte : pédagogie comparative | Oui : voir F (prix, licences ou conditions) | REFONDRE | P2 | OUI — avant toute modification ou reprise |



**STOP — rapport produit. Attendre la validation humaine avant toute modification HTML/CSS/JS, de navigation, footer, redirection ou publication.**
