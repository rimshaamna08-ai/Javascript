//call by reference and call by value

//call by value (primitive datatypes)

let a =10;
let b= a;
b = 99;
console.log(a);
console.log(b);
a =90;

//value of a will not change.

//but objects behave differently; objects are call by reference

let obj1 = {val: 10};
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);
