//FUNCTION DECLARATION
function addition(a, b) {
    console.log("Sum :- " + (a + b));
}
addition(3, 4);

// FUNCTION AS FIRST CLASS CITIZEN OR FUNCTION EXPRESSION
const multi = function (a, b) {     //ANONYMOUS FUNCTION
    return a * b;
}
const result = multi(4, 5);
console.log(result);
//In this expression function can be assigned as a variable 

//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
let add = (function (a, b) {
    return a + b;
})(10, 20);
console.log(add);