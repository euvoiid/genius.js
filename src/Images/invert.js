module.exports = async function invert(image) {
    if (!image) throw new Error('[ 🔧 ] - Parameter <image> not defined!');

    const jimp = require('jimp');
    image = await jimp.read(image);
    image.invert();
    return await image.getBufferAsync('image/png');
}