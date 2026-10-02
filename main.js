/* PIQ3D — animaciones de la portada (loader, intro, scroll, hover) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const html = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- scroll suave (Lenis) ---------- */
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();

  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = id === '#top' ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: 0, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
    document.body.classList.remove('menu-open');
  }));

  /* ---------- reloj local (Sueca) ---------- */
  const tick = () => {
    const t = new Intl.DateTimeFormat('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
    $$('.clock').forEach((el) => (el.textContent = t));
  };
  tick(); setInterval(tick, 15000);

  /* ---------- vídeo vertical en móviles en vertical ---------- */
  const heroVideo = $('.hero__video');
  if (matchMedia('(max-width: 1023px) and (orientation: portrait)').matches) {
    heroVideo.poster = 'public/video/hero-poster-vertical.jpg';
    $$('source', heroVideo).forEach((s) => { s.src = s.src.replace('hero-montaje-web', 'hero-montaje-vertical-web'); });
    heroVideo.load();
    html.classList.add('is-portrait');
  }

  /* ---------- loader -> intro ---------- */
  const loader = $('#loader'), bar = $('.loader__bar i');
  let progress = 0, ready = false;
  const setBar = (p) => { progress = Math.max(progress, p); bar.style.transform = `scaleX(${progress / 100})`; };
  const fake = setInterval(() => setBar(Math.min(85, progress + 4 + Math.random() * 8)), 160);
  const finish = () => {
    if (ready) return; ready = true; clearInterval(fake); setBar(100);
    setTimeout(() => {
      loader.classList.add('is-done');
      heroVideo.play().catch(() => {});
      setTimeout(() => { html.classList.add('is-intro'); lenis.start(); }, 250);
      setTimeout(() => { $('#heroAsset').classList.add('is-ready'); ScrollTrigger.refresh(); }, 1700);
    }, 350);
  };
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  const videoReady = new Promise((res) => { if (heroVideo.readyState >= 3) res(); heroVideo.addEventListener('canplay', res, { once: true }); });
  Promise.all([fontsReady, videoReady]).then(finish);
  window.addEventListener('load', () => setTimeout(finish, 600));
  setTimeout(finish, 4500);

  /* ---------- hero: el vídeo crece hasta cubrir la pantalla ---------- */
  const hero = $('#hero'), asset = $('#heroAsset'), sticky = $('.hero__sticky');
  const offsetIn = (el, sel) => { let left = 0, top = 0, n = el; while (n && !n.matches(sel)) { left += n.offsetLeft; top += n.offsetTop; n = n.offsetParent; } return { left, top }; };
  const skewPoly = () => { const t = asset.offsetHeight * 0.1763; return `polygon(${t}px 0,100% 0,calc(100% - ${t}px) 100%,0 100%)`; };
  if (!reduce) {
    gsap.fromTo(asset,
      { scale: 1, x: 0, y: 0, clipPath: () => skewPoly() },
      {
        ease: 'none', immediateRender: false,
        scale: () => Math.max(sticky.clientWidth / asset.offsetWidth, sticky.clientHeight / asset.offsetHeight) * 1.02,
        x: () => sticky.clientWidth / 2 - (offsetIn(asset, '.hero__sticky').left + asset.offsetWidth / 2),
        y: () => sticky.clientHeight / 2 - (offsetIn(asset, '.hero__sticky').top + asset.offsetHeight / 2),
        clipPath: 'polygon(0px 0,100% 0,calc(100% - 0px) 100%,0 100%)',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true }
      });
    gsap.fromTo(heroVideo, { scale: 1.35 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom bottom', scrub: true } });
    gsap.to('.hero__desc, .hero__scroll, .hero__text, .hero__italic', { opacity: 0, ease: 'none', scrollTrigger: { trigger: hero, start: '30% top', end: '60% top', scrub: true } });
  }

  /* ---------- cabecera: cambia de color según la sección ---------- */
  const header = $('#header');
  $$('[data-scheme]').forEach((sec) => {
    if (sec === header) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 40px', end: 'bottom 40px',
      onEnter: () => header.dataset.scheme = sec.dataset.scheme,
      onEnterBack: () => header.dataset.scheme = sec.dataset.scheme
    });
  });

  /* ---------- revelados al entrar en pantalla ---------- */
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-revealed'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
  $$('.words, .specs__title, .reveal-up').forEach((el) => io.observe(el));

  /* ---------- parallax de imágenes y tarjetas ---------- */
  if (!reduce) {
    $$('.parallax').forEach((el) => {
      const amt = +el.dataset.parallax || 60;
      gsap.fromTo(el.querySelector('.figure'), { y: -amt }, { y: amt, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    $$('.case__asset').forEach((el) => {
      const media = el.querySelector('img, video');
      gsap.fromTo(media, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    $$('.case--narrow').forEach((el) => {
      gsap.fromTo(el, { y: 160 }, { y: 40, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    gsap.to('.work__head', { opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.work__list', start: 'top 80%', end: 'top 20%', scrub: true } });
  }

  /* ---------- vídeos de los trabajos: reproducir al pasar el ratón ---------- */
  $$('.case__video').forEach((v) => {
    const link = v.closest('.case__link');
    link.addEventListener('pointerenter', () => { v.play().catch(() => {}); });
    link.addEventListener('pointerleave', () => { v.pause(); });
  });
  if (matchMedia('(hover: none)').matches) {
    const vio = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause()), { threshold: 0.4 });
    $$('.case__video').forEach((v) => vio.observe(v));
  }

  /* ---------- menú móvil ---------- */
  const burger = $('.burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
    open ? lenis.stop() : lenis.start();
  });

  window.addEventListener('resize', () => ScrollTrigger.refresh());
})();
