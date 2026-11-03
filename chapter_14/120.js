//example
let b = 20; //global scope
console.log(b);

function printHello(){
    console.log ("hello user");
    let b= 30; //local scope
    console.log (b);
    if (true){
        let b= 5;
        console.log(b);
    }
    console.log("let -> " , b);
}

printHello();
