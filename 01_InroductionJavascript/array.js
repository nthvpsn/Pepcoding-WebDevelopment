let arr = []; //array declaration

let random = ['character', 18, true, null, undefined];
random = ['hello', 18, false, null, undefined];
console.log(random);

//METHODS IN AN ARRAY
let cars = ['Tesla', 'BMW', 'Ferrari', 'Jaguar'];
cars[2] = 'Tata'; //accessing data and updating it
console.log(cars);

// PUSH AND POP
cars.push('Range Rover'); //add an element in the last
console.log(cars);
cars.pop(); //remove last element of the array
console.log(cars);

// SHIFT AND UNSHIFT
cars.unshift('LUCID AIR');  //add an element in first
console.log(cars);
cars.shift();   //remove the first element
console.log(cars);

console.log(cars.length);

//MULTIDIMENTION ARRAY
let arr2d = [[1, 2, 3], [3, 4, 5], [6, 7, 8]];
console.log(arr2d[0][2]);