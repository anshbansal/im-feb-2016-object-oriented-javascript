var a = 1;
function f() {
    function n() {
        console.log(a);
    }

    var a = 2;
    n();
}

//TODO What is the output?
f();

/*
 TODO Write a function isLegalAge that takes
    - age – number (the age of the person)
    - successCallback - function (that gets called when age >= 18)
    - failureCallback - function (that gets called when age < 18)
 */
