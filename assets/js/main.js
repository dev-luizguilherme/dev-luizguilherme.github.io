/* ==========================================================================
   Portfólio Luiz Guilherme — comportamento (JavaScript vanilla, ES6+)
   O site continua legível sem JS: tudo aqui é melhoria progressiva.
   ========================================================================== */
(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const THEME_KEY = 'portfolio-theme';

  /* ---------- Tema (claro/escuro) com persistência ---------- */
  const themeBtn = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const lightQuery = window.matchMedia('(prefers-color-scheme: light)');

  const readStoredTheme = () => {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  };
  const storeTheme = (value) => {
    try { localStorage.setItem(THEME_KEY, value); } catch { /* armazenamento indisponível */ }
  };
  const currentTheme = () =>
    root.dataset.theme || (lightQuery.matches ? 'light' : 'dark');

  const syncThemeUI = () => {
    const isLight = currentTheme() === 'light';
    themeBtn?.setAttribute('aria-label', isLight ? 'Alternar para o tema escuro' : 'Alternar para o tema claro');
    themeMeta?.setAttribute('content', isLight ? '#ffffff' : '#0c0d10');
  };

  const stored = readStoredTheme();
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;
  syncThemeUI();

  themeBtn?.addEventListener('click', () => {
    const next = currentTheme() === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    storeTheme(next);
    syncThemeUI();
  });
  lightQuery.addEventListener('change', () => { if (!root.dataset.theme) syncThemeUI(); });

  /* ---------- Menu mobile acessível ---------- */
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.getElementById('menu-principal');
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  const setMenu = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    navList.classList.toggle('is-open', open);
  };

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    navList.addEventListener('click', (e) => {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        navToggle.focus();
      }
    });
    desktopQuery.addEventListener('change', (e) => { if (e.matches) setMenu(false); });
  }

  /* ---------- Link ativo durante a rolagem ---------- */
  const navLinks = [...document.querySelectorAll('.nav__link')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const hero = document.getElementById('inicio');

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          // No topo (hero) nenhum link fica marcado
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    [hero, ...sections].filter(Boolean).forEach((section) => spy.observe(section));
  }

  /* ---------- Entrada por rolagem (cartões) ---------- */
  const revealTargets = document.querySelectorAll('.skill-group, .project, .edu__item, .about__figure');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    revealTargets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--delay', `${(i % 4) * 0.08}s`);
      reveal.observe(el);
    });
  }

  /* ---------- Terminal do hero: digitação dos comandos ---------- */
  const terminal = document.querySelector('.terminal__body');
  if (terminal && !reduceMotion) {
    const lines = [...terminal.querySelectorAll('.terminal__line')];
    const cursor = terminal.querySelector('.terminal__cursor');
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Reserva a altura final para não haver deslocamento de layout
    terminal.style.minHeight = `${terminal.offsetHeight}px`;
    lines.forEach((line) => { line.style.visibility = 'hidden'; });
    if (cursor) cursor.style.visibility = 'hidden';

    (async () => {
      for (const line of lines) {
        const cmd = line.querySelector('.terminal__cmd');
        line.style.visibility = 'visible';
        if (cmd) {
          const text = cmd.textContent;
          cmd.textContent = '';
          for (const char of text) {
            cmd.textContent += char;
            await wait(38);
          }
          await wait(280);
        } else {
          await wait(160);
        }
      }
      if (cursor) cursor.style.visibility = 'visible';
    })();
  }

  /* ---------- Formulário de contato (mailto com validação) ---------- */
  const form = document.getElementById('form-contato');
  const status = document.getElementById('form-status');
  const EMAIL = 'lg.link.pro@gmail.com';

  const messages = {
    nome: 'Informe seu nome.',
    email: 'Informe um e-mail válido, como nome@exemplo.com.',
    mensagem: 'Escreva uma mensagem com pelo menos 10 caracteres.',
  };

  const setError = (field, show) => {
    const error = document.getElementById(`erro-${field.id}`);
    field.setAttribute('aria-invalid', String(show));
    error.textContent = show ? messages[field.id] : '';
    error.hidden = !show;
  };

  if (form) {
    const fields = [...form.querySelectorAll('input, textarea')];
    fields.forEach((field) => {
      field.addEventListener('blur', () => setError(field, !field.validity.valid));
      field.addEventListener('input', () => { if (field.validity.valid) setError(field, false); });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = '';
      const invalid = fields.filter((field) => !field.validity.valid);
      fields.forEach((field) => setError(field, !field.validity.valid));

      if (invalid.length) {
        invalid[0].focus();
        status.textContent = `Corrija ${invalid.length === 1 ? 'o campo indicado' : 'os campos indicados'} para continuar.`;
        return;
      }

      const data = new FormData(form);
      const subject = `Contato pelo portfólio - ${data.get('nome')}`;
      const body = `${data.get('mensagem')}\n\n${data.get('nome')}\n${data.get('email')}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Abrindo seu aplicativo de e-mail. Se nada abrir, escreva para ' + EMAIL + '.';
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  const year = document.getElementById('ano');
  if (year) {
    const now = new Date().getFullYear();
    year.textContent = String(now);
    year.setAttribute('datetime', String(now));
  }
})();
