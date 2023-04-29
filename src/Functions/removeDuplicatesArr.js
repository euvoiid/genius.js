module.exports = function removeDuplicatesArr(arr) {
    if(!arr) return new Error('[ 🔧 ] - Parameter <args> not defined!'); 
    if(!Array.isArray(arr)) return new Error('[ 🔧 ] - Parameter <args-array> not set!'); 
    return [...new Set(arr)];
}