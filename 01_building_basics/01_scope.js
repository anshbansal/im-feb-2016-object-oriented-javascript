/*
 01 Understand scoping in JavaScript
 */

var books = ["aseem does not lie"];

function rack() {
    books.push("sometimes he does");
}

console.log("1 ->", books);
rack();
console.log("2 ->", books);

//Each function starts a new scope
function secretRack() {
    //ALWAYS use var because global variables are bad things
    var books = ["Black Book of Secrets"];
    console.log("3 ->", books);
}

secretRack();
console.log("4 ->", books);