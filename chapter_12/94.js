//array slicing
let arr = [1,2,3,4,5];
console.log(arr.slice(1,3));
console.log(arr);
//mslice will not change the array; it follows thr rule of (start, end-1)

//for single value

console.log(arr.slice(2));

//slicing always go from left to right

console.log(arr.slice(-2));

//forzero 

console.log(arr.slice(0)); // all elements come

//for -5
console.log(arr.slice(-5));

//for -3 to -5

console.log(arr.slice(-3, -5)); // wrong direction
