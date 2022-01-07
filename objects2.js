// value types & reference types
var x = 10;
var y = 10;

console.log("x===y", x === y);

var mobile = {
    width: 5, // 8 bytes
    height: 7, // 8 bytes
    color: 'Black',

    call: function (number) {
        console.log("Calling...", number);
    }
};

var mobile0 = {
    width: 5, // 8 bytes
    height: 7, // 8 bytes
    color: 'Black',

    call: function (number) {
        console.log("Calling...", number);
    }
};


// copy 
var x = 10;
var y = x;

var w = true;
var z = w; // copy

// reference
// arrays & objects
// cloning
// pass by value
// pointers
var mobileX = mobile;
mobileX.width = 100;

console.log(mobile.width);
