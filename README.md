# <p align="center">💻 › fusion.js</p> 

#### <div align="center">❤ › A module made in <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="15" height="15"/> `JavaScript` with functions to help your Programming.</div>

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/fusion.js"><img src="https://img.shields.io/npm/v/fusion.js?maxAge=3600" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/fusion.js"><img src="https://img.shields.io/npm/dt/fusion.js?maxAge=3600" alt="NPM Downloads" /></a>
  </p>
</div>

## 📦 › Instalação:

```sh
- npm install fusion.js
- yarn add fusion.js
- pnpm add fusion.js
```

## 🧰 › Funções:

- `- RandomNumber`

- `- RandomText`

- `- SymbolFormat`

- `- MsToTime`

- `- TimeToMs`

- `- EscapeRegex`

## ⭐ › Exemplos:

```js
import fusion from 'fusion.js'; 
// Or
const fusion = import('fusion.js');

(async() => {
  const RandomNumber = await fusion.RandomNumber(1, 10);
  console.log(RandomNumber);  // [ 9 ] - [ 5 ]

  const RandomText = await fusion.RandomText(['oi', 'hello', 'hi']);
  console.log(RandomText); // [ 'hello' ] - [ 'oi' ]
  
  const SymbolFormat = await fusion.SymbolFormat(1000);
  console.log(SymbolFormat); // [ 1k ]

  const MsToTime = await fusion.MsToTime(10000);
  console.log(msToTime); // [ 10 Seconds ]

  const TimeToMs = await fusion.TimeToMs('10s');
  console.log(TimeToMs); // [ 10000 Ms ]

  const EscapeRegex = await fusion.EscapeRegex('Hello $');
  console.log(EscapeRegex); // [ 'Hello \\$' ]
})();
```
