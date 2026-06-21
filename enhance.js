/* Shared progressive enhancement for all SubZeroSec directions:
   - smooth scroll-shrink navbar (toggles .scrolled on the page header)
   - animated count-up stats (any [data-to] element, fires on scroll-in)
   Adapted from the 21st.dev "Animated Counter" + "Resizable Navbar" patterns. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-shrink navbar
  var hdr = document.querySelector('header');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Animated counters
  function animate(el) {
    var to = parseFloat(el.getAttribute('data-to'));
    if (isNaN(to)) return;
    if (reduce) { el.textContent = to; return; }
    var dur = 1700, t0 = null;
    requestAnimationFrame(function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = Math.round(to * e);
      if (p < 1) requestAnimationFrame(step);
    });
  }

  var nums = document.querySelectorAll('[data-to]');
  if (nums.length) {
    if (!('IntersectionObserver' in window)) { nums.forEach(animate); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { io.observe(el); });
  }
})();
