import largeImage from '../../../dist/images/heros/hero-bg-large.jpg';
import smallImage from '../../../dist/images/heros/hero-bg-small.jpg';

class Hero extends HTMLElement {
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
          section {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          #jumbotron{
            background: url("${largeImage}");
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            text-align: center;
            margin-bottom: 0 !important;
            margin-top: 0;
            max-width: 100%;
            padding:5% 0;
          }
          
          #jumbotron h1 {
            margin-top: 40px;
            color: #fff;
            font-weight: bolder;
            font-size: 3rem;
          }
          
          #jumbotron p {
            background: rgba(255, 255, 155, 0.35);
            margin: 0 auto;
            width: 85%;
            padding: 1.8rem;
            text-align: center;
            font-size: 1.4rem;
            color: #fff;
            line-height: 1.2em;
            color: #fff;
            font-weight: 600;
          }
          
          .btn-in-hero {
            text-decoration:none;
            background: var(--primary-yellow);
            padding: 10px 15px;
            border-radius: 2.5px;
            color: var(--primary-blue);
            font-weight: bold;
          }
          
          .btn-in-hero:hover {
            background-color: var(--primary-blue);
            color: var(--primary-yellow);
            transition: all 0.5s ease-in-out 0s;
          }
          
          @media screen
              and (min-device-width: 320px)
              and (max-device-width: 640px) {
                #jumbotron {
                  background: url("${smallImage}") !important;
                  width: 100%;
                  margin-bottom: 0 !important;
                  padding:20px;
                  z-index: 2;
                  box-sizing:border-box;
                }
                
                #jumbotron h1 {
                  color: #fff;
                  font-weight: bolder;
                  font-size: 1.8rem;
                  margin-top: 0;
                  margin-bottom: 0;
                }
                
                #jumbotron p {
                  padding: .5rem;
                  text-align: center;
                  font-size: 1.1rem;
                  color: #fff;
                  line-height: 1em;
                  color: #fff;
                  font-weight: 400;
                }
          
                .btn-in-hero {
                  min-height:44px !important;
                  font-size: 18px !important;
                }
              }
        </style>
        <section id="jumbotron" class="content">
          <h1>Come here and taste the delicious food!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere aut repudiandae, aperiam eaque,
              placeat repellat officiis doloremque adipisci impedit iure autem iste maxime similique reprehenderit eos
              nemo? Aperiam, culpa!
              <br><br>
              <a href="#our-foods" class="btn-in-hero">Check Now!</a>
          </p>
        </section>`;
  }
}

customElements.define('hero-element', Hero);
