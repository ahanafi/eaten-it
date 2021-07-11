import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favorite-resto-idb';

const createFavoriteButtonPresenterWithResto = async (resto) => {
  await FavoriteButtonPresenter.init({
    favButtonContainer: document.querySelector('#fav-btn-container'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

export { createFavoriteButtonPresenterWithResto };
