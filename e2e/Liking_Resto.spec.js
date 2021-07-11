const assert = require('assert');

Feature('Liking resto');

Before(({ I }) => {
  // Ada di halaman favorite
  I.amOnPage('/#/favorite');
});

// Halaman favorite menampilkan resto kosong
Scenario('show empty favorite resto', ({ I }) => {
  I.seeElement('#list-resto');
  I.see("Oops, looks like you haven't added the restaurant to your favorite restaurants", '.empty-resto-text');
});

Scenario('Liking Resto', async ({ I }) => {
  // Pindah ke halaman home
  I.amOnPage('/');
  // pause();

  // Terdapat element resto
  I.seeElement('.resto-content a.resto-name');

  // Ambil element
  const firstResto = locate('.resto-content a.resto-name h1').first();
  // Ambil text
  const firstRestoName = await I.grabTextFrom(firstResto);
  // Klik text tersebut
  I.click(firstResto);

  // Otomatis pindah ke halaman detail
  // Halamand etail ada element favoriteButton
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // PIndah ke halaman favorite
  I.amOnPage('/#/favorite');
  // Pastikan ada resto item
  I.seeElement('.resto-item');

  // Ambil namanaya
  const favoritedRestoName = await I.grabTextFrom('.resto-content a.resto-name h1');

  // Bandingkan, pastikan keduanya sama
  assert.strictEqual(firstRestoName, favoritedRestoName);
});
