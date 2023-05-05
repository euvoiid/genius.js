module.exports = function unabbreviate(abbreviate) {
    if(!abbreviate) return new Error('[ 🔧 ] - Parameter <abbreviate> not defined!');

    const Symbol = [
      {
        k: 1000, // Mil
        m: 1000000, // Milhão
        b: 1000000000, // Bilhão 
        t: 1000000000000, // Trilhão
        K: 1000, 
        M: 1000000, 
        B: 1000000000, 
        T: 1000000000000
      }
    ];
  
    const un = abbreviate.slice(-1);
  
    const valueAbbreviate = parseFloat(abbreviate);
  
    const valueComplet = valueAbbreviate * Symbol[un];
  
    return valueComplet;
}