function addAsync(a, b) {
    const prms = new Promise(function (res, rej) {
        setTimeout(function () {
            const c = a + b;
            res(c);
        }, 2000);
    });


    return prms;
}

function subAsync(a, b) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            const c = a - b;
            res(c);
        }, 1000);
    });

    return p;
}

function mulAsync(a, b) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            const c = a * b;
            res(c);
        }, 1000);
    });


    return p;
}


// parallel execution
addAsync(10, 20).then(res => console.log('add()', res));
subAsync(10, 20).then(res => console.log("sub()", res));
mulAsync(10, 20).then(res => console.log("mul()", res));

// sequential execution
// add->sub->mul