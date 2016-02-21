/*
 01 continuous lookup binding between objects using Object.create
 02 Introduction to prototype chaining
 */

var first = {
    a: 2
};

var second = Object.create(first);

/*
 console.log(second.a);
 console.log(second.b);
 console.log(first.b);

 first.b = 2;
 console.log(first.b);
 console.log(second.b);
*/


