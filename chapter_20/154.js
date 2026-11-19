//pyramid of DOM

function step1(callback){
    console.log("follows these steps");
    setTimeout(function(){
        console.log("step 1 is starting...");
        callback();        
    }, 500);
}

function step2(callback){
    setTimeout(function(){
        console.log("step 2 is starting");
        callback();
    }, 500);
}

function step3(callback){
    setTimeout(function(){
        console.log("step 3 is starting");
        callback();
    }, 500);
}

function step4(callback){
    setTimeout(function(){
        console.log("step 4 is starting");
        callback();
    }, 500);
}

step1(function(){
    step2(function(){
        step3(function(){
             step4(function(){
                console.log("test is completed");
             });
        });
    });
});