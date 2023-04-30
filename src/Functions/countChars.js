module.exports = function countChars(str) {
    if(!str) return new Error('[ 🔧 ] - Parameter <str> not defined!');

    const charCounts = {};
  
    for (const char of str) {
      charCounts[char] = charCounts[char] + 1 || 1;
    }
  
    return charCounts;
}