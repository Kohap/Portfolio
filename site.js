var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var intro = document.querySelector('.intro');
    if (intro) {
      if (reduceMotion) {
        intro.remove();
      } else {
        setTimeout(function () { intro.classList.add('done'); }, 720);
        setTimeout(function () { intro.remove(); }, 1320);
      }
    }

    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); ro.unobserve(entry.target); }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { ro.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }

    var signal = document.getElementById('signal');
    if (signal && 'IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          signal.classList.toggle('paused', !entry.isIntersecting);
        });
      }, { threshold: 0.05 });
      so.observe(signal);
    }

    var tickLabel = document.getElementById('tick-label');
    if (tickLabel) {
      tickLabel.textContent = 'SCANNING';
    }

    /* Terminal typing effect */
    var ttyText = document.getElementById('tty-text');
    if (ttyText && !reduceMotion) {
      var cmds = ['forge test --fork latest', 'errorlens compile --report', 'anchor audit --svm'];
      var ci = 0, c = 0, deleting = false;
      (function type() {
        var full = cmds[ci];
        ttyText.textContent = full.slice(0, c);
        if (!deleting) {
          if (c < full.length) { c++; setTimeout(type, 55); }
          else { deleting = true; setTimeout(type, 1500); }
        } else {
          if (c > 0) { c--; setTimeout(type, 20); }
          else { deleting = false; ci = (ci + 1) % cmds.length; setTimeout(type, 350); }
        }
      })();
    } else if (ttyText) {
      ttyText.textContent = 'forge test --fork latest';
    }

    /* Active nav link — only on click */
    document.querySelectorAll('.navlinks a, .mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.querySelectorAll('.navlinks a, .mobile-menu a').forEach(function (x) { x.classList.remove('is-active'); });
        a.classList.add('is-active');
      });
    });

    /* Peek nav removed — nav stays visible */

    /* Mobile menu */
    var menuToggle = document.querySelector('.menu-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function () {
        var open = mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Interactive report builder */
    var sevData = {
      low: {
        tag: 'Report excerpt · LOW',
        sev: 'LOW — edge-case risk with limited impact or likelihood, still documented for completeness.',
        report: 'SEVERITY: LOW\nTITLE: Edge-case risk in non-critical path\nIMPACT: Limited; affects a rarely used branch.\nEVIDENCE: See reproduction steps below.\nREMEDIATION: Guard the affected branch.\nVERIFICATION: Retest after patch.\n— Generated with ErrorLens (illustrative sample)'
      },
      med: {
        tag: 'Report excerpt · MEDIUM',
        sev: 'MEDIUM — user-facing risk in a non-critical path, validated and impact-confirmed.',
        report: 'SEVERITY: MEDIUM\nTITLE: User-facing risk in a secondary flow\nIMPACT: Moderate; requires specific user action.\nEVIDENCE: Reproduction steps + test output.\nREMEDIATION: Enforce the missing invariant.\nVERIFICATION: Retest confirms closure.\n— Generated with ErrorLens (illustrative sample)'
      },
      high: {
        tag: 'Report excerpt · HIGH',
        sev: 'HIGH — material risk to funds or protocol invariants under realistic conditions, validated by a fork-based PoC.',
        report: 'SEVERITY: HIGH\nTITLE: Material risk to funds / invariants\nIMPACT: Direct loss under realistic conditions.\nEVIDENCE: Fork-based PoC + test output.\nREMEDIATION: Concrete fix path provided.\nVERIFICATION: Retest notes confirm closure.\n— Generated with ErrorLens (illustrative sample)'
      },
      crit: {
        tag: 'Report excerpt · CRITICAL',
        sev: 'CRITICAL — direct loss of funds or irreversible protocol breakage; severity confirmed after validation.',
        report: 'SEVERITY: CRITICAL\nTITLE: Critical loss of funds / breakage\nIMPACT: Direct and irreversible.\nEVIDENCE: Reproduction steps + affected trust boundary.\nREMEDIATION: Block the path immediately, then patch.\nVERIFICATION: Retest before redeploy.\n— Generated with ErrorLens (illustrative sample)'
      }
    };
    var sevBtns = document.querySelectorAll('.sev');
    var dlSev = document.getElementById('dl-sev');
    var excerptTag = document.getElementById('excerpt-tag');
    var copyReport = document.querySelector('.copy-report');
    var reportDone = document.getElementById('report-done');
    var activeSev = 'high';

    sevBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeSev = btn.dataset.sev;
        sevBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        dlSev.textContent = sevData[activeSev].sev;
        excerptTag.textContent = sevData[activeSev].tag;
        copyReport.dataset.sev = activeSev;
      });
    });

    if (copyReport) {
      copyReport.addEventListener('click', function () {
        navigator.clipboard.writeText(sevData[activeSev].report).then(function () {
          reportDone.textContent = 'Copied';
          setTimeout(function () { reportDone.textContent = ''; }, 1600);
        }).catch(function () {
          reportDone.textContent = 'Copy failed';
        });
      });
    }

    /* Availability badge */
    var availBadge = document.getElementById('avail-badge');
    if (availBadge) {
      var dataUrl = 'availability.json?t=' + Date.now();
      fetch(dataUrl, { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (data) {
        if (data && data.status === 'open') {
          availBadge.innerHTML = '<b class="avail-dot"></b>' + data.label;
          availBadge.style.color = 'var(--lime)';
        }
      }).catch(function () {});
    }

    var EMAIL = 'kohape0@gmail.com';
    var emailLink = document.querySelector('.email-link');
    if (emailLink) { emailLink.setAttribute('href', 'mailto:' + EMAIL); }
    document.querySelectorAll('.social[href*="mailto:"]').forEach(function (a) { a.setAttribute('href', 'mailto:' + EMAIL); });
    var copyEmail = document.querySelector('.copy-email');
    if (copyEmail) {
      copyEmail.addEventListener('click', function () {
        var btn = this;
        navigator.clipboard.writeText(EMAIL).then(function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = 'Copy email'; }, 1600);
        }).catch(function () {
          btn.textContent = 'Email above';
        });
      });
    }