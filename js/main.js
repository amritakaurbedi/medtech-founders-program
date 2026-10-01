// Mobile nav toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is tapped (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Nav dropdown (About > Program / Team)
  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    var dropdownToggle = dropdown.querySelector('.nav-dropdown-toggle');
    if (!dropdownToggle) return;

    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-dropdown.open').forEach(function (dropdown) {
      dropdown.classList.remove('open');
      var dropdownToggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown.open').forEach(function (dropdown) {
      dropdown.classList.remove('open');
      var dropdownToggle = dropdown.querySelector('.nav-dropdown-toggle');
      if (dropdownToggle) dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
