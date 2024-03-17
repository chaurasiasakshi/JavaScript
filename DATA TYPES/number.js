//  ----- Number -----

let score = 24;

console.log(typeof score);   // Output: number

//  ----- Mathmatical  Operations -----

// let result = score / 2 ; give quotient
// let result = score % 2 ; //give reminder
// console.log(result) 

// let fun = score * 2 + (4*3) - 8 / 2 % 4;
// using priority and precedence 
//  1 () Bracketes
//  2  Exponents ** Power Operator
//  3  Multiplication/Division/Modulus  (from left to right)
//  4 Addition/Subtraction (from left to right)


// console.log(fun) 

// Loose Equality (==) VS  Strict Equality (===)

let age = 18;
console.log(age == "18"); //focus only on value but not type
console.log(age === "18") //focus on both  Value & Type

//  ----- Type Conversion -----
//  Type Casting : convert one data type into another

// let stringType = "17";
// console.log(stringType , typeof stringType);

// let numberType = Number(stringType);
// console.log(numberType , typeof numberType);

// Num to String 
let numberType = 24;
console.log(numberType , typeof numberType);

let stringType = String(numberType);
console.log(stringType , typeof stringType);