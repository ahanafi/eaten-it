import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="jumbotron" class="content">
      <h1>Come here and taste the delicious food!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos facere aut repudiandae, aperiam eaque,
          placeat repellat officiis doloremque adipisci impedit iure autem iste maxime similique reprehenderit eos
          nemo? Aperiam, culpa!
          <br><br>
          <a href="#our-foods" class="btn-in-hero">Check Now!</a>
      </p>
      </section>
      <section id="our-foods" class="content">
        <h1>
          Explore Our Resto <br>
          <span>See what we have in store for your satisfaction</span>
        </h1>

        <div id="list-resto"></div>
      </section>`;
  },

  async afterRender() {
    const allResto = await RestoDbSource.getAllResto();
    const restoContainer = document.querySelector('#list-resto');
    const maxRestoItem = 18;
    allResto.forEach((resto, index) => {
      if ((index + 1) <= maxRestoItem) {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      }
    });
  },
};

export default Home;
