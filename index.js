const CHARACTERS ="abcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*)(=+}{][<>?:,. ";

function encode (input) {
  let res = input
    .toLowerCase()
    .split('')
    .map(letter => { return CHARACTERS.indexOf(letter) + 10 })
    .join('');
  return res;
}

function decode (input) {
  let res = input
    .match(/.{1,2}/g)
    .map(letter => { return CHARACTERS.charAt(letter - 10) })
    .join('');
  return res;
}

module.exports = {
  encode: encode,
  decode: decode
}
