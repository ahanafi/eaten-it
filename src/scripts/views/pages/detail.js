import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';
import { ucWords } from '../../utils/custom-herlper';

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

const Detail = {
  async render() {
    return `
    <section id="detail-resto" class="content"></section>
    <div id="fav-btn-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.getDetailResto(url.id);
    const restoContainer = document.querySelector('#detail-resto');

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
      restoReviews += `
        <div class='review-item'>
          <h4 class='reviewer'>
            ${review.name} <span class='review-date'>at ${review.date}  say's </span> :
          </h4>
          
          <p class='review-text'>${review.review}</p>
        </div>
      `;
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
        alert('Please, check your internet connection first before add the review!');
      } else {
        const reviewerName = document.querySelector('#reviewer-name');
        const reviewText = document.querySelector('#reviewer-text');

        if (reviewerName === '' || reviewText === '') {
          alert('Did you forget to fill out the form? Pls. try again!');
        } else {
          const review = {
            id: resto.id,
            name: reviewerName.value,
            review: reviewText.value,
          };
          const insertReview = await RestoDbSource.insertReview(review);
          if (insertReview !== null) {
            alert('Your review`s successfully inserted!');

            const reviews = document.querySelector('#reviews');
            const lastReview = insertReview[insertReview.length - 1];
            reviews.innerHTML += `
              <div class='review-item'>
                <h4 class='reviewer'>
                  ${lastReview.name} <span class='review-date'>at ${lastReview.date}  say's </span> :
                </h4>
                <p class='review-text'>${lastReview.review}</p>
              </div>
            `;

            reviewerName.value = '';
            reviewText.value = '';
          } else {
            alert('Oops! We can`t save your review at this time. Pls. try again later!');
          }
        }
      }
    });

    FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
