let car: string = "Audi";

//true
console.log("Is car == 'Audi'? I predict True.");
console.log(car ==="Audi");

console.log("Is car == 'audi'? I predict True.");
console.log(car == "Audi")

console.log("Is car !== 'audi'? I predict True.");
console.log(car !== 'audi');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyata');

console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyata');

//false

console.log("Is car !== 'Audi'? I predict false.");
console.log(car !== 'Audi');

console.log("Is car === 'audi'? I predict false.");
console.log(car === 'audi');

console.log("Is car === 'audi.'? I predict false.");
console.log(car === 'Audi.');

console.log("Is car != 'toyota'? I predict false.");
console.log(car == 'toyata');

console.log("Is car != 'toyota'? I predict false.");
console.log(car == 'toyata');

let a = 1;
let b = "1";

console.log("Is a == b'? I predict false.");
// console.log(a == b); error caught by compiler;

let arr = [1,2,3];
let arr2 = [1,2,3];


console.log("Is arr1 == arr2'? I predict false.");
console.log(arr == arr2);
console.log(arr === arr2);

// how to check that values of two arrays are same;

// console.log("Is arr.toString() == arr2.toString()'? I predict true.");
// console.log(arr.toString() === arr2.toString());


let arr3 = ['1' , 2 , 3];

// console.log("Is arr.toString() == arr2.toString()'? I predict true.");
// console.log(arr.toString() === arr3.toString());

console.log(arr2[0] === arr3[0]);


let alpha1 = 4;

let alpha2 = 5;
console.log("i predict it as false");
console.log(alpha1 > alpha2);