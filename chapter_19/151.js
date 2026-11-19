//asynchronous function

console.log("test:1 started");

setTimeout(function(){                  //a function in JS
    console.log("test:2 started");
}, 5000); 

console.log("test:3 started");

//it will start test 2 after 5 seconds hence test 1 and 3 will be executed first
