const assert = require('assert');

function boredom(staff){
    const mappings = {
      'accounts': 1,
      'finance': 2,
      'canteen': 10,
      'regulation': 3,
      'trading': 6,
      'change': 6,
      'IS': 8,
      'retail': 5,
      'cleaning': 4,
      'pissing about': 25,
    };
    var score = 0;
    for (var names in staff){
      for (var value in mappings){
        if (staff[names] == value){ //how to add string into array
          score = score + mappings[value];
          break;
        };
      }
    }
    if (score <=80)
      return 'kill me now';
    else if (score > 100)
      return 'party time!!';
     else
      return 'i can handle this';
}

assert(boredom({tim: 'change', jim: 'accounts',randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' }) === 'kill me now');
assert(boredom({ tim: 'IS', jim: 'finance',randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen' }) === 'i can handle this');
assert(boredom({ tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change', katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about' }) === 'party time!!');

// var score = Object.keys(staff).reduce(
//   function(a,b){       
//     return a+map[staff[b]]
//  },0); 

// return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
// }