(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ============================================================
     i18n — dizionario IT / EN
     ============================================================ */
  var I18N = {
    it: {
      'skip': 'Salta al contenuto',
      'nav.main': 'Principale',
      'nav.brand': 'Jolie Nail Salon — inizio pagina',
      'menu.open': 'Apri il menu',
      'menu.close': 'Chiudi il menu',
      'nav.salon': 'Il salone',
      'nav.services': 'Servizi & listino',
      'nav.nailart': 'Jolie Nail Art',
      'nav.gallery': 'Galleria',
      'nav.reviews': 'Recensioni',
      'nav.contact': 'Contatti',
      'nav.book': 'Prenota',
      'hero.kicker': 'Nail salon · Milano',
      'hero.sub': 'le tue unghie, fatte ad arte',
      'hero.lead': 'Manicure, semipermanente, pedicure e press-on personalizzate in via Lodovico Montegani 13, a due passi da viale Da Cermenate. Aperto tutti i giorni.',
      'hero.book': 'Prenota online',
      'hero.call': 'Chiama · 379 109 5328',
      'hero.n1': '4,9',
      'hero.n2': '4,8',
      'hero.google': 'su Google · 44 recensioni',
      'hero.treatwell': 'su Treatwell · 199 recensioni',
      'hero.open': 'aperto tutti i giorni',
      'hero.imgalt': "L'interno di Jolie Nail Salon: lampadario, nicchie ad arco e postazioni manicure",
      'salon.eyebrow': 'Il salone',
      'salon.title': 'in via Montegani 13',
      'salon.p1': "Dietro le due vetrine ad arco del quartiere Stadera c'è un salone bianco e nero curato in ogni dettaglio: lampadario, tende di pizzo, poltrone in bouclé e un muro di smalti che sembra una cartoleria dei colori.",
      'salon.p2': 'Lina, Lea, Susy e Ting ti accolgono sette giorni su sette con precisione, gentilezza e un’igiene impeccabile — lo dicono le clienti, prima di noi. Lavoriamo con marchi professionali come CND Shellac e OPI.',
      'salon.f1': 'Aperto 7 giorni su 7, orario continuato',
      'salon.f2': 'Prodotti professionali CND Shellac & OPI',
      'salon.f3': 'Pagamenti: contanti, carte di credito e debito',
      'salon.imgalt': 'La doppia vetrina di Jolie Nail Salon in via Lodovico Montegani, con le insegne nere ad arco',
      'services.eyebrow': 'Servizi & listino',
      'services.script': 'Prendersi',
      'services.title': 'cura di mani e piedi',
      'services.intro': 'Prezzi chiari e tempi certi. Prenotando online su Treatwell trovi spesso promozioni dedicate.',
      'services.c1.title': 'Manicure',
      'services.c1.r1': 'Manicure senza smalto · 20 min',
      'services.c1.r2': 'Manicure con smalto classico · 30 min',
      'services.c1.r3': 'Manicure semipermanente · 50 min',
      'services.c1.r4': 'Semipermanente senza manicure · 40 min',
      'services.c1.imgalt': 'Manicure finita: unghie a mandorla effetto naturale lucido',
      'services.c2.title': 'Gel & rimozioni',
      'services.c2.r1': 'Refill gel · 90 min',
      'services.c2.r2': 'Rimozione semipermanente + manicure · 30 min',
      'services.c2.r3': 'Rimozione gel + manicure · 45 min',
      'services.c2.r4': 'Ricostruzione e nail art · su preventivo',
      'services.c2.imgalt': 'Il muro degli smalti del salone, con centinaia di colori in gel',
      'services.c3.title': 'Pedicure & cera',
      'services.c3.r1': 'Pedicure senza smalto · 30 min',
      'services.c3.r2': 'Pedicure curativo · 40 min',
      'services.c3.r3': 'Epilazione a cera',
      'services.c3.r3p': 'da 8 €',
      'services.c3.r4': 'Trattamenti viso e sopracciglia',
      'services.c3.imgalt': "L'angolo pedicure: poltrone imbottite color crema con vaschette bianche",
      'services.ask': 'in salone',
      'services.ask2': 'in salone',
      'services.note': 'Listino indicativo aggiornato a luglio 2026 — può variare in salone.',
      'services.cta': 'Vedi disponibilità e prenota',
      'nailart.eyebrow': 'La boutique',
      'nailart.title': 'Nail Art da portare&nbsp;via',
      'nailart.p1': 'Oltre ai trattamenti al tavolo, da Jolie trovi una piccola boutique di press-on decorate a mano: set unici in cofanetto, pronti da applicare e riutilizzare per ogni occasione.',
      'nailart.p2': 'Charms, strass, french e disegni su misura: scegli un set dagli espositori o chiedi una creazione personalizzata sulla forma delle tue unghie.',
      'nailart.cta': 'Chiedi info su WhatsApp',
      'nailart.imgalt': 'Cofanetti Jolie Nail Art con set di press-on decorate a mano',
      'gallery.eyebrow': 'Galleria',
      'gallery.script': 'Uno sguardo',
      'gallery.title': 'dentro Jolie',
      'gallery.a1': 'La sala principale con lampadario e nicchie ad arco illuminate',
      'gallery.a2': 'Espositori con decine di set di press-on decorate',
      'gallery.a3': 'La zona pedicure con vaschette bianche e quadretti neri alle pareti',
      'gallery.a4': 'Un vaso di peonie rosa davanti alla parete bianca del salone',
      'gallery.a5': 'Scaffali neri con i cofanetti e gli espositori Jolie Nail',
      'gallery.a6': 'Il bancone della reception con orchidea e listino dei servizi',
      'reviews.eyebrow': 'Recensioni',
      'reviews.script': 'Parola',
      'reviews.title': 'alle clienti',
      'reviews.q1': 'Unghie perfette, super consigliato!',
      'reviews.q2': 'Posto pulitissimo, molto organizzato, personale competente e molto gentile.',
      'reviews.q3': 'Il migliore nel quartiere: organizzati, puliti e bravi.',
      'reviews.s1': 'recensione su Google',
      'reviews.s2': 'recensione su Google',
      'reviews.s3': 'Simona, su Treatwell',
      'reviews.meta': 'Valutazione media: 4,9/5 su Google (44 recensioni) · 4,8/5 su Treatwell (199 recensioni verificate)',
      'contact.eyebrow': 'Contatti',
      'contact.script': 'Ti aspettiamo',
      'contact.title': 'da Jolie',
      'contact.where': 'Dove siamo',
      'contact.transit': 'Bus in via Montegani · M2 Abbiategrasso a pochi minuti',
      'contact.maps': 'Apri in Google Maps',
      'contact.hours': 'Orari',
      'contact.monsat': 'Lunedì – Sabato',
      'contact.sun': 'Domenica',
      'contact.always': 'Aperto 7 giorni su 7, orario continuato',
      'contact.book': 'Prenota',
      'contact.cta': 'Prenota su Treatwell',
      'footer.line': 'Jolie Nail Salon · Via Lodovico Montegani 13, 20141 Milano · Aperto tutti i giorni'
    },
    en: {
      'skip': 'Skip to content',
      'nav.main': 'Main',
      'nav.brand': 'Jolie Nail Salon — back to top',
      'menu.open': 'Open the menu',
      'menu.close': 'Close the menu',
      'nav.salon': 'The salon',
      'nav.services': 'Services & prices',
      'nav.nailart': 'Jolie Nail Art',
      'nav.gallery': 'Gallery',
      'nav.reviews': 'Reviews',
      'nav.contact': 'Contact',
      'nav.book': 'Book now',
      'hero.kicker': 'Nail salon · Milan',
      'hero.sub': 'your nails, beautifully done',
      'hero.lead': 'Manicures, gel polish, pedicures and custom press-on nails at Via Lodovico Montegani 13, Milan. Open every day of the week.',
      'hero.book': 'Book online',
      'hero.call': 'Call · +39 379 109 5328',
      'hero.n1': '4.9',
      'hero.n2': '4.8',
      'hero.google': 'on Google · 44 reviews',
      'hero.treatwell': 'on Treatwell · 199 reviews',
      'hero.open': 'open every day',
      'hero.imgalt': 'Inside Jolie Nail Salon: chandelier, arched niches and manicure stations',
      'salon.eyebrow': 'The salon',
      'salon.title': 'to Via Montegani 13',
      'salon.p1': 'Behind two arched shopfronts in the Stadera district you’ll find a black-and-white salon styled down to the last detail: a chandelier, lace curtains, bouclé armchairs and a wall of polishes bursting with colour.',
      'salon.p2': 'Lina, Lea, Susy and Ting welcome you seven days a week with precision, kindness and spotless hygiene — our clients say it best. We work with professional brands such as CND Shellac and OPI.',
      'salon.f1': 'Open 7 days a week, all day long',
      'salon.f2': 'Professional products: CND Shellac & OPI',
      'salon.f3': 'Payments: cash, credit and debit cards',
      'salon.imgalt': 'The double shopfront of Jolie Nail Salon on Via Lodovico Montegani, with black arched signs',
      'services.eyebrow': 'Services & prices',
      'services.script': 'Taking',
      'services.title': 'care of hands and feet',
      'services.intro': 'Clear prices, reliable timing. Book online on Treatwell to catch dedicated deals.',
      'services.c1.title': 'Manicure',
      'services.c1.r1': 'Manicure without polish · 20 min',
      'services.c1.r2': 'Manicure with classic polish · 30 min',
      'services.c1.r3': 'Gel polish manicure · 50 min',
      'services.c1.r4': 'Gel polish without manicure · 40 min',
      'services.c1.imgalt': 'Finished manicure: glossy natural-look almond nails',
      'services.c2.title': 'Gel & removals',
      'services.c2.r1': 'Gel refill · 90 min',
      'services.c2.r2': 'Gel polish removal + manicure · 30 min',
      'services.c2.r3': 'Hard gel removal + manicure · 45 min',
      'services.c2.r4': 'Extensions and nail art · on quote',
      'services.c2.imgalt': 'The salon’s polish wall, with hundreds of gel colours',
      'services.c3.title': 'Pedicure & waxing',
      'services.c3.r1': 'Pedicure without polish · 30 min',
      'services.c3.r2': 'Medical-style pedicure · 40 min',
      'services.c3.r3': 'Waxing',
      'services.c3.r3p': 'from €8',
      'services.c3.r4': 'Face and brow treatments',
      'services.c3.imgalt': 'The pedicure corner: cream padded armchairs with white foot baths',
      'services.ask': 'in salon',
      'services.ask2': 'in salon',
      'services.note': 'Indicative price list, updated July 2026 — may vary in salon.',
      'services.cta': 'Check availability & book',
      'nailart.eyebrow': 'The boutique',
      'nailart.title': 'Nail Art to take&nbsp;home',
      'nailart.p1': 'Alongside salon treatments, Jolie has a small boutique of hand-decorated press-on nails: one-of-a-kind boxed sets, ready to apply and reuse for any occasion.',
      'nailart.p2': 'Charms, rhinestones, french tips and custom designs: pick a set from the displays or ask for a creation shaped to your own nails.',
      'nailart.cta': 'Ask on WhatsApp',
      'nailart.imgalt': 'Jolie Nail Art gift boxes with hand-decorated press-on sets',
      'gallery.eyebrow': 'Gallery',
      'gallery.script': 'A look',
      'gallery.title': 'inside Jolie',
      'gallery.a1': 'The main room with chandelier and lit arched niches',
      'gallery.a2': 'Displays with dozens of decorated press-on sets',
      'gallery.a3': 'The pedicure area with white foot baths and black framed prints',
      'gallery.a4': 'A vase of pink peonies against the salon’s white wall',
      'gallery.a5': 'Black shelves with Jolie Nail boxes and displays',
      'gallery.a6': 'The reception counter with an orchid and the service price list',
      'reviews.eyebrow': 'Reviews',
      'reviews.script': 'Straight',
      'reviews.title': 'from our clients',
      'reviews.q1': 'Perfect nails, highly recommended!',
      'reviews.q2': 'Spotlessly clean, well organised, with skilled and very kind staff.',
      'reviews.q3': 'The best in the neighbourhood: organised, clean and talented.',
      'reviews.s1': 'Google review',
      'reviews.s2': 'Google review',
      'reviews.s3': 'Simona, on Treatwell',
      'reviews.meta': 'Average rating: 4.9/5 on Google (44 reviews) · 4.8/5 on Treatwell (199 verified reviews)',
      'contact.eyebrow': 'Contact',
      'contact.script': 'See you',
      'contact.title': 'at Jolie',
      'contact.where': 'Where we are',
      'contact.transit': 'Bus on Via Montegani · M2 Abbiategrasso a few minutes away',
      'contact.maps': 'Open in Google Maps',
      'contact.hours': 'Opening hours',
      'contact.monsat': 'Monday – Saturday',
      'contact.sun': 'Sunday',
      'contact.always': 'Open 7 days a week, all day long',
      'contact.book': 'Book',
      'contact.cta': 'Book on Treatwell',
      'footer.line': 'Jolie Nail Salon · Via Lodovico Montegani 13, 20141 Milan, Italy · Open every day'
    }
  };

  var PAGE_META = {
    it: {
      title: 'Jolie Nail Salon — Manicure, semipermanente e nail art a Milano (Stadera)',
      description: 'Jolie Nail Salon, via Lodovico Montegani 13, Milano. Manicure, semipermanente, pedicure, refill gel e press-on personalizzate. Aperto 7 giorni su 7: lun–sab 9:00–20:30, dom 9:00–20:00.'
    },
    en: {
      title: 'Jolie Nail Salon — Manicure, gel polish and nail art in Milan',
      description: 'Jolie Nail Salon, Via Lodovico Montegani 13, Milan. Manicures, gel polish, pedicures, gel refills and custom press-on nails. Open 7 days a week: Mon–Sat 9:00–20:30, Sun 9:00–20:00.'
    }
  };

  var lang = 'it';
  var toggle = document.getElementById('lang-toggle');

  function applyLang(next) {
    lang = next;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = PAGE_META[lang].title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', PAGE_META[lang].description);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    if (toggle) {
      toggle.textContent = lang === 'it' ? 'EN' : 'IT';
      toggle.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all’italiano');
    }
    var burgerEl = document.getElementById('burger');
    if (burgerEl) {
      var expanded = burgerEl.getAttribute('aria-expanded') === 'true';
      burgerEl.setAttribute('aria-label', expanded ? dict['menu.close'] : dict['menu.open']);
    }
    try { localStorage.setItem('jolie-lang', lang); } catch (e) { /* storage non disponibile */ }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLang(lang === 'it' ? 'en' : 'it');
    });
  }

  var saved = null;
  try { saved = localStorage.getItem('jolie-lang'); } catch (e) { /* storage non disponibile */ }
  if (saved === 'en') {
    applyLang('en');
  } else if (!saved && navigator.language && navigator.language.slice(0, 2) !== 'it') {
    applyLang('en');
  }

  /* ============================================================
     Header: stato scrolled
     ============================================================ */
  var header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============================================================
     Menu mobile: burger + inert + focus di ritorno
     ============================================================ */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  var mql = window.matchMedia('(min-width: 1100px)');
  var menuOpen = false;

  function setInertOutside(on) {
    ['main', 'footer', '.skip-link'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      if (on) { el.setAttribute('inert', ''); } else { el.removeAttribute('inert'); }
    });
  }

  function openMenu() {
    menuOpen = true;
    menu.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', I18N[lang]['menu.close']);
    header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    setInertOutside(true);
    var first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function closeMenu(refocus) {
    menuOpen = false;
    if (!mql.matches) menu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', I18N[lang]['menu.open']);
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
    setInertOutside(false);
    if (refocus) burger.focus();
  }

  function syncMenuToViewport() {
    if (mql.matches) {
      menu.hidden = false;           // desktop: menu sempre visibile
      if (menuOpen) closeMenu(false);
      document.body.style.overflow = '';
      setInertOutside(false);
    } else if (!menuOpen) {
      menu.hidden = true;            // mobile: nascosto finché non si apre
    }
  }

  burger.addEventListener('click', function () {
    if (menuOpen) { closeMenu(true); } else { openMenu(); }
  });

  menu.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link && !mql.matches) closeMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen) closeMenu(true);
  });

  if (mql.addEventListener) {
    mql.addEventListener('change', syncMenuToViewport);
  } else if (mql.addListener) {
    mql.addListener(syncMenuToViewport);
  }
  syncMenuToViewport();

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ============================================================
     Intro: cinque unghie che si smaltano, poi via
     ============================================================ */
  var intro = document.getElementById('intro');
  var root = document.documentElement;

  function removeIntro() {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    intro = null;
  }

  if (!intro || reduced) {
    removeIntro();
    root.classList.add('intro-done');
  } else {
    document.body.classList.add('intro-lock');
    window.setTimeout(function () { intro.classList.add('is-painting'); }, 60);
    window.setTimeout(function () {
      intro.classList.add('is-done');
      root.classList.add('intro-done');
      document.body.classList.remove('intro-lock');
      intro.addEventListener('transitionend', removeIntro, { once: true });
      window.setTimeout(removeIntro, 900); // fallback se transitionend non arriva
    }, 1950);
  }

  /* ============================================================
     Anno footer
     ============================================================ */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
