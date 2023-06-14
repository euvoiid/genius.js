/* < -- [ Functions ] -- >*/

const randomNumber = require('./Functions/randomNumber.js');
const randomText = require('./Functions/randomText.js');
const abbreviate = require('./Functions/abbreviate.js');
const unabbreviate = require('./Functions/unabbreviate.js');
const msToTime = require('./Functions/msToTime.js');
const escapeRegex = require('./Functions/escapeRegex.js');
const timeToMs = require('./Functions/timeToMs.js');
const randomHex = require('./Functions/randomHex.js');
const shorten = require('./Functions/shorten.js');
const formatSizeUnits = require('./Functions/formatSizeUnits.js');
const formatDate = require('./Functions/formatDate.js');
const converterTemperature = require('./Functions/converterTemperature.js');
const getCurrentDate = require('./Functions/getCurrentDate.js');
const makeCharTable = require('./Functions/makeCharTable.js');
const removeEmojis = require('./Functions/removeEmojis.js');
const isInteger = require('./Functions/isInteger.js');
const removeDuplicatesArr = require('./Functions/removeDuplicatesArr.js');
const countChars = require('./Functions/countChars.js');
const toMorseCode = require('./Functions/toMorseCode.js');
const generatePassword = require('./Functions/generatePassword.js');

module.exports = {
  randomNumber: randomNumber,
  randomText: randomText,
  abbreviate: abbreviate,
  unabbreviate: unabbreviate,
  msToTime: msToTime,
  escapeRegex: escapeRegex,
  timeToMs: timeToMs,
  randomHex: randomHex,
  shorten: shorten,
  formatSizeUnits: formatSizeUnits,
  formatDate: formatDate,
  makeCharTable: makeCharTable,
  getCurrentDate: getCurrentDate,
  converterTemperature: converterTemperature,
  removeEmojis: removeEmojis,
  isInteger: isInteger,
  removeDuplicatesArr: removeDuplicatesArr,
  toMorseCode: toMorseCode,
  countChars: countChars,
  generatePassword: generatePassword
}
