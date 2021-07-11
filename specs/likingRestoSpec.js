// Skenario Menyukai Resto:
// 1. Resto belum disukai.
// 2. Widget untuk menyukai resto ditampilkan
// 3. Widget menyukai resto ditekan oleh pengguna.
// 4. Resto ditambahkan ke daftar resto yang disukai:
//    a. Ternyata resto sudah disukai:
//       - Tidak perlu menyimpan kembali.
//    b. Data resto tidak memiliki ID:
//       - Sistem tidak memproses penyimpanan.
//       - Sistem tidak gagal.

// Skenario Batal Menyukai Resto:
// 1. Resto sudah disukai.
// 2. Widget untuk batal menyukai resto ditampilkan.
// 3. Widget pembatalan ditekan oleh pengguna.
// 4. Resto dihapus dari daftar resto yang disukai:
//    a. Ternyata resto tidak ada dalam daftar resto yang disukai

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
  it('Should show the favorite button when the resto hasn`t been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"')).toBeTruthy();
  });

  // 2. Memastikan button un-favorite tidak tampil ketika resto belum ditambahkan ke daftar favorite
  it('Should not show the un-favorite button when the resto hasn`t been favorited before', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"')).toBeFalsy();
  });

  // 3. Memastikan bahwa resto dapat ditambahkan ke daftar favorite
  it('Should be able to add to the favorite resto', async () => {
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
  it('Should not add to the favorite resto when its already favorited', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.putResto({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  // 5. Memastikan bahwa resto dengan id 0 tidak bisa ditambahkan ke daftar favorite
  xit('Should not add to the favorite resto when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#fav-btn-container'),
      resto: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
