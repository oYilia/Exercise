const assert = require('assert');


function broken(x){
    var a = x.split('');
    var s = a.map(function(n){
        return n == 1 ? 0 : 1
    }); // why can mot use function(n) 
    return s.join('');
}

assert(broken("1") === "0");
assert(broken("10000000101101111110011001000") === "01111111010010000001100110111");
assert(broken("100010") === "011101");

// function broken(x){
//     return x.split('').map(a => a == "0" ? "1" : "0").join('');
// }
