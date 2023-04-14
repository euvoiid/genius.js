module.exports = function shorten(text, length) {
    if(!text) return new Error('[ 🔧 ] - Parameter <text> not defined!');
    if(!length) return new Error('[ 🔧 ] - Parameter <length> not defined!');

    if (typeof text !== 'string') return '';
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '..';
}