module.exports = async function RandomNumber(min, max) {
  if(min !== 0) {
    if(!min) return new Error('[ 🔧 ] - Defina qual será o valor ( mínimo ).');
  }
  if(!max) return new Error('[ 🔧 ] - Defina qual será o valor ( máximo ).');

  return Math.floor(Math.random() * (max - min + 1) + min);
}