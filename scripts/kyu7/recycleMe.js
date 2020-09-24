// https://www.codewars.com/kata/59fb783bab11f89202001083
function recycleMe(recycle) {
  let buckets = [0, 0, 0];

  recycle.forEach(n => buckets[Math.sign(n) + 1]++);

  return [buckets[2], buckets[0], buckets[1]];
}

module.exports = recycleMe;
