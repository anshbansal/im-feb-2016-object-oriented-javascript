var Car = function (loc) {
    this.loc = loc;
};

var Van = function (loc, color) {
    //Explicitly tell what .call does
    Car.call(this, loc);
    this.color = color;
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;