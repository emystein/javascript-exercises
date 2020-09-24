const XO = require('../../kyu7/XO');

test('XO', () => {
  expect(XO("ooxx")).toBe(true)
  expect(XO("xooxx")).toBe(false)
  expect(XO("ooxXm")).toBe(true)
  expect(XO("zpzpzpp")).toBe(true)
  expect(XO("zzoo")).toBe(false)
});