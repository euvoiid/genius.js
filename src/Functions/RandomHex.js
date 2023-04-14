module.exports = function RandomHex() {
    return '#' + Math.floor(Math.random() * (0xffffff + 1)).toString(16);
}