module.exports = function EscapeRegex(string) {
  if(!string) return new Error('[ 🔧 ] - Parameter <string> not defined!');
  return string.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}