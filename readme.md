# <p align="center">💻 › GeniusJS</p> 

#### <div align="center">❤ › A module made in <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="18" height="18"/> with functions to help your Programming.</div>

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/genius.js"><img src="https://img.shields.io/npm/v/genius.js?maxAge=3600" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/genius.js"><img src="https://img.shields.io/npm/dt/genius.js?maxAge=3600" alt="NPM Downloads" /></a>
  </p>
</div>

## 📦 › Installation:

```sh
- npm install genius.js
- yarn add genius.js
- pnpm add genius.js
```

## 🧰 › Functions:

- `- converterTemperature`
- `- countChars`
- `- escapeRegex`
- `- formatDate`
- `- formatSizeUnits`
- `- generatePassword`
- `- getCurrentDate`
- `- isInteger`
- `- makeCharTable`
- `- msToTime`
- `- randomHex`
- `- randomNumber`
- `- randomText`
- `- removeDuplicatesArr`
- `- removeEmojis`
- `- shorten`
- `- abbreviate`
- `- unabbreviate`
- `- timeToMs`
- `- toMorseCode`

## ⭐ › Examples of Functions:

```js
import genius from 'genius.js'; 
// Or
const genius = require('genius.js');

(async() => {

  const EscapeRegex = genius.escapeRegex('Hello $');
  console.log(EscapeRegex); // [ 'Hello \\$' ]

  const FormatDateShort = genius.formatDate(new Date(), 'short+h');
  console.log(FormatDateShort); // [ '14/04/2023 às 12:42' ]

  const FormatDateLong = genius.formatDate(new Date(), 'long+h', '+');
  console.log(FormatDateLong); // [ '14 de Abril de 2023 às 12:43' ]

  const formatSizeUnits = genius.formatSizeUnits(1000000000);
  console.log(formatSizeUnits); // [ '1.00 GB' ]

  const msToTime = genius.msToTime(10000);
  console.log(msToTime); // [ '10s' ]

  const randomHex = genius.randomHex();
  console.log(randomHex); // [ '#1d0cb9' or '#c7682f' or '#642fdb' or ... ]

  const randomNumber = genius.randomNumber(1, 10);
  console.log(randomNumber); // [ '5' or '9' or '8' or ... ]

  const randomText = genius.randomText(['owo', 'hello', 'hi']);
  console.log(randomText); // [ 'hello' or 'owo' or 'hi' or ... ]
  
  const shorten = genius.shorten('Genius NPM, the best', 10);
  console.log(shorten); // [ 'Genius NPM..' ]
  
  const abbreviate = genius.abbreviate(10000);
  console.log(abbreviate); // [ '10k' ]

  const unabbreviate = genius.unabbreviate('10k');
  console.log(unabbreviate); // [ '10000' ]

  const timeToMs = genius.timeToMs('2h');
  console.log(timeToMs); // [ 7200000 ]

  const makeCharTable = genius.makeCharTable('3x2', '😁', '🤖');
  console.log(makeCharTable); // [ '😁😁😁\n🤖🤖🤖' ]

  const getCurrentDate = genius.getCurrentDate('2h');
  console.log(getCurrentDate); // [ '30/4/2023 13:30:26' ]

  const converterTemperature = genius.converterTemperature(32, 'C', 'F');
  console.log(converterTemperature); // [ 89.6 ]

  const removeEmojis = genius.removeEmojis('Hi 😁🤖');
  console.log(removeEmojis); // [ 'Hi' ]

  const isInteger1 = genius.isInteger(10);
  console.log(isInteger1); // [ true ]

  const isInteger2 = genius.isInteger(9.9);
  console.log(isInteger2); // [ false ]

  const removeDuplicatesArr = genius.removeDuplicatesArr(['Hi', 'Hi', 'Owo']);
  console.log(removeDuplicatesArr); // [ [ 'Hi', 'Owo' ] ]

  const toMorseCode = genius.toMorseCode('Hi');
  console.log(toMorseCode); // [ '.... ..' ]

  const generatePassword = genius.generatePassword(10, true, true, true, true);
  console.log(generatePassword); // [ '7gKq3@i85p' ]

})();
```
