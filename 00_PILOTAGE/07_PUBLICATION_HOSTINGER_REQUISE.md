# Publication Hostinger — constat et dépôt manuel requis

Contrôle du 14/10/2026. **Aucune publication effectuée, aucune purge effectuée.** La consigne la plus récente est de publier via un mécanisme existant exploitable, puis contrôler les fichiers publics et les réservations, puis seulement traiter Cloudflare si nécessaire. Aucun nouveau système de déploiement n’a été créé.

## Mécanismes recherchés

| Mécanisme | Constat | Exploitable pour Hostinger |
| --- | --- | --- |
| GitHub Actions | Un seul workflow actif, `pages-build-deployment`, chemin `dynamic/pages/pages-build-deployment`. Les sept exécutions disponibles sont des builds GitHub Pages. Dernière exécution : 38418354241, succès, main, b3b211389d365e180b22f65f7fd38a6763c2d597. | Non : aucun transfert vers Hostinger identifié dans ce workflow. |
| Déploiements GitHub | Les sept enregistrements disponibles ciblent `github-pages`. | Aucun déploiement Hostinger enregistré ici. |
| Scripts / configuration du dépôt | Pas de `.github/workflows`, script de publication Hostinger, configuration FTP/SFTP ou webhook de déploiement dans les fichiers actifs recherchés. Les hooks Git locaux ne contiennent que les exemples `.sample`. | Aucun mécanisme identifié. |
| Livraison manuelle | `_DEPLOIEMENT_PROD` contient des copies de livraison ; `00_LIRE_AVANT_DEPLOIEMENT.txt` mentionne une extraction dans `public_html`. Cette ancienne notice de restauration constitue un indice, pas une preuve de la dernière méthode utilisée. | Un paquet ciblé de cinq fichiers est prêt pour un dépôt manuel. |
| Intégration Git / webhook côté Hostinger | L’ouverture de hpanel.hostinger.com redirige vers auth.hostinger.com/login. Aucun panneau du site n’est accessible. Les réglages privés des webhooks GitHub ne sont pas lisibles via le connecteur disponible. | Non vérifiable et non exploitable avec les accès actuels. Ne pas conclure que ces intégrations n’existent pas. |
| FTP/SFTP existant | Aucun profil de publication fourni dans le projet actif ni session connectée disponible. Aucun fichier de mots de passe ou magasin de secrets recherché. | Non exploitable avec les accès fournis. |

Sources publiques : [workflow GitHub Pages](https://github.com/laurence-lrenov-ia-studio/SITE_LRENOV_IA_STUDIO/actions/workflows/pages/pages-build-deployment), [dernière exécution](https://github.com/laurence-lrenov-ia-studio/SITE_LRENOV_IA_STUDIO/actions/runs/38418354241). Captures JSON dans `validation/shift-routage-2026-10-14/github-actions-publication.json` et `github-deployments-publication.json`.

**Conclusion : le seul automatisme vérifié publie sur GitHub Pages. Aucun mécanisme GitHub → Hostinger n’est exploitable avec les accès actuels. Le processus ayant produit les fichiers Hostinger récents reste inconnu.** Arrêt avant publication conformément à la demande, sans créer de pipeline ni déclencher un push comme substitut au déploiement Hostinger.

## Dépôt manuel précis

Paquet : `validation/shift-routage-2026-10-14/CORRECTIF_RESERVATIONS_SHIFT_20261014-2.zip`.

SHA-256 de l’archive : `c91db40d46268215919728d2a1243b374f251a6e7da74254de3d9634207d7bec`.

Archive vérifiée : exactement cinq fichiers, 59 102 octets décompressés, empreintes internes identiques aux fichiers sources et au manifeste de livraison. Aucun dossier parent superflu dans le ZIP.

| Destination relative à la racine active du site | Fonction |
| --- | --- |
| `assets/formations-calendar.js` | Les 24 séances Billetweb vérifiées, rattachées aux six formations certaines ; aucune candidate CMD incertaine. |
| `assets/shift-formations.js` | Les boutons SHIFT ouvrent le choix des séances vérifiées ; aucun lien générique ou placeholder ; réservation non ouverte sans séance. |
| `assets/formations-overview.js` | Le calendrier du hub Formations contrôle les destinations SHIFT. |
| `ateliers.html` | Charge le calendrier partagé et les références versionnées des assets. |
| `formations.html` | Charge le calendrier et le JS du hub avec leurs versions. |

Procédure :

1. Décompresser ce ZIP localement. Dans hPanel, sélectionner **le site lrenov-ia.studio**, puis son gestionnaire de fichiers.
2. Identifier sa **racine documentaire active**, celle qui contient déjà `ateliers.html`, `formations.html` et `assets/`. La notice locale l’appelle `public_html`, mais le chemin absolu et l’association au domaine n’ont pas pu être vérifiés dans hPanel. Ne pas deviner ce chemin à partir d’un autre site.
3. Conserver une copie des cinq fichiers actuellement présents avant leur remplacement.
4. Remplacer d’abord les **trois fichiers JS** dans le sous-dossier `assets/` existant.
5. Remplacer ensuite **les deux fichiers HTML** à la racine active du site.
6. Ne pas déposer un dossier `_DEPLOIEMENT_PROD` ou un dossier portant le nom de l’archive dans la racine publique : les cinq chemins ci-dessus doivent remplacer leurs fichiers existants directement. Ne pas recopier tout le dépôt ni tout `_DEPLOIEMENT_PROD`.

Aucun CSS, catalogue pédagogique, tarif, image, `.htaccess`, PHP ou autre fichier n’est à publier pour ce correctif. Aucune suppression nécessaire.

## Reprise des vérifications après dépôt

1. Vérifier les deux HTML publics et les trois JS effectivement référencés ; comparer leurs contenus et SHA-256 au manifeste `validation/shift-routage-2026-10-14/manifest-reservations.json` en tenant compte uniquement des transformations CDN identifiées pour les HTML.
2. Contrôler `/formations`, `/formations.html`, `/ateliers`, `/ateliers.html`, les parcours accueil/menu/footer et le rendu desktop/mobile réel. Six formations doivent proposer Je réserve ; les 17 autres ne doivent proposer aucun faux lien. Les deux candidates CMD restent exclues.
3. Cliquer depuis le domaine public chacune des 24 séances et comparer l’événement, le titre, la date et l’horaire à la configuration vérifiée. Une simple page organisateur accessible ne vaut pas validation de séance. Ne pas soumettre de paiement ou de réservation finale.
4. Ensuite seulement, si un ancien asset est encore servi, traiter le cache Cloudflare de façon ciblée et répéter les contrôles publics affectés. Ne pas purger toute la zone par défaut.
5. Confirmer zéro occurrence du CTA historique dans les assets actifs réellement servis et aucun lien vide, générique ou incertain. Le test à 390 px CSS et toutes les validations publiques restent en attente tant qu’ils n’ont pas été réellement réalisés.

**État final de cette étape : dépôt manuel nécessaire ; production non corrigée et chaîne publique non validée à ce stade.** Le tableau des formations, séances et destinations vérifiées reste dans `06_CONTROLE_RESERVATIONS_BILLETWEB.md` ; ses résultats RÉSERVATION_OK sont uniquement locaux jusqu’à la reprise des contrôles ci-dessus.
