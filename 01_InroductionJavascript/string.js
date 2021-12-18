//STRING IS SEQUENCE OF CHARACTER
let str = 'pepcoder';
console.log(str);

//METHODS
console.log(str.length);
let slicedString = str.slice(0, 5);
console.log(slicedString);
let sub = str.substring(3, 5);
console.log(sub);

//REPLACE
let sayHello = "Hello Amar";
console.log(sayHello);
sayBye = sayHello.replace('Hello', 'Bye');
console.log(sayBye);

//TOUPPERCASE AND TOLOWERCASE
let txt = 'my name is amar nath';
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());

//CONCAT
let firstName = 'Amar';
let lastName = 'Nath';
let concated = firstName.concat(" ", lastName);
console.log(concated);

let trrrim = "     Hello Amar        ";
console.log(trrrim.trim());