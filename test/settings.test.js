const test = require('node:test');
const assert = require('node:assert/strict');
const { submitSettings, validateSettings } = require('../script');

test('requires a name', () => {
  assert.deepEqual(validateSettings({ name: '', email: 'person@example.com' }), {
    name: 'Name is required.'
  });
});

test('rejects a name containing only spaces', () => {
  assert.deepEqual(validateSettings({ name: '   ', email: 'person@example.com' }), {
    name: 'Name is required.'
  });
});

test('requires an email', () => {
  assert.deepEqual(validateSettings({ name: 'Person', email: '' }), {
    email: 'Email is required.'
  });
});

test('rejects an invalid email', () => {
  assert.deepEqual(validateSettings({ name: 'Person', email: 'not-an-email' }), {
    email: 'Enter a valid email address.'
  });
});

test('allows valid name and email values', () => {
  assert.deepEqual(submitSettings({ name: 'Person', email: 'person@example.com' }), {
    saved: true,
    errors: {}
  });
});

test('does not save when validation fails', () => {
  assert.equal(submitSettings({ name: 'Person', email: 'invalid' }).saved, false);
});