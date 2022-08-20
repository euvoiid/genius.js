import { RandomNumber } from './Functions/RandomNumber.js';
import { RandomText } from './Functions/RandomText.js';
import { SymbolFormat } from './Functions/SymbolFormat.js';
import { MsToTime } from './Functions/MsToTime.js';
import { EscapeRegex } from './Functions/EscapeRegex.js';
import { TimeToMs } from './Functions/TimeToMs.js';

class DiscFunctions {
  constructor() {
    this.RandomNumber = RandomNumber;
    this.RandomText = RandomText;
    this.SymbolFormat = SymbolFormat;
    this.MsToTime = MsToTime;
    this.EscapeRegex = EscapeRegex;
    this.TimeToMs = TimeToMs;
  }
}

export default new DiscFunctions()
