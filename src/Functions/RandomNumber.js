module.exports = function randomNumber(min, max) {
  if(min !== 0) {
    if(!min) return new Error('[ 🔧 ] - Parameter <min> not defined!');
  }
  if(!max) return new Error('[ 🔧 ] - Parameter <max> not defined!');

  return Math.floor(Math.random() * (max - min + 1) + min);
}