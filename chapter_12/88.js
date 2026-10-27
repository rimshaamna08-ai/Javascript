//question: to find one element

let nums = [10,19,25,45];
let result = nums.find(temp => temp > 20);
console.log(result);
//only return first number greater than 20 among elements get displayed 

//find index
let index = nums.findIndex(n => n > 20);
console.log(index);


nums.findLast(n => n > 20);
console.log(nums.findLast(n => n > 20));

nums.findLastIndex(n => n > 20);
console.log(nums.findLastIndex(n => n > 20));

