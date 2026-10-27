//example 

let arr = [1,2,3];
console.log(arr.length);
 
//if we want to add the element we can by push at the end of an array
arr.push(4);
console.log(arr);
console.log(arr.length); //returns new length of an array

//if we want to remove an element we have the following syntax

arr.pop();
console.log(arr);

//multiple elements can be pushed too

arr.push(5,6);
console.log(arr);

//to add to beginning there is a function of unshift

arr.unshift(11);
console.log(arr);

//similarly to remove from beginning
arr.shift();
console.log(arr);

//for splice

arr.splice(2,1);
console.log(arr);

//another example of splice
arr.splice(2,1,99);
console.log(arr); //inserts 99 in place of 5 at index location 2
//to insert with 5 we will use zero instead of 1

//another example

arr.splice(1,2,10,20);
console.log(arr);
