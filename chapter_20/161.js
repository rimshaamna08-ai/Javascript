//question
/*
let p =new Promise(function(resolve,reject){
    resolve(42);
});

p.then(function(value){
    console.log("answer:",value);
});
*/

//if we reject the promise

/*let p = new Promise(function(resolve,reject){
    reject("something broke");
});

p.catch(function(error){
    console.log("caught an error: ", error);
});
*/

/*let p = Promise.resolve(5);
p.then(function(val){
    return val * 10;
}).then(function(val){
    console.log("result: ", val);
}); //first multiplying then resolving function
*/

/*Promise.resolve(1)
    .then(function(val){
        console.log(val);
        return val+1;
    })
    .then(function(val){
        console.log(val);
        return val + 1;
    })
    .then(function(val){
        console.log(val); // this will get 3 from above code
    });
*/

/*Promise.resolve("start")
    .then(function(val){
        console.log(val);
        throw new error("broke at step 2");
    })
    .then(function(){
        console.log("this will not run");
    })
    .catch(function(error){
        console.log("caught: ", error.message);
    });
    */

    Promise.reject("test failed")
        .then(function(data){
            console.log("Data: ", data);
        })
        .catch(function(err){
            console.log("Error: ", err);
        })
        .finally(function(){
            console.log("done!");
        });