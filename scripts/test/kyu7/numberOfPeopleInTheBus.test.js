const numberOfPeopleInTheBus = require('../../kyu7/numberOfPeopleInTheBus');

test('Number of people in the bus', () => {
  expect(numberOfPeopleInTheBus([[10, 0], [3, 5], [5, 8]])).toBe(5);
  expect(numberOfPeopleInTheBus([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(17);
  expect(numberOfPeopleInTheBus([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21);
});