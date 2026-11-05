//objects in JS

let a1 ={
    name: "user"
};

let a ={status: "pass"};
console.log(a.status);
console.log(a["status"]);

//keys are very sensitive in nature

let a2 = { status: "pass", Status:"fail"};
console.log(a2["status"]);
console.log(a2["Status"]);

