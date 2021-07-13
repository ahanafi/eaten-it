/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = "<div id='fav-btn-container'></div>";
};

describe('Unliking a resto', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('1) Should show the unfavorite button when the resto has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  it('2) Should not show the favorite button when the resto has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  it('3) Should be able to delete resto from list the favorite resto', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('4) Should not throw error if the unfavorite resto is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
