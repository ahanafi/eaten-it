import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestoItemTemplate, emptyFavoriteResto,
} from '../templates/template-creator';
import OopsImage from '../../../public/images/oops.svg';

const Favorite = {
  async render() {
    return `
    <style>
      #our-foods{
        margin-top:60px !important;
      }
    </style>
    <section id="our-foods" class="content">
      <h1>
        Your Favorite Resto <br>
        <span>List of restaurants liked by you</span>
      </h1>
      <div id="list-resto"></div>
    </section>
    `;
  },

  async afterRender() {
    const allResto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#list-resto');
    const maxRestoItem = 18;
    if (allResto.length > 0) {
      allResto.forEach((resto, index) => {
        if ((index + 1) <= maxRestoItem) {
          restoContainer.innerHTML += createRestoItemTemplate(resto);
        }
      });
    } else {
      const ourFoods = document.querySelector('#our-foods');
      ourFoods.innerHTML += emptyFavoriteResto(OopsImage);
    }
  },
};

export default Favorite;
