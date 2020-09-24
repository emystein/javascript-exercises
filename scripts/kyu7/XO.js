// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
const XO = function(list) {
  let xoCounter = {"x": 0, "o": 0};

  list.split('').forEach(e => xoCounter[e.toLowerCase()]++);

  return xoCounter["x"] == xoCounter["o"];
};

module.exports = XO;