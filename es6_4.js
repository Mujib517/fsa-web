// function fn(a) {
//     return a + 10;
// }

// const fn = function (a) {
//     return a + 10;
// }

// const arrowFn = a => a + 10;


// function fn2() {
//     console.log("fn2()");
//     console.log("fn2()");
// }

// () => console.log("fn");

// map, filter, reduce
// array functions
// map - transform
// [1,2,3,4] => [false,true,false,true]

var arr = [1, 2, 3, 4];

function double(i) {
    return i * 2;
}

const transformedArr = arr.map(double);

console.log(arr, transformedArr);

console.log(arr === transformedArr);


