const recycleMe = require('../../kyu7/recycleMe');

test('recycle', () => {
  expect(recycleMe([-1, 0, 1])).toStrictEqual([1, 1, 1]);
  expect(recycleMe([5, -9, 0, 6, -84, -95, 15])).toStrictEqual([3, 3, 1]);
  expect(recycleMe([45, -26, -4, -66, -84, -38, 14])).toStrictEqual([2, 5, 0]);
});
