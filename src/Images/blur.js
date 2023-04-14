module.exports = async function blur(image, level = 5) {
    if (!image) throw new Error('[ 🔧 ] - Parameter <image> not defined!');

    const jimp = require('jimp');
    image = await jimp.read(image);
    image.blur(isNaN(level) ? 5 : parseInt(level));
    return await image.getBufferAsync('image/png');
}