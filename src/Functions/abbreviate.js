module.exports = function abbreviate(number) {
  if(!number) return new Error('[ 🔧 ] - Parameter <number> not defined!');
  if(isNaN(number)) return new Error('[ 🔧 ] - Parameter <number> must be a number');

  const Symbol = [
    { value: 1e3, symbol: "k" }, // Mil
    { value: 1e6, symbol: "M" }, // Milhão
    { value: 1e9, symbol: "B" }, // Bilhão
    { value: 1e12, symbol: "T" }, // Trilhão
    { value: 1e15, symbol: "Qa" }, // Quatrilhão
    { value: 1e18, symbol: "Qi" }, // Quintilhão
    { value: 1e21, symbol: "Sx" }, // Sextilão
    { value: 1e24, symbol: "Sp" }, // Septilhão
    { value: 1e27, symbol: "Oc" }, // Octilhão
    { value: 1e30, symbol: "Nn" } // Nonilhão
  ];

  var Values = Symbol.slice().reverse().find(function(Values) {
    return number >= Values.value;
  });

  return Values ? (number / Values.value) + Values.symbol : number;
}