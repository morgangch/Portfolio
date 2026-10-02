# Identité visuelle — Atlas d’ingénierie

## 1. Philosophie

L’identité présente le parcours de Morgan comme un **territoire technique connecté**, pas comme un inventaire de logiciels. Elle associe la précision d’un SIG, les routes d’un réseau et la sobriété d’un document d’ingénierie. Deux lectures doivent toujours coexister : un contenu professionnel immédiatement lisible, puis une couche cartographique qui révèle les relations entre systèmes, infrastructure, SRE, sécurité et logiciel.

Principes : faits avant adjectifs ; signaux plutôt que décor ; peu d’effets ; contraste élevé ; géographie explicable ; information jamais dépendante de la couleur ou du SVG.

## 2. Palette

| Token | Hex | Usage |
|---|---:|---|
| `--ink` | `#102F35` | texte, fond institutionnel, contours |
| `--ink-2` | `#355B5D` | texte secondaire |
| `--paper` | `#F1EFE5` | fond principal, papier minéral |
| `--paper-2` | `#E7E3D5` | plans secondaires |
| `--coral` | `#E96947` | routes actives, actions, repères |
| `--amber` | `#F3BD52` | nœud central, disponibilité, accent |
| `--blue` | `#4D7F91` | infrastructure / eau technique |
| `--green` | `#66866A` | systèmes / territoire stable |
| `--line` | `#A8B7AD` | frontières et séparateurs |
| `--white` | `#FFFDF7` | surfaces et texte inversé |

Sur papier, conserver `ink`, `coral`, `amber` et `paper`; une version monochrome utilise noir à 100 %, 65 %, 35 % et 8 %. Le corail ne doit jamais porter seul une information.

## 3. Typographies

- **Manrope** : titres, paragraphes et interface. Graisses 400, 600, 700 et 800.
- **DM Mono** : coordonnées, dates, numéros de dossier, légendes et métadonnées. Graisses 400 et 500.
- Solutions de repli : `system-ui, sans-serif` et `monospace`.

Échelle web indicative : 12 px métadonnée, 14 px interface, 16 px texte, 21 px introduction, 32–60 px titre de section, 44–94 px titre manifeste. Titres serrés (`-0.045em` à `-0.065em`), texte courant non serré.

## 4. Symbole Atlas

Le symbole n’est plus un monogramme. C’est une **tuile de terrain technique** : deux courbes de niveau décrivent le système, une route corail le traverse et un nœud ambre marque le point où les couches se rencontrent. Les petites graduations en bas à droite évoquent un repère de carte et une grille d’infrastructure. Cette construction reste identifiable à 16 px sans dépendre de lettres.

- Source : `assets/monogram.svg` (nom de fichier conservé pour la compatibilité des URL).
- Zone de protection : au moins un quart de la largeur du symbole.
- Taille minimale : 16 px numérique, 6 mm imprimé.
- Version principale : fond `ink`, courbes `paper`, route `coral`, nœud `amber`.
- Version monochrome : fond plein et tous les tracés en réserve ; conserver la différence d’épaisseur route/contours.
- Ne pas étirer, arrondir davantage, ajouter d’initiales, ombrer ou transformer le symbole en blason.

## 5. Grammaire cartographique

- **Territoire** : domaine de travail large, surface mate avec contour `ink`.
- **Frontière** : relation conceptuelle, trait fin continu.
- **Route** : flux réel (requête, déploiement, données ou signal), trait clair discontinu.
- **Point remarquable** : expérience ou système construit, disque `coral` cerclé clair.
- **Nœud central** : projet transversal, disque `amber` cerclé `ink`.
- **Coordonnées** : ancrage réel et signature, jamais fausse donnée opérationnelle.
- **Grille** : pas de 32 px, opacité maximale 5 %.

Ne jamais faire d’une technologie individuelle une ville principale. Sur petit écran, remplacer la carte complète par une séquence de territoires textuels synchrones dans l’esprit, sans miniaturiser le dessin.

## 6. Composants

- **En-tête** : monogramme + nom + descripteur mono ; 76 px de haut sur le web.
- **Bouton** : rectangle sans rayon notable, contour 1 px ; déplacement 2 px et ombre `amber` au survol.
- **Carte éditoriale** : surface claire, bord supérieur 4 px, métadonnée mono corail.
- **Étude de cas** : colonne signalétique fixe + récit long ; diagrammes choisis pour leur lisibilité technique, sans géographie artificielle.
- **Repère chiffré** : chiffre dominant, légende factuelle courte ; toujours fournir le contexte.
- **Séparateur** : frontière 1 px, jamais un ornement gratuit.

Rayon nominal : 3 px. Éviter les pilules sauf pour de très petites étiquettes. Les icônes sont linéaires, géométriques, 1.5 à 2 px, sans collection de logos technologiques.

## 7. Espacements

Base de 4 px, avec l’échelle : 8, 12, 16, 24, 32, 48, 80 px. Largeur web maximale 1180 px. Un contenu A4 peut utiliser une grille de 4 mm et des marges minimales de 14 mm. Les groupes factuels sont serrés ; les changements de territoire disposent de 32 à 48 px d’air.

## 8. Application future aux CV

- Bandeau : logo, nom, spécialisation et coordonnées réelles.
- Colonne principale : expériences et projets sous forme de chronologie éditoriale claire.
- Colonne secondaire : légende textuelle des domaines et compétences, sans jauges.
- Utiliser une seule mini-carte abstraite au maximum, comme index du profil, jamais comme fond décoratif.
- Reprendre la même palette, les mêmes métadonnées en DM Mono et le même traitement de chiffres.
- Le QR code vers `https://morgan-guichard.fr/` doit garder une zone blanche suffisante et être accompagné de l’URL en clair.

## 9. À éviter

Fantasy, parchemin, fausse classification militaire, terminal hacker, noir/vert Matrix, gradients SaaS violets, glassmorphism, bruit permanent, cartes de technologies, jauges de maîtrise, courbes topographiques derrière chaque texte, animation de déplacement continu et toute donnée non sourcée.

## 10. Déclinaisons numériques

La marque principale reste `assets/monogram.svg`. Les petits exports raster sont régénérés depuis la géométrie simplifiée de `assets/favicon.svg`, sans variation de couleur entre formats :

- `favicon-16x16.png` et `favicon-32x32.png` pour les navigateurs historiques ;
- `favicon.ico`, contenant les variantes 16 et 32 px ;
- `apple-touch-icon.png` en 180 × 180 px ;
- `android-chrome-192x192.png` et `android-chrome-512x512.png` pour le manifeste ;
- `assets/social-card.png` en 1200 × 630 px, export raster de `assets/social-card.svg`.

À très petite taille, la lecture attendue est d’abord celle d’une route corail traversant des courbes claires vers un nœud ambre. Les graduations sont secondaires et peuvent disparaître optiquement sans altérer le symbole.

## 11. Carte canonique et limites de la métaphore

Le portfolio possède **une seule carte canonique**, sur la page d’accueil. Elle fonctionne comme un petit SIG fictif : déplacement, zoom, couches, POI sélectionnables et fiche contextuelle. Les cinq surfaces représentent les domaines ; les lieux représentent les projets, expériences ou compétences. La densité des labels augmente avec le zoom.

Une route n’est affichée que lorsqu’elle exprime une relation vérifiable dans le parcours ou dans la construction d’un système. Les positions sont conceptuelles : Résurgence occupe l’intersection des cinq domaines et OVHcloud la jonction systèmes–infrastructure–SRE.

La métaphore s’arrête lorsqu’un autre format transmet mieux l’information. Une architecture utilise un diagramme d’architecture, un parcours utilise une chronologie et une page de contact reste une page de contact. Les pages secondaires peuvent pointer vers un repère de l’Atlas, mais ne créent pas de carte concurrente.

## 12. Repère compact / favicon

Le favicon utilise `assets/favicon.svg`, une réduction volontaire du symbole principal : deux lignes topographiques, une route corail et un nœud ambre. Cette version supprime les détails secondaires qui se brouillent à 16 px. Elle est réservée aux favicons, icônes d’application et petits avatars ; le header, les documents et les grands supports continuent d’utiliser `assets/monogram.svg`.
