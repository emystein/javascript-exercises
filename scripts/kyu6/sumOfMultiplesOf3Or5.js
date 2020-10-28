// https://www.codewars.com/kata/514b92a657cdc65150000006
const sumOfMultiplesOf3Or5 = function(number) {
    return multiplesOf3Or5(number).filter(onlyUnique).sum();
};

const multiplesOf3Or5 = number => multiplesOf3(number).concat(multiplesOf5(number));

const multiplesOf3 = number => multiplesOf(number, 3);

const multiplesOf5 = number => multiplesOf(number, 5);

const multiplesOf = (number, divider) => from0ToNumberExclusive(number).filter((e, i) => isMultipleOf(e, divider));

const from0ToNumberExclusive = number => number > 0 ? Array.from(Array(number).keys()) : [];

const isMultipleOf = (potentialMultiple, number) => potentialMultiple % number == 0;

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

Array.prototype.sum = function() { return this.reduce((a, b) => a + b, 0); }

module.exports = sumOfMultiplesOf3Or5;