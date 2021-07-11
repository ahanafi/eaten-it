/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    // Memanggil semua data Resto
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      // Menghapus satu per satu Resto yang tersimpan
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
