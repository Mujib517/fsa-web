function isPassed(marks) {
    return marks >= 35 && marks <= 100
}

function getResult(marks) {
    var result = isPassed(marks) ?
        "Passed" : "Failed";

    // if (marks >= 35) {
    //     result = "Passed";
    // }
    // else {
    //     result = "Failed";
    // }

    console.log(result);
    return result;
}

getResult(40);
getResult(34);
getResult(80);