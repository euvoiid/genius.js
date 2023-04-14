# <p align="center">💻 › genius.js</p> 

#### <div align="center">❤ › A module made in <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="15" height="15"/> `JavaScript` with functions to help your Programming.</div>

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/genius.js"><img src="https://img.shields.io/npm/v/genius.js?maxAge=3600" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/genius.js"><img src="https://img.shields.io/npm/dt/genius.js?maxAge=3600" alt="NPM Downloads" /></a>
  </p>
</div>

## 📦 › Instalação:

```sh
- npm install genius.js
- yarn add genius.js
- pnpm add genius.js
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
import genius from 'genius.js'; 
// Or
const genius = import('genius.js');

(async() => {
  const RandomNumber = await genius.RandomNumber(1, 10);
  console.log(RandomNumber);  // [ 9 ] - [ 5 ]

  const RandomText = await genius.RandomText(['oi', 'hello', 'hi']);
  console.log(RandomText); // [ 'hello' ] - [ 'oi' ]
  
  const SymbolFormat = await genius.SymbolFormat(1000);
  console.log(SymbolFormat); // [ 1k ]

  const MsToTime = await genius.MsToTime(10000);
  console.log(msToTime); // [ 10 Seconds ]

  const TimeToMs = await genius.TimeToMs('10s');
  console.log(TimeToMs); // [ 10000 Ms ]

  const EscapeRegex = await genius.EscapeRegex('Hello $');
  console.log(EscapeRegex); // [ 'Hello \\$' ]
})();
```
