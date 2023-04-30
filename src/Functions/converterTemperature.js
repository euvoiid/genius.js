module.exports = function converterTemperature(temperature, originScale, destinationScale) {
  if(!temperature) return new Error('[ 🔧 ] - Parameter <temperature> not defined!');
  if(!originScale) return new Error('[ 🔧 ] - Parameter <originScale> not defined!');
  if(!destinationScale) return new Error('[ 🔧 ] - Parameter <destinationScale> not defined!');
    let res = 0;
    if (originScale === 'C' && destinationScale === 'F') {
      res = (temperature * 9/5) + 32;
    } else if (originScale === 'F' && destinationScale === 'C') {
      res = (temperature - 32) * 5/9;
    } else {
      res = temperature;
    }
    return res;
  }