/*
 01 Inheriting methods using prototypes
 02 hasOwnProperty
    - properties inside constructor
    - dynamically looked up from prototype chain
 03 Anything inside the constructor call is distinct for each
 04 Anything inside prototype is common for the class
 */

var Car = function(loc) {
    this.loc = loc;
};
//Why no need to add constructor property here?
Car.prototype.move = function () {
    this.loc++;
};

var Van = function (loc, color) {
    Car.call(this, loc);
    this.color = color;
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.fastMove = function (loc) {
    this.loc += loc;
};