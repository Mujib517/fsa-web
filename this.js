'use strict';

// context
// run time polymorphism
const mobile = {
    name: 'Mobile',

    // mobile.print this refers to the mobile object
    // printFn: this refers to the global object in sloppy mode
    // printFn: this refers to the undefined in strict mode
    // inner functions points to global
    // inner arrow functions point to the mobile object
    print: function (a, b, c) {
        console.log("PrintFn context", a, b, c, this);
        console.log(this.name);
    }
};

const car = {
    name: 'Car'
};

const animal = {
    name: 'Animal'
};

// call inbuilt function
// mobile.print.call(car, 10, 20, 30);
// mobile.print.apply(car, [10, 20, 30]);
// bind - fixes the context
const fn = mobile.print.bind(car);

fn.call(animal); 

fn(10, 20, 30);
