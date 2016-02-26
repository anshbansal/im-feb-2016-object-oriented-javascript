/*
 01 Simple example of prototypical inheritance
 02 prototype chain
 03 How is prototype inheritance different from Java - dynamic nature
 04 Don't confuse constructor property with Constructor
 */

function Parent() {
}

function Child() {
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

//Do not use
//Child.prototype = new Parent()