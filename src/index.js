const RandomNumber = require('./Functions/RandomNumber.js');
const RandomText = require('./Functions/RandomText.js');
const SymbolFormat = require('./Functions/SymbolFormat.js');
const MsToTime = require('./Functions/MsToTime.js');
const EscapeRegex = require('./Functions/EscapeRegex.js');
const TimeToMs = require('./Functions/TimeToMs.js');
const RandomHex = require('./Functions/RandomHex.js');
const shorten = require('./Functions/shorten.js');
const formatSizeUnits = require('./Functions/formatSizeUnits.js');
const circle = require('./Functions/circle.js');

module.exports = new class GeniusJS {
  constructor() {
    this.randomNumber = RandomNumber;
    this.randomText = RandomText;
    this.symbolFormat = SymbolFormat;
    this.msToTime = MsToTime;
    this.escapeRegex = EscapeRegex;
    this.timeToMs = TimeToMs;
    this.randomHex = RandomHex;
    this.shorten = shorten;
    this.formatSizeUnits = formatSizeUnits;
    this.circle = circle;
  }
}
