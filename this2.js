// 1. global this points global object
// 2. inside fn this refers to global object
// 3. inside fn this referes to undefined in strict mode
// 4. mobile.call this refers mobile object
// 5. extracted function of an object's this refers to global object
// 6.mobile.call this refers mobile object in strict mode
// 7. extracted function of an object's this refers to undefined in strict mode
// 8. inner functions sloppy mode this refers to global object
// 9. inner arrow functions refers to outer function's this reference
// 10. arrow method this refers to global object in browser
'use strict';
const m = {
    name: "Mobile",
    call: function () {
        const inner = () => {
            console.log("inner fn");
            console.log(this);
        }
        inner();
    }
};

m.call();


// var person = {
//     name: "Abc",
//     age: 20,

//     increment: function () {
//         this.age = this.age + 1;
//     }
// }

// const ageFn = person.increment;

// ageFn();

// console.log(person);

// 'use strict'
// var p = {
//     name: "Person",
//     print: () => {
//         console.log(this);
//     }
// }
// p.print();