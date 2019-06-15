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
        if ((arr[count] == ["NORTH"]) && (arr[count+1] == ["SOUTH"])){
            arr.splice(count, 2);count = 0;
        }
        else if ((arr[count] == ["SOUTH"]) && (arr[count+1] == ["NORTH"])){
            arr.splice(count, 2);count = 0;
        }
        else if ((arr[count] == ["EAST"]) && (arr[count+1] == ["WEST"])){
            arr.splice(count, 2);count = 0;
        }
        else if ((arr[count] == ["WEST"]) && (arr[count+1] == ["EAST"])){
            arr.splice(count, 2);count = 0;
        }
        else {
            count++;
        }
    };
    return arr;
};

assert(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) === ["WEST"])
assert(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) === ["NORTH", "WEST", "SOUTH", "EAST"])
assert(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) === [])

// function dirReduc(plan) {
//     var opposite = {
//       'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
//     return plan.reduce(function(dirs, dir){
//         if (dirs[dirs.length - 1] === opposite[dir])
//           dirs.pop();
//         else
//           dirs.push(dir);
//         return dirs;
//       }, []);
//   }

// function dirReduc(arr) {
//     var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
//     while (pattern.test(str)) str = str.replace(pattern,'');
//     return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
//   }
