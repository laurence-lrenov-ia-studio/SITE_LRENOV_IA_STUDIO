# Diagnostic de divergence SHIFT — 14 octobre 2026

État : **cause identifiée ; aucune modification Hostinger et aucune publication effectuées**. Correctif de cache-busting préparé localement, limité à ateliers.html et sa copie. Purge Cloudflare : en attente de session authentifiée. Les résultats publics ci-dessous sont ceux AVANT purge, et ne constituent pas une validation après correction.

## 1. Cause exacte et preuves

**CAUSE_H — cache CDN obsolète confirmé**, et non simple présomption de cache navigateur. Les pages HTML récentes référencent des noms d’assets stables. Sur quatre URL sans paramètre, Cloudflare répond HIT avec un contenu ancien. Sur une nouvelle clé de cache du même chemin, Cloudflare répond MISS et fournit des octets identiques à la source récente. La coexistence de ces versions explique les anciennes lignes de catalogue et le CTA email. Aucun changement de tarif, carte, programme, Gemini, CTRL/CMD/ENTER ou URL Billetweb n’est nécessaire pour diagnostiquer cette divergence.

Dans un navigateur public, `/ateliers` → CTRL « Personnaliser son IA » affiche effectivement une modale dont le lien est « Échanger sur cette formation → » vers mailto. Il ne s’agit donc pas seulement d’une chaîne trouvée dans un fichier sans effet visible.

Le script public ancien correspond exactement, après normalisation des fins de ligne seulement, aux sauvegardes `_backups/cartes-ateliers-2026-10-09/assets/shift-formations.js` et à sa copie `_DEPLOIEMENT_PROD` dans cette sauvegarde. Son contenu ne correspond à aucune révision Git historique du même chemin dans ce dépôt ; ne pas lui inventer un commit déployé.

Les routes `/formations` et `/formations.html` convergent vers `/formations`. `/ateliers.html` converge vers `/ateliers`. Les 9 anciennes entrées métier/ENTER, avec et sans .html, redirigent déjà vers `/ateliers#cmd` ou `#enter`. **Aucune nouvelle redirection n’a été créée** et aucun problème de route distincte n’a été masqué.

### Les quatre assets effectivement concernés (trois initiaux + un quatrième confirmé)

| URL stable publique | SHA-256 source | SHA-256 copie PROD | SHA-256 servi URL stable | SHA-256 servi clé neuve | Source = clé neuve | Cache stable | Date HTTP stable (UTC) | Last-Modified stable (UTC) | ETag stable | Age stable (s) | Cache-Control stable | Cache clé neuve | Last-Modified clé neuve (UTC) | ETag clé neuve | Age clé neuve | Cache-Control clé neuve |

| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| https://lrenov-ia.studio/assets/shift-formations.js | 35303eceb8bda53ff50cd6d38b10c5e5f66a0471bc9d70cebcded89dc030fbf2 | 35303eceb8bda53ff50cd6d38b10c5e5f66a0471bc9d70cebcded89dc030fbf2 | be77b81a10032101b34478dfe03a0df0c02e120627cd9cea3cc9cf30c10e92c2 | 35303eceb8bda53ff50cd6d38b10c5e5f66a0471bc9d70cebcded89dc030fbf2 | OUI | HIT | Wed, 14 Oct 2026 14:45:18 GMT | Wed, 07 Oct 2026 18:49:14 GMT | W/"1dbb-6ac6942a-8683d9017cabbca2;br" | 515898 | public, max-age=2592000 | MISS | Wed, 14 Oct 2026 14:30:37 GMT | W/"2b76-6acf920d-8683d9017cabbca2;br" | Absent | public, max-age=2592000 |

| https://lrenov-ia.studio/assets/shift-catalogue.js | 24ebefdcce5e0671157060306f4d7eef4ae259b098be87f6a5217c89d95890aa | 24ebefdcce5e0671157060306f4d7eef4ae259b098be87f6a5217c89d95890aa | 12cc555ac769d90c1489f2e68fef057798fad39b4c46466152d3655cb4515561 | 24ebefdcce5e0671157060306f4d7eef4ae259b098be87f6a5217c89d95890aa | OUI | HIT | Wed, 14 Oct 2026 14:45:18 GMT | Wed, 07 Oct 2026 18:49:14 GMT | W/"2abd-6ac6942a-251436c7ab5978da;br" | 515903 | public, max-age=2592000 | MISS | Wed, 14 Oct 2026 14:30:37 GMT | W/"a875-6acf920d-251436c7ab5978da;br" | Absent | public, max-age=2592000 |

| https://lrenov-ia.studio/assets/ateliers-shift.css | 884e71ba87b7d65d443d3cc498dcdf487a2ca9354a199d3320e6b2be49ea16a1 | 884e71ba87b7d65d443d3cc498dcdf487a2ca9354a199d3320e6b2be49ea16a1 | d2c9e5b1459f9378850507f72234e04d6c436db63600646574d7fafde7ad4a97 | 884e71ba87b7d65d443d3cc498dcdf487a2ca9354a199d3320e6b2be49ea16a1 | OUI | HIT | Wed, 14 Oct 2026 14:45:18 GMT | Fri, 09 Oct 2026 19:38:47 GMT | W/"dd9-6ac942c7-ff5a995c76129958;br" | 414353 | public, max-age=2592000 | MISS | Wed, 14 Oct 2026 14:30:36 GMT | W/"1435-6acf920c-ff5a995c76129958;br" | Absent | public, max-age=2592000 |

| https://lrenov-ia.studio/assets/shift-formations.css | 417dc12b52d2e5e46b62e6039076b4d5dd8230b80706da75117f9d8564d620cf | 417dc12b52d2e5e46b62e6039076b4d5dd8230b80706da75117f9d8564d620cf | 0180d1094157e275e22df0558ed065647ad0e8f912a871399ed31a33820d91ca | 417dc12b52d2e5e46b62e6039076b4d5dd8230b80706da75117f9d8564d620cf | OUI | HIT | Wed, 14 Oct 2026 14:45:19 GMT | Wed, 07 Oct 2026 18:49:14 GMT | W/"1a7c-6ac6942a-6160edd7e5f5e436;br" | 515903 | public, max-age=2592000 | MISS | Wed, 14 Oct 2026 14:30:37 GMT | W/"1c22-6acf920d-6160edd7e5f5e436;br" | Absent | public, max-age=2592000 |



Clés de diagnostic : `?diagnostic=20261014-1445` pour les trois premiers assets, `?diagnostic=20261014-1455` pour shift-formations.css. Elles ne modifient aucun fichier ni configuration ; elles demandent une autre clé de cache. Les réponses sont archivées dans `validation/shift-routage-2026-10-14/http-avant/`. Les quatre réponses fraîches indiquent Last-Modified du 14 octobre 2026 à 14:30:36 ou 14:30:37 UTC, tandis que les clés stables datent des 7 ou 9 octobre.

**HTML : ne pas confondre empreintes variables et versions différentes.** Cloudflare réécrit l’adresse email du footer avec un masque aléatoire et injecte email-decode.min.js. Le contrôle retire uniquement cette transformation pour comparer les pages. Après normalisation, les paires .html/sans extension et les redirections sont équivalentes à leur page locale attendue avant cache-busting. Aucune autre différence n’est ignorée.

## 2. Source, hébergement et déploiement : établi / non établi

| Élément | Résultat | Niveau de preuve |

| --- | --- | --- |

| Dépôt | https://github.com/laurence-lrenov-ia-studio/SITE_LRENOV_IA_STUDIO | Remote Git et lecture API GitHub |

| Branche source | main | Locale et API /branches/main |

| Commit source actuel | b3b211389d365e180b22f65f7fd38a6763c2d597 — maj card — 13/10/2026 17:00:45 Europe/Paris | Identique local et GitHub |

| Dernier workflow GitHub Pages | 38418354241 ; succès ; main ; même SHA ; 13/10/2026 15:00:49–15:01:51 UTC | API Actions. Cela prouve un déploiement GitHub Pages, pas le déploiement Hostinger du domaine. |

| Serveur public du domaine | Cloudflare devant Hostinger / hPanel / LiteSpeed | En-têtes HTTP Server, platform, panel, x-turbo-charged-by |

| Commit complet réellement déployé sur Hostinger | INCONNU ; les quatre assets frais correspondent au contenu de main, et les HTML contrôlés correspondent à leurs sources avant patch. | Une égalité de fichiers ne prouve pas une révision complète ; pas de manifeste de release ni accès hPanel. |

| Branche configurée de déploiement Hostinger | INCONNUE | Ne pas déduire main uniquement de la correspondance des fichiers. |

| Dernière publication Hostinger | Horodatages fichiers observés : 14/10/2026 vers 14:30:35–37 UTC ; identifiant et historique inconnus | Last-Modified ne prouve pas l’identité d’un déploiement. |

| Dossier réellement publié / chemin physique serveur | INCONNU. public_html est mentionné dans une ancienne notice locale, sans preuve de configuration actuelle. | Aucun accès au panneau ou système de fichiers serveur ; pas de chemin absolu inventé. |

| Dossier local de livraison | C:/PROJETS_GITHUB/SITE_LRENOV_IA_STUDIO/_DEPLOIEMENT_PROD | Présent ; fichiers concernés identiques à leur source avant intervention. Ne prouve pas que ce répertoire est utilisé par Hostinger. |

| Netlify / build | Aucun netlify.toml, _redirects, .netlify, dossier dist/public/build ni workflow de dépôt trouvé | Recherche récursive ; .htaccess Apache existe. Aucune configuration Netlify créée. |

| Routage effectif | 301 .html → sans extension ; anciennes formations-* → ateliers#cmd/#enter | Chaînes HTTP réellement capturées, compatibles avec .htaccess local. |



## 3. Page canonique

PAGE CANONIQUE : `C:/PROJETS_GITHUB/SITE_LRENOV_IA_STUDIO/ateliers.html`. URL canonique : **https://lrenov-ia.studio/ateliers**. Le hub https://lrenov-ia.studio/formations reste la vue d’ensemble SHIFT / FAFCEA / CPF ; il n’est pas un doublon du catalogue SHIFT. Chaque entrée SHIFT existante doit rejoindre ateliers. Le fichier canonique définit `.shift-family`, les sections CTRL/CMD/ENTER et les conteneurs de cartes. JS : assets/shift-catalogue.js + assets/shift-formations.js. CSS : assets/shift-formations.css + assets/ateliers-shift.css, puis styles communs footer/mobile. Aucun HTML mobile autonome n’a été découvert : adaptation responsive et JS mobile-app.js.

### Doublons et pages de formation, y compris copies et sauvegardes

La table conserve chaque chemin physique. « Copie » et « Sauvegarde » ne signifient pas publiés : l’accès public à ces répertoires n’a pas été déduit ni testé par énumération. La présence des fichiers serveurs absolus reste inconnue.

| Chemin | URL / route | Statut | Version | Title | JS chargé | CSS chargé | Liens entrants source |

| --- | --- | --- | --- | --- | --- | --- | --- |

| ateliers.html | /ateliers | ACTIF_SOURCE | Source actuelle ou copie synchronisée | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js?v=20261014-1 ; assets/shift-formations.js?v=20261014-1 ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css?v=20261014-1 ; assets/global-footer.css ; assets/ateliers-shift.css?v=20261014-1 ; assets/mobile-navigation.css ; assets/mobile-app.css | 404.html:198 [footer] ; agents.html:1934 [footer] ; assistant.html:82 [footer] ; audit.html:1852 [footer] ; cgv.html:529 [footer] ; confidentialite.html:499 [footer] ; contact.html:776 [footer] ; formation-cpf.html:75 [footer] ; formations-batiment.html:71 [footer] ; formations-communication-marketing.html:71 [footer] ; formations-developpement-commercial.html:71 [footer] ; formations-enter.html:71 [footer] ; formations-fafcea.html:76 [footer] ; formations-finance-assurance.html:71 [footer] ; formations-formation.html:71 [footer] ; formations-immobilier.html:71 [footer] ; formations-pilotage-organisation.html:71 [footer] ; formations-services-entreprises.html:71 [footer] ; formations.html:45 [corps] ; formations.html:88 [footer] ; ia-et-moi.html:1610 [footer] ; index (1).html:1245 [menu] ; index (1).html:1268 [menu] ; index (1).html:1877 [footer] ; index.html:1276 [corps] ; index.html:1482 [footer] ; mentions-legales.html:430 [footer] ; outils.html:2214 [footer] ; radar-ia.html:1373 [footer] ; secteur-assurance.html:1304 [corps] ; secteur-assurance.html:1400 [footer] ; secteur-btp.html:1304 [corps] ; secteur-btp.html:1400 [footer] ; secteur-communication.html:1304 [corps] ; secteur-communication.html:1400 [footer] ; secteur-finance-comptabilite.html:1304 [corps] ; secteur-finance-comptabilite.html:1400 [footer] ; secteur-immobilier.html:1304 [corps] ; secteur-immobilier.html:1400 [footer] ; secteur-juridique.html:1304 [corps] ; secteur-juridique.html:1400 [footer] ; secteur-professions-liberales.html:1304 [corps] ; secteur-professions-liberales.html:1400 [footer] ; secteurs.html:1353 [footer] ; panorama-ia/index.html:303 [footer] |

| formation-cpf.html | /formation-cpf | ACTIF_SOURCE | Source actuelle ou copie synchronisée | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/formations-config.js ; assets/formation-cpf.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formation-cpf.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | 404.html:199 [footer] ; agents.html:1935 [footer] ; assistant.html:83 [footer] ; ateliers.html:86 [footer] ; audit.html:1853 [footer] ; cgv.html:530 [footer] ; confidentialite.html:500 [footer] ; contact.html:777 [footer] ; formations-batiment.html:72 [footer] ; formations-communication-marketing.html:72 [footer] ; formations-developpement-commercial.html:72 [footer] ; formations-enter.html:72 [footer] ; formations-fafcea.html:77 [footer] ; formations-finance-assurance.html:72 [footer] ; formations-formation.html:72 [footer] ; formations-immobilier.html:72 [footer] ; formations-pilotage-organisation.html:72 [footer] ; formations-services-entreprises.html:72 [footer] ; formations.html:52 [corps] ; formations.html:89 [footer] ; ia-et-moi.html:1611 [footer] ; index (1).html:1249 [menu] ; index (1).html:1269 [menu] ; index (1).html:1878 [footer] ; index.html:1290 [corps] ; index.html:1483 [footer] ; mentions-legales.html:431 [footer] ; outils.html:2215 [footer] ; radar-ia.html:1374 [footer] ; secteur-assurance.html:1401 [footer] ; secteur-btp.html:1401 [footer] ; secteur-communication.html:1401 [footer] ; secteur-finance-comptabilite.html:1401 [footer] ; secteur-immobilier.html:1401 [footer] ; secteur-juridique.html:1401 [footer] ; secteur-professions-liberales.html:1401 [footer] ; secteurs.html:1354 [footer] ; panorama-ia/index.html:304 [footer] |

| formations-batiment.html | /formations-batiment → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-communication-marketing.html | /formations-communication-marketing → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-developpement-commercial.html | /formations-developpement-commercial → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-enter.html | /formations-enter → /ateliers#enter | ANCIEN_FICHIER | Ancienne version / historique | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-fafcea.html | /formations-fafcea | ACTIF_SOURCE | Source actuelle ou copie synchronisée | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/fafcea-config.js ; assets/formations-fafcea.js ; assets/shift-formations.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formations-fafcea.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | formations.html:47 [corps] ; index.html:1283 [corps] |

| formations-finance-assurance.html | /formations-finance-assurance → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-formation.html | /formations-formation → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-immobilier.html | /formations-immobilier → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-pilotage-organisation.html | /formations-pilotage-organisation → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations-services-entreprises.html | /formations-services-entreprises → /ateliers#cmd | ANCIEN_FICHIER | Ancienne version / historique | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| formations.html | /formations | ACTIF_SOURCE | Source actuelle ou copie synchronisée | Formations · L’Rénov IA Studio | assets/formations-config.js ; assets/formations-calendar.js ; assets/formations-overview.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | 404.html:167 [menu] ; 404.html:197 [footer] ; agents.html:1232 [menu] ; agents.html:1244 [menu] ; agents.html:1933 [footer] ; assistant.html:18 [menu] ; assistant.html:30 [menu] ; assistant.html:81 [footer] ; ateliers.html:27 [menu] ; ateliers.html:35 [corps] ; ateliers.html:84 [footer] ; audit.html:1238 [menu] ; audit.html:1250 [menu] ; audit.html:1851 [footer] ; cgv.html:259 [menu] ; cgv.html:269 [menu] ; cgv.html:528 [footer] ; confidentialite.html:276 [menu] ; confidentialite.html:286 [menu] ; confidentialite.html:498 [footer] ; contact.html:547 [menu] ; contact.html:557 [menu] ; contact.html:775 [footer] ; formation-cpf.html:31 [menu] ; formation-cpf.html:36 [corps] ; formation-cpf.html:74 [footer] ; formations-batiment.html:25 [menu] ; formations-batiment.html:33 [corps] ; formations-batiment.html:70 [footer] ; formations-communication-marketing.html:25 [menu] ; formations-communication-marketing.html:33 [corps] ; formations-communication-marketing.html:70 [footer] ; formations-developpement-commercial.html:25 [menu] ; formations-developpement-commercial.html:33 [corps] ; formations-developpement-commercial.html:70 [footer] ; formations-enter.html:25 [menu] ; formations-enter.html:33 [corps] ; formations-enter.html:70 [footer] ; formations-fafcea.html:31 [menu] ; formations-fafcea.html:36 [corps] ; formations-fafcea.html:75 [footer] ; formations-finance-assurance.html:25 [menu] ; formations-finance-assurance.html:33 [corps] ; formations-finance-assurance.html:70 [footer] ; formations-formation.html:25 [menu] ; formations-formation.html:33 [corps] ; formations-formation.html:70 [footer] ; formations-immobilier.html:25 [menu] ; formations-immobilier.html:33 [corps] ; formations-immobilier.html:70 [footer] ; formations-pilotage-organisation.html:25 [menu] ; formations-pilotage-organisation.html:33 [corps] ; formations-pilotage-organisation.html:70 [footer] ; formations-services-entreprises.html:25 [menu] ; formations-services-entreprises.html:33 [corps] ; formations-services-entreprises.html:70 [footer] ; ia-et-moi.html:1127 [menu] ; ia-et-moi.html:1139 [menu] ; ia-et-moi.html:1609 [footer] ; index (1).html:1242 [menu] ; index (1).html:1244 [menu] ; index (1).html:1266 [menu] ; index (1).html:1267 [menu] ; index (1).html:1876 [footer] ; index.html:1124 [menu] ; index.html:1136 [menu] ; index.html:1175 [corps] ; index.html:1192 [corps] ; index.html:1205 [corps] ; index.html:1294 [corps] ; index.html:1481 [footer] ; mentions-legales.html:292 [menu] ; mentions-legales.html:302 [menu] ; mentions-legales.html:429 [footer] ; outils.html:1378 [menu] ; outils.html:1390 [menu] ; outils.html:2213 [footer] ; radar-ia.html:417 [menu] ; radar-ia.html:427 [menu] ; radar-ia.html:1372 [footer] ; secteur-assurance.html:1130 [menu] ; secteur-assurance.html:1142 [menu] ; secteur-assurance.html:1312 [corps] ; secteur-assurance.html:1399 [footer] ; secteur-btp.html:1130 [menu] ; secteur-btp.html:1142 [menu] ; secteur-btp.html:1312 [corps] ; secteur-btp.html:1399 [footer] ; secteur-communication.html:1130 [menu] ; secteur-communication.html:1142 [menu] ; secteur-communication.html:1312 [corps] ; secteur-communication.html:1399 [footer] ; secteur-finance-comptabilite.html:1130 [menu] ; secteur-finance-comptabilite.html:1142 [menu] ; secteur-finance-comptabilite.html:1312 [corps] ; secteur-finance-comptabilite.html:1399 [footer] ; secteur-immobilier.html:1130 [menu] ; secteur-immobilier.html:1142 [menu] ; secteur-immobilier.html:1312 [corps] ; secteur-immobilier.html:1399 [footer] ; secteur-juridique.html:1130 [menu] ; secteur-juridique.html:1142 [menu] ; secteur-juridique.html:1312 [corps] ; secteur-juridique.html:1399 [footer] ; secteur-professions-liberales.html:1130 [menu] ; secteur-professions-liberales.html:1142 [menu] ; secteur-professions-liberales.html:1312 [corps] ; secteur-professions-liberales.html:1399 [footer] ; secteurs.html:1130 [menu] ; secteurs.html:1142 [menu] ; secteurs.html:1352 [footer] ; panorama-ia/index.html:302 [footer] |

| index (1).html | /index (1) | ANCIEN_FICHIER | Ancienne version / historique | Trame Formations · L'Rénov |  | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@300;400;500;600&amp;display=swap ; assets/global-footer.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/ateliers.html | Non attestée comme route active ; copie de ateliers.html | COPIE | Source actuelle ou copie synchronisée | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js?v=20261014-1 ; assets/shift-formations.js?v=20261014-1 ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css?v=20261014-1 ; assets/global-footer.css ; assets/ateliers-shift.css?v=20261014-1 ; assets/mobile-navigation.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | COPIE | Source actuelle ou copie synchronisée | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/formations-config.js ; assets/formation-cpf.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formation-cpf.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-batiment.html | Non attestée comme route active ; copie de formations-batiment.html | COPIE | Source actuelle ou copie synchronisée | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-communication-marketing.html | Non attestée comme route active ; copie de formations-communication-marketing.html | COPIE | Source actuelle ou copie synchronisée | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-developpement-commercial.html | Non attestée comme route active ; copie de formations-developpement-commercial.html | COPIE | Source actuelle ou copie synchronisée | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-enter.html | Non attestée comme route active ; copie de formations-enter.html | COPIE | Source actuelle ou copie synchronisée | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-fafcea.html | Non attestée comme route active ; copie de formations-fafcea.html | COPIE | Source actuelle ou copie synchronisée | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/fafcea-config.js ; assets/formations-fafcea.js ; assets/shift-formations.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formations-fafcea.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-finance-assurance.html | Non attestée comme route active ; copie de formations-finance-assurance.html | COPIE | Source actuelle ou copie synchronisée | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-formation.html | Non attestée comme route active ; copie de formations-formation.html | COPIE | Source actuelle ou copie synchronisée | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-immobilier.html | Non attestée comme route active ; copie de formations-immobilier.html | COPIE | Source actuelle ou copie synchronisée | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Non attestée comme route active ; copie de formations-pilotage-organisation.html | COPIE | Source actuelle ou copie synchronisée | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations-services-entreprises.html | Non attestée comme route active ; copie de formations-services-entreprises.html | COPIE | Source actuelle ou copie synchronisée | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _DEPLOIEMENT_PROD/formations.html | Non attestée comme route active ; copie de formations.html | COPIE | Source actuelle ou copie synchronisée | Formations · L’Rénov IA Studio | assets/formations-config.js ; assets/formations-calendar.js ; assets/formations-overview.js ; assets/hubs-compacts.js ; assets/mobile-app.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers pratiques · CTRL · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-batiment.html | Non attestée comme route active ; copie de formations-batiment.html | SAUVEGARDE | Ancienne version / historique | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-communication-marketing.html | Non attestée comme route active ; copie de formations-communication-marketing.html | SAUVEGARDE | Ancienne version / historique | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html | Non attestée comme route active ; copie de formations-developpement-commercial.html | SAUVEGARDE | Ancienne version / historique | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-enter.html | Non attestée comme route active ; copie de formations-enter.html | SAUVEGARDE | Ancienne version / historique | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-finance-assurance.html | Non attestée comme route active ; copie de formations-finance-assurance.html | SAUVEGARDE | Ancienne version / historique | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-formation.html | Non attestée comme route active ; copie de formations-formation.html | SAUVEGARDE | Ancienne version / historique | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-immobilier.html | Non attestée comme route active ; copie de formations-immobilier.html | SAUVEGARDE | Ancienne version / historique | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html | Non attestée comme route active ; copie de formations-pilotage-organisation.html | SAUVEGARDE | Ancienne version / historique | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations-services-entreprises.html | Non attestée comme route active ; copie de formations-services-entreprises.html | SAUVEGARDE | Ancienne version / historique | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/formations.html | Non attestée comme route active ; copie de formations.html | SAUVEGARDE | Ancienne version / historique | Formations · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/formations-overview.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/cartes-ateliers-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/categories-cmd-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/categories-cmd-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/fafcea-programmes-2026-10-09/formations-fafcea.html | Non attestée comme route active ; copie de formations-fafcea.html | SAUVEGARDE | Ancienne version / historique | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/fiches-shift-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/fiches-shift-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/formations-config.js ; assets/formation-cpf.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html | Non attestée comme route active ; copie de formations-fafcea.html | SAUVEGARDE | Ancienne version / historique | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/fafcea-config.js ; assets/formations-fafcea.js ; assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formations-fafcea.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-batiment.html | Non attestée comme route active ; copie de formations-batiment.html | SAUVEGARDE | Ancienne version / historique | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-communication-marketing.html | Non attestée comme route active ; copie de formations-communication-marketing.html | SAUVEGARDE | Ancienne version / historique | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-developpement-commercial.html | Non attestée comme route active ; copie de formations-developpement-commercial.html | SAUVEGARDE | Ancienne version / historique | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-enter.html | Non attestée comme route active ; copie de formations-enter.html | SAUVEGARDE | Ancienne version / historique | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-finance-assurance.html | Non attestée comme route active ; copie de formations-finance-assurance.html | SAUVEGARDE | Ancienne version / historique | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-formation.html | Non attestée comme route active ; copie de formations-formation.html | SAUVEGARDE | Ancienne version / historique | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-immobilier.html | Non attestée comme route active ; copie de formations-immobilier.html | SAUVEGARDE | Ancienne version / historique | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html | Non attestée comme route active ; copie de formations-pilotage-organisation.html | SAUVEGARDE | Ancienne version / historique | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations-services-entreprises.html | Non attestée comme route active ; copie de formations-services-entreprises.html | SAUVEGARDE | Ancienne version / historique | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/formations.html | Non attestée comme route active ; copie de formations.html | SAUVEGARDE | Ancienne version / historique | Formations · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/formations-overview.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers pratiques · CTRL · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | Non attestée comme route active ; copie de formations-batiment.html | SAUVEGARDE | Ancienne version / historique | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | Non attestée comme route active ; copie de formations-communication-marketing.html | SAUVEGARDE | Ancienne version / historique | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | Non attestée comme route active ; copie de formations-developpement-commercial.html | SAUVEGARDE | Ancienne version / historique | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | Non attestée comme route active ; copie de formations-enter.html | SAUVEGARDE | Ancienne version / historique | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | Non attestée comme route active ; copie de formations-finance-assurance.html | SAUVEGARDE | Ancienne version / historique | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | Non attestée comme route active ; copie de formations-formation.html | SAUVEGARDE | Ancienne version / historique | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | Non attestée comme route active ; copie de formations-immobilier.html | SAUVEGARDE | Ancienne version / historique | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Non attestée comme route active ; copie de formations-pilotage-organisation.html | SAUVEGARDE | Ancienne version / historique | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | Non attestée comme route active ; copie de formations-services-entreprises.html | SAUVEGARDE | Ancienne version / historique | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html | Non attestée comme route active ; copie de formations.html | SAUVEGARDE | Ancienne version / historique | Formations · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/formations-overview.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | Non attestée comme route active ; copie de formations-fafcea.html | SAUVEGARDE | Ancienne version / historique | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/formations-config.js ; assets/formation-cpf.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | Non attestée comme route active ; copie de formations-fafcea.html | SAUVEGARDE | Ancienne version / historique | Parcours individualisés FAFCEA · L’Rénov IA Studio | assets/fafcea-config.js ; assets/formations-fafcea.js ; assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/formations-fafcea.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | Non attestée comme route active ; copie de ateliers.html | SAUVEGARDE | Ancienne version / historique | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | Non attestée comme route active ; copie de formation-cpf.html | SAUVEGARDE | Ancienne version / historique | Parcours CPF certifiant · L’Rénov IA Studio | assets/shift-formations.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | Non attestée comme route active ; copie de formations-batiment.html | SAUVEGARDE | Ancienne version / historique | CMD · Bâtiment · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | Non attestée comme route active ; copie de formations-communication-marketing.html | SAUVEGARDE | Ancienne version / historique | CMD · Communication &amp; marketing · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | Non attestée comme route active ; copie de formations-developpement-commercial.html | SAUVEGARDE | Ancienne version / historique | CMD · Développement commercial &amp; vente · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | Non attestée comme route active ; copie de formations-enter.html | SAUVEGARDE | Ancienne version / historique | Parcours longs · ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | Non attestée comme route active ; copie de formations-finance-assurance.html | SAUVEGARDE | Ancienne version / historique | CMD · Finance &amp; assurance · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | Non attestée comme route active ; copie de formations-formation.html | SAUVEGARDE | Ancienne version / historique | CMD · Formation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | Non attestée comme route active ; copie de formations-immobilier.html | SAUVEGARDE | Ancienne version / historique | CMD · Immobilier · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | Non attestée comme route active ; copie de formations-pilotage-organisation.html | SAUVEGARDE | Ancienne version / historique | CMD · Pilotage &amp; organisation · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | Non attestée comme route active ; copie de formations-services-entreprises.html | SAUVEGARDE | Ancienne version / historique | CMD · Services aux entreprises · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css | Aucun lien entrant attesté |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html | Non attestée comme route active ; copie de formations.html | SAUVEGARDE | Ancienne version / historique | Formations · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/formations-overview.js ; assets/hubs-compacts.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css | Aucun lien entrant attesté |



## 4. Inventaire exact des chaînes dans tout le dépôt, avant correction

Recherche littérale sensible à la casse ; fichiers HTML/JS/CSS, textes, documents, templates et données. Sauvegardes ignorées par Git incluses. Le dossier de preuves créé pendant cette intervention est exclu de cette mesure initiale pour ne pas compter ses propres citations ; le rapport historique existant est conservé comme ARCHIVE documentaire. ACTIF_SOURCE indique une source de site, sans prétendre qu’une ancienne copie est réellement publiée. ACTIF_PRODUCTION est réservé aux réponses HTTP identifiées dans la section 1/6.

### « Échanger sur cette formation »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| _backups/cartes-ateliers-2026-10-09/_DEPLOIEMENT_PROD/assets/shift-formations.js | SAUVEGARDE | 1 | 59 |

| _backups/cartes-ateliers-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 59 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/assets/shift-formations.js | SAUVEGARDE | 1 | 60 |

| _backups/catalogue-shift-final-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 60 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/assets/shift-formations.js | SAUVEGARDE | 1 | 60 |

| _backups/catalogue-shift-final-application-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 60 |

| _backups/categories-cmd-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 59 |

| _backups/fiches-shift-2026-10-09/_DEPLOIEMENT_PROD/assets/shift-formations.js | SAUVEGARDE | 1 | 59 |

| _backups/fiches-shift-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 59 |

| _backups/navigation-formations-2026-10-09/assets/shift-formations.js | SAUVEGARDE | 1 | 60 |

| _DEPLOIEMENT_PROD/assets/shift-formations.js | COPIE | 1 | 80 |

| assets/shift-formations.js | ACTIF_SOURCE | 1 | 80 |



### « Je réserve »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| _DEPLOIEMENT_PROD/assets/shift-formations.js | COPIE | 1 | 18 |

| assets/shift-formations.js | ACTIF_SOURCE | 1 | 18 |

| validation/correction-ateliers-2026-10-13/controle.cjs | ARCHIVE | 1 | 43 |



### « Ateliers SHIFT »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| 00_PILOTAGE/04_AUDIT_PAGES_HISTORIQUES.md | ARCHIVE | 10 | 33, 369, 411, 3815, 3849, 4465, 4469 |

| 404.html | ACTIF_SOURCE | 1 | 198 |

| _backups/accueil-fafcea-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 2 | 1215, 1412 |

| _backups/accueil-fafcea-2026-10-09/index.html | SAUVEGARDE | 2 | 1215, 1412 |

| _backups/ateliers-shift-2026-10-09/404.html | SAUVEGARDE | 2 | 167, 200 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/404.html | SAUVEGARDE | 2 | 167, 200 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 3 | 22, 43, 96 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | SAUVEGARDE | 3 | 263, 282, 543 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | SAUVEGARDE | 3 | 280, 299, 513 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/contact.html | SAUVEGARDE | 3 | 551, 570, 790 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 27, 75 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 4 | 29, 42, 45, 87 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | SAUVEGARDE | 3 | 1131, 1152, 1624 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 4 | 1120, 1141, 1231, 1428 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | SAUVEGARDE | 3 | 296, 315, 444 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | SAUVEGARDE | 3 | 486, 506, 1377 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | SAUVEGARDE | 3 | 1134, 1155, 1367 |

| _backups/ateliers-shift-2026-10-09/agents.html | SAUVEGARDE | 3 | 1236, 1257, 1948 |

| _backups/ateliers-shift-2026-10-09/assistant.html | SAUVEGARDE | 3 | 22, 43, 96 |

| _backups/ateliers-shift-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/audit.html | SAUVEGARDE | 3 | 1242, 1263, 1866 |

| _backups/ateliers-shift-2026-10-09/cgv.html | SAUVEGARDE | 3 | 263, 282, 543 |

| _backups/ateliers-shift-2026-10-09/confidentialite.html | SAUVEGARDE | 3 | 280, 299, 513 |

| _backups/ateliers-shift-2026-10-09/contact.html | SAUVEGARDE | 3 | 551, 570, 790 |

| _backups/ateliers-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 27, 75 |

| _backups/ateliers-shift-2026-10-09/formations-batiment.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-enter.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-formation.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-immobilier.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 2 | 25, 73 |

| _backups/ateliers-shift-2026-10-09/formations.html | SAUVEGARDE | 4 | 29, 42, 45, 87 |

| _backups/ateliers-shift-2026-10-09/ia-et-moi.html | SAUVEGARDE | 3 | 1131, 1152, 1624 |

| _backups/ateliers-shift-2026-10-09/index.html | SAUVEGARDE | 4 | 1120, 1141, 1231, 1428 |

| _backups/ateliers-shift-2026-10-09/mentions-legales.html | SAUVEGARDE | 3 | 296, 315, 444 |

| _backups/ateliers-shift-2026-10-09/outils.html | SAUVEGARDE | 3 | 1382, 1403, 2228 |

| _backups/ateliers-shift-2026-10-09/radar-ia.html | SAUVEGARDE | 3 | 486, 506, 1377 |

| _backups/ateliers-shift-2026-10-09/secteur-assurance.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-btp.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-communication.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-immobilier.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-juridique.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1134, 1155, 1414 |

| _backups/ateliers-shift-2026-10-09/secteurs.html | SAUVEGARDE | 3 | 1134, 1155, 1367 |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | SAUVEGARDE | 6 | 6, 7, 24, 34, 35, 83 |

| _backups/cartes-ateliers-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 25, 72 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 5 | 6, 7, 33, 34, 82 |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | SAUVEGARDE | 5 | 6, 7, 33, 34, 82 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 5 | 6, 7, 33, 34, 82 |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | SAUVEGARDE | 5 | 6, 7, 33, 34, 82 |

| _backups/categories-cmd-2026-10-09/ateliers.html | SAUVEGARDE | 6 | 6, 7, 24, 34, 35, 83 |

| _backups/categories-cmd-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 25, 72 |

| _backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 1 | 62 |

| _backups/fafcea-programmes-2026-10-09/formations-fafcea.html | SAUVEGARDE | 1 | 62 |

| _backups/fiches-shift-2026-10-09/ateliers.html | SAUVEGARDE | 6 | 6, 7, 24, 34, 35, 83 |

| _backups/fiches-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 25, 72 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 1 | 73 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 1 | 72 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html | SAUVEGARDE | 1 | 73 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html | SAUVEGARDE | 1 | 72 |

| _backups/navigation-formations-2026-10-09/404.html | SAUVEGARDE | 2 | 167, 201 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/404.html | SAUVEGARDE | 2 | 167, 201 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 3 | 16, 29, 82 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 6 | 6, 7, 24, 34, 35, 83 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | SAUVEGARDE | 3 | 257, 268, 529 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | SAUVEGARDE | 3 | 274, 285, 499 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/contact.html | SAUVEGARDE | 3 | 545, 556, 776 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 25, 72 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 4 | 27, 39, 42, 84 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | SAUVEGARDE | 3 | 1125, 1138, 1610 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 4 | 1114, 1127, 1217, 1414 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | SAUVEGARDE | 3 | 290, 301, 430 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | SAUVEGARDE | 3 | 480, 492, 1363 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | SAUVEGARDE | 3 | 1128, 1141, 1353 |

| _backups/navigation-formations-2026-10-09/agents.html | SAUVEGARDE | 3 | 1230, 1243, 1934 |

| _backups/navigation-formations-2026-10-09/assistant.html | SAUVEGARDE | 3 | 16, 29, 82 |

| _backups/navigation-formations-2026-10-09/ateliers.html | SAUVEGARDE | 6 | 6, 7, 24, 34, 35, 83 |

| _backups/navigation-formations-2026-10-09/audit.html | SAUVEGARDE | 3 | 1236, 1249, 1852 |

| _backups/navigation-formations-2026-10-09/cgv.html | SAUVEGARDE | 3 | 257, 268, 529 |

| _backups/navigation-formations-2026-10-09/confidentialite.html | SAUVEGARDE | 3 | 274, 285, 499 |

| _backups/navigation-formations-2026-10-09/contact.html | SAUVEGARDE | 3 | 545, 556, 776 |

| _backups/navigation-formations-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 25, 72 |

| _backups/navigation-formations-2026-10-09/formations-batiment.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-enter.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-formation.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-immobilier.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 2 | 23, 70 |

| _backups/navigation-formations-2026-10-09/formations.html | SAUVEGARDE | 4 | 27, 39, 42, 84 |

| _backups/navigation-formations-2026-10-09/ia-et-moi.html | SAUVEGARDE | 3 | 1125, 1138, 1610 |

| _backups/navigation-formations-2026-10-09/index.html | SAUVEGARDE | 4 | 1114, 1127, 1217, 1414 |

| _backups/navigation-formations-2026-10-09/mentions-legales.html | SAUVEGARDE | 3 | 290, 301, 430 |

| _backups/navigation-formations-2026-10-09/outils.html | SAUVEGARDE | 3 | 1376, 1389, 2214 |

| _backups/navigation-formations-2026-10-09/radar-ia.html | SAUVEGARDE | 3 | 480, 492, 1363 |

| _backups/navigation-formations-2026-10-09/secteur-assurance.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-btp.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-communication.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-immobilier.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-juridique.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1128, 1141, 1400 |

| _backups/navigation-formations-2026-10-09/secteurs.html | SAUVEGARDE | 3 | 1128, 1141, 1353 |

| _DEPLOIEMENT_PROD/404.html | COPIE | 1 | 198 |

| _DEPLOIEMENT_PROD/agents.html | COPIE | 1 | 1934 |

| _DEPLOIEMENT_PROD/assistant.html | COPIE | 1 | 82 |

| _DEPLOIEMENT_PROD/ateliers.html | COPIE | 5 | 6, 7, 36, 37, 85 |

| _DEPLOIEMENT_PROD/audit.html | COPIE | 1 | 1852 |

| _DEPLOIEMENT_PROD/cgv.html | COPIE | 1 | 529 |

| _DEPLOIEMENT_PROD/confidentialite.html | COPIE | 1 | 499 |

| _DEPLOIEMENT_PROD/contact.html | COPIE | 1 | 776 |

| _DEPLOIEMENT_PROD/formation-cpf.html | COPIE | 1 | 75 |

| _DEPLOIEMENT_PROD/formations-batiment.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-communication-marketing.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-developpement-commercial.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-enter.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-fafcea.html | COPIE | 1 | 76 |

| _DEPLOIEMENT_PROD/formations-finance-assurance.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-formation.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-immobilier.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-pilotage-organisation.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations-services-entreprises.html | COPIE | 1 | 71 |

| _DEPLOIEMENT_PROD/formations.html | COPIE | 3 | 42, 45, 88 |

| _DEPLOIEMENT_PROD/ia-et-moi.html | COPIE | 1 | 1610 |

| _DEPLOIEMENT_PROD/index.html | COPIE | 3 | 1273, 1276, 1482 |

| _DEPLOIEMENT_PROD/mentions-legales.html | COPIE | 1 | 430 |

| _DEPLOIEMENT_PROD/outils.html | COPIE | 1 | 2214 |

| _DEPLOIEMENT_PROD/panorama-ia/index.html | COPIE | 1 | 303 |

| _DEPLOIEMENT_PROD/radar-ia.html | COPIE | 1 | 1373 |

| _DEPLOIEMENT_PROD/secteur-assurance.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-btp.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-communication.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-immobilier.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-juridique.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteur-professions-liberales.html | COPIE | 1 | 1400 |

| _DEPLOIEMENT_PROD/secteurs.html | COPIE | 1 | 1353 |

| agents.html | ACTIF_SOURCE | 1 | 1934 |

| assistant.html | ACTIF_SOURCE | 1 | 82 |

| ateliers.html | ACTIF_SOURCE | 5 | 6, 7, 36, 37, 85 |

| audit.html | ACTIF_SOURCE | 1 | 1852 |

| cgv.html | ACTIF_SOURCE | 1 | 529 |

| confidentialite.html | ACTIF_SOURCE | 1 | 499 |

| contact.html | ACTIF_SOURCE | 1 | 776 |

| formation-cpf.html | ACTIF_SOURCE | 1 | 75 |

| formations-batiment.html | ACTIF_SOURCE | 1 | 71 |

| formations-communication-marketing.html | ACTIF_SOURCE | 1 | 71 |

| formations-developpement-commercial.html | ACTIF_SOURCE | 1 | 71 |

| formations-enter.html | ACTIF_SOURCE | 1 | 71 |

| formations-fafcea.html | ACTIF_SOURCE | 1 | 76 |

| formations-finance-assurance.html | ACTIF_SOURCE | 1 | 71 |

| formations-formation.html | ACTIF_SOURCE | 1 | 71 |

| formations-immobilier.html | ACTIF_SOURCE | 1 | 71 |

| formations-pilotage-organisation.html | ACTIF_SOURCE | 1 | 71 |

| formations-services-entreprises.html | ACTIF_SOURCE | 1 | 71 |

| formations.html | ACTIF_SOURCE | 3 | 42, 45, 88 |

| ia-et-moi.html | ACTIF_SOURCE | 1 | 1610 |

| index (1).html | ANCIEN_FICHIER | 3 | 1247, 1268, 1877 |

| index.html | ACTIF_SOURCE | 3 | 1273, 1276, 1482 |

| mentions-legales.html | ACTIF_SOURCE | 1 | 430 |

| outils.html | ACTIF_SOURCE | 1 | 2214 |

| panorama-ia/index.html | ACTIF_SOURCE | 1 | 303 |

| radar-ia.html | ACTIF_SOURCE | 1 | 1373 |

| secteur-assurance.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-btp.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-communication.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-finance-comptabilite.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-immobilier.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-juridique.html | ACTIF_SOURCE | 1 | 1400 |

| secteur-professions-liberales.html | ACTIF_SOURCE | 1 | 1400 |

| secteurs.html | ACTIF_SOURCE | 1 | 1353 |

| validation/accueil-fafcea-2026-10-09/controle.cjs | ARCHIVE | 1 | 5 |

| validation/accueil-fafcea-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 3 |

| validation/accueil-fafcea-2026-10-09/modifier.cjs | ARCHIVE | 2 | 7, 10 |

| validation/ateliers-shift-2026-10-09/controle.cjs | ARCHIVE | 1 | 9 |

| validation/ateliers-shift-2026-10-09/livraison.cjs | ARCHIVE | 3 | 3 |

| validation/ateliers-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 3 | 1, 5, 7 |

| validation/ateliers-shift-2026-10-09/modifier.cjs | ARCHIVE | 7 | 5, 6, 9, 14, 15, 27 |

| validation/cartes-ateliers-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 1 |

| validation/catalogue-shift-final-2026-10-09/correspondance.cjs | ARCHIVE | 1 | 87 |

| validation/catalogue-shift-final-2026-10-09/CORRESPONDANCE_A_VALIDER.md | ARCHIVE | 1 | 95 |

| validation/deploiement/controle.cjs | ARCHIVE | 3 | 7, 11 |

| validation/navigation-formations-2026-10-09/controle.cjs | ARCHIVE | 1 | 16 |

| validation/navigation-formations-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 13 |

| validation/navigation-formations-2026-10-09/modifier.cjs | ARCHIVE | 2 | 6 |

| validation/navigation-formations-2026-10-09/rapport.cjs | ARCHIVE | 1 | 17 |



### « shift-formations »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| 00_PILOTAGE/04_AUDIT_PAGES_HISTORIQUES.md | ARCHIVE | 2 | 1049, 1857 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 1 | 2 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 1 | 10 |

| _backups/ateliers-shift-2026-10-09/assistant.html | SAUVEGARDE | 1 | 2 |

| _backups/ateliers-shift-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/ateliers-shift-2026-10-09/formations-batiment.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-enter.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-formation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-immobilier.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/ateliers-shift-2026-10-09/formations.html | SAUVEGARDE | 1 | 10 |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/cartes-ateliers-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/categories-cmd-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/categories-cmd-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/fafcea-programmes-2026-10-09/formations-fafcea.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/fiches-shift-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/fiches-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 2 | 10, 16 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html | SAUVEGARDE | 2 | 10, 16 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 1 | 2 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 1 | 10 |

| _backups/navigation-formations-2026-10-09/assistant.html | SAUVEGARDE | 1 | 2 |

| _backups/navigation-formations-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 10, 13 |

| _backups/navigation-formations-2026-10-09/formations-batiment.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-enter.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-formation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-immobilier.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 2 | 10, 12 |

| _backups/navigation-formations-2026-10-09/formations.html | SAUVEGARDE | 1 | 10 |

| _DEPLOIEMENT_PROD/assistant.html | COPIE | 1 | 2 |

| _DEPLOIEMENT_PROD/ateliers.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formation-cpf.html | COPIE | 2 | 10, 14 |

| _DEPLOIEMENT_PROD/formations-batiment.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-communication-marketing.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-developpement-commercial.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-enter.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-fafcea.html | COPIE | 2 | 10, 16 |

| _DEPLOIEMENT_PROD/formations-finance-assurance.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-formation.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-immobilier.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-pilotage-organisation.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations-services-entreprises.html | COPIE | 2 | 10, 12 |

| _DEPLOIEMENT_PROD/formations.html | COPIE | 1 | 10 |

| assistant.html | ACTIF_SOURCE | 1 | 2 |

| ateliers.html | ACTIF_SOURCE | 2 | 10, 12 |

| formation-cpf.html | ACTIF_SOURCE | 2 | 10, 14 |

| formations-batiment.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-communication-marketing.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-developpement-commercial.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-enter.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-fafcea.html | ACTIF_SOURCE | 2 | 10, 16 |

| formations-finance-assurance.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-formation.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-immobilier.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-pilotage-organisation.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations-services-entreprises.html | ACTIF_SOURCE | 2 | 10, 12 |

| formations.html | ACTIF_SOURCE | 1 | 10 |

| validation/accueil-fafcea-2026-10-09/avant.json | ARCHIVE | 4 | 1 |

| validation/ateliers-shift-2026-10-09/controle.cjs | ARCHIVE | 1 | 5 |

| validation/ateliers-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 52, 87 |

| validation/ateliers-shift-2026-10-09/modifications.json | ARCHIVE | 2 | 38, 70 |

| validation/ateliers-shift-2026-10-09/modifier.cjs | ARCHIVE | 2 | 25 |

| validation/cartes-ateliers-2026-10-09/controle.cjs | ARCHIVE | 3 | 3 |

| validation/cartes-ateliers-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 8, 10 |

| validation/catalogue-shift-final-2026-10-09/appliquer.cjs | ARCHIVE | 3 | 1, 11 |

| validation/catalogue-shift-final-2026-10-09/avant-application.json | ARCHIVE | 4 | 1 |

| validation/catalogue-shift-final-2026-10-09/controle-final.cjs | ARCHIVE | 1 | 2 |

| validation/catalogue-shift-final-2026-10-09/correspondance.cjs | ARCHIVE | 2 | 93, 102 |

| validation/catalogue-shift-final-2026-10-09/CORRESPONDANCE_A_VALIDER.md | ARCHIVE | 1 | 101 |

| validation/categories-cmd-2026-10-09/controle.cjs | ARCHIVE | 1 | 1 |

| validation/categories-cmd-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 10 |

| validation/deploiement/A_DEPLOYER.txt | ARCHIVE | 2 | 18, 19 |

| validation/deploiement/A_EXCLURE.txt | ARCHIVE | 13 | 5, 37, 69, 72, 77, 81, 85, 89, 94, 100, 103, 157, 336 |

| validation/deploiement/audit.json | ARCHIVE | 4 | 1345, 1390, 1391, 1453 |

| validation/fafcea-programmes-2026-10-09/avant.json | ARCHIVE | 4 | 18, 19, 94, 95 |

| validation/fafcea-programmes-2026-10-09/modifier.cjs | ARCHIVE | 2 | 32 |

| validation/fiches-shift-2026-10-09/controle.cjs | ARCHIVE | 4 | 2, 4 |

| validation/fiches-shift-2026-10-09/livraison.cjs | ARCHIVE | 2 | 5 |

| validation/fiches-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 8, 10 |

| validation/finalisation-fafcea-cpf-2026-10-09/avant.json | ARCHIVE | 4 | 1 |

| validation/finalisation-fafcea-cpf-2026-10-09/modifier.cjs | ARCHIVE | 2 | 22 |

| validation/navigation-formations-2026-10-09/controle.cjs | ARCHIVE | 1 | 6 |

| validation/navigation-formations-2026-10-09/modifier.cjs | ARCHIVE | 3 | 4, 13 |

| validation/SHIFT-livraison.md | ARCHIVE | 5 | 25, 29, 34, 35, 45 |



### « ateliers-shift »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| 00_PILOTAGE/04_AUDIT_PAGES_HISTORIQUES.md | ARCHIVE | 781 | 1923, 1925, 1927, 1929, 1931, 1933, 1935, 1937, 1939, 1941, 1943, 1945, 1947, 1949, 1951, 1953, 1955, 1957, 1959, 1961, 1963, 1965, 1967, 1969, 1971, 1973, 1975, 1977, 1979, 1981, 1983, 1985, 1987, 1989, 1991, 1993, 1995, 1997, 1999, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017, 2019, 2021, 2023, 2025, 2027, 2029, 2031, 2033, 2035, 2037, 2039, 2041, 2043, 2045, 2047, 2049, 2051, 2053, 2055, 2057, 2059, 2061, 2063, 2065, 2067, 2069, 2071, 2073, 2075, 2077, 2079, 2081, 2083, 2085, 2087, 2089, 2091, 2093, 2095, 2097, 2099, 2101, 2103, 2105, 2107, 2109, 2111, 2113, 2115, 2117, 2119, 2121, 2123, 2125, 2127, 2129, 2131, 2133, 2135, 2137, 2139, 2141, 2143, 2145, 2147, 2149, 2151, 2153, 2155, 2157, 2159, 2161, 2163, 2165, 2167, 2169, 2171, 2173, 2175, 2177, 2179, 2181, 2183, 2185, 2187, 2189, 2191, 2193, 2195, 2197, 2199, 2201, 2203, 2205, 2207, 2209, 2211, 2213, 2215, 2217, 2219, 2221, 2223, 2225, 2227, 2229, 2231, 2233, 2235, 2237, 2239, 2241, 2243, 2245, 2247, 2249, 2251, 2253, 2255, 2257, 2259, 2261, 2263, 2265, 2267, 2269, 2271, 2273, 2275, 2277, 2279, 2281, 2283, 2285, 2287, 2289, 2291, 2293, 2295, 2297, 2299, 2301, 2303, 2305, 2307, 2309, 2311, 2313, 2315, 2317, 2319, 2321, 2323, 2325, 2327, 2329, 2331, 2333, 2335, 2337, 2339, 2341, 2343, 2345, 2347, 2349, 2351, 2353, 2355, 2357, 2359, 2361, 2363, 2365, 2367, 2369, 2371, 2373, 2375, 2377, 2379, 2381, 2383, 2385, 2387, 2389, 2391, 2393, 2395, 2397, 2399, 2401, 2403, 2405, 2407, 2409, 2411, 2413, 2415, 2417, 2419, 2421, 2423, 2425, 2427, 2429, 2431, 2433, 2435, 2437, 2439, 2441, 2443, 2445, 2447, 2449, 2451, 2453, 2455, 2457, 2459, 2461, 2463, 2465, 2467, 2469, 2471, 2473, 2475, 2477, 2479, 2481, 2483, 2485, 2487, 2489, 2491, 2493, 2495, 2497, 2499, 2501, 2503, 2505, 2507, 2509, 2511, 2513, 2515, 2517, 2519, 2521, 2523, 2525, 2527, 2529, 2531, 2533, 2535, 2537, 2539, 2541, 2543, 2545, 2547, 2549, 2551, 2553, 2555, 2557, 2559, 2561, 2563, 2565, 2567, 2569, 2571, 2573, 2575, 2577, 2579, 2581, 2583, 2585, 2587, 2589, 2591, 2593, 2595, 2597, 2599, 2601, 2603, 2605, 2607, 2609, 2611, 2613, 2615, 2617, 2619, 2621, 2623, 2625, 2627, 2629, 2631, 2633, 2635, 2637, 2639, 2641, 2643, 2645, 2647, 2649, 2651, 2653, 2655, 2657, 3951, 3953, 3955, 3957, 3959, 3961, 3963, 3965, 3967, 3969, 3971, 3973, 3975, 3977, 3979, 3981, 3983, 3985, 3987, 3989, 3991, 3993, 3995, 3997, 3999, 4001, 4003, 4005, 4007, 4009, 4011, 4013, 4015, 4017, 4019, 4021, 4023, 4025, 4027, 4029, 4031, 4033, 4035, 4037, 4039, 4041, 4043, 4045, 4047, 4049, 4051, 4053, 4055, 4057, 4059, 4061, 4063, 4065, 4067, 4069, 4071, 4381, 4383, 4385, 4387, 4389, 4391, 4393, 4395, 4397, 4399, 4401, 4403, 4405, 4407, 4409, 4411, 4413, 4415, 4417, 4419, 4421, 4423, 4425, 4427, 4429, 4431, 4433, 4435, 4437, 4439, 4441, 4443, 4445, 4447, 4449, 4451, 4453, 4455, 4457, 4459, 4461, 4463 |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/categories-cmd-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/fiches-shift-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 1 | 14 |

| _backups/navigation-formations-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 14 |

| _DEPLOIEMENT_PROD/ateliers.html | COPIE | 1 | 14 |

| ateliers.html | ACTIF_SOURCE | 1 | 14 |

| validation/accueil-fafcea-2026-10-09/avant.json | ARCHIVE | 2 | 1 |

| validation/ateliers-shift-2026-10-09/livraison.cjs | ARCHIVE | 5 | 1, 3, 4 |

| validation/ateliers-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 5 | 14, 51, 86, 215 |

| validation/ateliers-shift-2026-10-09/modifications.json | ARCHIVE | 3 | 2, 37, 69 |

| validation/ateliers-shift-2026-10-09/modifier.cjs | ARCHIVE | 4 | 2, 9, 24, 27 |

| validation/cartes-ateliers-2026-10-09/controle.cjs | ARCHIVE | 1 | 3 |

| validation/cartes-ateliers-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 7, 9 |

| validation/catalogue-shift-final-2026-10-09/appliquer.cjs | ARCHIVE | 1 | 1 |

| validation/catalogue-shift-final-2026-10-09/avant-application.json | ARCHIVE | 2 | 1 |

| validation/catalogue-shift-final-2026-10-09/controle-final.cjs | ARCHIVE | 3 | 2 |

| validation/catalogue-shift-final-2026-10-09/correspondance.cjs | ARCHIVE | 1 | 102 |

| validation/categories-cmd-2026-10-09/controle.cjs | ARCHIVE | 3 | 1, 3 |

| validation/categories-cmd-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 7, 8 |

| validation/deploiement/A_DEPLOYER.txt | ARCHIVE | 1 | 3 |

| validation/deploiement/A_EXCLURE.txt | ARCHIVE | 87 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 75, 79, 83, 87, 91, 92, 101, 153, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231 |

| validation/fafcea-programmes-2026-10-09/avant.json | ARCHIVE | 2 | 7, 83 |

| validation/fiches-shift-2026-10-09/controle.cjs | ARCHIVE | 1 | 2 |

| validation/fiches-shift-2026-10-09/livraison.cjs | ARCHIVE | 1 | 5 |

| validation/fiches-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 16 |

| validation/finalisation-fafcea-cpf-2026-10-09/avant.json | ARCHIVE | 2 | 1 |

| validation/navigation-formations-2026-10-09/controle.cjs | ARCHIVE | 1 | 6 |

| validation/navigation-formations-2026-10-09/modifier.cjs | ARCHIVE | 1 | 4 |



### « Formations »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| 00_PILOTAGE/04_AUDIT_PAGES_HISTORIQUES.md | ARCHIVE | 23 | 7, 31, 103, 227, 401, 457, 473, 487, 501, 515, 529, 543, 1277, 3813, 3849, 4413, 4509 |

| 404.html | ACTIF_SOURCE | 2 | 167, 197 |

| _backups/accueil-fafcea-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 4 | 9, 1114, 1126, 1411 |

| _backups/accueil-fafcea-2026-10-09/index.html | SAUVEGARDE | 4 | 9, 1114, 1126, 1411 |

| _backups/ateliers-shift-2026-10-09/404.html | SAUVEGARDE | 2 | 167, 199 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/404.html | SAUVEGARDE | 2 | 167, 199 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 3 | 17, 41, 95 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | SAUVEGARDE | 5 | 258, 280, 346, 381, 542 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | SAUVEGARDE | 3 | 275, 297, 512 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/contact.html | SAUVEGARDE | 3 | 546, 568, 789 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 25, 74 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 3 | 6, 27, 86 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | SAUVEGARDE | 3 | 1126, 1150, 1623 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 4 | 9, 1115, 1139, 1427 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | SAUVEGARDE | 3 | 291, 313, 443 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | SAUVEGARDE | 4 | 481, 504, 517, 1376 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | SAUVEGARDE | 5 | 1129, 1153, 1183, 1327, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | SAUVEGARDE | 5 | 1129, 1153, 1183, 1327, 1413 |

| _backups/ateliers-shift-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | SAUVEGARDE | 4 | 1129, 1153, 1184, 1366 |

| _backups/ateliers-shift-2026-10-09/agents.html | SAUVEGARDE | 3 | 1231, 1255, 1947 |

| _backups/ateliers-shift-2026-10-09/assistant.html | SAUVEGARDE | 3 | 17, 41, 95 |

| _backups/ateliers-shift-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/audit.html | SAUVEGARDE | 3 | 1237, 1261, 1865 |

| _backups/ateliers-shift-2026-10-09/cgv.html | SAUVEGARDE | 5 | 258, 280, 346, 381, 542 |

| _backups/ateliers-shift-2026-10-09/confidentialite.html | SAUVEGARDE | 3 | 275, 297, 512 |

| _backups/ateliers-shift-2026-10-09/contact.html | SAUVEGARDE | 3 | 546, 568, 789 |

| _backups/ateliers-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 25, 74 |

| _backups/ateliers-shift-2026-10-09/formations-batiment.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-enter.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-formation.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-immobilier.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 2 | 23, 72 |

| _backups/ateliers-shift-2026-10-09/formations.html | SAUVEGARDE | 3 | 6, 27, 86 |

| _backups/ateliers-shift-2026-10-09/ia-et-moi.html | SAUVEGARDE | 3 | 1126, 1150, 1623 |

| _backups/ateliers-shift-2026-10-09/index.html | SAUVEGARDE | 4 | 9, 1115, 1139, 1427 |

| _backups/ateliers-shift-2026-10-09/mentions-legales.html | SAUVEGARDE | 3 | 291, 313, 443 |

| _backups/ateliers-shift-2026-10-09/outils.html | SAUVEGARDE | 3 | 1377, 1401, 2227 |

| _backups/ateliers-shift-2026-10-09/radar-ia.html | SAUVEGARDE | 4 | 481, 504, 517, 1376 |

| _backups/ateliers-shift-2026-10-09/secteur-assurance.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-btp.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-communication.html | SAUVEGARDE | 5 | 1129, 1153, 1183, 1327, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-finance-comptabilite.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-immobilier.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-juridique.html | SAUVEGARDE | 6 | 1129, 1153, 1183, 1327, 1328, 1413 |

| _backups/ateliers-shift-2026-10-09/secteur-professions-liberales.html | SAUVEGARDE | 5 | 1129, 1153, 1183, 1327, 1413 |

| _backups/ateliers-shift-2026-10-09/secteurs.html | SAUVEGARDE | 4 | 1129, 1153, 1184, 1366 |

| _backups/cartes-ateliers-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 82 |

| _backups/cartes-ateliers-2026-10-09/formation-cpf.html | SAUVEGARDE | 1 | 71 |

| _backups/catalogue-shift-final-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 24, 81 |

| _backups/catalogue-shift-final-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 24, 81 |

| _backups/catalogue-shift-final-application-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 2 | 24, 81 |

| _backups/catalogue-shift-final-application-2026-10-09/ateliers.html | SAUVEGARDE | 2 | 24, 81 |

| _backups/categories-cmd-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 82 |

| _backups/categories-cmd-2026-10-09/formation-cpf.html | SAUVEGARDE | 1 | 71 |

| _backups/fafcea-programmes-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 2 | 25, 61 |

| _backups/fafcea-programmes-2026-10-09/formations-fafcea.html | SAUVEGARDE | 2 | 25, 61 |

| _backups/fiches-shift-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 82 |

| _backups/fiches-shift-2026-10-09/formation-cpf.html | SAUVEGARDE | 1 | 71 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 2 | 27, 72 |

| _backups/finalisation-fafcea-cpf-2026-10-09/_DEPLOIEMENT_PROD/formations-fafcea.html | SAUVEGARDE | 2 | 28, 71 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formation-cpf.html | SAUVEGARDE | 2 | 27, 72 |

| _backups/finalisation-fafcea-cpf-2026-10-09/formations-fafcea.html | SAUVEGARDE | 2 | 28, 71 |

| _backups/index_avant_shift_2026-09-30.html | SAUVEGARDE | 5 | 1933, 1972, 1988, 1998, 2737 |

| _backups/navigation-formations-2026-10-09/404.html | SAUVEGARDE | 1 | 200 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/404.html | SAUVEGARDE | 1 | 200 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/assistant.html | SAUVEGARDE | 1 | 81 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ateliers.html | SAUVEGARDE | 1 | 82 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/cgv.html | SAUVEGARDE | 3 | 332, 367, 528 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/confidentialite.html | SAUVEGARDE | 1 | 498 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/contact.html | SAUVEGARDE | 1 | 775 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formation-cpf.html | SAUVEGARDE | 1 | 71 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-batiment.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-communication-marketing.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-developpement-commercial.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-enter.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-finance-assurance.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-formation.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-immobilier.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-pilotage-organisation.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations-services-entreprises.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/formations.html | SAUVEGARDE | 2 | 6, 83 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/ia-et-moi.html | SAUVEGARDE | 1 | 1609 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/index.html | SAUVEGARDE | 2 | 9, 1413 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/mentions-legales.html | SAUVEGARDE | 1 | 429 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/radar-ia.html | SAUVEGARDE | 2 | 503, 1362 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-assurance.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-btp.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-communication.html | SAUVEGARDE | 3 | 1169, 1313, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-immobilier.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-juridique.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1169, 1313, 1399 |

| _backups/navigation-formations-2026-10-09/_DEPLOIEMENT_PROD/secteurs.html | SAUVEGARDE | 2 | 1170, 1352 |

| _backups/navigation-formations-2026-10-09/agents.html | SAUVEGARDE | 1 | 1933 |

| _backups/navigation-formations-2026-10-09/assistant.html | SAUVEGARDE | 1 | 81 |

| _backups/navigation-formations-2026-10-09/ateliers.html | SAUVEGARDE | 1 | 82 |

| _backups/navigation-formations-2026-10-09/audit.html | SAUVEGARDE | 1 | 1851 |

| _backups/navigation-formations-2026-10-09/cgv.html | SAUVEGARDE | 3 | 332, 367, 528 |

| _backups/navigation-formations-2026-10-09/confidentialite.html | SAUVEGARDE | 1 | 498 |

| _backups/navigation-formations-2026-10-09/contact.html | SAUVEGARDE | 1 | 775 |

| _backups/navigation-formations-2026-10-09/formation-cpf.html | SAUVEGARDE | 1 | 71 |

| _backups/navigation-formations-2026-10-09/formations-batiment.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-communication-marketing.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-developpement-commercial.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-enter.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-finance-assurance.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-formation.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-immobilier.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-pilotage-organisation.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations-services-entreprises.html | SAUVEGARDE | 1 | 69 |

| _backups/navigation-formations-2026-10-09/formations.html | SAUVEGARDE | 2 | 6, 83 |

| _backups/navigation-formations-2026-10-09/ia-et-moi.html | SAUVEGARDE | 1 | 1609 |

| _backups/navigation-formations-2026-10-09/index.html | SAUVEGARDE | 2 | 9, 1413 |

| _backups/navigation-formations-2026-10-09/mentions-legales.html | SAUVEGARDE | 1 | 429 |

| _backups/navigation-formations-2026-10-09/outils.html | SAUVEGARDE | 1 | 2213 |

| _backups/navigation-formations-2026-10-09/radar-ia.html | SAUVEGARDE | 2 | 503, 1362 |

| _backups/navigation-formations-2026-10-09/secteur-assurance.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-btp.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-communication.html | SAUVEGARDE | 3 | 1169, 1313, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-finance-comptabilite.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-immobilier.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-juridique.html | SAUVEGARDE | 4 | 1169, 1313, 1314, 1399 |

| _backups/navigation-formations-2026-10-09/secteur-professions-liberales.html | SAUVEGARDE | 3 | 1169, 1313, 1399 |

| _backups/navigation-formations-2026-10-09/secteurs.html | SAUVEGARDE | 2 | 1170, 1352 |

| _DEPLOIEMENT_PROD/404.html | COPIE | 2 | 167, 197 |

| _DEPLOIEMENT_PROD/agents.html | COPIE | 3 | 1232, 1244, 1933 |

| _DEPLOIEMENT_PROD/assets/mobile-app.js | COPIE | 1 | 12 |

| _DEPLOIEMENT_PROD/assistant.html | COPIE | 3 | 18, 30, 81 |

| _DEPLOIEMENT_PROD/ateliers.html | COPIE | 2 | 27, 84 |

| _DEPLOIEMENT_PROD/audit.html | COPIE | 3 | 1238, 1250, 1851 |

| _DEPLOIEMENT_PROD/cgv.html | COPIE | 5 | 259, 269, 332, 367, 528 |

| _DEPLOIEMENT_PROD/confidentialite.html | COPIE | 3 | 276, 286, 498 |

| _DEPLOIEMENT_PROD/contact.html | COPIE | 3 | 547, 557, 775 |

| _DEPLOIEMENT_PROD/formation-cpf.html | COPIE | 2 | 31, 74 |

| _DEPLOIEMENT_PROD/formations-batiment.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-communication-marketing.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-developpement-commercial.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-enter.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-fafcea.html | COPIE | 4 | 7, 31, 43, 75 |

| _DEPLOIEMENT_PROD/formations-finance-assurance.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-formation.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-immobilier.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-pilotage-organisation.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations-services-entreprises.html | COPIE | 2 | 25, 70 |

| _DEPLOIEMENT_PROD/formations.html | COPIE | 4 | 6, 31, 47, 87 |

| _DEPLOIEMENT_PROD/ia-et-moi.html | COPIE | 3 | 1127, 1139, 1609 |

| _DEPLOIEMENT_PROD/index.html | COPIE | 6 | 9, 1124, 1136, 1205, 1280, 1481 |

| _DEPLOIEMENT_PROD/mentions-legales.html | COPIE | 3 | 292, 302, 429 |

| _DEPLOIEMENT_PROD/outils.html | COPIE | 3 | 1378, 1390, 2213 |

| _DEPLOIEMENT_PROD/panorama-ia/index.html | COPIE | 1 | 302 |

| _DEPLOIEMENT_PROD/radar-ia.html | COPIE | 3 | 417, 427, 1372 |

| _DEPLOIEMENT_PROD/secteur-assurance.html | COPIE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| _DEPLOIEMENT_PROD/secteur-btp.html | COPIE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| _DEPLOIEMENT_PROD/secteur-communication.html | COPIE | 5 | 1130, 1142, 1169, 1313, 1399 |

| _DEPLOIEMENT_PROD/secteur-finance-comptabilite.html | COPIE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| _DEPLOIEMENT_PROD/secteur-immobilier.html | COPIE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| _DEPLOIEMENT_PROD/secteur-juridique.html | COPIE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| _DEPLOIEMENT_PROD/secteur-professions-liberales.html | COPIE | 5 | 1130, 1142, 1169, 1313, 1399 |

| _DEPLOIEMENT_PROD/secteurs.html | COPIE | 4 | 1130, 1142, 1170, 1352 |

| agents.html | ACTIF_SOURCE | 3 | 1232, 1244, 1933 |

| assets/mobile-app.js | ACTIF_SOURCE | 1 | 12 |

| assistant.html | ACTIF_SOURCE | 3 | 18, 30, 81 |

| ateliers.html | ACTIF_SOURCE | 2 | 27, 84 |

| audit.html | ACTIF_SOURCE | 3 | 1238, 1250, 1851 |

| cgv.html | ACTIF_SOURCE | 5 | 259, 269, 332, 367, 528 |

| confidentialite.html | ACTIF_SOURCE | 3 | 276, 286, 498 |

| contact.html | ACTIF_SOURCE | 3 | 547, 557, 775 |

| formation-cpf.html | ACTIF_SOURCE | 2 | 31, 74 |

| formations-batiment.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-communication-marketing.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-developpement-commercial.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-enter.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-fafcea.html | ACTIF_SOURCE | 4 | 7, 31, 43, 75 |

| formations-finance-assurance.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-formation.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-immobilier.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-pilotage-organisation.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations-services-entreprises.html | ACTIF_SOURCE | 2 | 25, 70 |

| formations.html | ACTIF_SOURCE | 4 | 6, 31, 47, 87 |

| ia-et-moi.html | ACTIF_SOURCE | 3 | 1127, 1139, 1609 |

| index (1).html | ANCIEN_FICHIER | 8 | 18, 29, 1242, 1266, 1695, 1773, 1834, 1876 |

| index.html | ACTIF_SOURCE | 6 | 9, 1124, 1136, 1205, 1280, 1481 |

| mentions-legales.html | ACTIF_SOURCE | 3 | 292, 302, 429 |

| outils.html | ACTIF_SOURCE | 3 | 1378, 1390, 2213 |

| panorama-ia/index.html | ACTIF_SOURCE | 1 | 302 |

| radar-ia.html | ACTIF_SOURCE | 3 | 417, 427, 1372 |

| secteur-assurance.html | ACTIF_SOURCE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| secteur-btp.html | ACTIF_SOURCE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| secteur-communication.html | ACTIF_SOURCE | 5 | 1130, 1142, 1169, 1313, 1399 |

| secteur-finance-comptabilite.html | ACTIF_SOURCE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| secteur-immobilier.html | ACTIF_SOURCE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| secteur-juridique.html | ACTIF_SOURCE | 6 | 1130, 1142, 1169, 1313, 1314, 1399 |

| secteur-professions-liberales.html | ACTIF_SOURCE | 5 | 1130, 1142, 1169, 1313, 1399 |

| secteurs.html | ACTIF_SOURCE | 4 | 1130, 1142, 1170, 1352 |

| validation/accueil-fafcea-2026-10-09/controle.cjs | ARCHIVE | 1 | 5 |

| validation/accueil-fafcea-2026-10-09/LIVRAISON.md | ARCHIVE | 3 | 3, 7, 10 |

| validation/accueil-fafcea-2026-10-09/modifier.cjs | ARCHIVE | 1 | 14 |

| validation/ateliers-shift-2026-10-09/livraison.cjs | ARCHIVE | 2 | 3 |

| validation/ateliers-shift-2026-10-09/LIVRAISON.md | ARCHIVE | 2 | 7, 10 |

| validation/ateliers-shift-2026-10-09/modifier.cjs | ARCHIVE | 2 | 6, 7 |

| validation/correction-ateliers-2026-10-13/resultats.json | ARCHIVE | 21 | 10, 16, 22, 28, 34, 40, 46, 315, 321, 327, 333, 339, 345, 351, 480, 486, 492, 498, 504, 510, 516 |

| validation/deploiement/livraison.cjs | ARCHIVE | 1 | 8 |

| validation/deploiement/RAPPORT_AUDIT.md | ARCHIVE | 1 | 59 |

| validation/finalisation-fafcea-cpf-2026-10-09/LIVRAISON.md | ARCHIVE | 1 | 48 |

| validation/finalisation-fafcea-cpf-2026-10-09/livrer.cjs | ARCHIVE | 1 | 44 |

| validation/navigation-formations-2026-10-09/controle.cjs | ARCHIVE | 1 | 16 |

| validation/navigation-formations-2026-10-09/finaliser.cjs | ARCHIVE | 1 | 2 |

| validation/navigation-formations-2026-10-09/LIVRAISON.md | ARCHIVE | 3 | 1, 7 |

| validation/navigation-formations-2026-10-09/modifier.cjs | ARCHIVE | 4 | 6, 7, 10 |

| validation/navigation-formations-2026-10-09/rapport.cjs | ARCHIVE | 3 | 5, 11 |



### « Voir le catalogue »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |

| _backups/index_avant_shift_2026-09-30.html | SAUVEGARDE | 1 | 2443 |



### « Découvrir la formation »

| Fichier exact | Classe | Nombre | Lignes |

| --- | --- | --- | --- |



## 5. Tous les accès internes Formations / SHIFT

| Origine | Élément cliqué | URL cible exacte | Page servie après HTTP | Correct / incorrect |

| --- | --- | --- | --- | --- |

| 404.html:167 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| 404.html:197 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| 404.html:198 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| agents.html:1232 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| agents.html:1244 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| agents.html:1933 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| agents.html:1934 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| assistant.html:18 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| assistant.html:30 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| assistant.html:81 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| assistant.html:82 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ateliers.html:27 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ateliers.html:35 [corps] | ← Vue d’ensemble des formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ateliers.html:84 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ateliers.html:85 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| audit.html:1238 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| audit.html:1250 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| audit.html:1851 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| audit.html:1852 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| cgv.html:259 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| cgv.html:269 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| cgv.html:528 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| cgv.html:529 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| confidentialite.html:276 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| confidentialite.html:286 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| confidentialite.html:498 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| confidentialite.html:499 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| contact.html:547 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| contact.html:557 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| contact.html:775 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| contact.html:776 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formation-cpf.html:31 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formation-cpf.html:36 [corps] | ← Retour aux formations | formations.html#cpf | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formation-cpf.html:74 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formation-cpf.html:75 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-batiment.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-batiment.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-batiment.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-batiment.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-communication-marketing.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-communication-marketing.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-communication-marketing.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-communication-marketing.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-developpement-commercial.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-developpement-commercial.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-developpement-commercial.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-developpement-commercial.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-enter.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-enter.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-enter.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-enter.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-fafcea.html:31 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-fafcea.html:36 [corps] | ← Vue d’ensemble des formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-fafcea.html:75 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-fafcea.html:76 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-finance-assurance.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-finance-assurance.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-finance-assurance.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-finance-assurance.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-formation.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-formation.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-formation.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-formation.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-immobilier.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-immobilier.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-immobilier.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-immobilier.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-pilotage-organisation.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-pilotage-organisation.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-pilotage-organisation.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-pilotage-organisation.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-services-entreprises.html:25 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-services-entreprises.html:33 [corps] | ← Toutes les formations SHIFT | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-services-entreprises.html:70 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations-services-entreprises.html:71 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations.html:31 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations.html:45 [corps] | Découvrir les Ateliers SHIFT | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations.html:87 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| formations.html:88 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ia-et-moi.html:1127 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ia-et-moi.html:1139 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ia-et-moi.html:1609 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| ia-et-moi.html:1610 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1124 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1136 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1175 [corps] | Découvrir les formations → | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1192 [corps] | FormerRendre l’équipe autonome et monter en compétences. | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1205 [corps] | FormationsSHIFT · FAFCEA · CPF↗ | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1276 [corps] | Découvrir les Ateliers SHIFT | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1294 [corps] | Voir toutes les formations → | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1481 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| index.html:1482 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| mentions-legales.html:292 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| mentions-legales.html:302 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| mentions-legales.html:429 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| mentions-legales.html:430 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| outils.html:1378 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| outils.html:1390 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| outils.html:2213 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| outils.html:2214 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| radar-ia.html:417 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| radar-ia.html:427 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| radar-ia.html:1372 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| radar-ia.html:1373 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1304 [corps] | Ateliers Co-construction sur un cas (recueil de besoins, qualification sinistre). 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1312 [corps] | Formations Formations IA pour le métier assurance. OPCO Atlas mobilisable via Labacademy. Parcours certifiants disponibles. Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-assurance.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1304 [corps] | Ateliers Co-construction sur un cas concret (devis-type, mail-type, suivi chantier). Demi-journée à 1 mois. 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1312 [corps] | Formations Formations IA pour artisans / dirigeants BTP, finançables via OPCO (Labacademy) ou CPF (CréActifs/Labacademy). Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-btp.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1304 [corps] | Ateliers Atelier de capture de voix éditoriale, puis configuration de l'outil. 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1312 [corps] | Formations Formation IA pour communicants, finançable OPCO (Labacademy) ou CPF (CréActifs). Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-communication.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1304 [corps] | Ateliers Co-construction avec l'équipe du cabinet : outil de qualification, modèles de comptes-rendus. 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1312 [corps] | Formations Formations IA spécifiques au métier comptable / CGP, finançables OPCO (Labacademy) ou paiement direct. Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-finance-comptabilite.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1304 [corps] | Ateliers Co-construction avec l'équipe agence : configurer un outil de qualification en demi-journée, journée ou parcours étalé sur 1 mois. 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1312 [corps] | Formations Formations ALUR finançables. Cadrage avec AVA Formation (organisme Qualiopi spécialisé immobilier) pour l'obligation de formation continue. Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-immobilier.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1304 [corps] | Ateliers Co-construction sur un cas concret (pré-acte type, courrier type). 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1312 [corps] | Formations Formations IA pour le métier juridique. Paiement direct ou financement OPCO via Labacademy. Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-juridique.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1304 [corps] | Ateliers Atelier individuel ou avec un associé pour configurer ensemble. 390-890 €. Découvrir | ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1312 [corps] | Formations Formation IA pour libéraux, CPF mobilisable via CréActifs/Labacademy, ou paiement direct. Découvrir | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1399 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteur-professions-liberales.html:1400 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteurs.html:1130 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteurs.html:1142 [menu] | Formations | formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteurs.html:1352 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| secteurs.html:1353 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| panorama-ia/index.html:302 [footer] | Formations | /formations.html | /formations | CORRECT pour le routage ; ancien affichage si asset cache obsolète |

| panorama-ia/index.html:303 [footer] | Ateliers SHIFT | /ateliers.html | /ateliers | CORRECT pour le routage ; ancien affichage si asset cache obsolète |



**Scripts mobile-app.js** : navigation basse Formations → index de site + formations.html ; raccourci accueil SHIFT → ateliers.html ; raccourcis de familles → ateliers.html#ctrl/#cmd/#enter. Les liens desktop et mobile du menu supérieur ciblent tous deux formations.html. Aucune URL mobile divergente trouvée. Les cartes sont des boutons qui appellent openFormation sur la même page, sans changer l’URL ; le CTA est créé dans la modale. Dans la version récente, CTRL/CMD = « Je réserve », ENTER = « Je pré-réserve ma place », vers l’URL Billetweb existante https://www.billetweb.fr/pro/lrenov-ia-studio. Ces libellés et cette URL n’ont pas été modifiés.

## 6. Contrôle HTTP réel des URL publiques

| URL appelée | Page attendue | URL finale servie | HTTP | Title | JS référencé | CSS référencé | Bouton | Résultat |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| https://lrenov-ia.studio/ | index.html | https://lrenov-ia.studio/ | 200 ; 0 redirection(s) | L'Rénov IA Studio — Formation &amp; solutions IA métier | assets/mobile-app.js ; assets/home-mobile.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&amp;display=swap ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css ; assets/home-mobile.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/index.html | index.html | https://lrenov-ia.studio/index | 200 ; 1 redirection(s) | L'Rénov IA Studio — Formation &amp; solutions IA métier | assets/mobile-app.js ; assets/home-mobile.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&amp;display=swap ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css ; assets/home-mobile.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations | formations.html | https://lrenov-ia.studio/formations | 200 ; 0 redirection(s) | Formations · L’Rénov IA Studio | assets/formations-config.js ; assets/formations-calendar.js ; assets/formations-overview.js ; assets/hubs-compacts.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations.html | formations.html | https://lrenov-ia.studio/formations | 200 ; 1 redirection(s) | Formations · L’Rénov IA Studio | assets/formations-config.js ; assets/formations-calendar.js ; assets/formations-overview.js ; assets/hubs-compacts.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/hubs-compacts.css ; assets/formations-hub.css ; assets/global-footer.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/ateliers | ateliers.html | https://lrenov-ia.studio/ateliers | 200 ; 0 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/ateliers.html | ateliers.html | https://lrenov-ia.studio/ateliers | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-batiment | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-batiment.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-communication-marketing | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-communication-marketing.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-developpement-commercial | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-developpement-commercial.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-enter | ateliers.html | https://lrenov-ia.studio/ateliers#enter | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-enter.html | ateliers.html | https://lrenov-ia.studio/ateliers#enter | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-finance-assurance | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-finance-assurance.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-formation | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-formation.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-immobilier | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-immobilier.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-pilotage-organisation | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-pilotage-organisation.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-services-entreprises | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |

| https://lrenov-ia.studio/formations-services-entreprises.html | ateliers.html | https://lrenov-ia.studio/ateliers#cmd | 200 ; 1 redirection(s) | Ateliers SHIFT · CTRL, CMD et ENTER · L’Rénov IA Studio | assets/shift-catalogue.js ; assets/shift-formations.js ; assets/mobile-app.js ; /cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js | https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=DM+Sans:wght@400;500;600&amp;display=swap ; assets/shift-formations.css ; assets/global-footer.css ; assets/ateliers-shift.css ; assets/mobile-navigation.css ; assets/mobile-app.css | Absent du HTML statique : créé en JS | HTML CORRECT après normalisation CF |



Le HTML ne contient pas littéralement le bouton puisque le JS le construit. Chercher seulement « Je réserve » dans ateliers.html ne permet pas de conclure. Le script frais contient une fonction de réservation Billetweb, le script CDN ancien ne la contient pas. Le bouton affiché a été observé dans le navigateur, indépendamment des recherches de chaînes.

## 7. Correction minimale préparée, non publiée

À la demande de ne rien republier sur Hostinger avant justification, **aucune action distante n’a été exécutée**. Localement, seuls ateliers.html et `_DEPLOIEMENT_PROD/ateliers.html` ajoutent `?v=20261014-1` à quatre références. La source et sa copie restent identiques. Aucun asset JS/CSS n’est modifié ; aucun lien interne, contenu, footer, tarif, Gemini, carte, règle Apache ou URL Billetweb n’est changé. Les 9 redirections existantes suffisent déjà.

| Fichier source (et copie de livraison) | Ancienne référence | Référence préparée |

| --- | --- | --- |

| ateliers.html / _DEPLOIEMENT_PROD/ateliers.html | assets/shift-formations.css | assets/shift-formations.css?v=20261014-1 |

| ateliers.html / _DEPLOIEMENT_PROD/ateliers.html | assets/shift-catalogue.js | assets/shift-catalogue.js?v=20261014-1 |

| ateliers.html / _DEPLOIEMENT_PROD/ateliers.html | assets/shift-formations.js | assets/shift-formations.js?v=20261014-1 |

| ateliers.html / _DEPLOIEMENT_PROD/ateliers.html | assets/ateliers-shift.css | assets/ateliers-shift.css?v=20261014-1 |



**Ordre de résolution sans republication d’assets** : (1) purge ciblée des quatre URL dans la zone Cloudflare réellement responsable ; (2) nouvel HTTP sans paramètre et tests du navigateur ; (3) si des navigateurs ont encore l’ancien objet local, une purge CDN ne peut pas vider leur cache disque. Le HTML ateliers.html versionné est alors le changement minimal nécessaire : il demande de nouvelles URL sans republier les JS/CSS déjà à jour sur Hostinger. Le TTL public observé est de 2 592 000 secondes (30 jours). Une purge CDN seule ne garantit donc pas la disparition immédiate d’anciennes copies de navigateur.

Purge recherchée : aucun plugin Cloudflare disponible dans la recherche d’intégrations ; le tableau de bord dash.cloudflare.com s’est ouvert sur /login. L’utilisatrice a indiqué qu’elle allait s’y connecter. Une purge ne peut être déclarée exécutée qu’après accès à la bonne zone et confirmation de succès.

## 8. Critère « zéro occurrence » : distinction indispensable

| Version | « Échanger sur cette formation » littéral | « Je réserve » littéral | Rendu attendu sur ateliers |

| --- | --- | --- | --- |

| Ancien JS à URL stable Cloudflare | 1 | 0 | Ancien CTA email, confirmé avant purge |

| JS récent à clé de cache neuve / source main | 1 | 1 | Réservation Billetweb sur .shift-family ; ENTER pré-réservation |

| JS local inchangé après préparation cache-busting | 1 | 1 | Même logique récente, aucune modification fonctionnelle |



Le code récent possède encore un `else` pour les anciennes pages dépourvues de `.shift-family`. **Purger le cache ne peut pas supprimer cette chaîne du fichier récent.** Les routes publiques anciennes redirigent vers ateliers, où ce else n’est pas pris. Le résultat visible « aucun ancien CTA sur les parcours actifs SHIFT » et la recherche brute « zéro occurrence dans le JS public » sont deux critères différents. Satisfaire le second nécessite une modification du JS, non réalisée conformément à la consigne la plus récente de ne changer aucune logique. Ne pas déclarer à tort 0 occurrence après simple purge.

## 9. Tests et état de validation

Avant purge : HTTP 200 et redirections attendues sur 24 routes de pages ; quatre paires d’assets analysées ; source et copie de livraison synchronisées ; ancien CTA observé dans la modale publique CTRL. Les tests après purge doivent être ajoutés ci-dessous uniquement lorsqu’ils sont réellement effectués. Les tests locaux ne sont pas assimilés à une publication.

| Environnement | Parcours | Largeur CSS mesurée | CTRL | CMD | ENTER | Résultat |

| --- | --- | --- | --- | --- | --- | --- |

| PUBLIC avant purge | Accès /ateliers → CTRL Personnaliser son IA | 1227 | Échanger sur cette formation → (mailto) | — | — | ÉCHEC confirmé ; vieux JS public |

| LOCAL correctif préparé | Accueil → menu responsive → Formations → SHIFT → CTRL / CMD / ENTER | 780 | Je réserve (Billetweb) | Je réserve (Billetweb) | Je pré-réserve ma place (Billetweb) | OK à 780 CSS ; aucun ancien CTA visible ; 390 CSS non encore validé |

| LOCAL desktop | Accueil → menu principal Formations → SHIFT → Personnaliser son IA | 2560 | Je réserve (Billetweb) | — | — | OK local ; HTML contient uniquement les quatre paramètres de version en plus |



### Conservation vérifiée

Comparaison des 496 fichiers préexistants : seules les deux copies de ateliers.html diffèrent, exclusivement par les quatre paramètres d’assets ; les JS/CSS, catalogues et sauvegardes sont identiques octet par octet à leur état initial. git diff confirme uniquement ces deux fichiers applicatifs. Rapport historique antérieur conservé intact.

## 10. Prochaine action nécessaire et URL de contrôle

Purge Cloudflare ciblée, après connexion de l’utilisatrice ; puis HTTP et contrôles desktop/mobile sur https://lrenov-ia.studio/ateliers, avec les parcours accueil → Formations → SHIFT et les anciennes routes. **Pas de demande d’accès Hostinger à ce stade.** Si le cache navigateur persiste, seul `ateliers.html` versionné devra être publié ; aucun upload de JS/CSS n’est nécessaire. Il faut en outre arbitrer explicitement le critère littéral 0 vs absence visuelle de l’ancien CTA, puisque le fichier source récent contient encore sa branche historique.
