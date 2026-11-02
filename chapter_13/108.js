//funstion as Expression

function greet(name){
    return `Hello, ${name}`; 
}

//anonymous function: function without name.
const greet1 = function(name){
    return `Hello, ${name}`; 
}

console.log(greet1("user1"));
console.log(greet("user1"));
