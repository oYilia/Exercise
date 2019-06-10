/*
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
The Haskell version takes a list of directions with data Direction = North | East | West | South. 
The Clojure version returns nil when the path is reduced to nothing. 
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
*/

const assert = require('assert');

function dirReduc(arr){
    let brr = [];
    for (let a = 0; a < arr.length; a++){
        brr[a] = arr[a];
    }
    if(brr.length === 1){
        return brr[0];
    }
    else {
        for (let i = 0; i< arr.length; i++){
            switch (arr.slice(i, i+2)){
                case ["NORTH", "SOUTH"]: brr.shift(); brr.shift();break;
                case ["SOUTH", "NORTH"]: brr.shift(); brr.shift();break;
                case ["EAST", "WEST"]: brr.shift(); brr.shift();break;
                case ["WEST", "EAST"]: brr.shift(); brr.shift();break;
                default: break;
            };
        };
        return brr;
    }
}

assert(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"])
assert(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) === ["NORTH", "WEST", "SOUTH", "EAST"])
assert(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) === [])
