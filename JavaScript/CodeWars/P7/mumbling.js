const assert = require('assert');

function accum(s) {
    var a = s.split('');
    var c = [];
    for(var i = 0; i < a.length ; i++){
        var b = [];
        for(var j = 0; j < i ; j++){
            b.push(a[i].toLowerCase());
        }
        b.unshift(a[i].toUpperCase());
        var e = b.join('');
        c.push(e);
    }
    return c.join('-');
}

assert(accum("ZpglnRxqenU") === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
assert(accum("NyffsGeyylB") === "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
assert(accum("MjtkuBovqrU") === "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
assert(accum("EvidjUnokmM") === "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
assert(accum("HbideVbxncC") === "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }