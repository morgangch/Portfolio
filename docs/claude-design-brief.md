# Prompt maître — décliner l’Atlas d’ingénierie avec Claude Design

Copier le bloc ci-dessous dans Claude Design, puis joindre :

1. ce repository ou, au minimum, `docs/visual-identity.md`, `assets/logo-mark.svg`, `assets/monogram.svg`, `assets/social-card.svg`, `index.html` et `styles/atlas.css` ;
2. les trois CV PDF présents dans `files/` ;
3. `assets/profile-photo.png`, photo de profil de référence validée (ne pas utiliser `files/my_pic.png`) ;
4. uniquement les captures de projets dont la publication est autorisée.

---

## Prompt à donner à Claude Design

Tu es directeur artistique éditorial et designer de marque. Ta mission est de décliner l’identité **« Atlas d’ingénierie » de Morgan Guichard** sur trois CV spécialisés et sur son profil LinkedIn. Produis des livrables réellement exploitables, pas seulement des moodboards.

### 1. Sources et règle de vérité

Analyse avant de créer :

- `docs/visual-identity.md`, source normative de la direction artistique ;
- le portfolio et ses tokens dans `styles/atlas.css` ;
- `assets/logo-mark.svg` pour la marque principale sur fond clair et `assets/monogram.svg` pour la tuile sombre, les favicons et les très petites tailles ;
- les trois CV source : cybersécurité défensive/systèmes, DevOps/cloud/infrastructure et software engineering/backend ;
- `assets/profile-photo.png`, seule photo de référence à utiliser ; ne pas utiliser `files/my_pic.png`.

Ne fabrique aucune expérience, technologie, responsabilité, date, certification ou métrique. Ne transforme pas un projet personnel en expérience salariée. Ne publie aucune donnée interne à OVHcloud ou Isalyx. Les seuls chiffres mis en avant doivent être déjà présents dans les CV ou le portfolio, notamment : 183 machines physiques, 100+ endpoints, 10+ services, 5 interfaces, environ 90 joueurs actifs, 272 membres et environ 5 000 visiteurs uniques.

### 2. Intention visuelle

Conserver le langage du portfolio : contemporain, technique, précis, minéral et exploratoire. L’identité doit évoquer un **SIG fictif sobre** et un atlas d’ingénierie, pas la fantasy, un jeu vidéo, une carte militaire ou un cabinet de conseil.

Palette obligatoire :

- bleu pétrole `#102F35` ;
- texte secondaire `#355B5D` ;
- papier `#F1EFE5` ;
- papier secondaire `#E7E3D5` ;
- corail `#E96947` ;
- ambre `#F3BD52` ;
- bleu infrastructure `#4D7F91` ;
- vert systèmes `#66866A` ;
- frontières `#A8B7AD` ;
- blanc chaud `#FFFDF7`.

Typographies : Manrope pour le contenu et DM Mono pour les dates, coordonnées, folios, légendes et métadonnées. Si elles ne sont pas disponibles, proposer des substituts libres métriquement proches.

Employer avec parcimonie : graticules très pâles, coordonnées, index de feuille, lignes de route, repères de POI, traits de coupe et légendes. Ne pas transformer chaque section en carte. Une chronologie reste une chronologie et une architecture reste un diagramme technique.

### 3. Transformation de la photo

À partir de `assets/profile-photo.png`, créer un portrait cohérent pour LinkedIn et les CV. Cette image remplace explicitement `files/my_pic.png` et `files/1739188182751.jpg` comme source finale :

- conserver strictement l’identité, les traits du visage, l’âge apparent et la carnation ;
- cadrage tête et épaules, regard naturel, expression accessible et professionnelle ;
- corriger sobrement lumière, balance des blancs, contraste et netteté ;
- simplifier ou remplacer le fond par un fond papier/minéral `#F1EFE5` avec un graticule extrêmement discret ou une seule courbe topographique ;
- ajouter éventuellement un fin repère corail/ambre hors du visage ;
- ne pas lisser excessivement la peau, ne pas modifier la morphologie, ne pas produire un rendu IA plastique ;
- préparer une version couleur, une version bichromie pétrole/papier et des cadrages carré puis circulaire ;
- vérifier la lisibilité à 64 px et prévoir assez d’air pour le recadrage circulaire LinkedIn.

### 4. Trois CV A4 cohérents mais spécialisés

Créer trois CV d’une page A4, imprimables, accessibles et lisibles en six secondes :

1. **Cybersécurité défensive & systèmes** — priorité à OVHcloud, Linux/Debian, contrôle d’accès, cloisonnement, détection, PrivEscCord et CTF.
2. **SRE, DevOps, cloud & infrastructure** — priorité à OVHcloud OPCP, MCO de 183 machines, provisioning Debian, OVH CDS, Netbox/OpenStack et exploitation de Résurgence.
3. **Software engineering & backend** — priorité à l’API de 100+ endpoints, authentification centralisée, cinq interfaces, PostgreSQL/Alembic, Isalyx C#/.NET et l’extension VS Code.

Système commun aux trois versions :

- bandeau compact avec symbole Atlas, nom, spécialisation, disponibilité et contacts ;
- portrait facultatif, petit et identique sur les trois versions ;
- hiérarchie factuelle : expérience et projets avant les listes de technologies ;
- une colonne principale pour le parcours et une colonne secondaire pour compétences, langues et repères ;
- chiffres clés traités comme des repères cartographiques, jamais comme des slogans ;
- micro-légende des domaines, sans jauges ni pourcentages ;
- QR code existant vers `https://morgan-guichard.fr/`, avec zone de silence et URL écrite ;
- marges d’impression sûres, contraste AA autant que possible et version monochrome fonctionnelle ;
- aucune carte complexe : au maximum une mini-localisation abstraite dans l’Atlas pour Résurgence ou OVHcloud.

Livrer pour chaque CV : PDF impression, PDF écran avec liens actifs, source éditable, aperçu PNG et fiche des styles utilisés.

### 5. Profil LinkedIn

#### Photo

Utiliser le portrait transformé décrit plus haut. Le visage doit rester dominant dans le cercle et le symbole Atlas ne doit pas concurrencer le visage.

#### Bannière

Créer une bannière maître au ratio LinkedIn, exportée notamment en **1584 × 396 px**, en vérifiant le recadrage desktop et mobile. Garder la zone gauche suffisamment calme car la photo de profil peut la masquer.

Composition recommandée :

- à droite, fragment sobre de la carte canonique fictive avec Résurgence et OVHcloud comme deux repères, quelques frontières et routes sémantiques ;
- au centre-droit : « Cybersécurité · Systèmes · Infrastructure · SRE » ;
- sous-ligne discrète : « Software engineering, de l’OS au service en production » ;
- symbole Atlas compact, URL `morgan-guichard.fr` et mention de recherche d’alternance à partir d’octobre 2026 ;
- aucun faux terminal, aucun logo de technologies, aucun fond photographique de datacenter générique.

Prévoir une variante sans texte pour les plateformes où les informations de profil suffisent.

#### Cohérence du profil

Proposer :

- un headline LinkedIn concis en trois variantes, sans « expert », « passionné », « ninja » ou superlatif invérifiable ;
- une structure de section « Infos » factuelle reliant sécurité, systèmes, infrastructure, SRE et backend ;
- une recommandation d’ordre pour la sélection de contenus et expériences ;
- des couvertures cohérentes pour les médias à la une.

### 6. Médias LinkedIn à produire

Créer une famille de visuels éditoriaux au format publication et carrousel, lisibles sans ouvrir le portfolio. Chaque famille doit avoir une couverture, deux à quatre planches de contenu et une dernière planche avec URL/CTA.

#### A. Projet Résurgence — étude de cas

Angle : « Construire et exploiter une plateforme, pas seulement coder un site ».

Illustrer uniquement les faits publics : API REST 100+ endpoints, cinq interfaces reliées par SSO, 10+ services Docker Compose, PostgreSQL 16/Alembic, Nginx/TLS, WireGuard/UFW, workers/bots, observabilité, environ 90 joueurs actifs, 272 membres et environ 5 000 visiteurs uniques.

Visuels : diagramme d’architecture clair, chiffres clés, décision d’authentification centralisée et boucle build–deploy–observe–secure. Réserver la carte à un petit locator indiquant le caractère transversal du projet.

#### B. OVHcloud OPCP — expérience SRE

Angle : « Passer du logiciel à l’exploitation d’une infrastructure physique ».

Utiliser seulement : environnement de 183 machines physiques, MCO/refactoring, preseed Debian, inventaire Netbox/OpenStack et migration OVH CDS v1 vers v2. Créer un diagramme abstrait d’infrastructure ou une composition éditoriale ; ne pas représenter une architecture interne, une topologie réelle, un badge, un écran ou une donnée non publique. Ne pas laisser entendre qu’OVHcloud approuve le visuel. Employer le nom de l’entreprise textuellement et respecter ses marques sans recréer son logo.

#### C. Epitech — formation et trajectoire

Angle : « Du software engineering à l’architecture de systèmes d’information ».

Montrer la continuité 2023–2026 Programme Grande École puis 2026–2028 Master of Science, et le lien avec les projets concrets et les domaines de l’Atlas. Éviter les clichés d’école ou la constellation de logos. Ne pas recréer le logo Epitech si aucun asset officiel autorisé n’est fourni.

Pour les trois familles : préparer des exports 1080 × 1080, 1080 × 1350 et un PDF carrousel ; conserver des marges de sécurité ; ajouter un texte alternatif proposé pour chaque visuel ; fournir les sources éditables.

### 7. Livrables et validation

Livrer :

- trois CV complets et leurs sources ;
- portrait LinkedIn/CV dans les variantes demandées ;
- bannière LinkedIn avec aperçu des zones de recadrage ;
- trois familles de médias LinkedIn ;
- mini-kit de marque avec couleurs, typographies, symbole, espacements et exemples ;
- exports RGB web et CMJN/print lorsque l’outil le permet ;
- tableau listant chaque fait utilisé et sa source.

Avant livraison, répondre explicitement :

1. Le profil reste-t-il compréhensible sans décoder la cartographie ?
2. Les trois CV paraissent-ils appartenir à la même identité tout en ayant une hiérarchie métier différente ?
3. Le visage est-il fidèle et naturel à petite taille ?
4. La bannière reste-t-elle lisible malgré les recadrages et le chevauchement de la photo ?
5. Chaque média LinkedIn est-il factuel, autonome et exempt d’information confidentielle ?
6. L’ensemble ressemble-t-il à un atlas d’ingénierie contemporain plutôt qu’à un template ou une interface militaire ?

Itère tant qu’une réponse est non.

---

## Notes d’utilisation

Avant export final, vérifier dans l’aperçu LinkedIn réel les zones de recadrage de la bannière : l’interface et les masques peuvent évoluer. Ne transmettre à Claude Design que des captures et logos dont l’utilisation publique est autorisée.
