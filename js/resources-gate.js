/* ============================================================
   Resources page access gate.
   You should not need to edit this file — to add or remove
   people, or change the passcode, edit js/allowed-emails.js.
   ============================================================ */

(function () {
  var STORAGE_KEY = 'mfp_resources_access';

  function normalize(email) {
    return String(email || '').trim().toLowerCase();
  }

  function passcodeRequired() {
    return typeof ACCESS_PASSCODE_HASH !== 'undefined' &&
           ACCESS_PASSCODE_HASH &&
           ACCESS_PASSCODE_HASH.length > 0;
  }

  function sha256(text) {
    if (!window.crypto || !window.crypto.subtle) {
      return Promise.resolve(null);
    }
    var data = new TextEncoder().encode(text);
    return window.crypto.subtle.digest('SHA-256', data).then(function (buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    });
  }

  function emailAllowed(email) {
    var e = normalize(email);
    if (!e || e.indexOf('@') === -1) return false;

    var list = (typeof ALLOWED_EMAILS !== 'undefined') ? ALLOWED_EMAILS : [];
    for (var i = 0; i < list.length; i++) {
      if (normalize(list[i]) === e) return true;
    }

    var domains = (typeof ALLOWED_DOMAINS !== 'undefined') ? ALLOWED_DOMAINS : [];
    var domain = e.split('@')[1];
    for (var j = 0; j < domains.length; j++) {
      if (normalize(domains[j]) === domain) return true;
    }

    return false;
  }

  function showResources(email) {
    var gate = document.getElementById('resource-gate');
    var content = document.getElementById('resource-content');
    var who = document.getElementById('signed-in-as');

    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';
    if (who && email) who.textContent = email;
  }

  function signOut() {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch (err) {}
    window.location.reload();
  }

  function showError(node, message) {
    if (!node) return;
    node.textContent = message;
    node.style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('gate-form');
    var emailInput = document.getElementById('gate-email');
    var passInput = document.getElementById('gate-pass');
    var passField = document.getElementById('gate-pass-field');
    var error = document.getElementById('gate-error');
    var signOutBtn = document.getElementById('sign-out');

    // Hide the passcode field entirely if no passcode is configured
    if (!passcodeRequired() && passField) {
      passField.style.display = 'none';
      if (passInput) passInput.removeAttribute('required');
    }

    // Restore access if already verified this browser session
    try {
      var saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved && emailAllowed(saved)) {
        showResources(saved);
      }
    } catch (err) {
      // sessionStorage unavailable (e.g. opened directly via file://).
      // The gate still works; the person just re-enters each visit.
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var email = emailInput ? emailInput.value : '';
        var pass = passInput ? passInput.value : '';

        if (!emailAllowed(email)) {
          showError(error, "That email isn't on the access list. If you're a program member, contact us and we'll add you.");
          if (emailInput) { emailInput.focus(); emailInput.select(); }
          return;
        }

        if (!passcodeRequired()) {
          var cleanA = normalize(email);
          try { sessionStorage.setItem(STORAGE_KEY, cleanA); } catch (err2) {}
          if (error) error.style.display = 'none';
          showResources(cleanA);
          return;
        }

        sha256(pass).then(function (digest) {
          if (digest === null) {
            showError(error, 'Your browser blocked the security check. Try a different browser, or contact us for help.');
            return;
          }

          if (digest !== ACCESS_PASSCODE_HASH) {
            showError(error, "That passcode isn't right. Check with a coordinator if you need it again.");
            if (passInput) { passInput.focus(); passInput.select(); }
            return;
          }

          var cleanB = normalize(email);
          try { sessionStorage.setItem(STORAGE_KEY, cleanB); } catch (err3) {}
          if (error) error.style.display = 'none';
          showResources(cleanB);
        });
      });
    }

    if (signOutBtn) {
      signOutBtn.addEventListener('click', signOut);
    }
  });
})();
