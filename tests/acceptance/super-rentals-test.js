import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists()
    assert.dom('nav h1').hasText('SuperRentals')
    assert.dom('h2').hasText('Welcome to Super Rentals!');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists()
    assert.dom('nav h1').hasText('SuperRentals')
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.about-content a.button').hasText('Contact Us');
    await click('.about-content a.button')

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists()
    assert.dom('nav h1').hasText('SuperRentals')
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.about-content a.button').hasText('About');
    await click('.about-content a.button');

    assert.equal(currentURL(), '/about');
  });

  test('Navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals')
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('a.ember-view.menu-about');
    assert.equal(currentURL(), '/about');

    await click('a.ember-view.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('a.ember-view.menu-index');
    assert.equal(currentURL(), '/');
  });
});
