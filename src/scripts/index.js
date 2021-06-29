import 'regenerator-runtime'; /* for async await transpile */
import '../styles/base.css';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/content.css';
import '../styles/detail.css';

import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const navbar = document.getElementById('navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');

function openMobileNavbar() {
  navbar.classList.add('opened');
  navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
}

function closeMobileNavbar() {
  navbar.classList.remove('opened');
  navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
}

navbarToggle.addEventListener('click', () => {
  if (navbar.classList.contains('opened')) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const app = new App({
  button: document.querySelector('.navbar-toggle'),
  drawer: document.querySelector('.navbar-menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});
