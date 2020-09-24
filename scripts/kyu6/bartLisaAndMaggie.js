// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
const list = function(names) {
  ns = names.map(o => o.name);

  switch (ns.length) {
    case 0:
      return '';
    case 1:
      return ns[0];
    default:
      return ns.slice(0, -1).join(', ') + ' & ' + ns[ns.length - 1];
  }
};

module.exports = list;