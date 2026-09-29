/*
 * JavaScript objects
 *
 * An object is a collection of key/value pairs. Keys are strings or symbols,
 * and values can be any JavaScript value (including another object).
 */

// 1. Object literal: the most common way to create an object.
const user = {
	name: "Asha",
	age: 21,
	isStudent: true,
	greet() {
		return `Hello, ${this.name}`;
	},
};
console.log(user.name, user["age"], user.greet()); // dot and bracket access

// 2. Object constructor: creates an empty object, then properties are added.
const settings = new Object();
settings.theme = "dark";

// 3. Constructor function: a reusable object blueprint (older style).
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.introduce = function () {
	return `${this.name} is ${this.age} years old`;
};
const person = new Person("Ravi", 25);

// 4. Class instance: modern syntax for constructor-based objects.
class Car {
	constructor(brand) {
		this.brand = brand;
	}

	drive() {
		return `${this.brand} is driving`;
	}
}
const car = new Car("Toyota");

// 5. Object.create(): creates an object with a chosen prototype.
const animal = {
	speak() {
		return "Animal sound";
	},
};
const dog = Object.create(animal);
dog.name = "Bruno";

// 6. Null-prototype object: useful as a dictionary with no inherited keys.
const dictionary = Object.create(null);
dictionary.word = "object";

// 7. Built-in object types.
const array = [1, 2, 3]; // Array object: ordered collection
const date = new Date(); // Date object: date and time
const pattern = /js/gi; // RegExp object: pattern matching
const error = new Error("Something went wrong"); // Error object
const map = new Map([["language", "JavaScript"]]); // Map: key/value pairs
const set = new Set([1, 2, 2, 3]); // Set: unique values
const weakMap = new WeakMap(); // WeakMap: object keys, garbage-collection friendly
const weakSet = new WeakSet(); // WeakSet: object values, garbage-collection friendly

// 8. Wrapper objects (normally use primitives instead: "text", 10, true).
const stringObject = new String("text");
const numberObject = new Number(10);
const booleanObject = new Boolean(true);

// Useful object operations.
const copy = { ...user }; // shallow copy
const keys = Object.keys(user); // own enumerable property names
const values = Object.values(user); // own enumerable property values
const entries = Object.entries(user); // [key, value] pairs
const frozenUser = Object.freeze({ role: "admin" }); // prevents changes

console.log({ person, car: car.drive(), dog, dictionary, array, date, pattern });
console.log({ map, set, weakMap, weakSet, stringObject, numberObject, booleanObject });
console.log({ copy, keys, values, entries, frozenUser, error: error.message });
