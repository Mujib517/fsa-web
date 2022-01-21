'use strict'

const mobile = {
    name: "Mobile",
    age: '30 days'
};

const person = {
    name: "Abc",
    age: 20,

    inc: function () {
        this.age++;
        // undefined.age -> NullReference
    },

    print: function (a, b, c) {
        console.log(this.name, this.age, a, b, c);
    }
};

const car = {
    name: "Car",
    age: '2 years'
};

// call
// apply - array
// bind
person.print.call(car, 10, 20, 30);
person.print.apply(car, [10, 20, 30]);

const newFn = person.print.bind(mobile); // fixed context
const newCarFn = person.print.bind(car); // fixed context

console.log(newFn === person.print);