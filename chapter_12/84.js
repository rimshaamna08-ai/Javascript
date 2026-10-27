//how to access and modify array

let statuss =["pass", "fail", "skip"];
console.log(statuss[0]);//for the value at 0
console.log(statuss[1]);// for the value at 1


//for the negative indexing
console.log(statuss.at(-1)); //for the value at -1
console.log(statuss.at(-2)); //for the value at -2
console.log(statuss.at(-4)); //for the value at -4 it will be undefined b/c nothing exists at that position

//arrays are mutable

statuss[1] ="blocked"; //faile will be removed
console.log(statuss);

//length of this array

console.log(statuss.length); //in this case it will be '3'

//once an array is created their length cannot be changed.