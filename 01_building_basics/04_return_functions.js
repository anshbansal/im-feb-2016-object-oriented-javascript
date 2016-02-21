/*
 01 Return functions
 */

function hello(name) {
    return function () {
        console.log("Welcome", name);
    }
}

hello("aseem")();