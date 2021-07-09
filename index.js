const CHARACTERS = "abcdefghijklmnopqrstuvwxyz 1234567890`-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";

function encode (input) {
  let res = input
    .toLowerCase()
    .split('')
    .map(letter => CHARACTERS.indexOf(letter) + 10)
    .join('');
  return res;
}

function decode (input) {
  let res = input
    .match(/.{1,2}/g)
    .map(letter => CHARACTERS.charAt(letter - 10))
    .join('');
  return res;
}

module.exports = {
  encode: encode,
  decode: decode
}
