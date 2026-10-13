//numbers part 2

//numeric separators

 let billion = 1_000_000_000;
console.log("Billion:", billion);

let million = 1_000_000;
console.log("Million:", million);

let binarysep = 0b1010_1010;
console.log("Binary with separator:", binarysep);

let hexSep = 0xFF_FF_FF;
console.log("Hexadecimal with separator:", hexSep); 

//BigInt literals

let bigInt1 = 9007199254740991n;
let bigInt2 = BigInt("1234567890123456789012345678901234567890");
let bigFornum = BigInt(44);
 console.log("BigInt 1:", bigInt1);
 console.log("BigInt 2:", bigInt2);
 console.log("BigInt from number:", bigFornum);
console.log("Type of BigInt 1:", typeof bigInt1);

