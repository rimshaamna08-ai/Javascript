//three ways to add a function.

function validateStatusCode(status){
    if(status >= 200 && status <= 300){
        console.log("request is fine");
    }
}

//to convert it into function expression, we can do it like this.

const validateStatusCode_exp = function (status) {
     if(status >= 200 && status <= 300)
        console.log("request is fine");
}

//to convert it into an arrow function, we can do it like this.

const validateStatusCode_arrow = (status) => {
    if(status >= 200 && status <= 300)
        console.log("request is fine");
}

validateStatusCode(200);
validateStatusCode_exp(200);
validateStatusCode_arrow(200);
