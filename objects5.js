// Object.create
// fail silently 
'use strict'
var abstractMobile = {
    call: function () {
        console.log("Calling from abstract mobile...");
    }
}

// property descriptor
var mobile1 = Object.create(abstractMobile, {
    PI: {
        value: 3.14,
        writable: false,
        enumerable: true,
        configurable: false
    },
    width: {
        value: 5,
        writable: true,
        enumerable: true
    },
    height: {
        value: 10,
        enumerable: true
    }
});

mobile1.toString = function () {
    console.log("toString() of mobile1");
}

// Object.defineProperty(mobile1, 'PI', {
//     writable: true
// });
// state, behavior

mobile1.PI = 1000; // update fails
console.log(mobile1.PI);