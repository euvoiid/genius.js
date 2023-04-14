const randomNumber = require('./Functions/RandomNumber.js');
const randomText = require('./Functions/RandomText.js');
const symbolFormat = require('./Functions/SymbolFormat.js');
const msToTime = require('./Functions/MsToTime.js');
const escapeRegex = require('./Functions/EscapeRegex.js');
const timeToMs = require('./Functions/TimeToMs.js');
const randomHex = require('./Functions/RandomHex.js');
const shorten = require('./Functions/shorten.js');
const formatSizeUnits = require('./Functions/formatSizeUnits.js');
const circle = require('./Functions/circle.js');

module.exports = {
  image: {
    circle: circle,
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
}