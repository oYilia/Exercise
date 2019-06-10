const assert = require('assert');

function printerError(s) {
  var count = 0;
  for(var i=0; i<s.length; i++){
    if (s.charCodeAt(i) > 109){
      count++;}
    else {
      continue;
    }
  }
  return count + '/' + s.length;
}

assert(printerError('abmxyz') === '3/6');

// function printerError(s) {
//   return s.match(/[^a-m]/g).length + "/" + s.length;
// }