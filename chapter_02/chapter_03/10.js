//literals : variable value that one assigns.

let a =11;

//number literal

let b = 11.5;

//string literal

let c = "this is a string literal";
let x = 'this is also a string literal';

//boolean literal

let d = true;

//null literal

let e = null; //null means nothing or no value. it does not mean 0 or empty string.

//undefined literal

let f = undefined; //undefined means variable is declared but not assigned any value yet.

//object literal

let g = {name: "john", age: 30};

//array literal

let h = [1, 2, 3, 4, 5];

//bigint literal

let i = 1234567890123456789012345678901234567890n;

//symbol literal

let j = Symbol("this is a symbol literal");

//regular expression literal

let k = /ab+c/;

//numeric literal
//1. integer literal
//2. floating point literal

let l = 0b1010;

//typeof operator is used to find the data type of a variable or value.

console.log(typeof a);
console.log(typeof b); //number literal
console.log(typeof c); //string literal
console.log(typeof x); //string literal
console.log(typeof d); //boolean literal
console.log(typeof e); //object literal
console.log(typeof f); //undefined literal
console.log(typeof g); //object literal
console.log(typeof h); //object literal
console.log(typeof i); //bigint literal
console.log(typeof j); //symbol literal
console.log(typeof k); //object literal
console.log(typeof l); //number literal

//other questions

let pi = 3.14; //floating point literal
console.log(typeof pi); // number literal is its type.

