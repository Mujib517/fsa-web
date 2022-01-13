function add(a) {
    return a + 10;
}

var f = a => a + 10;

let res = f(20);
console.log(res);


function addNew(a, b) {
    return a + b;
}

var f2 = (a, b) => {
    var c = a + b;
    console.log(c);
    return c;
}

f2(10, 10);
