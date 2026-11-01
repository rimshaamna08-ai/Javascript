//normal sorting

let nums = [10,1,21,2];
nums.sort((a,b) => a-b);
console.log(nums);
//now proper sorting is done

//for reversing the above unsorted given array
nums.sort((a,b) => b-a);
console.log(nums);
