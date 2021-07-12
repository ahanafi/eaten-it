class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        footer{
          width: 100%;
          background-color: var(--primary-blue);
          padding:30px;
          box-sizing: border-box;
        }
        
        footer > p {
          width: 100%;
          text-align: center;
          color: #fff;
        }
      </style>
      <footer>
          <p>
              Copyright &copy; 2021 - EatenIt! . All Right Reserved.
          </p>
      </footer>
      `;
  }
}

customElements.define('footer-bar', FooterBar);
