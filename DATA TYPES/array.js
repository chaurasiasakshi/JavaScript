// Arrays

let colors = ['red', 'green', 'blue'];

// access
// console.log(colors[0]);  

// modify  array 

// colors[1]="yellow";
// console.log(colors);

// -----Array Methods-----

// join method  : it joins all the elements of an array into a string separated by a specified separator
// console.log(colors.join('-'));

// indexOf  : returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(colors.indexOf("Green"));    

// concat method  : It is used to combine two or more arrays. This does not change the existing arrays, but returns a new array.

let newC =  ["black", "white"];
console.log(newC.concat(colors));    


let allC = newC.concat(colors);
// length method
console.log(colors.length);
console.log(allC.length);


// push method : adds one or more elements to the end of an array and returns the new length of the array

console.log(allC.push("Yellow"));
console.log(allC);

//  pop method: removes the last element from an array and returns that element 

console.log(allC.pop());