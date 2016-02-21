/*
 01 how 'this' variable works
 */

//Another way to define functions - we'll use this form a lot
var getName = function () {
    console.log(this.name);
};

var aseem = {
    name: "aseem",
    getName: getName
};

var ashu = {
    name: "ashu",
    getName: getName
};
