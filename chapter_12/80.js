//example 1

let fruits = [];
console.log(typeof fruits);
//typeof array is object

//example 2
let browsers = ["chrome" , "firefox" , "'webkit"];
console.log(browsers.length);
//length will be 3

//example 3 (cont'd from example 2)
 
console.log(browsers.at(0));
//answer will be chrome

//example 4 (cont'd from example 2)

console.log(browsers[0]);
//answer will be chrome again

//do this support negative index
console.log(browsers[-1]);
//answer is undefined

//negative index is only supported by using at
console.log(browsers.at(-1)); //answer will be webkit
