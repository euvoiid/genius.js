module.exports = function removeEmojis(str) {
    if(!str) return new Error('[ 🔧 ] - Parameter <str> not defined!');
    if(typeof str !== 'string') return new Error('[ 🔧 ] - Parameter <str-string> not set!'); 
    const emojiPattern = /(?:<:[^:]+:\d+>)|(?:[\u2000-\u3300\uDC00-\uDFFF\s\uD83C-\uD83E][\uDC00-\uDFFF\s\uD83C-\uD83E]*?)+|™/g;
    return str.replace(emojiPattern, '').trim();
}