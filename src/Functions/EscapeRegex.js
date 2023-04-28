module.exports = function escapeRegex(string) {
  if(!string) return new Error('[ 🔧 ] - Parameter <string> not defined!');
  return string.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}