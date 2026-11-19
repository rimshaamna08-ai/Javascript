//types of callback
//1.synchronous
//2.asynchronous

//for synchronous (it means which does one by one)

let testResults = ["pass" , "fail", "pass", "skip"];

testResults.forEach(function(result,index){
    console.log("test", index, result);
});
//this will print test result pass, fail, pass and skip for each
//it takes line by line argument and execute it

