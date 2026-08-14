/* Synthesis srl — interazioni condivise */
(function () {
  'use strict';

  /* ---------- sticky header state ---------- */
  var head = document.querySelector('.site-head');
  if (head) {
    var onScroll = function () {
      head.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- mobile drawer ---------- */
  var burger = document.querySelector('.burger');
  var drawer = document.querySelector('.drawer');
  var veil = document.querySelector('.drawer-veil');
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    document.body.classList.add('drawer-open');
    burger && burger.setAttribute('aria-expanded', 'true');
    if (drawer) {
      var f = drawer.querySelector('a,button');
      f && f.focus();
    }
  }
  function closeDrawer() {
    document.body.classList.remove('drawer-open');
    burger && burger.setAttribute('aria-expanded', 'false');
    burger && burger.focus();
  }
  burger && burger.addEventListener('click', openDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);
  veil && veil.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('drawer-open')) closeDrawer();
  });

  /* ---------- drawer accordions (multilevel) ---------- */
  document.querySelectorAll('.acc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel && panel.classList.toggle('open', !open);
    });
  });

  /* ---------- reveal on scroll ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rvEls = document.querySelectorAll('.rv');
  if (!reduced && 'IntersectionObserver' in window && rvEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rvEls.forEach(function (el) { io.observe(el); });
  } else {
    rvEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- animated counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var dur = 1800, t0 = null;
    function fmt(n) { return n.toLocaleString('it-IT'); }
    if (reduced) { el.textContent = fmt(target); return; }
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- partner marquee: duplicate track for seamless loop ---------- */
  document.querySelectorAll('.marquee-track').forEach(function (track) {
    if (reduced) return;
    track.innerHTML += track.innerHTML;
  });

  /* ---------- contact form (static build: apre il client email) ---------- */
  document.querySelectorAll('form[data-mailform]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var v = function (n) { var f = form.elements[n]; return f ? f.value.trim() : ''; };
      var subject = 'Richiesta informazioni dal sito — ' + (v('tipo') || 'Privato');
      var body = [
        'Nome: ' + v('nome'),
        'Cognome: ' + v('cognome'),
        'Email: ' + v('email'),
        'Telefono: ' + v('telefono'),
        'Profilo: ' + v('tipo'),
        '',
        'Messaggio:',
        v('messaggio')
      ].join('\n');
      window.location.href = 'mailto:formazione@synthesis-srl.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      var ok = form.querySelector('.form-ok');
      ok && ok.classList.add('show');
    });
  });

  /* ---------- audience tabs ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('.tab'));
    var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
    function select(i, focus) {
      tabs.forEach(function (t, j) {
        t.setAttribute('aria-selected', String(i === j));
        t.tabIndex = i === j ? 0 : -1;
        if (panels[j]) {
          panels[j].hidden = i !== j;
          panels[j].classList.toggle('in', i === j);
        }
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { e.preventDefault(); select((i + d + tabs.length) % tabs.length, true); }
      });
    });
    select(0);
  });

  /* ---------- course rail arrows ---------- */
  document.querySelectorAll('.rail-wrap').forEach(function (wrap) {
    var rail = wrap.querySelector('.cards-rail');
    var prev = wrap.querySelector('.rail-btn.prev');
    var next = wrap.querySelector('.rail-btn.next');
    if (!rail || !prev || !next) return;
    function step() {
      var card = rail.firstElementChild;
      if (!card) return 320;
      var gap = parseFloat(getComputedStyle(rail).columnGap || getComputedStyle(rail).gap) || 20;
      return card.getBoundingClientRect().width + gap;
    }
    function update() {
      var max = rail.scrollWidth - rail.clientWidth - 2;
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= max;
    }
    prev.addEventListener('click', function () { rail.scrollBy({ left: -step(), behavior: reduced ? 'auto' : 'smooth' }); });
    next.addEventListener('click', function () { rail.scrollBy({ left: step(), behavior: reduced ? 'auto' : 'smooth' }); });
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* ---------- lazy map ---------- */
  document.querySelectorAll('iframe[data-src]').forEach(function (fr) {
    if ('IntersectionObserver' in window) {
      var mio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { fr.src = fr.getAttribute('data-src'); mio.unobserve(fr); }
        });
      }, { rootMargin: '400px' });
      mio.observe(fr);
    } else {
      fr.src = fr.getAttribute('data-src');
    }
  });
})();
