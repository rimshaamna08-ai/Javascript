//question

let TestScore = 85;
switch (true) {
    case (TestScore >= 95):
        console.log ("Outstanding - Top performer");
        break;
    case (TestScore >= 85):
        console.log ("Excellent - Above expectation");
        break;
    case (TestScore >= 75):
        console.log("Good - Meets expectation");
        break;
    case (TestScore >= 60):
        console.log(" average - Improvement needed");
        break;
    case (TestScore >= 50):
        console.log("below average")
        break;
    default:
        console.log("Unsatisfactory");
}