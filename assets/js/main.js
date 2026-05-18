(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const filterButtons = document.querySelectorAll('.filter-button');
  const publications = document.querySelectorAll('.publication');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      publications.forEach((pub) => {
        const tags = pub.dataset.tags || '';
        const show = filter === 'all' || tags.includes(filter);
        pub.classList.toggle('is-hidden', !show);
      });
    });
  });
})();
