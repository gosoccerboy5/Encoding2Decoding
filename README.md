# Encoding 2 Decoding
[![NPM](https://nodei.co/npm/encoding2decoding.png)](https://nodei.co/npm/encoding2decoding/)

## Installation
```js
npm i encoding2decoding
```

## Encoding
```js
const e2d = require('encoding2decoding');
e2d.encode('abc');      // Returns 101112
```

## Decoding
```js
const { decode } = require('encoding2decoding');
e2d.decode('101112');             // Returns abc
```
## Disclaimer
This is similar to Micah Lindley's 'String2Num' however removes lots of the complication. Case sensitive not supported. Extremely leightweight, simple, and has zero dependencies.

## License
[MIT](https://choosealicense.com/licenses/mit/)
