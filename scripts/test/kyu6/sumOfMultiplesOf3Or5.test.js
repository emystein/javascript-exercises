const sumOfMultiplesOf3Or5 = require('../../kyu6/sumOfMultiplesOf3Or5');

test('Sum of multiples of 3 or 5', () => {
  expect(sumOfMultiplesOf3Or5(10)).toBe(23);
  expect(sumOfMultiplesOf3Or5(0)).toBe(0);
  expect(sumOfMultiplesOf3Or5(-1)).toBe(0);
});
