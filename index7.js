// everything is a value
// two categories
// truthy, falsy 0,"",NaN, null, undefined, false

// var x = {};

// if (x) {
//     console.log("true");
// } else {
//     console.log("false");
// }
// loosely typed lang
// Trade off
function sumArray(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) sum = sum + sumArray(a[i]);
        else sum = sum + a[i];
    }
    return sum;
}

function add(a, b) {
    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    if (Array.isArray(a)) a = sumArray(a);
    if (Array.isArray(b)) b = sumArray(b);

    var c = a + b;
    console.log(c);
}

add(10, 20);
add("abc", " xyz");
add(true, false);
add([1, 2, 3], [4, 5, 6]);
add([1, 2, [1, [1, 2], 2, 3], 3], [4, 5, 6]);
add([1, 2, 3], 100); // 21
add(true, 100); // 21

function f1() {
    return 100;
}

function f2() {
    return 200;
}

add(f1, f2); // 300