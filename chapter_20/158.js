//we can have multiple promises in one go

let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB ok");
let checkCache = Promise.resolve("cache ok");

Promise.all([checkAuth, checkDB, checkCache]).then (function(results){
    console.log("all checks:", results);
});

Promise.all([
    Promise.resolve("ok"),
    Promise.reject("DB down"),
    Promise.resolve("ok")
])
    .then (function(r){
        console.log(r);
    }).catch(function(error){
        console.log("failed: ", error);
    });