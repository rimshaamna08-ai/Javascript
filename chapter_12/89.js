//iterate over an array

let tests = ["login" , "checkout" , "search"];
for(let index = 0; index < tests.length; index++){
    const element = tests[index];
    console.log(element);
}
console.log("------------------------------1");

//simpler loop version
for (let i=0; i< tests.length; i++){
    console.log(i, tests[i]);
}
console.log("------------------------------2");

//for of
for(let test of tests){
    console.log(test)
}
console.log("------------------------------3");


//for each

tests.forEach((test,index) =>{
    console.log(`${index}: ${tests}`);
});
console.log("------------------------------4");

//entries() index + values
for (let [i,test] of tests.entries()){
    console.log(i, test);
}
console.log("------------------------------5");

//index in
let students = ["user1" , "user2" , "user3"];
for(let student in students){
    console.log(student, "->" , students[student]);
}