const RandomNumber = require('./Functions/RandomNumber.js');
const RandomText = require('./Functions/RandomText.js');
const SymbolFormat = require('./Functions/SymbolFormat.js');
const MsToTime = require('./Functions/MsToTime.js');
const EscapeRegex = require('./Functions/EscapeRegex.js');
const TimeToMs = require('./Functions/TimeToMs.js');

module.exports = new class GeniusJS {
  constructor() {
    this.randomNumber = RandomNumber;
    this.randomText = RandomText;
    this.symbolFormat = SymbolFormat;
    this.msToTime = MsToTime;
    this.escapeRegex = EscapeRegex;
    this.timeToMs = TimeToMs;
  }
}
