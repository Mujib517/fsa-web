// es6
// es5
// javascript - ecmascript
// 220 ac
// 110 ac
// browsers 
// google chrome v8, mozilla firefox edge:microsoft Chakra
// specifications IEEE
// javascript - Ecma
// html, css - w3c
// interface
// keyword class
// es6
class AbstractMobile {

    constructor() {
        console.log("super constructor");
    }

    call() {
        console.log('calling...');
    }
}

class Mobile extends AbstractMobile {
    constructor(clr) {
        super();
        console.log('inside constructor');
    }

    width = 5;
    height = 10;
}

var m1 = new Mobile('Red'); // first method to execute 
m1.call();
