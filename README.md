# countrynames

Get all **sovereign countries**' names in several languages associated to their [ISO 3166-1 (alpha-2)](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.

## Install

Via [npm](npmjs.org):

```shell
npm install github:jagomf/countrynames
```
If you want to install a specific version, use `semver` version tag:
```shell
npm install github:jagomf/countrynames#semver:^1.1.0
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

console.log(en.SM); // 'San Marino'
console.log(langES.NL); // 'Países Bajos'
console.log(countriesFR['GR']); // 'Grèce'
```
```javascript
import * as COUNTRIES from 'countrynames';

console.log(COUNTRIES.en.TT); // 'Trinidad and Tobago'
console.log(COUNTRIES.es.CI); // 'Costa de Marfil'
```
