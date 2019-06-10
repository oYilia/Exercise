const assert = require('assert');

function outed(meet, boss){
    var score = 0;
    for(var i = 0 in meet){
        score = score + meet[i];
    }
    for (var name in meet){
      if (name == boss){
        score = score + meet[boss];
      }
      else
        continue;
    }
    var rate = score / 11;
    if (rate <= 5) {
      return "Get Out Now!";
    }
    else {
      return "Nice Work Champ!";
    }
}

assert(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura') === 'Get Out Now!');
assert(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie') === 'Nice Work Champ!');
assert(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john') === 'Get Out Now!');

// function outed(meet, boss) {
//   let names = Object.keys(meet)
//   let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
//   return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
// }