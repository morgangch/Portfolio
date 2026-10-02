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

## 4. Logo

Le monogramme combine un **M** continu, les deux ouvertures d’un **G** suggéré et une route verticale entre deux nœuds. Il doit rester géométrique et lisible à 16 px.

- Source : `assets/monogram.svg`.
- Zone de protection : au moins un quart de la largeur du symbole.
- Taille minimale : 16 px numérique, 6 mm imprimé.
- Version principale : fond `ink`, trait `paper`, route `coral`, nœuds `amber`.
- Version monochrome : fond plein + tracé en réserve, ou tracé `ink` seul sur fond clair.
- Ne pas étirer, ombrer, incliner, ajouter de texte dans le symbole ou modifier séparément ses proportions.

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
- **Étude de cas** : colonne signalétique fixe + récit long ; diagrammes fond `ink`.
- **Repère chiffré** : chiffre dominant, légende factuelle courte ; toujours fournir le contexte.
- **Séparateur** : frontière 1 px, jamais un ornement gratuit.

Rayon nominal : 3 px. Éviter les pilules sauf pour de très petites étiquettes. Les icônes sont linéaires, géométriques, 1.5 à 2 px, sans collection de logos technologiques.

## 7. Espacements

Base de 4 px, avec l’échelle : 8, 12, 16, 24, 32, 48, 80 px. Largeur web maximale 1180 px. Un contenu A4 peut utiliser une grille de 4 mm et des marges minimales de 14 mm. Les groupes factuels sont serrés ; les changements de territoire disposent de 32 à 48 px d’air.

## 8. Application future aux CV

- Bandeau : logo, nom, spécialisation et coordonnées réelles.
- Colonne principale : expériences et projets sous forme de tracé chronologique.
- Colonne secondaire : légende textuelle des domaines et compétences, sans jauges.
- Utiliser une seule mini-carte abstraite au maximum, comme index du profil, jamais comme fond décoratif.
- Reprendre la même palette, les mêmes métadonnées en DM Mono et le même traitement de chiffres.
- Le QR code vers `https://morgan-guichard.fr/` doit garder une zone blanche suffisante et être accompagné de l’URL en clair.

## 9. À éviter

Fantasy, parchemin, fausse classification militaire, terminal hacker, noir/vert Matrix, gradients SaaS violets, glassmorphism, bruit permanent, cartes de technologies, jauges de maîtrise, courbes topographiques derrière chaque texte, animation de déplacement continu et toute donnée non sourcée.
