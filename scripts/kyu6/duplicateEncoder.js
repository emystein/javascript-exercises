const duplicateEncoder = function (word) {
  chars = word.toLowerCase().split('');

  positions = [];

  for (currentPosition = 0; currentPosition < chars.length; currentPosition++) {
    const char = chars[currentPosition];

    if (positions[char] == undefined) {
      positions[char] = [];
    }

    positions[char].push(currentPosition);
  }

  result = [];

  for (currentPosition = 0; currentPosition < chars.length; currentPosition++) {
    const char = chars[currentPosition];
    encoded = (positions[char].length > 1) ? ')' : '(';
    result.push(encoded);
  }

  return result.join('');
};

module.exports = duplicateEncoder;