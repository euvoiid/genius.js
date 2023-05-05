module.exports = function countChars(str) {
  if(!str) return new Error('[ 🔧 ] - Parameter <str> not defined!');

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
  }

  return count;
}