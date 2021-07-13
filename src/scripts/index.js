import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.min.css';
import '../styles/responsive.min.css';
import '../styles/loading.css';

import './components/app-bar';
import './components/footer-bar';
import './components/loading';
import { alertNetwork, loader } from './utils/custom-helper';

import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const appBar = document.querySelector('app-bar').shadowRoot;
const navbarToggle = appBar.querySelector('#navbar-toggle');
const navbarMenu = appBar.querySelector('#navbar-menu');

const app = new App({
  button: navbarToggle,
  drawer: navbarMenu,
  content: document.querySelector('#main-content'),
});

window.addEventListener('offline', alertNetwork());

window.addEventListener('hashchange', () => {
  loader();
  app.renderPage();
});

window.addEventListener('load', () => {
  loader();
  app.renderPage();
  alertNetwork();
  serviceWorkerRegister();
});
