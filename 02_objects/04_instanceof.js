function Person() {
}
var person = new Person();
console.log(person instanceof Person);
console.log(person instanceof Object);
console.log({} instanceof Object);