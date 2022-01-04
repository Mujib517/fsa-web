// units : 100
// slabs: 
// 1-50: 3rs
// 51-100: 5rs
// 101 - 7rs
/*
  units : 200 150 + 250 + 350
  amount: 693 + 245 + 450
  units: 100
  units: 0
  101-200: 99 * 7 = 693
    51-100: 49 * 5 = 245
    50*3 = 150 


    250000 - 0
    25000-50000 - 10%       12,500
    50000-1000000 - 20%     100000
    1000000 - 30%           


    1000000 - 30%
    210 = 110*7
    51-100 = 50 * 5
    0-50 = 50 * 3

    debugging
    Tracing
*/

function isHigherSlab(units) {
    return units > 100;
}

function isMiddleSlab(units) {
    return units > 50;
}

function isLowerSlab(units) {
    return units > 0;
}

function calculateAmount(units, rate) {
    return units * rate;
}

function calc(units) {
    if (!units) throw new Error("Invalid input");
    var amount = 0;
    if (isHigherSlab(units)) {
        var noOfUnits = units - 100;
        // amount = amount +
        //     calculateAmount(noOfUnits, 7);
        amount += calculateAmount(noOfUnits, 7);
        units -= noOfUnits;
    }
    if (isMiddleSlab(units)) {
        var noOfUnits = units - 50;
        amount += calculateAmount(noOfUnits, 5);
        units -= noOfUnits;
    }
    if (isLowerSlab(units)) {
        amount += calculateAmount(units, 3);
    }

    return amount;
}

var res = calc();
console.log(res);