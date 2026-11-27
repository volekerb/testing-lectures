/**
 * Registration is open only when registered < capacity.
 * Counts must be safe integers; registered >= 0 and capacity >= 1.
 * This starter deliberately contains one boundary defect. Find it with a test.
 */
export function isRegistrationOpen(registered, capacity) {
  if (!Number.isSafeInteger(registered) || registered < 0 ||
      !Number.isSafeInteger(capacity) || capacity < 1) {
    throw new TypeError('Expected registered >= 0 and capacity >= 1 as safe integers');
  }
  return registered <= capacity;
}
