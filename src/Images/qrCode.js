module.exports = async function qrCode(text, options = { background: "#FFFFFF", color: "#000000" }) {
    if (!text) throw new Error('[ 🔧 ] - Parameter <text> not defined!');

    const jimp = require('jimp');
    let image = `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${encodeURIComponent(text)}&color=${options.color.replace("#", "")}&bgcolor=${options.background.replace("#", "")}`;
    image = await jimp.read(image);
    return await image.getBufferAsync('image/png');
}