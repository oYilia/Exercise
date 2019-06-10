const assert = require('assert');

const triangle = (row) => {
  const charactors = row.split('');
  const mappings = {
    GG: 'G',
    BG: 'R',
    GB: 'R',
    RG: 'B',
    GR: 'B',
    BR: 'G',
    RB: 'G',
  };

  const process = function(str) {
    if (str.length === 1) {
      return str[0];
    }

    const row = [];
    str.reduce((acc, current) => {
      // console.log('ACC:', acc);
      const key = acc.substring(acc.length -1) + current;
      // console.log('KEY:', key);
      if (acc.length > 1) {
        row.push(mappings[key] || current);
      }
      console.log('ROW:', row.join(''), row.length);
      return acc + current;
    }, str[0]);

    return process(row);
  };

  return process(charactors);
}

assert(triangle('RRR') === 'R');
assert(triangle('GB') === 'R');
assert(triangle('RGBG') === 'B');
assert(triangle('RBRGBRB') === 'G');
assert(triangle('RBRGBRBGGRRRBGBBBGG') === 'G');
assert(triangle('B') === 'B');