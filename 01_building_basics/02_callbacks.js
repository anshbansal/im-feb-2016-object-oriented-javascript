/*
 01 Passing functions to other functions
 */

//We can define functions and assign them to variables
var hello = function () {
    console.log("I am data!");
};

//And we can pass function to other functions
// - passed functions are called callbacks
function welcome(name, callback) {
    callback(name);
}

welcome("aseem", hello);
