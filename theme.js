(function () {
  var DATASET = 'data-theme';
  var STORE = 'gift.theme';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(STORE); } catch (e) { return null; }
  }
  function systemPref() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function resolve() {
    var s = stored();
    if (s === 'light' || s === 'dark') return s;
    return systemPref();
  }
  function apply(theme, persist) {
    var effective = theme === 'system' ? systemPref() : theme;
    root.setAttribute(DATASET, effective);
    if (persist) {
      try { if (theme === 'system') localStorage.removeItem(STORE); else localStorage.setItem(STORE, theme); } catch (e) {}
    }
    syncUI();
  }
  function onThemeToggleClick() {
    var next = resolve() === 'light' ? 'dark' : 'light';
    apply(next, true);
  }
  function onSegClick() {
    apply(this.getAttribute('data-theme'), true);
  }
  function syncUI() {
    var s = stored() || 'system';
    document.querySelectorAll('.theme-seg button').forEach(function (el) {
      var t = el.getAttribute('data-theme');
      var active = t === s;
      el.classList.toggle('is-active', active);
      if (active) el.setAttribute('aria-pressed', 'true'); else el.removeAttribute('aria-pressed');
    });
  }

  apply(resolve(), false);

  document.querySelectorAll('.theme-toggle').forEach(function (b) { b.addEventListener('click', onThemeToggleClick); });
  document.querySelectorAll('.theme-seg button').forEach(function (b) { b.addEventListener('click', onSegClick); });

  var mql = window.matchMedia('(prefers-color-scheme: light)');
  function onSystemChange() {
    if (!stored()) apply(resolve(), false);
  }
  if (mql.addEventListener) mql.addEventListener('change', onSystemChange);
  else if (mql.addListener) mql.addListener(onSystemChange);
})();