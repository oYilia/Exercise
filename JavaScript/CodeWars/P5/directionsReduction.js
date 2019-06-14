/*
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
The Haskell version takes a list of directions with data Direction = North | East | West | South. 
The Clojure version returns nil when the path is reduced to nothing. 
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
*/

const assert = require('assert');

function dirReduc(arr){
    let count = 0;
    for (var i=0;count < arr.length;i++) {
        if ((arr[0] == ["NORTH"]) && (arr[1] == ["SOUTH"])){
            arr.shift();arr.shift();count = 0;
        }
        else if ((arr[0] == ["SOUTH"]) && (arr[1] == ["NORTH"])){
            arr.shift();arr.shift();count = 0;
        }
        else if ((arr[0] == ["EAST"]) && (arr[1] == ["WEST"])){
            arr.shift();arr.shift();count = 0;
        }
        else if ((arr[0] == ["WEST"]) && (arr[1] == ["EAST"])){
            arr.shift();arr.shift();count = 0;
        }
        else {
            arr.push(arr[0]);arr.shift();
            count++;
        }
    };
    return arr;
};

assert(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"])
assert(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) === ["NORTH", "WEST", "SOUTH", "EAST"])
assert(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) === [])
