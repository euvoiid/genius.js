/* < -- [ Functions ] -- >*/

const randomNumber = require('./Functions/RandomNumber.js');
const randomText = require('./Functions/RandomText.js');
const symbolFormat = require('./Functions/SymbolFormat.js');
const msToTime = require('./Functions/MsToTime.js');
const escapeRegex = require('./Functions/EscapeRegex.js');
const timeToMs = require('./Functions/TimeToMs.js');
const randomHex = require('./Functions/RandomHex.js');
const shorten = require('./Functions/shorten.js');
const formatSizeUnits = require('./Functions/formatSizeUnits.js');
const formatDate = require('./Functions/formatDate.js');

/* < -- [ Images ] -- >*/

const circle = require('./Images/circle.js');
const blur = require('./Images/blur.js');
const gray = require('./Images/gray.js');
const invert = require('./Images/invert.js');
const qrCode = require('./Images/qrCode.js');

module.exports = {
  images: {
    circle: circle,
    blur: blur,
    gray: gray,
    invert: invert,
    qrCode: qrCode,
  },
  randomNumber: randomNumber,
  randomText: randomText,
  symbolFormat: symbolFormat,
  msToTime: msToTime,
  escapeRegex: escapeRegex,
  timeToMs: timeToMs,
  randomHex: randomHex,
  shorten: shorten,
  formatSizeUnits: formatSizeUnits,
  formatDate: formatDate,
}