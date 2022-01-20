// callbacks
// promise
// async await

// entity 2
// callee
function addAsync(a, b) {
    const p = new Promise((res, rej) => {
        setTimeout(() => {
            if (a === 0) rej("Invalid input");
            else {
                const c = a + b;
                res(c);
            }
        }, 1000);
    });

    return p;
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

// error handling
async function init() {
    try {
        const addRes = await addAsync(10, 20);
        console.log("addRes", addRes);
        const subRes = await subAsync(addRes, 10);
        console.log("subRes", subRes);
        const mulRes = await subAsync(subRes, 10);
        console.log('mulRes', mulRes);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Finally");
    }
}

init();
// function - undefined
// constructor - this
// async func - promise
// modules commonJs
// es6 modules
