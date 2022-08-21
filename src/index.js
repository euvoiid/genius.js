const RandomNumber = require('./Functions/RandomNumber.js');
const RandomText = require('./Functions/RandomText.js');
const SymbolFormat = require('./Functions/SymbolFormat.js');
const MsToTime = require('./Functions/MsToTime.js');
const EscapeRegex = require('./Functions/EscapeRegex.js');
const TimeToMs = require('./Functions/TimeToMs.js');

module.exports = new class DiscFunctions {
  constructor() {
    this.RandomNumber = RandomNumber;
    this.RandomText = RandomText;
    this.SymbolFormat = SymbolFormat;
    this.MsToTime = MsToTime;
    this.EscapeRegex = EscapeRegex;
    this.TimeToMs = TimeToMs;
  }
}