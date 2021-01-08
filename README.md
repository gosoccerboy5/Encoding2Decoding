# Encoding 2 Decoding
[![NPM](https://nodei.co/npm/encoding2decoding.png)](https://nodei.co/npm/encoding2decoding/)

## Installation
```js
const e2d = require('encoding2decoding');
```

## Encoding
```js
e2d.encode('abc') // Returns 101112
```

## Decoding
```js
e2d.decode('101112') //Returns abc
```
## Disclaimer
Please note that this package was made for usage on [Scratch](https://scratch.mit.edu). This is similar to Micah Lindley's 'String2Num' however removes the need for arrays and other complication. Case sensitive not supported.

## License
[MIT](https://choosealicense.com/licenses/mit/)
