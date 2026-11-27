import test from 'node:test';
import assert from 'node:assert/strict';
import { isRegistrationOpen as starter } from '../labs/registration/starter/registration.mjs';
import { isRegistrationOpen as solution } from '../labs/registration/solution/registration.mjs';
import { evaluate } from '../labs/registration/contract.mjs';

test('published starter exposes only the two equality examples', () => {
  assert.deepEqual(evaluate(starter).filter(result => !result.passed).map(result => result.id), ['equal', 'small-capacity']);
});
test('reference solution satisfies every published contract example', () => {
  assert.equal(evaluate(solution).every(result => result.passed), true);
});
test('both implementations reject inputs outside the stated numeric contract', () => {
  for (const implementation of [starter, solution]) {
    for (const [registered, capacity] of [[-1, 10], [1.5, 10], [1, 0], [1, 1.5], ['9', 10], [NaN, 10], [0, Infinity], [Number.MAX_SAFE_INTEGER + 1, 10]]) {
      assert.throws(() => implementation(registered, capacity), TypeError);
    }
  }
});
test('solution applies the boundary rule across capacities, not only ten', () => {
  for (const capacity of [1, 2, 10, 100, Number.MAX_SAFE_INTEGER]) {
    assert.equal(solution(capacity - 1, capacity), true);
    assert.equal(solution(capacity, capacity), false);
  }
});
