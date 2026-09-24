// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('12');
const anotherId = Symbol('12');

console.log(id === anotherId); // false (each Symbol is guaranteed unique)

const bigNumber = 3456543576654356754n;

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId); // "symbol"

// https://262.ecma-international.org/5.1/#sec-11.4.3
