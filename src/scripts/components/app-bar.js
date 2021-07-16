class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this.render();
    const navbar = this.shadowDOM.querySelector('#navbar');
    const navbarToggle = this.shadowDOM.querySelector('#navbar-toggle');
    const navbarLink = this.shadowDOM.querySelectorAll('.navbar-link');

    navbarToggle.addEventListener('click', () => {
      navbar.classList.toggle('opened');
      const ariaLabelText = (navbar.classList.contains('opened')) ? 'Open navigation menu.' : 'Close navigation menu.';
      navbarToggle.setAttribute('aria-label', ariaLabelText);
    });

    navbarLink.forEach((link) => {
      link.addEventListener('click', () => navbar.classList.remove('opened'));
    });
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        *{
          box-sizing: border-box;
        }

        li{
          list-style: none;
        }

        .container {
          margin-left: auto;
          margin-right: auto;
        }

        #navbar {
          position: fixed;
          background-color: var(--primary-yellow);
          left: 0;
          right: 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
          top:0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 1rem;
          max-width: 1200px;
        }

        .navbar-item {
          margin: 0.4em;
          width: 100%;
        }

        .home-link,
        .navbar-link {
          color: var(--primary-blue);
          transition: color 0.2s ease-in-out;
          text-decoration: none;
          display: flex;
          font-weight: 600;
          align-items: center;
          transition: background-color 0.2s ease-in-out,
                      color 0.2s ease-in-out;
        }

        .home-link:focus,
        .home-link:hover {
          color: var(--navbar-text-color-focus);
        }

        .navbar-link {
          justify-content: center;
          width: 100%;
          padding: 0.4em 0.8em;
          border-radius: 5px;
          min-height:44px !important;
        }

        .navbar-link:focus,
        .navbar-link:hover{
          color: var(--navbar-text-color-focus);
          background-color: var(--primary-blue);
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--primary-blue);
          min-height: 44px;
        }

        #navbar-toggle {
          cursor: pointer;
          border: none;
          background-color: transparent;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .icon-bar {
          display: block;
          width: 25px;
          height: 4px;
          margin: 2px;
          transition: background-color 0.2s ease-in-out,
                      transform 0.2s ease-in-out,
                      opacity 0.2s ease-in-out;
          background-color: var(--primary-blue);
        }

        #navbar-toggle:focus .icon-bar,
        #navbar-toggle:hover .icon-bar {
          background-color: var(--primary-blue);
        }

        #navbar.opened #navbar-toggle .icon-bar:first-child,
        #navbar.opened #navbar-toggle .icon-bar:last-child {
            position: absolute;
            margin: 0;
            width: 30px;
        }

        #navbar.opened #navbar-toggle .icon-bar:first-child {
            transform: rotate(45deg);
        }

        #navbar.opened #navbar-toggle .icon-bar:nth-child(2) {
            opacity: 0;
        }

        #navbar.opened #navbar-toggle .icon-bar:last-child {
            transform: rotate(-45deg);
        }

        #navbar-menu {
          position: absolute;
          top: var(--navbar-height);
          bottom: 0;
          transition: opacity 0.2s ease-in-out,
                      visibility 0.2s ease-in-out;
          opacity: 0;
          visibility: hidden;
          left: 0;
          right: 0;
        }

        #navbar.opened #navbar-menu {
          background-color: var(--primary-yellow);
          opacity: 1;
          visibility: visible;
        }

        .navbar-links {
          list-style-type: none;
          max-height: 0;
          overflow: hidden;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          left: 0;
          right: 0;
          margin: 0;
          border-radius: 5px;
        }

        #navbar.opened .navbar-links {
          padding: 1em;
          max-height: none;
        }

        .navbar-links {
          list-style-type: none;
          max-height: 0;
          overflow: hidden;
          position: absolute;
          left: 0;
          right: 0;
          background-color: var(--primary-yellow);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
        }

        @media screen and (min-width: 700px) {
          #navbar-toggle {
              display: none;
          }

          #navbar #navbar-menu,
          #navbar.opened #navbar-menu {
              visibility: visible;
              opacity: 1;
              position: static;
              display: block;
              height: 100%;
          }

          #navbar .navbar-links,
          #navbar.opened .navbar-links {
              margin: 0;
              padding: 0;
              box-shadow: none;
              position: static;
              flex-direction: row;
              list-style-type: none;
              max-height: max-content;
              width: 100%;
              height: 100%;
          }

          #navbar .navbar-link:last-child {
              margin-right: 0;
          }
        }
      </style>
      <header id="navbar">
        <nav class="navbar-container container">
            <a href="/" class="home-link logo">
                EatenIt!
            </a>
            <button type="button" id="navbar-toggle" aria-label="Open navigation menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div id="navbar-menu">
                <ul class="navbar-links">
                  <li class="navbar-item"><a class="navbar-link" href="#/home">Home</a></li>
                  <li class="navbar-item"><a class="navbar-link" href="#/favorite">Favorite</a></li>
                  <li class="navbar-item"><a class="navbar-link" rel="noreferrer" href="https://s.id/ahanafi" target="_blank">About</a></li>
                </ul>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
