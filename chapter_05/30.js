//question

let responseTime = 800; // in ms
let SLA = 1000; // in ms
let SLAstatus = responseTime <= SLA ? "WITHIN SLA" : "SLA BREACHED";
console.log(`Response: ${responseTime}ms - ${SLAstatus}`);
