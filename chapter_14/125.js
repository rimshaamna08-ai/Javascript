//taking previous example 124.js with let here

//hoisting also exists with functions.

/*function getUserStatus(){
    console.log(status_code);// error.
    let status_code = "200";
    console.log(status_code);
}

getUserStatus();
*/

var a = "user";
//assume 10k lines of code here
if(true){
    console.log(a); //value will be user
    var a = "temp";
    console.log(a); // value will be temp
}

