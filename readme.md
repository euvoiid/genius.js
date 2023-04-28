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

- `- escapeRegex`
- `- formatDate`
- `- formatSizeUnits`
- `- msToTime`
- `- randomHex`
- `- randomNumber`
- `- randomText`
- `- shorten`
- `- symbolFormat`
- `- timeToMs`

## 🖼️ › Images:

- `- blur` - Returns Buffer; 
- `- circle` - Returns Buffer; 
- `- gray` - Returns Buffer; 
- `- invert` - Returns Buffer; 
- `- qrCode` - Returns Buffer; 

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

  const randomText = genius.randomText(['oi', 'hello', 'hi']);
  console.log(randomText); // [ 'hello' or 'oi' or 'hi' or ... ]
  
  const shorten = genius.shorten('Genius NPM, the best', 10);
  console.log(shorten); // [ 'Genius NPM..' ]
  
  const symbolFormat = genius.symbolFormat(10000);
  console.log(symbolFormat); // [ '10k' ]

  const timeToMs = genius.timeToMs('2h');
  console.log(timeToMs); // [ 7200000 ]

})();
```


## ⭐ › Example Images using Discord.js:

```js
import genius from 'genius.js';
import { AttachmentBuilder } from 'discord.js';

// Or
const genius = require('genius.js');
const { AttachmentBuilder } = require('discord.js');

(async() => {

// Circle
const img = await genius.images.circle(interaction.user.displayAvatarURL())
const attach = new AttachmentBuilder(img, { name: 'circle.png' });
return interaction.reply({ files: [att] });

// Blur
const img = await genius.images.blur(interaction.user.displayAvatarURL()) // Level (Current 5) Option: .blur(interaction.user.displayAvatarURL(), 1)
const attach = new AttachmentBuilder(img, { name: 'blur.png' });
return interaction.reply({ files: [att] });

// Gray
const img = await genius.images.gray(interaction.user.displayAvatarURL())
const attach = new AttachmentBuilder(img, { name: 'gray.png' });
return interaction.reply({ files: [att] });

// Invert
const img = await genius.images.invert(interaction.user.displayAvatarURL())
const attach = new AttachmentBuilder(img, { name: 'invert.png' });
return interaction.reply({ files: [att] });

// QrCode
const img = await genius.images.qrCode('Text')
const attach = new AttachmentBuilder(img, { name: 'qrCode.png' }); // Qr Options (Current: C1-#FFFFFF, C2-#000000): .qrCode('Text', { color1: "#FF887F", color2: "#FFFFFF" })
return interaction.reply({ files: [att] });

})();
```
