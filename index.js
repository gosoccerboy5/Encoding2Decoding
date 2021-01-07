const CHARACTERS ="abcdefghijklmnopqrstuvwxyz0123456789-_!@#$%^&*)(=+}{][<>?:,. "

const encode = (input) => {
  for (i=0, res='', lc=input.toLowerCase(); i < input.length; i++) {
    res += CHARACTERS.indexOf(lc.charAt(i)) + 10;
  }
  return res;
};

const decode = (input) => {
  for (i=0, res=''; i < input.length; i+=2) {
    const key = input.charAt(i).concat(input.charAt(i + 1));
    res += CHARACTERS.charAt(key - 10);
  }
  return res;
};

module.exports = {
  encode: encode,
  decode: decode
};
