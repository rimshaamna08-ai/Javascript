//type 3 (with argument and no return value)

function greetByName(name){
    console.log("hi" , name)
}
//no return type.

greetByName("user");
greetByName("admin");
greetByName("guest");

//it doesnot return any value at all.

let name = greetByName("newUser");
console.log(name);

//it will be undefined because it has no return value, it just prints the message.

