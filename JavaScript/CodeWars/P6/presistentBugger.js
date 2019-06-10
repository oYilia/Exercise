const assert = require('assert');

function persistence(num) {
    let a = String(num).split('');
    let count = 0;
    for (let i = 0; a.length > 1; i++){
        a = a.reduce(function(a, b){return a*b;});
        a = String(a).split('');
        count++;
    }
    return count;
}

assert(persistence(39) === 3);
assert(persistence(4) === 0);
assert(persistence(25) === 2);
assert(persistence(999) === 4);

// const persistence = num => {
//     return `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0;
// }
