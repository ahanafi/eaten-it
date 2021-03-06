import RestoDbSource from '../../data/restodb-source';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import {
  createRestoDetailTemplate,
  createReviewItemTemplate,
  noInternetConnectionTemplate,
} from '../templates/template-creator';
import { ucWords, showAlert, alertNetwork } from '../../utils/custom-helper';
import noInternetImage from '../../../public/images/no-wifi.svg';

// Food images
import _food1 from '../../../public/images/foods/1.jpg';
import _food2 from '../../../public/images/foods/2.jpg';
import _food3 from '../../../public/images/foods/3.jpg';
import _food4 from '../../../public/images/foods/4.jpg';
import _food5 from '../../../public/images/foods/5.jpg';

// Drink images
import _drink1 from '../../../public/images/drinks/1.jpg';
import _drink2 from '../../../public/images/drinks/2.jpg';
import _drink3 from '../../../public/images/drinks/3.jpg';
import _drink4 from '../../../public/images/drinks/4.jpg';

import '../../../styles/detail.min.css';

const Detail = {
  async render() {
    return `
    <style>
      @media only screen
        and (max-device-width: 1200px) {
        #main-content{
          margin: 0 2%;
        }
      }
      @media screen
        and (min-device-width: 320px)
        and (max-device-width: 480px) {
        #main-content{
          margin: 0;
        }
      }
    </style>
    <section id="detail-resto" class="content">
    </section>
    <div id="fav-btn-container"></div>
    `;
  },

  async afterRender() {
    alertNetwork();
    const restoContainer = document.querySelector('#detail-resto');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // eslint-disable-next-line max-len
    const resto = (!navigator.onLine) ? await FavoriteRestoIdb.getResto(url.id) : await RestoDbSource.getDetailResto(url.id);

    if (!navigator.onLine && resto === undefined) {
      restoContainer.innerHTML += noInternetConnectionTemplate(noInternetImage);
    } else {
      let restoCategory = '';
      let restoFoods = '<ul class="food-lists">';
      let restoDrinks = '<ul class="food-lists">';
      let restoReviews = '';

      resto.categories.forEach((category) => {
        restoCategory += `<span class='resto-category'>${category.name}</span>`;
      });

      const arrFoodImages = [_food1, _food2, _food3, _food4, _food5];
      const arrDrinkImages = [_drink1, _drink2, _drink3, _drink4];

      // Foods
      resto.menus.foods.forEach((food) => {
        const index = Math.floor((Math.random() * arrFoodImages.length - 1) + 1);
        const restoImage = arrFoodImages[index];
        restoFoods += `
          <li class='food-item'>
            <img class='food-img' src='${restoImage}' alt='${resto.name}'/>
            <h4>${ucWords(food.name.toString())}</h4>
          </li>`;
      });
      restoFoods += '</ul>';

      // Drinks
      resto.menus.drinks.forEach((drink) => {
        const index = Math.floor((Math.random() * arrDrinkImages.length - 1) + 1);
        const drinkImage = arrDrinkImages[index];
        restoDrinks += `
          <li class='food-item'>
            <img class='food-img' src='${drinkImage}' alt='${drink.name}' />
            <h4>${ucWords(drink.name.toString())}</h4>
          </li>`;
      });
      restoDrinks += '</ul>';

      // Reviews
      resto.customerReviews.forEach((review) => {
        restoReviews += createReviewItemTemplate(review);
      });

      restoContainer.innerHTML = createRestoDetailTemplate(
        resto,
        restoCategory,
        restoFoods,
        restoDrinks,
        restoReviews,
      );

      const btnSubmitReview = document.querySelector('#submit-review');
      btnSubmitReview.addEventListener('click', async () => {
        // Check online status first
        if (!navigator.onLine) {
          alertNetwork();
        } else {
          const reviewerName = document.querySelector('#reviewer-name');
          const reviewText = document.querySelector('#reviewer-text');

          if (reviewerName.value === '' || reviewText.value === '') {
            showAlert('Did you forget to fill out the form? Please try again.', 'warning');
          } else {
            const review = {
              id: resto.id,
              name: reviewerName.value,
              review: reviewText.value,
            };
            const insertReview = await RestoDbSource.insertReview(review);
            if (insertReview !== null) {
              showAlert('Your review has been successfully inserted', 'success');

              const reviews = document.querySelector('#reviews');
              const lastReview = insertReview[insertReview.length - 1];
              reviews.innerHTML += createReviewItemTemplate(lastReview);

              reviewerName.value = '';
              reviewText.value = '';
            } else {
              showAlert('We can`t save your review at this time. Please try again later!', 'info');
            }
          }
        }
      });

      FavoriteButtonPresenter.init({
        favButtonContainer: document.querySelector('#fav-btn-container'),
        favoriteResto: FavoriteRestoIdb,
        resto,
      });
    }
  },
};

export default Detail;
