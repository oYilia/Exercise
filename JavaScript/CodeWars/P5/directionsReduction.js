/*
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
The Haskell version takes a list of directions with data Direction = North | East | West | South. 
The Clojure version returns nil when the path is reduced to nothing. 
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
*/

const assert = require('assert');

function dirReduc(arr){
    const process = function(str) {
        if(str.length === 1){
            return str[0];
        }
        const brr = [];
        str.reduce((acc, current) => {
            if ((acc === "NORTH") && (current === "SOUTH")){
                break;
            }
            else if ((acc === "SOUTH") && (current === "NORTH")){
                break;
            }
            else if ((acc === "EAST") && (current === "WEST")){
                break;
            }
            else if ((acc === "WEST") && (current === "EAST")){
                break;
            }
            else {
                brr.push(arr[i]);
            }
        });
        return process(brr);
    }
    return process(arr);
}

assert(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"])
assert(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) === ["NORTH", "WEST", "SOUTH", "EAST"])
assert(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) === [])
