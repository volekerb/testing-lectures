export const cases = [
  { id: 'below', registered: 9, capacity: 10, expected: true },
  { id: 'equal', registered: 10, capacity: 10, expected: false },
  { id: 'above', registered: 11, capacity: 10, expected: false },
  { id: 'empty', registered: 0, capacity: 1, expected: true },
  { id: 'small-capacity', registered: 1, capacity: 1, expected: false },
  { id: 'other-capacity', registered: 9, capacity: 20, expected: true },
];

export function evaluate(implementation) {
  return cases.map(example => {
    try {
      const actual = implementation(example.registered, example.capacity);
      return { ...example, actual, passed: actual === example.expected };
    } catch (error) {
      return { ...example, error: String(error), passed: false };
    }
  });
}
