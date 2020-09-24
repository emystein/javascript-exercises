const list = require('../../kyu6/bartLisaAndMaggie');

test('Bart, Lisa & Maggie', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }])).toBe('Bart, Lisa, Maggie, Homer & Marge');
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toBe('Bart & Lisa');
  expect(list([{ name: 'Bart' }])).toBe('Bart');
  expect(list([])).toBe('');
});

