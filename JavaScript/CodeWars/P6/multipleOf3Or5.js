const assert = require('assert');

function solution(number){
  let a = [];
  let b = [];
  for (let i = 0; 3*(i+1) < number; i++){
    a.push((i+1)*3);
  }
  for (let j = 0; 5*(j+1) <number; j++){
    b.push((j+1)*5);
  }
  for (let x =0; x<b.length; x++){
    let flag = true;
    for (let y = 0; y<a.length; y++){
      if (b[x] === a[y]){
        flag = false;
        break;
      }
    }
    if (flag) {
      a.push(b[x]);
    }
  }
  if(a[0])
    return a.reduce(function(a, b){return a+b;});
  else
    return 0;
}

assert(solution(10) === 23);

// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }