//prompt_sync simplest way to take input in java

const prompt = require('prompt-sync') ();
let num = Number(prompt("enter a number: "));
console.log(num);

//to run this we need to use node js so we have to initialize as a node js project since it was purely javascript base