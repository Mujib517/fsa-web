// functions
// anonymous
// methods
// write a program to return whether the given number is prime
// refactoring
function print() {
    console.log("hello JS");
}

// parameters
function fn() {
    console.log("Inside fn");
    console.log("hello JS");
    console.log("hello JS");
}

fn();
// local variables
// 3 arguments
// void ??
// no void
// callee
function add(a, b) {
    // hardcoded
    console.log(a);
    console.log(b);

    function add2() {
        console.log('add2 is called');
    }
    add2();
}


// caller
/// too many
// too less
add(10, 20, 30, 40);
// add(10);
// add();