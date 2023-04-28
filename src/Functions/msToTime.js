module.exports = function msToTime(ms) {
  if(!ms) return new Error('[ 🔧 ] - Parameter <ms> not defined!');
  if(isNaN(ms)) return new Error('[ 🔧 ] - Parameter <ms> must be a number');

  let seconds = ms / 1000;
  const days = ~~(seconds / 86400);
  seconds = seconds % 86400;
  const hours = ~~(seconds / 3600);
  seconds = seconds % 3600;
  const minutes = ~~(seconds / 60);
  seconds = ~~(seconds % 60);

  if (days) {
      return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
  }
  else if (hours) {
      return `${hours}h, ${minutes}m, ${seconds}s`;
  }
  else if (minutes) {
      return `${minutes}m, ${seconds}s`;
  }
  return `${seconds}s`;
}