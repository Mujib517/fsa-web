// asynchronous * synchronous 
// predictable * unpredictable
// delay days, hours
// js: ms
// database op, file op, network calls asynchronous
// select * from students

// function add(a, b) {
//     a++;
//     b++;
//     var c = a + b;

//     return c;
// }

// var res = add(10,20);

// var res = add(10, 20);
// console.log(res);
// js single threaded
// blocking
// non-blocking
// event loop

// callee
function addAsync(a, b, callback) {
    console.log("Line 19");

    setTimeout(function () {
        console.log("Line 21");
        a++;
        b++;
        var c = a + b;
        callback(c); // callback
        console.log("Line 26");
    }, 2000);

    console.log("Line 30");
}


// callbacks
// caller
function cb(res) {
    console.log("operation is completed");
    console.log('result', res);
}

addAsync(10, 20, cb);
