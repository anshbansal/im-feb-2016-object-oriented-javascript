/*
 01 new keyword to create objects
 */

function Person(name) {
    var job = "software engineer"; //Cannot be accessed from outside
    this.name = name;
}

var person = Person("aseem");
//console.log(person.name);
//console.log(name);

//Writing new interpreter does something special
var aseem = new Person("aseem");
//console.log(aseem.name);
//console.log(aseem.job);

/*
function Person(name) {
    this = Object.create(Person.prototype); //We'll see prototype later
    var job = "software engineer";
    this.name = name;
    return this;
}
*/
