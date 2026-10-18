//another method to take user input

const readline = require('readline');

const rl = readline.createInterface({
    input: Process.stdin,
    output: process.stdout
});

rl.question ("enter a number: ", (input) => {
    let num = Number (input);

    if (num % 2 ===0){
        console.log(num + "is Even");
    } else{
        console.log("num + "is Odd);
    }
    rl.close();

});
