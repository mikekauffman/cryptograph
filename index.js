var _= require('underscore');

module.exports = {
  
  encode: function(message) {
    return translateMessage(message, 'encode')
  },

  decode: function(coded_message) {
    return translateMessage(coded_message, 'decode')
  }
};

function translateMessage(message, direction) {
  var msg = String(message).replace(/[^\w\s]+/g,'').toLowerCase();

  for(i = 0; i < msg.length; i++) {
    var newValue = getReplacementChar( msg[i], direction )
    msg = setCharAt( msg, i, newValue);
  }

  return msg;
};

function getReplacementChar(character, direction) {
  if (character == " ") {
    return character;
  };

  return direction == 'encode' ? xref[character] : (_.invert(xref))[character];
};

function setCharAt(string, index, character) {
    if ( index > string.length-1 ) { return string };

    return string.substr(0, index) + character + string.substr(index + 1);
};

var xref = {
  a: 'f',
  b: 'y',
  c: 'w',
  d: 'p',
  e: 'd',
  f: 'a',
  g: 'u',
  h: 'r',
  i: 'z',
  j: 'q',
  k: 't',
  l: 'x',
  m: 'g',
  n: 'm',
  o: 'h',
  p: 'k',
  q: 'b',
  r: 'i',
  s: 'j',
  t: 'n',
  u: 's',
  v: 'o',
  w: 'e',
  x: 'v',
  y: 'c',
  z: 'l',
};
