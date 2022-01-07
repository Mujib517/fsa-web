// function swap(a, b) {
//     console.log("Before swap a, b", a, b);
//     var temp = a;
//     a = b;
//     b = temp;

//     console.log("After swap a, b", a, b);
// }


// var x = 10;
// var y = 20;
// // pass by value
// swap(x, y);
// console.log("after swap function x,y", x, y);
// assignment 
// function calls
// equality check
function fn(o) {
    o.width = 100;
}
var obj = {
    width: 1
}
// pass by reference
fn(obj);
console.log(obj);