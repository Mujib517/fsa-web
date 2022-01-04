// switch case
// if else if - switch
var marks = 80;
switch (marks) {
    case 90:
    case 80:
    case 70:
        console.log("Distinction");
        break; // fall through
    case 60:
        console.log("First Class");
    case 50:
        console.log("Second Class");
        break;
    case 40:
        console.log("Thrid Class");
        break;
    default:
        console.log("Failed");
        break;
}