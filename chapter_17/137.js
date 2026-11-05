//normal object

const user = {
    name: "Test",
    age: 30,
    email: "testing@example.com"
};

console.log(user);

//accessing properties
console.log(user.name);
console.log(user["age"]);

//adding/modifying properties
user.city = "Temporary";
user.age = 31;
console.log(user);
