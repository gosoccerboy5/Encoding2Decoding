# Encoding 2 Decoding
[![NPM](https://nodei.co/npm/encoding2decoding.png)](https://nodei.co/npm/encoding2decoding/)

## Installation
```js
npm i encoding2decoding
```

## Encoding
```js
const { encode } = require('encoding2decoding');
encode('abc');               // Returns 101112
```

## Decoding
```js
const { decode } = require('encoding2decoding');
decode('101112');               // Returns abc
```
## Disclaimer
This is similar to Micah Lindley's 'String2Num' however removes lots of the complication. Case sensitive not supported.

## License
[MIT](https://choosealicense.com/licenses/mit/)
