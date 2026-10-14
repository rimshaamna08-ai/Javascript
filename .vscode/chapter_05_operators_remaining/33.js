//nested ternary - ternary operator within ternary operator (multiple conditions)

//age > 18 ; should have passed 12 th grade
//age > 25 ; should be a graduate

let age = 30;

let Educational_status = age > 25
    ? "You are now a graduate"
    : age > 18
        ? "You need to have a bachelors degree"
        : age > 12
            ? "intermediate"
            : "not cleared intermediate";
console.log(Educational_status);
console.log(`you can apply for further studies or a job as ${Educational_status}`);
