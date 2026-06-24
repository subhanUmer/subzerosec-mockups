/* SubZeroSec — shared interactions */
(function () {
  // Scroll-shrink / darken navbar
  var hdr = document.querySelector('header');
  function onScroll() { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var burger = document.querySelector('.burger');
  var mnav = document.querySelector('.mnav');
  var backdrop = document.querySelector('.mbackdrop');
  function setMenu(open) {
    if (!mnav) return;
    mnav.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(!mnav.classList.contains('open')); });
  if (backdrop) backdrop.addEventListener('click', function () { setMenu(false); });
  if (mnav) mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Sliding highlight pill that follows hovered link, resting on the active one
  var navlinks = document.querySelector('.nav-links');
  var pill = document.querySelector('.navpill');
  if (navlinks && pill) {
    var links = Array.prototype.slice.call(navlinks.querySelectorAll('.navlink'));
    var activeLink = navlinks.querySelector('.navlink.active');
    function movePill(el) {
      if (!el) { pill.style.opacity = '0'; return; }
      var r = el.getBoundingClientRect(), pr = navlinks.getBoundingClientRect();
      pill.style.left = (r.left - pr.left) + 'px';
      pill.style.width = r.width + 'px';
      pill.style.opacity = '1';
    }
    links.forEach(function (a) { a.addEventListener('mouseenter', function () { movePill(a); }); });
    navlinks.addEventListener('mouseleave', function () { movePill(activeLink); });
    var settle = function () { movePill(activeLink); };
    requestAnimationFrame(settle);
    window.addEventListener('load', settle);
    window.addEventListener('resize', settle);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
    setTimeout(settle, 300);
  }

  // Cursor-following glow on cards
  document.querySelectorAll('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  // Animated stat counters
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function runCounters(scope) {
    scope.querySelectorAll('.num').forEach(function (el) {
      if (el.dataset.done) return; el.dataset.done = '1';
      var to = +el.getAttribute('data-to'), dur = 1700, t0 = null;
      if (reduce) { el.textContent = to; return; }
      function step(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }
      requestAnimationFrame(step);
    });
  }
  // Home services showcase: scroll-driven white sheets (left) + pinned panel (right)
  var hsv = document.querySelector('.hsv');
  if (hsv) {
    var hsheets = Array.prototype.slice.call(hsv.querySelectorAll('.hsv-sheet'));
    var hpanes = Array.prototype.slice.call(hsv.querySelectorAll('.hsv-pane'));
    var htrack = hsv.querySelector('.hsv-track');
    var HN = hsheets.length, hcur = -1;
    function hsvSet(i) {
      if (i === hcur) return; hcur = i;
      hsheets.forEach(function (c, k) { c.style.transform = k <= i ? 'translateY(0)' : 'translateY(110%)'; c.style.zIndex = k; });
      hpanes.forEach(function (p, k) { p.classList.toggle('active', k === i); });
    }
    function hsvScroll() {
      if (window.innerWidth <= 880) { return; }
      var rect = htrack.getBoundingClientRect();
      var total = htrack.offsetHeight - window.innerHeight;
      var scrolled = Math.min(Math.max(-rect.top, 0), total);
      var p = total > 0 ? scrolled / total : 0;
      hsvSet(Math.min(HN - 1, Math.floor(p * HN + 0.0001)));
    }
    window.addEventListener('scroll', hsvScroll, { passive: true });
    window.addEventListener('resize', hsvScroll);
    hsvSet(0); hsvScroll();
  }

  document.querySelectorAll('.stats').forEach(function (statsEl) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { runCounters(statsEl); io.unobserve(en.target); } });
    }, { threshold: 0.3 });
    io.observe(statsEl);
  });
})();
