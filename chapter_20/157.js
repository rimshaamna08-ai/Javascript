//how things will improve by using promise

function openBrowser(){
    return new Promise(function(resolve){
        resolve("browser has been opened");
    });
}

function gotoLoginpage(){
    return new Promise(function(resolve){
        resolve("login page has been opened");
    });
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("credentials has been entered");
    });
}


function clickLogin (){
    return new Promise(function(resolve){
        resolve("login has been clicked");
    });
}

openBrowser()
    .then(function(msg){
        console.log("step:1",msg);
        return gotoLoginpage();
    }).then(function(msg){
        console.log("step:2",msg);
        return enterCredentials();
    }).then (function(msg){
        console.log("step:3",msg);
        return clickLogin();
    }).then (function(msg){
        console.log("step:4",msg);
    }).catch(function(error){
        console.log("error:",error);
    }).finally(function(){
        console.log("done execution");
    });
