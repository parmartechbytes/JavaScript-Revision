// ==========================================
// 1. DATA TYPES (Primitives & Core Types)
// ==========================================

// Number (Integers & Floats)
let integerNum = 42;
let floatNum = 3.14;

// BigInt (Arbitrary precision integers)
let bigIntNum = 9007199254740991n;

// String (Text)
let singleQuoteStr = 'Hello';
let doubleQuoteStr = "World";
let templateStr = `${singleQuoteStr} ${doubleQuoteStr}`;

// Boolean (true / false)
let isJavaScriptFun = true;
let isTired = false;

// Undefined (Declared but no value assigned)
let unassignedVar;

// Null (Intentional absence of any value)
let emptyValue = null;

// Symbol (Unique and immutable identifier)
let uniqueId = Symbol("id");

// Object (Key-value pairs, non-primitive)
let person = {
  name: "Alex",
  age: 30
};


// ==========================================
// 2. ARITHMETIC OPERATORS
// ==========================================

let a = 10;
let b = 3;

let sum = a + b;            // Addition: 13
let difference = a - b;     // Subtraction: 7
let product = a * b;        // Multiplication: 30
let quotient = a / b;       // Division: 3.3333...
let remainder = a % b;      // Modulus: 1
let exponent = a ** b;      // Exponentiation: 1000

// Increment and Decrement
let counter = 5;
counter++;                  // Post-increment (counter is now 6)
++counter;                  // Pre-increment (counter is now 7)
counter--;                  // Post-decrement (counter is now 6)
--counter;                  // Pre-decrement (counter is now 5)

// Unary plus and negation
let numericStr = +"25";     // Converts string to number: 25
let negativeNum = -a;       // Negation: -10


// ==========================================
// 3. COMPARISON OPERATORS (All Types)
// ==========================================

let x = 5;
let y = "5";
let z = 10;

// Equality
let looseEqual = (x == y);          // true  (compares value with type coercion)
let strictEqual = (x === y);        // false (compares both value and type)

// Inequality
let looseNotEqual = (x != y);       // false (value is equal after coercion)
let strictNotEqual = (x !== y);     // true  (types are different)

// Relational comparisons
let greaterThan = (z > x);          // true  (10 > 5)
let lessThan = (x < z);             // true  (5 < 10)
let greaterOrEqual = (x >= 5);      // true  (5 >= 5)
let lessOrEqual = (z <= 9);         // false (10 <= 9)


// ==========================================
// 4. LOGICAL OPERATORS
// ==========================================

let condition1 = true;
let condition2 = false;

let logicalAnd = condition1 && condition2;   // false (AND: both must be true)
let logicalOr = condition1 || condition2;    // true  (OR: at least one true)
let logicalNot = !condition1;                // false (NOT: inverts boolean)

// Nullish Coalescing (returns right-hand side only if left is null or undefined)
let fallbackValue = null ?? "Default Value"; // "Default Value"


// ==========================================
// 5. ASSIGNMENT OPERATORS
// ==========================================

let n = 20;

n += 5;   // Equivalent to: n = n + 5  (25)
n -= 3;   // Equivalent to: n = n - 3  (22)
n *= 2;   // Equivalent to: n = n * 2  (44)
n /= 4;   // Equivalent to: n = n / 4  (11)
n %= 4;   // Equivalent to: n = n % 4  (3)
n **= 2;  // Equivalent to: n = n ** 2 (9)


// ==========================================
// 6. CONDITIONAL (TERNARY) OPERATOR
// ==========================================

let userAge = 18;
let accessStatus = (userAge >= 18) ? "Adult" : "Minor"; // "Adult"


// ==========================================
// 7. TYPE OPERATORS
// ==========================================

let typeOfNumber = typeof 42;                 // "number"
let typeOfString = typeof "text";             // "string"
let typeOfBoolean = typeof true;              // "boolean"
let typeOfUndefined = typeof undefined;       // "undefined"
let typeOfObject = typeof null;               // "object" (known JS quirk)
let typeOfSymbol = typeof Symbol("key");      // "symbol"
let typeOfBigInt = typeof 10n;                // "bigint"

let isObjectInstance = (person instanceof Object); // true


// ==========================================
// 8. BITWISE OPERATORS (Operates on 32-bit ints)
// ==========================================

let bitwiseAnd = 5 & 1;         // 1  (0101 & 0001)
let bitwiseOr = 5 | 2;          // 7  (0101 | 0010)
let bitwiseXor = 5 ^ 3;         // 6  (0101 ^ 0011)
let bitwiseNot = ~5;            // -6 (~0101)
let leftShift = 5 << 1;         // 10 (0101 << 1)
let rightShift = 5 >> 1;        // 2  (0101 >> 1)
let zeroFillRightShift = 5 >>> 1; // 2