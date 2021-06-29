import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="our-foods" class="content">
      <h1>
        Your Favorite Resto <br>
        <span>See what we have in store for your satisfaction</span>
      </h1>

      <div id="list-resto"></div>
    </section>
    `;
  },

  async afterRender() {
    const allResto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#list-resto');
    const maxRestoItem = 18;
    allResto.forEach((resto, index) => {
      if ((index + 1) <= maxRestoItem) {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      }
    });
  },
};

export default Favorite;
