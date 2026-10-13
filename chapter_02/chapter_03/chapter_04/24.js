//confusing comparison

console.log("" == 0); //true as it is loosely compared
console.log("0" == 0); // true
console.log("" == "0"); // false due to transitive broken concept OR coerced concept

//=== fixes this

console.log("" === 0); //false
console.log("0" === 0); //false
console.log("" === "0");//false
// because === checks the value and the type
