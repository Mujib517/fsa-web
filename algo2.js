// implement parseInt 
// '123' = 123
// 
//
// 1010 
//   2^1*1  2^0*0
/*
    n = 123
    res = 123
    2*10^1 = 20
    1*10^2 = 100
*/
// myParseFloat
// '123.02' => 123.02
function myParseInt(str) {
    var res = 0;
    // abc
    // 3
    // 0 - 2
    // 10
    // 0 - 9
    var res = 0;
    var multiplier = 1;
    for (var i = str.length - 1; i >= 0; i--) {
        var digit = str[i];
        res = res + (digit * multiplier);
        multiplier = multiplier * 10;
    }

    return res;
}

myParseInt('123');