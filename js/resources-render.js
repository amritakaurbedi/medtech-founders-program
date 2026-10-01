/* ============================================================
   Renders the resources page from js/resources-data.js
   You should not need to edit this file — to add or change
   resources, edit js/resources-data.js instead.
   ============================================================ */

(function () {
  var TYPE_LABELS = {
    pdf:    'PDF',
    doc:    'Doc',
    sheet:  'Sheet',
    slides: 'Slides',
    form:   'Form',
    link:   'Link',
    video:  'Video',
    folder: 'Folder'
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function isExternal(url) {
    return /^https?:\/\//i.test(url);
  }

  function buildCard(item) {
    var ready = !!item.url;
    var card = el(ready ? 'a' : 'div', 'resource-link' + (ready ? '' : ' resource-link-pending'));

    if (ready) {
      card.href = item.url;
      if (isExternal(item.url)) {
        card.target = '_blank';
        card.rel = 'noopener';
      }
    }

    var head = el('div', 'resource-link-head');

    var type = item.type || 'link';
    var badge = el('span', 'type-badge type-' + type, TYPE_LABELS[type] || 'Link');
    head.appendChild(badge);

    if (item.isNew && ready) {
      head.appendChild(el('span', 'new-badge', 'New'));
    }
    if (!ready) {
      head.appendChild(el('span', 'pending-badge', 'Coming soon'));
    }

    card.appendChild(head);
    card.appendChild(el('h3', null, item.title));
    card.appendChild(el('p', null, item.desc));

    if (ready) {
      var arrow = el('span', 'resource-arrow', '\u2192');
      arrow.setAttribute('aria-hidden', 'true');
      card.appendChild(arrow);
    }

    // Data used by the search filter
    card.dataset.search = (item.title + ' ' + item.desc + ' ' + type).toLowerCase();

    return card;
  }

  function render(filterText) {
    var host = document.getElementById('resource-sections');
    if (!host) return;

    host.innerHTML = '';
    var query = (filterText || '').trim().toLowerCase();
    var totalShown = 0;

    RESOURCE_SECTIONS.forEach(function (section) {
      var allItems = RESOURCES.filter(function (r) { return r.section === section.id; });

      // Section has no resources yet (e.g. commented out in the data
      // file) — show a "Coming soon" placeholder instead of skipping it,
      // but hide it while actively searching since it has nothing to match.
      if (!allItems.length) {
        if (query) return;

        var comingWrap = el('div', 'resource-category');
        comingWrap.id = 'section-' + section.id;

        var comingHeader = el('div', 'resource-category-head');
        comingHeader.appendChild(el('h2', null, section.label));
        if (section.blurb) comingHeader.appendChild(el('p', null, section.blurb));
        comingWrap.appendChild(comingHeader);

        comingWrap.appendChild(el('p', 'resource-coming-soon', 'Coming soon.'));
        host.appendChild(comingWrap);
        return;
      }

      var items = allItems.filter(function (r) {
        if (!query) return true;
        return (r.title + ' ' + r.desc + ' ' + (r.type || '')).toLowerCase().indexOf(query) !== -1;
      });

      if (!items.length) return;
      totalShown += items.length;

      var wrap = el('div', 'resource-category');
      wrap.id = 'section-' + section.id;

      var header = el('div', 'resource-category-head');
      header.appendChild(el('h2', null, section.label));
      if (section.blurb) header.appendChild(el('p', null, section.blurb));
      wrap.appendChild(header);

      var grid = el('div', 'resource-grid');
      items.forEach(function (item) { grid.appendChild(buildCard(item)); });
      wrap.appendChild(grid);

      host.appendChild(wrap);
    });

    var empty = document.getElementById('resource-empty');
    if (empty) empty.style.display = totalShown ? 'none' : 'block';
  }

  function buildJumpLinks() {
    var nav = document.getElementById('resource-jump');
    if (!nav) return;

    RESOURCE_SECTIONS.forEach(function (section) {
      var link = el('a', 'jump-link', section.label);
      link.href = '#section-' + section.id;
      nav.appendChild(link);
    });
  }

  // The resources render once the person passes the access gate,
  // but building them up front is harmless since the container is hidden.
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof RESOURCES === 'undefined' || typeof RESOURCE_SECTIONS === 'undefined') return;

    buildJumpLinks();
    render('');

    var search = document.getElementById('resource-search');
    if (search) {
      search.addEventListener('input', function () {
        render(search.value);
      });
    }
  });
})();
