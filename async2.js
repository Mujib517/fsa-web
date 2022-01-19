// 
// 2sec
// synchronous
// db, file, network,api, timers (setTimeout, setInterval), events
// nodeJs : db
// react: api calls
// for (var i = 0; i < 100000000000; i++) {
//     setTimeout(console.log(i), 0);
// }
function addAsync(a, b, cb) {
    setTimeout(() => {
        var c = a + b;
        cb(c);
    }, 500);
}

function subAsync(a, b, cb) {
    setTimeout(() => {
        var c = a - b;
        cb(c);
    }, 1000);
}

function mulAsync(a, b, cb) {
    setTimeout(() => {
        var c = a * b;
        cb(c);
    }, 2000);
}


// parallel execution
// addAsync(10, 20, res => console.log('add', res));
// subAsync(20, 10, res => console.log('sub', res));
// mulAsync(10, 10, res => console.log('mul', res));

// sequential calls
// add -> sub -> mul

addAsync(10, 20, res => {
    // execution completed
    subAsync(res, 10, subRes => {
        mulAsync(subRes, 10, finalRes => console.log("Final result is ", finalRes));
    });
});
