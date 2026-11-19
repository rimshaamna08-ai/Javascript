//promise finally

let apiCall = new Promise(function(resolve,reject){
    //resolve({ status: 200 });
    reject("error");
});
apiCall.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("i will always be executed!");
});
