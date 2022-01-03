// = assignment operator
// arithmatic operator + / * / % ++ --
// logical operators && , ||, !
// conditional operators <,>,>=,<=,==, ===, !=
// bitwise operators &, |, ^, <<, >>, 
// Ternary op
var a = 11;
var b = 20;

// RISC
// CISC
var c = a + b;
// 1Ghz = 10^9 instructions per seconds

// var x = a--; // pre increment
// // post increment
// console.log(x); // 11
// console.log(a); // 10

/*
    p   q       p&&q    p||q
    0   0        0       0
    0   1        0       1
    1   0        0       1
    1   1        1       1
*/

// parseInt
// parseFloat
// +
// !!
// var y = "abc"; // truthy
// var z = !!y;
// console.log(z);

/*
    1011
    0001
    ----
    0 0 0 1 -> 1


    0 0 0 0 1 => 1
    0 0 0 1 0 => 2
    0 0 1 0 0 => 4
    0 1 0 0 0  => 8
    1 0 0 0 0 => 16
1 0 0 0 0 0 => 32      
*/
// var y = 11;

// var z = 1 << 5;
// var z = 2 * 2 * 2 * 2 * 2;
// var z = 10 / 2; // 10-2 8-2 6-2 4-2 2-2 0

// // var res = y & z;
// console.log(z);


var x = 10;
var y = 20;

// strict equality
// == equality 
var res = x === '10';
console.log(res);