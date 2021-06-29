import CONFIG from '../../globals/config';
import IMAGE_TYPE from '../../globals/image-type';

const createRestoDetailTemplate = (resto) => ``;

const createRestoItemTemplate = (resto) => `
  <article class='resto-item'>
    <div class='resto-heading'>
      <img class='resto-img' src='${CONFIG.BASE_IMAGE_URL + IMAGE_TYPE.DEFAULT + resto.pictureId}' alt='${resto.name}' />
    </div>
    <div class='resto-content'>
      <a href='#/detail/${resto.id}' class='resto-name'><h1>${resto.name}</h1></a>
        <i class='fa fa-fw fa-map-marker'></i> <span class='resto-city'>${resto.city}</span> |
        <i class='fa fa-fw fa-star'></i> <span class='resto-rating'>${resto.rating}</span>
        <p class='resto-description'>${resto.description}</p>
    </div>
    <div class='resto-footer'></div>
  </article>`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this resto" id="favoriteButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="favoriteButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
