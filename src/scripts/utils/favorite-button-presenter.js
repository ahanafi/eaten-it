import {
  createFavoriteButtonTemplate,
  createUnfavoritedButtonTemplate,
} from '../views/templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favButtonContainer, favoriteResto, resto }) {
    this.favButtonContainer = favButtonContainer;
    this.favoriteResto = favoriteResto;
    this.resto = resto;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.resto;

    if (await this.isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoExist(id) {
    const resto = await this.favoriteResto.getResto(id);
    return !!resto;
  },

  renderLike() {
    this.favButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favButton = document.querySelector('#favoriteButton');
    favButton.addEventListener('click', async () => {
      await this.favoriteResto.putResto(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.favButtonContainer.innerHTML = createUnfavoritedButtonTemplate();

    const favButton = document.querySelector('#favoriteButton');
    favButton.addEventListener('click', async () => {
      await this.favoriteResto.deleteResto(this.resto.id);
      this.renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
