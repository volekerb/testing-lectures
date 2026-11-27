import test from 'node:test';
import assert from 'node:assert/strict';
import { isRegistrationOpen } from './registration.mjs';

for (const [registered, capacity, expected] of [
  [9, 10, true], [10, 10, false], [11, 10, false], [0, 1, true], [1, 1, false],
]) {
  test(`registered=${registered}, capacity=${capacity} -> ${expected}`, () => {
    assert.equal(isRegistrationOpen(registered, capacity), expected);
  });
}
