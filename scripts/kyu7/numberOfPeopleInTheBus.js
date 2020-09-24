// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/javascript
const numberOfPeopleInTheBus = function(busStops) {
  return busStops.reduce((acc, s) => acc + (s[0] - s[1]), 0);
}

module.exports = numberOfPeopleInTheBus;