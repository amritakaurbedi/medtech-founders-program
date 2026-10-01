/* ============================================================
   Renders ANNOUNCEMENTS (js/announcements-data.js) into the
   popup modal on the home page, and wires the toggle button.
   ============================================================ */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('announcements-list');
    var empty = document.getElementById('announcements-empty');
    var modal = document.getElementById('announcements-modal');
    var toggleBtn = document.getElementById('announcements-toggle');
    var badge = document.getElementById('announcements-badge');
    if (!list || !modal || !toggleBtn) return;

    var items = (typeof ANNOUNCEMENTS !== 'undefined') ? ANNOUNCEMENTS : [];

    if (!items.length) {
      list.style.display = 'none';
      if (empty) empty.style.display = 'block';
      if (badge) badge.hidden = true;
      toggleBtn.style.animation = 'none';
    } else {
      var html = items.slice(0, 5).map(function (item, i) {
        return (
          '<li class="announcement-item">' +
            '<span class="announcement-date">' + item.date + '</span>' +
            '<span class="announcement-text">' + item.text + '</span>' +
            (i === 0 ? '<span class="announcement-new">New</span>' : '') +
          '</li>'
        );
      }).join('');
      list.innerHTML = html;
      if (badge) {
        badge.textContent = String(items.length);
        badge.hidden = false;
      }
    }

    function openModal() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.addEventListener('keydown', onKeydown);
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', onKeydown);
      toggleBtn.focus();
    }

    function onKeydown(e) {
      if (e.key === 'Escape') closeModal();
    }

    toggleBtn.addEventListener('click', openModal);

    var closeTriggers = modal.querySelectorAll('[data-announcements-close]');
    closeTriggers.forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
  });
})();
