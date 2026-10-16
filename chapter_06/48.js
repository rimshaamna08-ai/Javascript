//conditions using a problem satement

/* for score between 0 - 100
- score > 90 A grade
- score 80 to 90 B grade
- score 70 to 80 C grade
- score 60 to 70 D grade
- score 50 to 60 E grade
- score < 50 F grade */

let score = 102;

if (score > 100 || score < 0) {
    console.log("Invalid Score");
} else {
    if (score > 90) {
        console.log("Grade A Excellent");
    } else if (score >= 80) {
        console.log("Grade B Good Effort");
    } else if (score >= 70) {
        console.log("Grade C Average");
    } else if (score >= 60) {
        console.log("Grade D Needs Improvement");
    } else if (score >= 50) {
        console.log("Grade E Below Average");
    } else {
        console.log("Grade F Work Hard next time");
    }
}