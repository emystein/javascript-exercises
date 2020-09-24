const duplicateEncoder = require('../../kyu6/duplicateEncoder');

test('Duplicate Encoder', () => {
  expect(duplicateEncoder('din')).toBe('(((')
  expect(duplicateEncoder('recede')).toBe('()()()')
  expect(duplicateEncoder('Success')).toBe(')())())')
});