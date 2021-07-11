import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking a resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = "<div id='fav-btn-container'></div>";
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  // 1. Memastikan button favorite tampil ketika resto belum ditambahkan ke daftar favorite
  it('1) Should show the favorite button when the resto hasn`t been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  // 2. Memastikan button un-favorite tidak tampil ketika resto belum ditambahkan ke daftar favorite
  it('2) Should not show the un-favorite button when the resto hasn`t been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  // 3. Memastikan bahwa resto dapat ditambahkan ke daftar favorite
  it('3) Should be able to add to the favorite resto', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  // 4. Memastikan bahwa resto yang sudah ditambahkan ke daftar favorite
  // tidak dapat ditambahkan lagi
  it('4) Should not add to the favorite resto when its already favorited', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });

  // 5. Memastikan bahwa resto dengan id 0 tidak bisa ditambahkan ke daftar favorite
  it('5) Should not add to the favorite resto when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
