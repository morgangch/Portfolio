(() => {
  const root = document.querySelector('#atlas-map');
  if (!root) return;

  const viewport = root.querySelector('.gis-viewport');
  const world = root.querySelector('#map-world');
  const status = root.querySelector('.gis-status');
  const panel = root.querySelector('.place-panel');
  const title = panel.querySelector('.panel-title');
  const kind = panel.querySelector('.panel-kind');
  const copy = panel.querySelector('.panel-copy');
  const tags = panel.querySelector('.panel-tags');
  const link = panel.querySelector('.panel-link');
  const coordinates = panel.querySelector('.panel-coords');

  const places = {
    cyber: ['Territoire', 'Cybersécurité défensive', 'Contrôle d’accès, cloisonnement, détection et compréhension des chemins d’attaque.', ['Défense', 'Analyse', 'Réseau']],
    systems: ['Territoire', 'Systèmes / Linux', 'Le socle de la carte : Debian, services, provisioning et exploitation des environnements.', ['Linux', 'Debian', 'Systemd']],
    infra: ['Territoire', 'Infrastructure / cloud', 'Machines physiques, inventaire, réseau, conteneurs et plateformes cloud.', ['OpenStack', 'Netbox', 'Réseau']],
    sre: ['Territoire', 'DevOps / SRE', 'Le corridor entre construction et exploitation : CI/CD, MCO, automatisation et observabilité.', ['CI/CD', 'MCO', 'Observabilité']],
    software: ['Territoire', 'Software engineering', 'Backend, API, modèles de données, interfaces et outils destinés aux développeurs.', ['Python', 'TypeScript', 'C#']],
    resurgence: ['Projet majeur', 'Projet Résurgence', 'Plateforme en production située au croisement du software, des systèmes, de l’infrastructure, du SRE et de la sécurité.', ['100+ endpoints', '10+ services', '~90 joueurs'], 'projets.html#resurgence'],
    ovhcloud: ['Expérience', 'OVHcloud · OPCP', 'SRE en datacenter : MCO de 183 machines physiques, provisioning Debian, inventaire et migration CI/CD.', ['Systèmes', 'Infrastructure', 'SRE']],
    isalyx: ['Expérience', 'Isalyx Group', 'Développement C#/.NET WPF et automatisation des sauvegardes Docker et données avec Rsync.', ['Software', 'C#', 'Automation']],
    epitech: ['Formation', 'Epitech Montpellier', 'Programme Grande École puis Master of Science, au point de départ du parcours présenté.', ['2023—2028', 'RNCP 7']],
    privescord: ['Projet défensif', 'PrivEscCord', 'Audit en lecture seule de configurations Discord avec onze contrôles classés par criticité.', ['Python', 'Audit', '11 contrôles']],
    ctf: ['Pratique offensive', 'CTF', 'Cycom CTF : 4e en 2024 et 5e en 2025. GCC CTF 2024 : 5e.', ['Cycom', 'GCC', 'Write-ups']],
    vscode: ['Outil', 'Extension VS Code', 'Suivi des quotas de Claude, Codex et OpenCode via JSON-RPC, SQLite et backoff exponentiel.', ['TypeScript', 'JSON-RPC']],
    linux: ['Compétence', 'Linux / Debian', 'Administration, services systemd et provisioning automatisé avec preseed.', ['Systems']],
    docker: ['Compétence', 'Docker / Systemd', 'Conteneurisation et exploitation de services sur VPS Linux.', ['Infrastructure', 'SRE']],
    observability: ['Compétence', 'Observabilité', 'Pages de supervision réseau et sécurité ; pratique de Grafana et Prometheus.', ['SRE', 'Security']],
    backend: ['Compétence', 'Backend / API', 'Flask, SQLAlchemy, PostgreSQL, Alembic et conception d’API REST.', ['Software']],
    security: ['Compétence', 'Contrôle d’accès', 'JWT, scopes, WireGuard, UFW, TLS et limitation de l’exposition des services.', ['Cybersecurity']]
  };

  let scale = 1;
  let x = 0;
  let y = 0;
  let dragging = false;
  let moved = false;
  let pointer = { x: 0, y: 0 };

  function renderTransform() {
    x = Math.min(250 * scale, Math.max(900 - (1150 * scale), x));
    y = Math.min(180 * scale, Math.max(620 - (800 * scale), y));
    world.setAttribute('transform', `translate(${x} ${y}) scale(${scale})`);
    const detailed = scale >= 1.45;
    root.classList.toggle('is-detailed', detailed);
    root.querySelectorAll('.skill-pois [data-place], [data-place].zoom-detail').forEach(place => {
      const layerHidden = place.closest('[data-layer-group]')?.hidden;
      place.setAttribute('tabindex', detailed && !layerHidden ? '0' : '-1');
    });
    root.dataset.zoom = scale.toFixed(2);
    status.textContent = `Vue interactive · zoom ${scale.toFixed(1).replace('.', ',')}×`;
  }

  function zoom(delta) {
    const next = Math.min(2.6, Math.max(0.9, scale * delta));
    if (next === scale) return;
    const centerX = 450;
    const centerY = 310;
    x = centerX - (centerX - x) * (next / scale);
    y = centerY - (centerY - y) * (next / scale);
    scale = next;
    renderTransform();
  }

  function selectPlace(id, focusPanel = false) {
    const data = places[id];
    if (!data) return;
    root.querySelectorAll('[data-place].selected').forEach(el => el.classList.remove('selected'));
    root.querySelectorAll(`[data-place="${id}"]`).forEach(el => el.classList.add('selected'));
    kind.textContent = data[0];
    title.textContent = data[1];
    copy.textContent = data[2];
    tags.replaceChildren(...data[3].map(value => {
      const item = document.createElement('li');
      item.textContent = value;
      return item;
    }));
    if (data[4]) {
      link.href = data[4];
      link.hidden = false;
    } else {
      link.hidden = true;
    }
    coordinates.textContent = `ATLAS MG · ${id.toUpperCase()}`;
    panel.classList.add('open');
    if (focusPanel) title.focus?.();
  }

  root.querySelectorAll('[data-place]').forEach(place => {
    place.addEventListener('click', event => {
      if (!moved) selectPlace(event.currentTarget.dataset.place);
    });
    place.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectPlace(event.currentTarget.dataset.place);
      }
    });
  });

  root.querySelectorAll('.layer-btn').forEach(button => {
    button.addEventListener('click', () => {
      const active = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
      root.querySelectorAll(`[data-layer-group="${button.dataset.layer}"]`).forEach(layer => {
        layer.hidden = !active;
      });
      renderTransform();
      status.textContent = `${button.textContent.trim()} ${active ? 'affichées' : 'masquées'}`;
    });
  });

  viewport.addEventListener('pointerdown', event => {
    dragging = true;
    moved = false;
    pointer = { x: event.clientX, y: event.clientY };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!dragging) return;
    const ratio = 900 / viewport.clientWidth;
    const dx = (event.clientX - pointer.x) * ratio;
    const dy = (event.clientY - pointer.y) * ratio;
    if (Math.abs(dx) + Math.abs(dy) > 1) moved = true;
    x += dx;
    y += dy;
    pointer = { x: event.clientX, y: event.clientY };
    renderTransform();
  });
  const stopDrag = event => {
    dragging = false;
    viewport.classList.remove('dragging');
    if (event.pointerId !== undefined && viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    setTimeout(() => { moved = false; }, 0);
  };
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    zoom(event.deltaY < 0 ? 1.16 : 0.86);
  }, { passive: false });
  viewport.addEventListener('keydown', event => {
    const step = 32;
    if (event.key === '+' || event.key === '=') zoom(1.2);
    else if (event.key === '-') zoom(0.82);
    else if (event.key === 'ArrowLeft') x += step;
    else if (event.key === 'ArrowRight') x -= step;
    else if (event.key === 'ArrowUp') y += step;
    else if (event.key === 'ArrowDown') y -= step;
    else if (event.key === 'Home') { scale = 1; x = 0; y = 0; }
    else if (event.key === 'Escape') {
      panel.classList.remove('open');
      root.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
      return;
    } else return;
    event.preventDefault();
    renderTransform();
  });

  root.querySelectorAll('[data-map-action]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.mapAction === 'zoom-in') zoom(1.25);
    if (button.dataset.mapAction === 'zoom-out') zoom(0.8);
    if (button.dataset.mapAction === 'reset') {
      scale = 1; x = 0; y = 0; renderTransform();
    }
  }));
  panel.querySelector('.panel-close').addEventListener('click', () => {
    panel.classList.remove('open');
    root.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
  });

  renderTransform();
})();
