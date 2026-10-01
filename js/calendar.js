/* ============================================================
   Calendar page — view switching (Month / Week / List)

   TO CHANGE THE CALENDAR:
   Replace CALENDAR_ID below with a different Google Calendar ID,
   and update the links in calendar.html to match.
   ============================================================ */

(function () {
  var CALENDAR_ID =
    'c_476aed6230f6bbedbddf56e483f6195bf8f48238fab3dee8f6fd5d2731794f18%40group.calendar.google.com';

  var TIMEZONE = 'America%2FLos_Angeles';

  function buildSrc(mode) {
    return 'https://calendar.google.com/calendar/embed' +
      '?src=' + CALENDAR_ID +
      '&ctz=' + TIMEZONE +
      '&mode=' + mode +
      '&showTitle=0' +
      '&showPrint=0' +
      '&showCalendars=0' +
      '&showTz=0' +
      '&bgcolor=%230b1024';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('cal-iframe');
    var buttons = document.querySelectorAll('.cal-view-btn');

    if (!iframe || !buttons.length) return;

    function setView(mode) {
      iframe.src = buildSrc(mode);
      buttons.forEach(function (btn) {
        var active = btn.dataset.view === mode;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setView(btn.dataset.view);
      });
    });

    // On narrow screens the month grid is unreadable — open in list view instead.
    if (window.matchMedia('(max-width: 700px)').matches) {
      setView('AGENDA');
    }
  });
})();
