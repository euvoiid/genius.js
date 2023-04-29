module.exports = function isInteger(value) {
    if(!value) return new Error('[ 🔧 ] - Parameter <value> not defined!');
    if(isNaN(value)) return new Error('[ 🔧 ] - Parameter <value> must be a number');
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}