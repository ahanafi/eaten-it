import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import largeImage from '../../../public/images/heros/hero-bg.jpg';
import '../../components/hero';

const Home = {
  async render() {
    return `
      <style>
        hero-element{
          background: url("${largeImage}") !important;
        }
      </style>
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
