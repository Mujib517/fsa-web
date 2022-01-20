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
            if (a === 0) rej("Invalid Input")
            else {
                const c = a - b;
                res(c);
            }
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
// addAsync(10, 20).then(res => console.log('add()', res));
// subAsync(10, 20).then(res => console.log("sub()", res));
// mulAsync(10, 20).then(res => console.log("mul()", res));

// sequential execution
// add->sub->mul
// country -> states -> city
// pipeline
// 1st output -> 2nd task input 
// addAsync(10, 20)
//     .then(function (addRes) {
//         console.log('add operation completed');
//         console.log('addRes', addRes);
//         subAsync(addRes, 10)
//             .then(function (subRes) {
//                 console.log('sub operation completed');
//                 console.log('subRes', subRes);
//                 mulAsync(subRes, 10)
//                     .then(function (mulRes) {
//                         console.log('mul operation completed');
//                         console.log('mulRes', mulRes);
//                     });
//             });
//     });

// sequential

// addAsync(10, 20)
//     .then(function (res) {
//         console.log(res);
//         return res + 10; // typeof number
//     })
//     .then(function (res) {
//         console.log('res2', res);
//     })
//     .then()
//     .then()
//     .then()


// addAsync(10, 20)
//     .then(function (addRes) {
//         console.log('add operation completed');
//         console.log('addRes', addRes);
//         return subAsync(0, 10);
//     })
//     .then(function (subRes) {
//         console.log('sub operation completed');
//         console.log('subRes', subRes);
//         return mulAsync(subRes, 10);
//     })
//     .then(function (mulRes) {
//         console.log('mul operation completed');
//         console.log('mulRes', mulRes);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

addAsync(10, 20)
    .then(addRes => subAsync(addRes, 10))
    .then(subRes => mulAsync(subRes, 10))
    .then(mulRes => console.log('mulRes', mulRes));


// simulteneously 
const p1 = addAsync(10, 20);
const p2 = subAsync(20, 10);
const p3 = mulAsync(10, 20);

Promise.all([p1, p2, p3])
    .then(res => console.log(res));

Promise.any([p1, p2, p3])
    .then(res => console.log(res));
