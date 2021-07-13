/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking a resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = "<div id='fav-btn-container'></div>";
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('1) Should show the favorite button when the resto hasn`t been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('2) Should not show the un-favorite button when the resto hasn`t been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('3) Should be able to add to the favorite resto', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('4) Should not add to the favorite resto when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });

  it('5) Should not add to the favorite resto when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
