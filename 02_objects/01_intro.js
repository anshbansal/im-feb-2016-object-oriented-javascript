/*
 01 accessing object properties
 02 Adding functions to objects
 03 Adding other objects to objects
 04 deleting properties from objects
 */

var aseem = {
    name: "aseem",
    age: 23,
    "my job": "software engineer"
};

console.log(aseem.name, aseem.age);
console.log(aseem['name'], aseem['age'], aseem["my job"]);

//objects can have functions
aseem.hello = function () {
    console.log("Hello", this.name);
};

//objects can contain other objects
aseem.hobbies = [
    "reading novels",
    "playing skyrim",
    "sleeping",
    "watching music videos on youtube"
];

//Can delete things that change
//delete aseem.age