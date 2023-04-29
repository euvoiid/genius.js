/* < -- [ Functions ] -- >*/

const randomNumber = require('./Functions/randomNumber.js');
const randomText = require('./Functions/randomText.js');
const symbolFormat = require('./Functions/symbolFormat.js');
const msToTime = require('./Functions/msToTime.js');
const escapeRegex = require('./Functions/escapeRegex.js');
const timeToMs = require('./Functions/timeToMs.js');
const randomHex = require('./Functions/randomHex.js');
const shorten = require('./Functions/shorten.js');
const formatSizeUnits = require('./Functions/formatSizeUnits.js');
const formatDate = require('./Functions/formatDate.js');
const converterTemperatura = require('./Functions/converterTemperatura.js');
const getDataAtual = require('./Functions/getDataAtual.js');
const makeCharTable = require('./Functions/makeCharTable.js');
const removeEmojis = require('./Functions/removeEmojis.js');

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
  makeCharTable: makeCharTable,
  getDataAtual: getDataAtual,
  converterTemperatura: converterTemperatura,
  removeEmojis: removeEmojis
}