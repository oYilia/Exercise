const assert = require('assert');

function dirReduc(arr){
    if(arr.length === 1){
        return arr[0];
    }
    arr.map((a, i) => {
        arr[i]
    });
}

assert(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"])
assert(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) === ["NORTH", "WEST", "SOUTH", "EAST"])
assert(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) === [])
