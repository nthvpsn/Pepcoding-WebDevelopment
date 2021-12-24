console.log('Hello');

//VAR
var a = 2;
console.log(a);
var a = 'This is a string';
console.log(a);

//LET
let num = 2;
num = 'HellllOOOOO';   //cannot redeclare
console.log(num);

/******************************************/
//PRIME NUMBER
var flag = true;
var number = 11;

for (var i = 2; i * i <= number; i++) {
    if (number % i == 0) {
        flag = false;
        break;
    }
}

if (flag == true && number >=2)
{
    console.log("Number is prime");
}
else {
    console.log('Number is not prime');
    
}

/********************************************/

let c;
console.log(c); //undefined

// console.log(z)   not defined error

const fixed = 5;
console.log(fixed);

/********************************************/
