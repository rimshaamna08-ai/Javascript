//differences

//variable is actually a traitor.
// let is a sincere person.
//constant is just constant which does not change.

var a = 10;
console.log(a);
//if now we create a function
function printHello() {
    console.log("hello user");
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);//instead of 20 it will print 30 because var is function scoped.
}
printHello();
//this is the reason variable is not used frequently.


