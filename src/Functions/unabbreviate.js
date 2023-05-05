module.exports = function unabbreviate(abbreviate) {
  if(!abbreviate) return new Error('[ :wrench: ] - Parameter <abbreviate> not defined!');

  const Symbol = {
      k: 1000, // Mil
      m: 1000000, // Milhão
      b: 1000000000, // Bilhão 
      t: 1000000000000, // Trilhão
      K: 1000, // Mil
      M: 1000000, // Milhão
      B: 1000000000,  // Bilhão 
      T: 1000000000000, // Trilhão
    };

  const un = abbreviate.slice(-1) || 0;

  const valueAbbreviate = parseFloat(abbreviate);

  const valueComplet = valueAbbreviate * Symbol[un];

  return valueComplet;
}