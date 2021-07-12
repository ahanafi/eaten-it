const assert = require('assert');

Feature('Adding new Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('show all resto', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-content a.resto-name');

  const firstResto = locate('.resto-content a.resto-name h1').first();
  I.click(firstResto);
});

Scenario('Adding Review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.resto-content a.resto-name');

  const firstResto = locate('.resto-content a.resto-name h1').first();
  I.click(firstResto);

  I.seeElement('#review-form');
  I.seeElement('#reviewer-name');
  I.seeElement('#reviewer-text');
  I.seeElement('#submit-review');

  const reviewText = 'Wow! Amajing';
  const reviewName = 'John';

  // Form
  I.fillField('#reviewer-name', reviewName);
  I.fillField('#reviewer-text', reviewText);
  await I.click('#submit-review');

  I.acceptPopup();

  I.seeElement('#reviews');
  const reviewItem = '#reviews .review-item';

  const reviewerName = locate(`${reviewItem} .reviewer h4.reviewer-name`).last();
  const lastReviewItem = locate(`${reviewItem} p.review-text`).last();
  lastReviewText = await I.grabTextFrom(lastReviewItem);
  lastReviewerName = await I.grabTextFrom(reviewerName);

  assert.strictEqual(lastReviewText, reviewText);
  assert.strictEqual(lastReviewerName, reviewName);
});
