// conditional 
// if 
// if else
// if else if ladder
// switch 
// ternary operator
var marks = 42;
/*
    70% - Distinction
    60% - First Class
    50% - Second class
    40% - Third class
    *   - Fail
*/

if (marks >= 70) {
    console.log("Distinction");
}
if (marks >= 60 && marks < 70) {
    console.log("First class");
}
if (marks >= 50 && marks < 60) {
    console.log("Second class");
}
if (marks >= 40 && marks < 50) {
    console.log("Third class");
}
if (marks < 40) {
    console.log("Failed");
}
