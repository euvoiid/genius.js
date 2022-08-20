<div align="center">
  <h1>Disc-Functions</h1>
  <p>Um módulo feito em JavaScript com funções para auxiliar sua Programação.</p>
</div>

## [ ⭐ ] - Instalação:

```sh
npm install disc-functions
yarn add disc-functions
pnpm add disc-functions
```

## [ 🔧 ] - Funções:

> **RandomNumber**
>
> **SymbolFormat**
>
> **msToTime**

## [ ☂ ] - Exemplos:

```js
import disc from 'disc-functions';

(async() => {
  const RandomNumber = await disc.RandomNumber(1, 10);
  console.log(RandomNumber);  // Retorna um valor aleatório entre os valores mínimos e máximos. [ Exemplo: (1, 10) => 9 ]
  
  const SymbolFormat = await disc.SymbolFormat(1000);
  console.log(SymbolFormat); // Retorna o valor com o Simbolo. [ Exemplo: (1000) => 1k ]

  const msToTime = await disc.msToTime(1000);
  console.log(msToTime); // Retorna o ms em tempo. [ Exemplo: (1000) => 10 Seconds ]
})();
```