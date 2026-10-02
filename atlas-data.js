/* Données éditoriales vérifiées le 2 octobre 2026. Positions conceptuelles. */
window.ATLAS_DATA = {
  "cyber": {
    "id": "cyber",
    "kind": "Territoire",
    "title": "Cybersécurité défensive",
    "summary": "Contrôle d’accès, cloisonnement, détection et compréhension des chemins d’attaque.",
    "tags": [
      "Défense",
      "Analyse",
      "Réseau"
    ],
    "domains": [
      "cyber"
    ],
    "category": "territories",
    "details": [
      "Auditer les permissions et comprendre les chemins d’attaque avec PrivEscCord et les CTF.",
      "Appliquer la défense en profondeur aux services exploités : scopes, TLS, VPN et réduction de l’exposition."
    ],
    "facts": [],
    "related": [
      "resurgence",
      "epitech",
      "epitech-pge",
      "epitech-msc",
      "privescord",
      "ctf",
      "eventd",
      "passssi"
    ],
    "sources": []
  },
  "systems": {
    "id": "systems",
    "kind": "Territoire",
    "title": "Systèmes / Linux",
    "summary": "Le socle de la carte : Debian, services, provisioning et exploitation des environnements.",
    "tags": [
      "Linux",
      "Debian",
      "Systemd"
    ],
    "domains": [
      "systems"
    ],
    "category": "territories",
    "details": [
      "Relier programmation Unix, services Linux et automatisation du provisioning.",
      "Du shell pédagogique au parc physique OVHcloud : comprendre le processus, le service et son environnement."
    ],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "epitech",
      "ovh-preseed",
      "epitech-pge",
      "epitech-msc",
      "eventd",
      "minishell",
      "myftp",
      "passssi"
    ],
    "sources": []
  },
  "infra": {
    "id": "infra",
    "kind": "Territoire",
    "title": "Infrastructure / cloud",
    "summary": "Machines physiques, inventaire, réseau, conteneurs et plateformes cloud.",
    "tags": [
      "OpenStack",
      "Netbox",
      "Réseau"
    ],
    "domains": [
      "infra"
    ],
    "category": "territories",
    "details": [
      "Décrire et inventorier l’infrastructure ; déployer des services conteneurisés ou orchestrés.",
      "Netbox / OpenStack en expérience professionnelle ; Kubernetes, Redis et Traefik dans Bernstein."
    ],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "epitech",
      "ovh-inventory",
      "epitech-pge",
      "epitech-msc",
      "bernstein",
      "myftp",
      "passssi",
      "rtype"
    ],
    "sources": []
  },
  "sre": {
    "id": "sre",
    "kind": "Territoire",
    "title": "DevOps / SRE",
    "summary": "Le corridor entre construction et exploitation : CI/CD, MCO, automatisation et observabilité.",
    "tags": [
      "CI/CD",
      "MCO",
      "Observabilité"
    ],
    "domains": [
      "sre"
    ],
    "category": "territories",
    "details": [
      "Automatiser construction, livraison et exploitation, puis rendre les états et incidents observables.",
      "Migration CDS en entreprise, outils VS Code, mirroring Git et signaux système avec eventd."
    ],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "isalyx",
      "epitech",
      "ovh-cicd",
      "isalyx-backup",
      "epitech-pge",
      "epitech-msc",
      "eventd",
      "bernstein",
      "cds-toolkit",
      "gitmir"
    ],
    "sources": []
  },
  "software": {
    "id": "software",
    "kind": "Territoire",
    "title": "Software engineering",
    "summary": "Backend, API, modèles de données, interfaces et outils destinés aux développeurs.",
    "tags": [
      "Python",
      "TypeScript",
      "C#"
    ],
    "domains": [
      "software"
    ],
    "category": "territories",
    "details": [
      "Construire des API, modéliser les données et concevoir des interfaces utiles.",
      "Backend de production, applications C# et TypeScript, moteur C++ et visualisation pédagogique Python."
    ],
    "facts": [],
    "related": [
      "resurgence",
      "isalyx",
      "epitech",
      "isalyx-dotnet",
      "epitech-pge",
      "epitech-msc",
      "vscode",
      "eventd",
      "minishell",
      "myftp",
      "cds-toolkit",
      "gitmir",
      "passssi",
      "pyscope",
      "rtype"
    ],
    "sources": []
  },
  "resurgence": {
    "id": "resurgence",
    "kind": "Projet majeur",
    "title": "Projet Résurgence",
    "summary": "Plateforme en production située au croisement du software, des systèmes, de l’infrastructure, du SRE et de la sécurité.",
    "tags": [
      "100+ endpoints",
      "10+ services",
      "~90 joueurs"
    ],
    "domains": [
      "cyber",
      "systems",
      "infra",
      "sre",
      "software"
    ],
    "category": "projects",
    "details": [
      "API Flask, SQLAlchemy et migrations Alembic sur PostgreSQL 16 ; bots discord.py et workers dans un monorepo Docker Compose.",
      "Authentification commune : JWT, scopes et Discord OAuth2 ; reverse proxy Nginx, TLS, UFW et administration via WireGuard.",
      "Images publiées sur GHCR, services systemd, endpoints /health et documentation Sphinx / Swagger."
    ],
    "facts": [
      [
        "100+",
        "endpoints REST"
      ],
      [
        "10+",
        "services"
      ],
      [
        "5",
        "interfaces avec SSO"
      ],
      [
        "~90",
        "joueurs actifs"
      ]
    ],
    "related": [
      "backend",
      "security",
      "docker",
      "observability"
    ],
    "sources": [
      {
        "label": "Architecture et chiffres · étude de cas",
        "url": "projets.html#resurgence"
      }
    ],
    "url": "projets.html#resurgence",
    "period": "Depuis octobre 2023",
    "state": "Plateforme en production · données du portfolio"
  },
  "ovhcloud": {
    "id": "ovhcloud",
    "kind": "Expérience",
    "title": "OVHcloud · OPCP",
    "summary": "SRE en datacenter : MCO de 183 machines physiques, provisioning Debian, inventaire et migration CI/CD.",
    "tags": [
      "Systèmes",
      "Infrastructure",
      "SRE"
    ],
    "domains": [
      "systems",
      "infra",
      "sre"
    ],
    "category": "experiences",
    "details": [
      "MCO et refactoring dans le cadre OPCP, une offre de cloud souverain on-premise.",
      "Provisioning Debian, inventaire Netbox / OpenStack et migration de workflows OVH CDS v1 vers v2."
    ],
    "facts": [
      [
        "183",
        "machines physiques"
      ]
    ],
    "related": [
      "ovh-preseed",
      "ovh-inventory",
      "ovh-cicd"
    ],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ],
    "period": "Mars — août 2026",
    "state": "Expérience professionnelle"
  },
  "isalyx": {
    "id": "isalyx",
    "kind": "Expérience",
    "title": "Isalyx Group",
    "summary": "Développement C#/.NET WPF et automatisation des sauvegardes Docker et données avec Rsync.",
    "tags": [
      "Software",
      "C#",
      "Automation"
    ],
    "domains": [
      "software",
      "sre"
    ],
    "category": "experiences",
    "details": [
      "Développement orienté objet d’interfaces C#/.NET WPF.",
      "Automatisation des sauvegardes des images Docker et données avec Rsync."
    ],
    "facts": [],
    "related": [
      "isalyx-dotnet",
      "isalyx-backup"
    ],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ],
    "period": "Septembre 2024 — janvier 2025"
  },
  "epitech": {
    "id": "epitech",
    "kind": "Formation",
    "title": "Epitech Montpellier",
    "summary": "Programme Grande École puis Master of Science, au point de départ du parcours présenté.",
    "tags": [
      "2023—2028",
      "RNCP 7"
    ],
    "domains": [
      "cyber",
      "systems",
      "infra",
      "sre",
      "software"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [
      "epitech-pge",
      "epitech-msc",
      "minishell",
      "myftp",
      "bernstein"
    ],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ],
    "period": "2023 — 2028",
    "state": "Formation · parcours annoncé dans le portfolio"
  },
  "ovh-preseed": {
    "id": "ovh-preseed",
    "kind": "Réalisation OVHcloud",
    "title": "Provisioning Debian",
    "summary": "Conception d’un preseed Debian automatisant le déploiement et la configuration initiale des serveurs.",
    "tags": [
      "Debian",
      "Preseed",
      "Automation"
    ],
    "domains": [
      "systems"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "ovh-inventory": {
    "id": "ovh-inventory",
    "kind": "Réalisation OVHcloud",
    "title": "Inventaire d’infrastructure",
    "summary": "Inventaire des machines sur site avec Netbox et OpenStack dans le cadre d’OPCP.",
    "tags": [
      "Netbox",
      "OpenStack",
      "Infrastructure"
    ],
    "domains": [
      "infra"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "ovh-cicd": {
    "id": "ovh-cicd",
    "kind": "Réalisation OVHcloud",
    "title": "Migration CI/CD",
    "summary": "Migration de workflows OVH CDS v1 vers v2.",
    "tags": [
      "CI/CD",
      "OVH CDS",
      "SRE"
    ],
    "domains": [
      "sre"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "isalyx-dotnet": {
    "id": "isalyx-dotnet",
    "kind": "Réalisation Isalyx",
    "title": "Interfaces C# / .NET WPF",
    "summary": "Développement orienté objet d’interfaces utilisateur logicielles.",
    "tags": [
      "C#",
      ".NET",
      "WPF"
    ],
    "domains": [
      "software"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "isalyx-backup": {
    "id": "isalyx-backup",
    "kind": "Réalisation Isalyx",
    "title": "Sauvegardes automatisées",
    "summary": "Script de sauvegarde des images Docker et des données d’entreprise via Rsync.",
    "tags": [
      "Rsync",
      "Docker",
      "Automation"
    ],
    "domains": [
      "sre"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "epitech-pge": {
    "id": "epitech-pge",
    "kind": "Formation",
    "title": "Programme Grande École",
    "summary": "Cursus Epitech suivi à Montpellier de 2023 à 2026.",
    "tags": [
      "2023—2026",
      "Epitech"
    ],
    "domains": [
      "cyber",
      "systems",
      "infra",
      "sre",
      "software"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "epitech-msc": {
    "id": "epitech-msc",
    "kind": "Formation",
    "title": "Master of Science",
    "summary": "Cursus 2026—2028 préparant le titre RNCP niveau 7 d’Architecte de Systèmes d’Information.",
    "tags": [
      "2026—2028",
      "RNCP 7"
    ],
    "domains": [
      "cyber",
      "systems",
      "infra",
      "sre",
      "software"
    ],
    "category": "experiences",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "Parcours du portfolio",
        "url": "index.html#parcours"
      }
    ]
  },
  "privescord": {
    "id": "privescord",
    "kind": "Projet défensif",
    "title": "PrivEscCord",
    "summary": "Audit en lecture seule de configurations Discord avec onze contrôles classés par criticité.",
    "tags": [
      "Python",
      "Audit",
      "11 contrôles"
    ],
    "domains": [
      "cyber"
    ],
    "category": "projects",
    "details": [
      "Analyse de la hiérarchie des rôles, permissions administrateur et @everyone, webhooks et paramètres 2FA.",
      "Les contrôles sont organisés par criticité : compromission et élévation de privilèges, puis spam, mentions et risques vocaux."
    ],
    "facts": [
      [
        "11",
        "contrôles documentés"
      ]
    ],
    "related": [
      "security",
      "ctf"
    ],
    "sources": [
      {
        "label": "AnnonyWOLFRODA/PrivEscCord · dépôt et README",
        "url": "https://github.com/AnnonyWOLFRODA/PrivEscCord"
      }
    ],
    "url": "https://github.com/AnnonyWOLFRODA/PrivEscCord",
    "state": "Outil public · audit défensif"
  },
  "ctf": {
    "id": "ctf",
    "kind": "Pratique offensive",
    "title": "CTF",
    "summary": "Cycom CTF : 4e en 2024 et 5e en 2025. GCC CTF 2024 : 5e.",
    "tags": [
      "Cycom",
      "GCC",
      "Write-ups"
    ],
    "domains": [
      "cyber"
    ],
    "category": "projects",
    "details": [],
    "facts": [],
    "related": [],
    "sources": [
      {
        "label": "morgangch/GCC-CTF-2024 · dépôt et README",
        "url": "https://github.com/morgangch/GCC-CTF-2024"
      }
    ],
    "url": "https://github.com/morgangch/GCC-CTF-2024"
  },
  "vscode": {
    "id": "vscode",
    "kind": "Outil",
    "title": "Extension VS Code",
    "summary": "Suivi des quotas de Claude, Codex et OpenCode via JSON-RPC, SQLite et backoff exponentiel.",
    "tags": [
      "TypeScript",
      "JSON-RPC"
    ],
    "domains": [
      "software"
    ],
    "category": "projects",
    "details": [
      "Détection indépendante de Claude, Codex et OpenCode ; affichage des fenêtres de quota et des échéances de réinitialisation.",
      "Codex via JSON-RPC sur stdio, données OpenCode via SQLite en lecture seule ; les coûts estimés sont distingués des quotas fournisseur."
    ],
    "facts": [],
    "related": [
      "cds-toolkit",
      "gitmir"
    ],
    "sources": [
      {
        "label": "AnnonyWOLFRODA/COCRUTV · dépôt et README",
        "url": "https://github.com/AnnonyWOLFRODA/COCRUTV"
      }
    ],
    "url": "https://github.com/AnnonyWOLFRODA/COCRUTV",
    "state": "Extension VS Code · dépôt public"
  },
  "linux": {
    "id": "linux",
    "kind": "Compétence",
    "title": "Linux / Debian",
    "summary": "Administration, services systemd et provisioning automatisé avec preseed.",
    "tags": [
      "Systems"
    ],
    "domains": [
      "systems"
    ],
    "category": "skills",
    "details": [],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "epitech",
      "ovh-preseed",
      "epitech-pge"
    ],
    "sources": [
      {
        "label": "Études de cas du portfolio",
        "url": "projets.html"
      }
    ]
  },
  "docker": {
    "id": "docker",
    "kind": "Compétence",
    "title": "Docker / Systemd",
    "summary": "Conteneurisation et exploitation de services sur VPS Linux.",
    "tags": [
      "Infrastructure",
      "SRE"
    ],
    "domains": [
      "systems",
      "infra"
    ],
    "category": "skills",
    "details": [],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "epitech",
      "ovh-preseed",
      "ovh-inventory"
    ],
    "sources": [
      {
        "label": "Études de cas du portfolio",
        "url": "projets.html"
      }
    ]
  },
  "observability": {
    "id": "observability",
    "kind": "Compétence",
    "title": "Observabilité",
    "summary": "Pages de supervision réseau et sécurité ; pratique de Grafana et Prometheus.",
    "tags": [
      "SRE",
      "Security"
    ],
    "domains": [
      "sre"
    ],
    "category": "skills",
    "details": [],
    "facts": [],
    "related": [
      "resurgence",
      "ovhcloud",
      "isalyx",
      "epitech",
      "ovh-cicd"
    ],
    "sources": [
      {
        "label": "Études de cas du portfolio",
        "url": "projets.html"
      }
    ]
  },
  "backend": {
    "id": "backend",
    "kind": "Compétence",
    "title": "Backend / API",
    "summary": "Flask, SQLAlchemy, PostgreSQL, Alembic et conception d’API REST.",
    "tags": [
      "Software"
    ],
    "domains": [
      "software"
    ],
    "category": "skills",
    "details": [],
    "facts": [],
    "related": [
      "resurgence",
      "isalyx",
      "epitech",
      "isalyx-dotnet",
      "epitech-pge"
    ],
    "sources": [
      {
        "label": "Études de cas du portfolio",
        "url": "projets.html"
      }
    ]
  },
  "security": {
    "id": "security",
    "kind": "Compétence",
    "title": "Contrôle d’accès",
    "summary": "JWT, scopes, WireGuard, UFW, TLS et limitation de l’exposition des services.",
    "tags": [
      "Cybersecurity"
    ],
    "domains": [
      "cyber"
    ],
    "category": "skills",
    "details": [],
    "facts": [],
    "related": [
      "resurgence",
      "epitech",
      "epitech-pge",
      "epitech-msc",
      "privescord"
    ],
    "sources": [
      {
        "label": "Études de cas du portfolio",
        "url": "projets.html"
      }
    ]
  },
  "eventd": {
    "id": "eventd",
    "title": "eventd",
    "domains": [
      "systems",
      "sre",
      "cyber",
      "software"
    ],
    "kind": "Moteur d’événements Unix",
    "summary": "Collecter des événements système, les enrichir avec /proc et les relier à des règles et actions.",
    "tags": [
      "C++17",
      "Python",
      "FastAPI",
      "React"
    ],
    "details": [
      "Le README décrit un pipeline collecteur → bus → enrichissement → règles → actions, avec API REST et tableau de bord.",
      "Le DSL complet est annoncé en phase 2 et l’intégration MCP en phase 3 : ces éléments restent une feuille de route."
    ],
    "state": "Projet public · fonctionnalités et feuille de route",
    "category": "projects",
    "facts": [],
    "related": [
      "systems",
      "sre",
      "cyber",
      "software"
    ],
    "point": [
      390,
      185
    ],
    "url": "https://github.com/morgangch/eventd",
    "sources": [
      {
        "label": "morgangch/eventd · dépôt et README",
        "url": "https://github.com/morgangch/eventd"
      }
    ]
  },
  "bernstein": {
    "id": "bernstein",
    "title": "Bernstein",
    "domains": [
      "infra",
      "sre"
    ],
    "kind": "Infrastructure Kubernetes",
    "summary": "Déploiement pédagogique d’une application de vote distribuée sur Kubernetes.",
    "tags": [
      "Kubernetes",
      "Redis",
      "PostgreSQL",
      "Traefik"
    ],
    "details": [
      "Poll transmet les votes à Redis ; un worker les écrit dans PostgreSQL ; Result expose les résultats.",
      "Manifestes Deployment, Service et Ingress, ConfigMaps, Secrets, anti-affinité et supervision des conteneurs avec cAdvisor."
    ],
    "state": "Projet pédagogique · configuration de laboratoire",
    "category": "projects",
    "facts": [],
    "related": [
      "infra",
      "sre"
    ],
    "point": [
      727,
      250
    ],
    "url": "https://github.com/morgangch/bernstein",
    "sources": [
      {
        "label": "morgangch/bernstein · dépôt et README",
        "url": "https://github.com/morgangch/bernstein"
      }
    ]
  },
  "minishell": {
    "id": "minishell",
    "title": "Minishell2",
    "domains": [
      "systems",
      "software"
    ],
    "kind": "Programmation système",
    "summary": "Projet de shell en C pour explorer la programmation Unix.",
    "tags": [
      "C",
      "Unix",
      "Shell"
    ],
    "details": [
      "Le README identifie explicitement ce projet Epitech comme incomplet ; il constitue un terrain d’apprentissage."
    ],
    "state": "Projet pédagogique · incomplet",
    "category": "projects",
    "facts": [],
    "related": [
      "systems",
      "software"
    ],
    "point": [
      355,
      245
    ],
    "url": "https://github.com/morgangch/minishell2",
    "sources": [
      {
        "label": "morgangch/minishell2 · dépôt et README",
        "url": "https://github.com/morgangch/minishell2"
      }
    ]
  },
  "myftp": {
    "id": "myftp",
    "title": "MyFTP",
    "domains": [
      "systems",
      "infra",
      "software"
    ],
    "kind": "Réseau / protocole",
    "summary": "Serveur FTP en C++ avec sockets TCP, sessions et transferts actifs ou passifs.",
    "tags": [
      "C++",
      "TCP",
      "poll",
      "FTP"
    ],
    "details": [
      "Gestion de plusieurs clients avec poll ; commandes USER, PASS, LIST, RETR, STOR et QUIT décrites dans le README.",
      "Séparation des responsabilités : authentification, sessions, commandes et transferts."
    ],
    "state": "Projet pédagogique · serveur réseau",
    "category": "projects",
    "facts": [],
    "related": [
      "systems",
      "infra",
      "software"
    ],
    "point": [
      480,
      290
    ],
    "url": "https://github.com/morgangch/myftp",
    "sources": [
      {
        "label": "morgangch/myftp · dépôt et README",
        "url": "https://github.com/morgangch/myftp"
      }
    ]
  },
  "cds-toolkit": {
    "id": "cds-toolkit",
    "title": "OVH CDS Toolkit",
    "domains": [
      "sre",
      "software"
    ],
    "kind": "Outillage CI/CD",
    "summary": "Explorer, lancer et suivre les workflows OVH CDS depuis VS Code.",
    "tags": [
      "TypeScript",
      "VS Code",
      "cdsctl"
    ],
    "details": [
      "Arborescence dépôts → workflows → runs ; lancement, arrêt, relance et consultation des logs.",
      "L’extension utilise le contexte et les permissions existants de cdsctl ; les releases VSIX sont automatisées par GitHub Actions."
    ],
    "state": "Extension publique · outillage développeur",
    "category": "projects",
    "facts": [],
    "related": [
      "sre",
      "software"
    ],
    "point": [
      660,
      465
    ],
    "url": "https://github.com/morgangch/OVH-CDS-VSCE",
    "sources": [
      {
        "label": "morgangch/OVH-CDS-VSCE · dépôt et README",
        "url": "https://github.com/morgangch/OVH-CDS-VSCE"
      }
    ]
  },
  "gitmir": {
    "id": "gitmir",
    "title": "GitMir-Maker",
    "domains": [
      "sre",
      "software"
    ],
    "kind": "Automatisation Git",
    "summary": "Automatiser la duplication d’un dépôt et la configuration de son workflow de mirroring.",
    "tags": [
      "Python",
      "API GitHub",
      "GitHub Actions"
    ],
    "details": [
      "Le script crée le dépôt cible, le clone, configure sa description et les variables du workflow via l’API GitHub."
    ],
    "state": "Script public · automatisation",
    "category": "projects",
    "facts": [],
    "related": [
      "sre",
      "software"
    ],
    "point": [
      435,
      485
    ],
    "url": "https://github.com/morgangch/GitMir-Maker",
    "sources": [
      {
        "label": "morgangch/GitMir-Maker · dépôt et README",
        "url": "https://github.com/morgangch/GitMir-Maker"
      }
    ]
  },
  "passssi": {
    "id": "passssi",
    "title": "PASSSSI",
    "domains": [
      "cyber",
      "infra",
      "systems",
      "software"
    ],
    "kind": "Sécurité / souveraineté",
    "summary": "Panel auto-hébergé de suivi des services et de l’infrastructure, décrit dans le dépôt.",
    "tags": [
      "React",
      "TypeScript",
      "C# / .NET",
      "Ansible"
    ],
    "details": [
      "Le README présente un dashboard, une API de collecte avec PostgreSQL et des workers Windows / Linux.",
      "Architecture annoncée : échanges HTTPS authentifiés, déploiement Docker Compose et playbooks Ansible. Aucune exploitation en production n’est attestée ici."
    ],
    "state": "Projet public · architecture décrite par le README",
    "category": "projects",
    "facts": [],
    "related": [
      "cyber",
      "infra",
      "systems",
      "software"
    ],
    "point": [
      90,
      305
    ],
    "url": "https://github.com/morgangch/PASSSSI",
    "sources": [
      {
        "label": "morgangch/PASSSSI · dépôt et README",
        "url": "https://github.com/morgangch/PASSSSI"
      }
    ]
  },
  "pyscope": {
    "id": "pyscope",
    "title": "PyScope",
    "domains": [
      "software"
    ],
    "kind": "Pédagogie / visualisation",
    "summary": "Visualiser l’exécution Python : pile d’appels, récursivité, objets et évolution de la mémoire.",
    "tags": [
      "React",
      "TypeScript",
      "Pyodide",
      "Web Worker"
    ],
    "details": [
      "CPython s’exécute dans le navigateur via Pyodide ; les instantanés peuvent être parcourus dans les deux sens.",
      "Le README recense 18 exercices distincts et 4 chapitres avec ateliers ; les autres chapitres sont encore à enrichir."
    ],
    "state": "Projet pédagogique public",
    "category": "projects",
    "facts": [],
    "related": [
      "software"
    ],
    "point": [
      115,
      405
    ],
    "url": "https://github.com/morgangch/PyScope",
    "sources": [
      {
        "label": "morgangch/PyScope · dépôt et README",
        "url": "https://github.com/morgangch/PyScope"
      }
    ]
  },
  "rtype": {
    "id": "rtype",
    "title": "R-Type",
    "domains": [
      "software",
      "infra"
    ],
    "kind": "Jeu / architecture réseau",
    "summary": "Jeu d’arcade multijoueur en C++ avec architecture ECS partagée entre client et serveur.",
    "tags": [
      "C++20",
      "ECS",
      "UDP",
      "CMake"
    ],
    "details": [
      "Le README décrit un serveur autoritaire, des salons multijoueurs et une séparation client / serveur / common.",
      "Le projet relie conception logicielle, traitement des entrées, état réseau et rendu."
    ],
    "state": "Projet collectif · dépôt public",
    "category": "projects",
    "facts": [],
    "related": [
      "software",
      "infra"
    ],
    "point": [
      65,
      465
    ],
    "url": "https://github.com/morgangch/rtype",
    "sources": [
      {
        "label": "morgangch/rtype · dépôt et README",
        "url": "https://github.com/morgangch/rtype"
      }
    ]
  }
};
