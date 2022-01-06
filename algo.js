// given a number return sum of digits
// ex: 123 = 1+2+3 =  6
/* sum = 0
    n = 123 % 10 = 3 123/10 = 12
    12 % 10  = 2 12/10 = 1
    1 % 10 = 1   1/10 = 0
    0 % 10 = 0 0/10 0

*/
// 456: 15
// 12
// 12346
// naive 
// string: inefficient

function sumOfDigits(n) {
    var sum = 0;
    while (n > 0) {
        var reminder = n % 10;
        sum += reminder;
        n = parseInt(n / 10);
    }
    console.log(sum);
    return sum;
}

sumOfDigits(123);
sumOfDigits(1234);