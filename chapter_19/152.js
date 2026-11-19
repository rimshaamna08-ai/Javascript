//callbackHell

function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(() => {
        console.log("step 1 :browser starting...");
        callback();        
    }, 500);
}

//after open browser we have to navigate to a page

function goToLoginPage(callback){
    setTimeout(function(){
        console.log("step 2: login page starting");
        callback();
    },500);
}

//enter credentials after login page

function enterCredentials(callback){
    setTimeout(function(){
        console.log("step 3: entering credentials");
        callback();
    },500);
}

//now click login

function clickLogin(callback){
    setTimeout(function(){
        console.log("step 4: clicking login");
        callback();
    },500);
}


openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
             clickLogin(function(){
                console.log("test is completed");
             })
        })
    })
})
//call back hell, so its is not used