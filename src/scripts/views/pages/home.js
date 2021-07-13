import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import { alertNetwork } from '../../utils/custom-helper';
import '../../components/hero';
import '../../components/loading';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <section id="our-foods" class="content">
        <h1>
          Explore Our Resto <br>
          <span>See what we have in store for your satisfaction</span>
        </h1>
        <div id="list-resto"></div>
      </section>`;
  },

  async afterRender() {
    alertNetwork();
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
