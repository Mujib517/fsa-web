// value types
// reference types
var m1 = {
    width: 5,
    height: 10,
    color: 'black',
    call: function () {
        console.log("calling...");
    }
}
// template
// constructor function
// pascal casing
function Mobile(clr) {
    this.width = 5; // 64 bytes
    this.height = 7;
    this.color = clr;
}

Mobile.prototype.PI = 3.14;

Mobile.prototype.call = function () {
    console.log("Calling...");
}

var mobile1 = new Mobile("Black"); // 3*64 // object
var mobile2 = new Mobile("Red"); // creating
var mobile3 = new Mobile("Blue");

