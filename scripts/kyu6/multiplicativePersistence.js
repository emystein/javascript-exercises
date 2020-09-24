// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript
const multiplicativePersistence = function (number) {
  return (number < 10) ? 0 : 1 + multiplicativePersistence(digitsProduct(number));
};

const digitsProduct = function (number) {
  return number.toString().split('').reduce((acc, current) => acc * current);
}

module.exports = multiplicativePersistence;