import { RandomNumber } from './Functions/RandomNumber.js';
import { SymbolFormat } from './Functions/SymbolFormat.js';
import { msToTime } from './Functions/msToTime.js';

class DiscFunctions {
  constructor() {
    this.RandomNumber = RandomNumber;
    this.SymbolFormat = SymbolFormat;
    this.msToTime = msToTime;
  }
}

export default new DiscFunctions()