Feature('Unliking resto');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto-content a.resto-name');

  const firstResto = locate('.resto-content a.resto-name h1').first();
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
});

Scenario('show all favorite resto', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
});

Scenario('Unliking Resto', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.seeElement('.resto-content a.resto-name');

  const firstResto = locate('.resto-content a.resto-name h1').first();
  I.click(firstResto);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.seeElement('#list-resto');
  I.see("Oops, looks like you haven't added the restaurant to your favorite restaurants", '.empty-resto-text');
});
