//array concat

let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);

//modern way concatenation in javascript: spread (...)

let d = [...a,...b];
console.log(d); 
