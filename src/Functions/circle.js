module.exports = async function circle(image) {
    if (!image) throw new Error('[ 🔧 ] - Parameter <image> not defined!');
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    let raw = await image.getBufferAsync("image/png");
    return raw;
}