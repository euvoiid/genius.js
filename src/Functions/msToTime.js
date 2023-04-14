module.exports = function MsToTime(ms) {
  if(!ms) return new Error('[ 🔧 ] - Parameter <ms> not defined!');
  if(isNaN(ms)) return new Error('[ 🔧 ] - Parameter <ms> must be a number');

  const Seconds = ~~(ms / 1000);
  const Minutes = ~~(Seconds / 60);
  const Hours = ~~(Minutes / 60);
  const Days = ~~(Hours / 24);

  return {
    Days,
    Hours: Hours % 24,
    Minutes: Minutes % 60,
    Seconds: Seconds % 60
  }
}