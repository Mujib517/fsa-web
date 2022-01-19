function addAsync(a, b, cb) {
    setTimeout(function () {
        if (a === 0) {
            cb("Invalid input");
        } // error
        else {
            const c = a + b;
            cb(null, c);
        }
    }, 1000);
}

function subAsync(a, b, cb) {
    setTimeout(function () {
        var c = a - b;
        cb(c);
    }, 1000);
}


addAsync(10, 20, function (err, res) {
    if (err) {
        throw new Error("Invalid input");
    } else {
        subAsync(res, 10, function (finalRes) {
            console.log(finalRes);
        });
    }
});