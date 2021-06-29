import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="detail-resto"></div>
      <div id="fav-btn-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.getDetailResto(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
