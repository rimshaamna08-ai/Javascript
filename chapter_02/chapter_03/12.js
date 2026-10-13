//null undefined

var x;
console.log(x); //undefined

var y = null;
console.log(y); //null

console.log(typeof x); //undefined
console.log(typeof y); //object

// undefined

let userName = 'test';
console.log(typeof userName); // string
console.log(typeof userName); // string

//example using a function (When We call this function if there is no return statement it will be undefined)

function greet() {
    // no return statement.
}
console.log(greet());

let d;
console.log(d); 
console.log(typeof d);


//null (When we assign a  null value)

let profilePicture = null;
console.log(profilePicture);
console.log(typeof profilePicture); // type of null is object.

