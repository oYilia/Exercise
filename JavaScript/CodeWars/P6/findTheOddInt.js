const assert = require('assert');

function findOdd(A) {
  var B = [];
  for(var j=0; j<A.length; j++){
    B[j] = A[j];
  }
  B.sort();
  for(var i=0; i<A.length; i++){
    if (B[0] === B[1]) {
      B.shift();
      B.shift();
    }
    else{
      return B[0];
      break;
    }
  }
}

assert(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) === '-1');
assert(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) === '5');
assert(findOdd([10]) === '10');
assert(findOdd([1,1,1,1,1,1,10,1,1,1,1]) === '10');
assert(findOdd([5,4,3,2,1,5,4,3,2,10,10]) === '1');

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
