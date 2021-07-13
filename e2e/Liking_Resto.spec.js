const assert = require('assert');

Feature('Liking resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorite resto', ({ I }) => {
  I.seeElement('#list-resto');
  I.see("Oops, looks like you haven't added the restaurant to your favorite restaurants", '.empty-resto-text');
});

Scenario('Liking Resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto-content a.resto-name');

  const firstResto = locate('.resto-content a.resto-name h1').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const favoritedRestoName = await I.grabTextFrom('.resto-content a.resto-name h1');

  assert.strictEqual(firstRestoName, favoritedRestoName);
});
