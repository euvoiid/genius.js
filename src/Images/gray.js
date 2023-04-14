module.exports = async function gray(image) {
    if (!image) throw new Error('[ 🔧 ] - Parameter <image> not defined!');

    const jimp = require('jimp');
    image = await jimp.read(image);
    image.greyscale();
    return await image.getBufferAsync('image/png');
}