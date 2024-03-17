//  ----- Variables -----

var a=10;  //redeclare
let b = 20; // local scope 
const c = 30; //initialize value  and cannot be reassigned.

console.log(a)
console.log(b)
console.log(c)


// ----- 7 Data Types -----

// Number = 1,2,33
// String ="Hello" , "World" , "17"
// Boolean = true or false
// Null - used to indicate that something is empty.
// Undefined - it is used when a variable has not been assigned any value yet.
// Object - collection of properties . It can hold key-value pairs.

//  ----- Strings -----

let fname = "sakshi"
let lname = "chaurasia"

// String Concatination 
// Method 1 using + operator

// let fullname = fname +  ' ' +lname ;
// console.log(fullname)


// Method 2  using template literals (backtick ``)
fullname = `I am ${fname} ${lname}`
// console.log(fullname)

//  Accessing characters in string 
console.log(fname[0])   // s

// String Method
console.log(fullname.toUpperCase());
console.log(fullname.indexOf("c"));
console.log(fullname.lastIndexOf("a"));

// include method

console.log(fullname.includes('h'));//case sensitive only give true false


// slice() method

let names = "Sakshi Chaurasia";
console.log(names.slice(0,5));   
 // exculding last one 0-4 
//  does not  work with negative values
// does not mutate original array


// split method

let favColor = "red  green blue yellow";
let colors = favColor.split(" ");
// sting to array
console.log(colors);

