// block scoped in java
// function scoped
// throughtout the function
// hoisting

// function fn() {
//     if (true) {
//         if(true){
//             let x = 10;
//         }
//         console.log(x);
//     }
// }

// fn();

// const PI = 3.14;
// // PI = 20; // no overwrite 

// const arr = [1, 2, 3, 4];
// arr.push(6);
// arr.pop();

// console.log(arr);


// const
// reassignment is not allowed
// const x = [1, 2, 4]
// x = [5, 6, 7];
// console.log(x);

// multiline strings

// var item = 10;

// var str = 'THis is line 1' + item + ' \n' +
//     'This is line 2\n' +
//     'This is line 3\n';

// var str2 = `This is line 1 ${item}
// This is line 2
// This is line 3`;

// console.log(str2);
// function fn(a, b = 0) {
//     var c = a + b;
//     console.log(c);
// }

// fn(10);

// spread operator ...

// function fn(a, b, ...c) {
//     console.log(a, b, c);
// }

// fn(10, 20, 30, 40, 50, 50, 60);

// spread operator objects

var m1 = {
    width: 10,
    height: 10,
    color: 'Black',
    call: function () {
        console.log("calling..");
    }
}

// var m2 = {};

// // reflection
// // clone es5
// for (var key in m1) {
//     m2[key] = m1[key];
// }

// console.log(m2 === m1);
// var m2 = { ...m1, color: "Red" };

// console.log(m1);
// console.log(m2);
// console.log(m2 === m1);

// property destructering
// const width1 = m1.width;
// const height1 = m1.height;
const { width, height, color, call } = m1;
console.log(width, height, call);

const arr = [10, 20, 30, 40];

// const I = arr[0];
// const II = arr[1];
// const III = arr[2];

const [I, II, III] = arr;

console.log(I, II, III);


