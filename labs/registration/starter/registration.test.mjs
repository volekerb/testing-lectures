import test from 'node:test';
import assert from 'node:assert/strict';
import { isRegistrationOpen } from './registration.mjs';

test('opens registration when a seat is available', () => {
  assert.equal(isRegistrationOpen(9, 10), true);
});

test('closes registration when already over capacity', () => {
  assert.equal(isRegistrationOpen(11, 10), false);
});

// Add the missing boundary test here before editing registration.mjs.
