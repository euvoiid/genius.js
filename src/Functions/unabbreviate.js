module.exports = function unabbreviate(value) {
  if(!value) return new Error('[ 🔧 ] - Parameter <value> not defined!');
  const suffixes = {
      k: 1000,
      m: 1000000,
      b: 1000000000
  };

  const lastChar = value.slice(-1).toLowerCase();
  const multiplier = suffixes[lastChar];

  if(multiplier) {
      const numericPart = parseFloat(value);
      if(!isNaN(numericPart)) {
          return numericPart * multiplier;
      }
  } else if(!isNaN(value)) {
      return parseFloat(value);
  }

  return value;
}