//hoisting also exists with functions.

function getUserStatus(){
    console.log(status_code);
    var status_code = "200";//var have hoisting concept therefore it will be undefined first and then will print the value.
    console.log(status_code);
}

getUserStatus();
