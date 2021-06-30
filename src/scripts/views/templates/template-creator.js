import CONFIG from '../../globals/config';
import IMAGE_TYPE from '../../globals/image-type';

const createRestoDetailTemplate = (resto, categories, foods, drinks, reviews) => `
    <style>
      .resto-image{
        background: url(${CONFIG.BASE_IMAGE_URL + IMAGE_TYPE.DEFAULT + resto.pictureId});
        background-size: cover;
        border-radius:5px;
      }
    </style>
    <h1>
      <i class='fa fa-home'></i>
      ${resto.name}
    </h1>
    <div id="resto-info">
      <div class="resto-image"></div>
      <div class="resto-full-info">
        <table cellpadding='10' cellspacing='0'>
          <tr>
            <td>
              <h3>Information</h3>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <i class='fa fa-building'></i>
              City
            </td>
            <td>:</td>
            <td>${resto.city}</td>
          </tr>
          <tr>
            <td>
              <i class='fa fa-map-marker'></i>
              Address
            </td>
            <td>:</td>
            <td>
              <a href='https://www.google.com/maps/search/?api=1&query=${resto.address}'>${resto.address}</a>
            </td>
          </tr>
          <tr>
            <td>
              <i class='fa fa-star'></i>
              Rating
            </td>
            <td>:</td>
            <td>${resto.rating}</td>
          </tr>
          <tr>
            <td>
              <i class='fa fa-tags'></i>
              Categories
            </td>
            <td>:</td>
            <td>${categories}</td>
          </tr>
          <tr>
            <td colspan='3'>
              <i class='fa fa-info-circle'></i>
              Decriptions
            </td>
          </tr>
          <tr>
            <td colspan='3' class='reto-desc'>
              ${resto.description}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id='resto-foods'>
      <h3>
        <i class='fa fa-cutlery'></i>
        Foods :
      </h3>
      ${foods}
    </div>
    <div id='resto-drinks'>
      <h3>
        <i class='fa fa-glass'></i>
        Drinks :
      </h3>
      ${drinks}
    </div>
    <div id='customer-reviews'>
      <h3>
        <i class='fa fa-comments'></i>
        What customer say's about us :
      </h3>
      <div id="container-review">
        <div id="reviews">${reviews}</div>
        <div id="review-form">
          <table>
            <tr>
              <td colspan='2'>
                <h4>Want to add review?</h4>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td><input type='text' id='reviewer-name' autocomplete='off' /></td>
            </tr>
            <tr>
              <td>Comment</td>
              <td><textarea id='reviewer-text' autocomplete='off' placeholder='Put your review here...'></textarea></td>
            </tr>
            <tr>
              <td></td>
              <td><button type='button' id='submit-review'>Submit My Review</button</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `;

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
