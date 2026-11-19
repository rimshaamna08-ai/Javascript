//promise

let apiCall = new Promise(function(resolve,reject){
    resolve({status: 200, body : "user data"})
});

apiCall.then(function(response){
    console.log(response);
});

//we can reject also

let testRun = new Promise(function(resolve, reject){
    reject("assertion failed");
});
testRun.then(function(data){

}).catch(function(error){
    console.log(error);
});
