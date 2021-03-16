const CHARACTERS ="abcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*)(=+}{][<>?:,. ";

const encode = (input) => {
  let res = input
    .toLowerCase()
    .split('')
    .map(letter => { return CHARACTERS.indexOf(letter) + 10 })
    .join('');
  return res;
}

const decode = (input) => {
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