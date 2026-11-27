/** Same contract as the starter. The equality case must reject registration. */
export function isRegistrationOpen(registered, capacity) {
  if (!Number.isSafeInteger(registered) || registered < 0 ||
      !Number.isSafeInteger(capacity) || capacity < 1) {
    throw new TypeError('Expected registered >= 0 and capacity >= 1 as safe integers');
  }
  return registered < capacity;
}
