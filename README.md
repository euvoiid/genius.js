# <p align="center">💻 › Disc-Functions</p> 

#### <div align="center">❤ › Um módulo feito em <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="15" height="15"/> `JavaScript` com funções para auxiliar sua Programação.</div>

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/disc-functions"><img src="https://img.shields.io/npm/v/disc-functions?maxAge=3600" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/disc-functions"><img src="https://img.shields.io/npm/dt/disc-functions?maxAge=3600" alt="NPM Downloads" /></a>
  </p>
</div>

## 📦 › Instalação:

```sh
- npm install disc-functions
- yarn add disc-functions
- pnpm add disc-functions
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
import disc from 'disc-functions'; 
// Or
const disc = import('disc-functions');

(async() => {
  const RandomNumber = await disc.RandomNumber(1, 10);
  console.log(RandomNumber);  // [ 9 ] - [ 5 ]

  const RandomText = await disc.RandomText(['oi', 'hello', 'hi']);
  console.log(RandomText); // [ 'hello' ] - [ 'oi' ]
  
  const SymbolFormat = await disc.SymbolFormat(1000);
  console.log(SymbolFormat); // [ 1k ]

  const MsToTime = await disc.MsToTime(10000);
  console.log(msToTime); // [ 10 Seconds ]

  const TimeToMs = await disc.TimeToMs('10s');
  console.log(TimeToMs); // [ 10000 Ms ]

  const EscapeRegex = await disc.EscapeRegex('Hello $');
  console.log(EscapeRegex); // [ 'Hello \\$' ]
})();
```
