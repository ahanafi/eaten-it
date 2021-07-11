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

  // 1. Memastikan button un=favorite tampil ketika resto sudah ditambahkan ke daftar favorite
  it('1) Should show the unfavorite button when the resto has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  // 2. Memastikan button favorite tidak tampil ketika resto sudah ditambahkan ke daftar favorite
  it('2) Should not show the favorite button when the resto has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  // 3. Memastikan bahwa resto dapat dihapus dari ke daftar favorite
  it('3) Should be able to delete resto from list the favorite resto', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  // 4. Memastikan bahwa resto yang belum ditambahkan ke daftar favorite
  // tidak ada dalam daftar favorite
  it('4) Should not throw error if the unfavorite resto is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
