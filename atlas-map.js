(() => {
  const root = document.querySelector('#atlas-map');
  if (!root || !window.ATLAS_DATA) return;
  const places = window.ATLAS_DATA;
  const viewport = root.querySelector('.gis-viewport');
  const world = root.querySelector('#map-world');
  const status = root.querySelector('.gis-status');
  const panel = root.querySelector('.place-panel');
  const browser = root.querySelector('.atlas-browser');
  const search = root.querySelector('#atlas-search');
  const domain = root.querySelector('#atlas-domain');
  const category = root.querySelector('#atlas-category');
  const results = root.querySelector('.atlas-results');
  const more = root.querySelector('.atlas-more');
  let scale = 1, x = 0, y = 0, selected = null, limit = 9;
  let drag = null, moved = false;
  const activeLayers = new Set(['projects', 'experiences']);
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const matches = data => (!domain.value || data.domains.includes(domain.value)) &&
    (!category.value || data.category === category.value) &&
    normalize([data.title, data.summary, data.kind, ...data.tags, ...data.details].join(' ')).includes(normalize(search.value.trim()));

  // New secondary landmarks inherit the existing cartographic grammar.
  const ns = 'http://www.w3.org/2000/svg';
  Object.values(places).filter(data => data.point).forEach(data => {
    const group = document.createElementNS(ns, 'g');
    group.setAttribute('class', 'poi secondary zoom-detail added-poi');
    group.dataset.place = data.id;
    group.setAttribute('role', 'button');
    group.setAttribute('aria-label', `${data.title}, ${data.kind}`);
    const [px, py] = data.point;
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', px); circle.setAttribute('cy', py); circle.setAttribute('r', 6);
    const label = document.createElementNS(ns, 'text');
    label.setAttribute('x', px + 12); label.setAttribute('y', py - 4);
    label.textContent = data.title.toUpperCase();
    group.append(circle, label);
    root.querySelector('[data-layer-group="projects"]').append(group);
  });
  // An SVG with interactive descendants must expose them to assistive technology.
  root.querySelector('.gis-canvas').setAttribute('role', 'group');
  const points = [...root.querySelectorAll('[data-place]')];
  points.filter(point => point.classList.contains('poi')).forEach(point => {
    const bounds = point.getBBox();
    const hit = document.createElementNS(ns, 'rect');
    hit.setAttribute('class', 'poi-hit');
    hit.setAttribute('x', bounds.x - 4); hit.setAttribute('y', bounds.y - 4);
    hit.setAttribute('width', Math.max(16, bounds.width + 8));
    hit.setAttribute('height', Math.max(16, bounds.height + 8));
    point.prepend(hit);
  });
  const routes = document.createElementNS(ns, 'g');
  routes.setAttribute('class', 'selection-routes');
  routes.setAttribute('aria-hidden', 'true');
  world.insertBefore(routes, root.querySelector('.poi-layer'));
  function pointFor(id) {
    const node = points.find(point => point.dataset.place === id);
    if (!node || node.hasAttribute('hidden') || node.closest('[data-layer-group][hidden]')) return null;
    const bounds = node.getBBox();
    const marker = node.querySelector('circle, rect:not(.poi-hit), path');
    const b = marker ? marker.getBBox() : bounds;
    return [b.x + b.width / 2, b.y + b.height / 2];
  }
  function renderTransform() {
    x = Math.min(250 * scale, Math.max(900 - 1150 * scale, x));
    y = Math.min(180 * scale, Math.max(620 - 800 * scale, y));
    world.setAttribute('transform', `translate(${x} ${y}) scale(${scale})`);
    root.classList.toggle('is-detailed', scale >= 1.45);
    root.dataset.zoom = scale.toFixed(2);
    points.forEach(point => {
      const data = places[point.dataset.place];
      const layer = point.closest('[data-layer-group]');
      const enabled = !layer || activeLayers.has(layer.dataset.layerGroup);
      point.toggleAttribute('hidden', !enabled || !matches(data));
      const detail = point.matches('.zoom-detail') || point.closest('.zoom-detail');
      const visible = !point.hasAttribute('hidden') && (!detail || scale >= 1.45);
      point.setAttribute('tabindex', visible ? '0' : '-1');
      point.setAttribute('aria-hidden', String(!visible));
    });
    routes.replaceChildren();
    if (selected) {
      const start = pointFor(selected);
      if (start) places[selected].related.forEach(id => {
        const end = pointFor(id);
        const node = points.find(p => p.dataset.place === id);
        if (!end || node.getAttribute('aria-hidden') === 'true') return;
        const line = document.createElementNS(ns, 'path');
        line.setAttribute('d', `M${start.join(' ')}L${end.join(' ')}`);
        routes.append(line);
      });
    }
    status.textContent = `Zoom ${scale.toFixed(1).replace('.', ',')}× · ${points.filter(p => p.getAttribute('aria-hidden') === 'false').length} repères visibles`;
  }
  function zoom(factor) {
    const next = Math.min(2.6, Math.max(.9, scale * factor));
    x = 450 - (450 - x) * next / scale;
    y = 310 - (310 - y) * next / scale;
    scale = next; renderTransform();
  }
  function selectPlace(id, focus = false, updateURL = true) {
    const data = places[id];
    if (!data) return;
    selected = id;
    if (focus) {
      if (!matches(data)) { search.value = domain.value = category.value = ''; limit = 9; renderResults(); }
      if (data.category !== 'territories' && !activeLayers.has(data.category)) {
        activeLayers.add(data.category);
        const button = root.querySelector(`[data-layer="${data.category}"]`);
        button?.setAttribute('aria-pressed', 'true'); button?.classList.add('active');
        root.querySelector(`[data-layer-group="${data.category}"]`)?.removeAttribute('hidden');
      }
      const node = points.find(point => point.dataset.place === id);
      if (node) {
        if (node.matches('.zoom-detail') || node.closest('.zoom-detail')) scale = Math.max(scale, 1.5);
        renderTransform();
        const center = pointFor(id);
        if (center) { x = 450 - center[0] * scale; y = 310 - center[1] * scale; }
      }
    }
    points.forEach(p => p.classList.toggle('selected', p.dataset.place === id));
    root.querySelectorAll('.atlas-result').forEach(p => p.classList.toggle('selected', p.dataset.place === id));
    panel.querySelector('.panel-kind').textContent = data.kind;
    const title = panel.querySelector('.panel-title');
    title.textContent = data.title; title.tabIndex = -1;
    panel.querySelector('.panel-copy').textContent = data.summary;
    panel.querySelector('.panel-tags').replaceChildren(...data.tags.map(tag => el('li', tag)));
    const link = panel.querySelector('.panel-link');
    link.hidden = !data.url;
    if (data.url) { link.href = data.url; link.textContent = data.url.startsWith('https://github.com/') ? 'Explorer le dépôt →' : 'Ouvrir l’étude de cas →'; }
    const content = panel.querySelector('.panel-content');
    content.replaceChildren();
    if (data.period || data.state) content.append(el('p', [data.period, data.state].filter(Boolean).join(' · '), 'panel-state'));
    if (data.facts.length) {
      const facts = el('dl', '', 'panel-facts');
      data.facts.forEach(([number, label]) => { const item = el('div'); item.append(el('dt', number), el('dd', label)); facts.append(item); });
      content.append(facts);
    }
    data.details.forEach(text => content.append(el('p', text)));
    if (data.related.length) {
      content.append(el('h4', 'Explorer les connexions'));
      const related = el('div', '', 'panel-related');
      data.related.forEach(id => {
        const target = places[id];
        if (!target) return;
        const button = el('button', target.title);
        button.type = 'button';
        button.addEventListener('click', () => selectPlace(id, true));
        related.append(button);
      });
      content.append(related);
    }
    if (data.sources.length) {
      content.append(el('h4', 'Sources'));
      data.sources.forEach(source => { const a = el('a', source.label, 'panel-source'); a.href = source.url; content.append(a); });
    }
    panel.querySelector('.panel-coords').textContent = `ATLAS MG · ${id.toUpperCase()} · 02.10.2026`;
    panel.classList.add('open');
    if (updateURL) history.replaceState(null, '', `#atlas/${id}`);
    renderTransform();
    if (focus) { panel.scrollIntoView({block:'nearest', behavior:'auto'}); title.focus({preventScroll:true}); }
  }
  function renderResults() {
    const entries = Object.values(places).filter(matches);
    root.querySelector('.atlas-count').textContent = `${entries.length} / ${Object.keys(places).length} fiches`;
    results.replaceChildren();
    entries.slice(0, limit).forEach(data => {
      const button = el('button', '', 'atlas-result');
      button.type = 'button'; button.dataset.place = data.id;
      button.classList.toggle('selected', data.id === selected);
      button.append(el('span', data.kind, 'meta'), el('strong', data.title), el('span', data.summary), el('small', data.tags.join(' · ')));
      button.addEventListener('click', () => selectPlace(data.id, true));
      results.append(button);
    });
    if (!entries.length) results.append(el('p', 'Aucun repère trouvé. Essayez un autre terme ou effacez les filtres.'));
    more.hidden = entries.length <= limit;
    more.textContent = `Afficher davantage (${entries.length - Math.min(entries.length, limit)} restantes)`;
    renderTransform();
  }
  points.forEach(point => {
    point.addEventListener('click', () => { if (!moved) selectPlace(point.dataset.place); });
    point.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); selectPlace(point.dataset.place); }
    });
  });
  root.querySelectorAll('.layer-btn').forEach(button => button.addEventListener('click', () => {
    const layer = button.dataset.layer;
    if (activeLayers.has(layer)) activeLayers.delete(layer); else activeLayers.add(layer);
    button.setAttribute('aria-pressed', String(activeLayers.has(layer)));
    button.classList.toggle('active', activeLayers.has(layer));
    // Turning on skills also reveals their zoom-dependent landmarks.
    if (layer === 'skills' && activeLayers.has(layer) && scale < 1.45) zoom(1.5 / scale);
    root.querySelectorAll(`[data-layer-group="${layer}"]`).forEach(group => { group.toggleAttribute('hidden', !activeLayers.has(layer)); });
    renderTransform();
  }));
  [search, domain, category].forEach(input => input.addEventListener('input', () => { limit = 9; renderResults(); }));
  more.addEventListener('click', () => { limit += 9; renderResults(); });
  root.querySelector('#atlas-clear').addEventListener('click', () => { search.value = domain.value = category.value = ''; limit = 9; renderResults(); });
  viewport.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button')) return;
    moved = false; drag = {id:event.pointerId, x:event.clientX, y:event.clientY, startX:event.clientX, startY:event.clientY};
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    if (!moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 5) return;
    moved = true; viewport.setPointerCapture(event.pointerId); viewport.classList.add('dragging');
    const rect = root.querySelector('.gis-canvas').getBoundingClientRect();
    const ratio = Math.max(900 / rect.width, 620 / rect.height);
    x += (event.clientX - drag.x) * ratio; y += (event.clientY - drag.y) * ratio;
    drag.x = event.clientX; drag.y = event.clientY; renderTransform();
  });
  function stopDrag(event) {
    drag = null; viewport.classList.remove('dragging');
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    setTimeout(() => { moved = false; }, 0);
  }
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
  viewport.addEventListener('wheel', event => { event.preventDefault(); zoom(event.deltaY < 0 ? 1.16 : .86); }, {passive:false});
  function close() {
    panel.classList.remove('open'); selected = null;
    root.querySelectorAll('.selected').forEach(node => node.classList.remove('selected'));
    history.replaceState(null, '', '#territoires'); renderTransform(); viewport.focus({preventScroll:true});
  }
  viewport.addEventListener('keydown', event => {
    if (event.key === '+' || event.key === '=') zoom(1.2);
    else if (event.key === '-') zoom(.82);
    else if (event.key === 'ArrowLeft') x += 32;
    else if (event.key === 'ArrowRight') x -= 32;
    else if (event.key === 'ArrowUp') y += 32;
    else if (event.key === 'ArrowDown') y -= 32;
    else if (event.key === 'Home') { scale = 1; x = y = 0; }
    else if (event.key === 'Escape') close();
    else return;
    event.preventDefault(); renderTransform();
  });
  panel.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  root.querySelectorAll('[data-map-action]').forEach(button => button.addEventListener('click', () => {
    if (button.dataset.mapAction === 'zoom-in') zoom(1.25);
    else if (button.dataset.mapAction === 'zoom-out') zoom(.8);
    else { scale = 1; x = y = 0; renderTransform(); }
  }));
  panel.querySelector('.panel-close').addEventListener('click', close);
  function restoreHash() {
    const id = location.hash.replace(/^#atlas\//, '');
    if (places[id]) { selectPlace(id, false, false); root.scrollIntoView({block:'start',behavior:'auto'}); }
  }
  window.addEventListener('hashchange', restoreHash);
  browser.hidden = false; renderResults(); restoreHash();
})();
