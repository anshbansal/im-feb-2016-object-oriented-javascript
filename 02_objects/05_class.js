/*
 01 See an example of a class
 */

function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
};

var aseem = new Person("aseem");
aseem.setName("aseem bansal");