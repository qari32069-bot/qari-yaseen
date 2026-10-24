import test from 'node:test';
import assert from 'node:assert/strict';
import { RESTAURANT_CONFIG, buildWhatsAppUrl, buildTelUrl } from './restaurant';

test('restaurant configuration contains correct Kamoke details', () => {
  assert.equal(RESTAURANT_CONFIG.name, 'Bao Di Sajji');
  assert.equal(RESTAURANT_CONFIG.tagline, 'World Unique Sajji');
  assert.equal(RESTAURANT_CONFIG.contact.phoneCall, '03090111218');
  assert.equal(RESTAURANT_CONFIG.location.city, 'Kamoke');
  assert.ok(RESTAURANT_CONFIG.location.address.includes('Opposite HFC'));
});

test('restaurant menu contains all 8 required flavours exactly as specified', () => {
  assert.equal(RESTAURANT_CONFIG.menu.length, 8);
  const names = RESTAURANT_CONFIG.menu.map((m) => m.name);
  assert.deepEqual(names, [
    'Masala Sajji',
    'Black Pepper Sajji',
    'Karemi Sajji',
    'Cheezy Sajji',
    'Makne Sajji',
    'Pare Pare Sajji',
    'Malai Sajji',
    'White Pepper Sajji',
  ]);

  // Ensure prices are initially null (not invented)
  for (const item of RESTAURANT_CONFIG.menu) {
    assert.equal(item.price, null, `Item ${item.name} should have null price placeholder`);
  }
});

test('buildWhatsAppUrl cleans numbers and encodes message correctly', () => {
  const url = buildWhatsAppUrl('923090111218', 'Hello Sajji');
  assert.equal(url, 'https://wa.me/923090111218?text=Hello%20Sajji');

  const defaultUrl = buildWhatsAppUrl('+92 309-0111218');
  assert.ok(defaultUrl.startsWith('https://wa.me/923090111218?text=Assalam-o-Alaikum'));
});

test('buildTelUrl cleans numbers correctly for dialer', () => {
  assert.equal(buildTelUrl('0309 0111218'), 'tel:03090111218');
  assert.equal(buildTelUrl('+92 309-0111218'), 'tel:+923090111218');
});
