// es3

// x = 100;
// console.log(x);
// deprecated
// absolete
function add(a, a) {
    console.log(a + a);
    return a + a;
}

add(10, 20);

function addNew(a, b) {
    'use strict'
    console.log('add new ', a + b);
}

addNew(10, 20);
