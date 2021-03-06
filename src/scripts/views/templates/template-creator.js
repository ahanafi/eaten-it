import CONFIG from '../../globals/config';
import IMAGE_TYPE from '../../globals/image-type';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { ucWords } from '../../utils/custom-helper';

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
        <h3>Information</h3>
        <table cellpadding='10' cellspacing='0'>
          <tr>
            <td><i class='fa fa-building'></i></td>
            <td>City</td>
            <td>:</td>
            <td>${resto.city}</td>
          </tr>
          <tr>
            <td><i class='fa fa-map-marker'></i></td>
            <td>Address</td>
            <td>:</td>
            <td>
              <a href='https://www.google.com/maps/search/?api=1&query=${resto.address}'>${resto.address}</a>
            </td>
          </tr>
          <tr>
            <td><i class='fa fa-star'></i></td>
            <td>Rating</td>
            <td>:</td>
            <td>${resto.rating}</td>
          </tr>
          <tr>
            <td><i class='fa fa-tags'></i></td>
            <td>Categories</td>
            <td>:</td>
            <td>${categories}</td>
          </tr>
        </table>
      </div>
    </div>
    <div id='resto-foods'>
      <h3>
        <i class='fa fa-info-circle'></i>
        Description :
      </h3>
      <p class='resto-desc'>${resto.description}</p>
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
          <h4>Want to add review?</h4>
          <table cellspacing='0' cellpadding='0'>
            <tr>
              <td>Name <br>
              <input type='text' id='reviewer-name' autocomplete='off' /></td>
            </tr>
            <tr>
              <td>Comment <br>
              <textarea id='reviewer-text' autocomplete='off' placeholder='Put your review here...'></textarea></td>
            </tr>
            <tr>
              <td>
                <button type='button' id='submit-review'>Submit My Review</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
`;

const createRestoItemTemplate = (resto) => `
  <article class='resto-item'>
    <div class='resto-heading'>
      <img class='resto-img lazyload' data-src='${CONFIG.BASE_IMAGE_URL + IMAGE_TYPE.SMALL + resto.pictureId}' alt='${resto.name}' />
    </div>
    <div class='resto-content'>
      <a href='#/detail/${resto.id}' class='resto-name'><h1>${resto.name}</h1></a>
        <i class='fa fa-fw fa-map-marker'></i> <span class='resto-city'>${resto.city}</span> |
        <i class='fa fa-fw fa-star'></i> <span class='resto-rating'>${resto.rating}</span>
        <p class='resto-description'>${resto.description}</p>
    </div>
    <div class='resto-footer'></div>
  </article>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="like this resto" id="favoriteButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoritedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="favoriteButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const emptyFavoriteResto = (image) => `
  <style>
    @media only screen
      and (max-device-width: 568px) {
      h2.empty-resto-text{
        font-size:18px !important;
      }
    }
  </style>
  <div id="empty-resto">
    <img src="${image}" alt="Oops Image" /> <br>
    <h2 class='empty-resto-text'>Oops, looks like you haven't added the restaurant to your favorite restaurants</h2>
  </div>
`;

const createReviewItemTemplate = (review) => `
  <div class='review-item'>
    <div class='reviewer'>
      <h4 class='reviewer-name'>${ucWords(review.name)}</h4>
      <span class='review-date'>at ${review.date} say's :</span>   
    </div>
    <p class='review-text'>${review.review}</p>
  </div>
`;

const noInternetConnectionTemplate = (image) => `
  <div class='empty-network'>
    <h1>
      Whoops...! <br>
      <span>looks like your device is not connected to the internet</span>
    </h1>
    <img src="${image}" alt="No Internet Image" /> <br>
    <h2 class='empty-network-suggestion'>Please check your connection.</h2>
  </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFavoriteButtonTemplate,
  createUnfavoritedButtonTemplate,
  emptyFavoriteResto,
  createReviewItemTemplate,
  noInternetConnectionTemplate,
};
