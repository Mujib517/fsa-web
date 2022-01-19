// promises
// dominos - token number,10mns
// stock price www.stocks.com
function addAsync(a, b) {
    const prms = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) rej("Invalid Input");
            else {
                const c = a + b;
                res(c);
            }
        }, 1000);
    });

    return prms;
}

// /resolved
// rejected
// pending
// can be resolved/rejected only once
// caches
const promise = addAsync(10, 20)

promise
    .then(function (res) {
        console.log(res);
        console.log(promise);
    })
    .catch(function (err) {
        console.log(err);
    });
