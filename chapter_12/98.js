//array copy

let original = [1,2,3];
let copy1 = [...original];
console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

let true_copy = original;
true_copy.push(91);
console.log(true_copy);
console.log(original);
//arrays are mutable

