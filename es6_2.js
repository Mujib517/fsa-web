// property shorthand notation
// let width = 10;
// let height = 20;

// var m1 = {
//     width,
//     height,
//     color: "black"
// };
// console.log(m1);

// arrow functions
// function fn() { }
// var fn = function () { }

function add(a) {
    a = a + 10;
    console.log(a);
}

a => {
    a = a + 10;
    console.log(a);
}

function add2(a, b) {
    return a + b;
}

(a, b) => a + b;
