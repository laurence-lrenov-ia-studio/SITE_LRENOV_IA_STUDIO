# Livraison locale SHIFT — 7 octobre 2026

Travail réalisé uniquement dans `C:\PROJETS_GITHUB\SITE_LRENOV_IA_STUDIO`. Aucun déploiement.

Le texte fourni est la source des intitulés, formats et tarifs. Aucun autre catalogue pédagogique n’était joint. Les résumés, objectifs, résultats détaillés, prérequis et programmes absents ne sont pas inventés. Les phrases d’orientation des domaines servent uniquement à présenter le public et le besoin.

## Résultat

- Hub court, avec huit liens de domaine CMD, accès CTRL et ENTER, bloc CPF et prochaines sessions.
- Catalogue centralisé : 7 CTRL, 33 CMD, 3 ENTER, sans champ de tarif interne.
- Une fiche unique par formation ChatGPT / Claude.
- Modale commune avec fermeture par bouton, Échap et clic sur le fond, maintien du focus, restitution du focus et défilement mobile.
- Aucun tarif In10 ni mention FAFCEA ou BNI dans les pages HTML publiques courantes et les nouveaux fichiers JS du catalogue.
- Les huit domaines CMD sont absents des menus principaux et mobiles.
- Aucune page individuelle par formation.
- Aucune session renseignée : « Les prochaines dates seront publiées ici. »
- Bloc CPF conservé : parcours certifiant pour intégrer l’IA dans l’activité d’une TPE, avec prise de contact.

## Informations laissées non renseignées

Les durées CMD ne sont pas fournies. Aucun tarif n’est fourni pour les quatre formations Bâtiment. Le type et le tarif de « Piloter plusieurs chantiers avec l’IA » restent non fixés ; la fiche indique que le programme est en cours de validation. Aucun programme, prérequis ou objectif détaillé n’a été ajouté. Les champs absents ne sont pas ajoutés au catalogue public.

## Vérifications

`validation/shift-formations.cjs` : succès dans Edge sans fenêtre, en affichage desktop et émulation mobile tactile. Contrôles des 43 fiches sur 11 pages, liens du hub, navigation clavier, Tab / Maj+Tab, Entrée / Espace, Échap, clic sur le fond, fermeture par bouton, retour du focus, absence de débordement horizontal, menu mobile, colonnes du hub de 900 à 1280 px, affichage de 320 à 740 px et filtrage des sessions. Les dates de test sont injectées uniquement dans le navigateur de validation ; elles ne figurent pas dans les fichiers publics.

Syntaxe JavaScript vérifiée. `git diff --check` vérifié. Le tactile est testé par émulation navigateur, sans essai sur appareil physique.

Pour relancer avec le runtime local disposant de Playwright : définir `NODE_PATH` vers ses modules, `SHIFT_BROWSER_CHANNEL=msedge`, puis exécuter `node validation/shift-formations.cjs`.

## Fichiers créés

- `assets/shift-catalogue.js`
- `assets/shift-formations.css`
- `assets/shift-formations.js`
- `formations-services-entreprises.html`
- `formations-batiment.html`
- `formations-immobilier.html`
- `formations-finance-assurance.html`
- `formations-developpement-commercial.html`
- `formations-formation.html`
- `formations-communication-marketing.html`
- `formations-pilotage-organisation.html`
- `formations-enter.html`
- `validation/shift-formations.cjs`
- `validation/SHIFT-livraison.md`

## Fichiers modifiés

- `formations.html` : hub SHIFT.
- `ateliers.html` : liste CTRL.
- `sitemap.xml` : neuf nouvelles pages.
- `index.html` : suppression des liens et de la carte FAFCEA.
- `index (1).html` : suppression des liens et de la mention FAFCEA.
- `agents.html` : suppression des liens FAFCEA du menu desktop et mobile.
- `assistant.html` : même suppression.
- `audit.html` : même suppression.
- `cgv.html` : même suppression.
- `confidentialite.html` : même suppression.
- `contact.html` : même suppression.
- `ia-et-moi.html` : même suppression.
- `mentions-legales.html` : même suppression.
- `outils.html` : même suppression.
- `radar-ia.html` : même suppression.
- `secteur-assurance.html` : même suppression.
- `secteur-btp.html` : même suppression.
- `secteur-communication.html` : même suppression.
- `secteur-finance-comptabilite.html` : même suppression.
- `secteur-immobilier.html` : même suppression.
- `secteur-juridique.html` : même suppression.
- `secteur-professions-liberales.html` : même suppression.
- `secteurs.html` : même suppression.
