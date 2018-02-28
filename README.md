# countrynames

Get all **sovereign countries**' names in several languages associated to their [ISO 3166-1 (alpha-2)](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (lowercase) code.

## Install

Via [npm](npmjs.org):

```shell
npm install github:jagomf/countrynames
```

## Supported languages

* English (`en`)
* Spanish (`es`)
* German (`de`)
* French (`fr`)
* Portuguese (`pt`)
* Italian (`it`)

## Usage

Import some or all of the language pieces:

```javascript
import { en, es as langES, fr as countriesFR } from 'countrynames';

console.log(en.sm); // 'San Marino'
console.log(langES.nl); // 'Países Bajos'
console.log(countriesFR['gr']); // 'Grèce'
```
```javascript
import * as COUNTRIES from 'countrynames';

console.log(COUNTRIES.en.tt); // 'Trinidad and Tobago'
console.log(COUNTRIES.es.ci); // 'Costa de Marfil'
```
