const multiplicativePersistence = require('../../kyu6/multiplicativePersistence');

test('Multiplicative persistence', () => {
  expect(multiplicativePersistence(39)).toBe(3);
  expect(multiplicativePersistence(4)).toBe(0);
  expect(multiplicativePersistence(25)).toBe(2);
  expect(multiplicativePersistence(999)).toBe(4);
});