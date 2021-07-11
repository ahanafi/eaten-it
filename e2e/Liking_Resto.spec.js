Feature('Liking resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorite resto', ({ I }) => {
  I.seeElement('#list-resto');
  I.see("Oops, looks like you haven't added the restaurant to your favorite restaurants", '.empty-resto-text');
});

Scenario('Liking Resto', ({ I }) => {
  I.amOnPage('/');
  pause();

  I.seeElement('.resto-content a.resto-name');
  I.click(locate('.resto-content a.resto-name').first());

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
});
