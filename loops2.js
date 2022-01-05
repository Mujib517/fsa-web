// given a number print its factors
// given a number print number of factors
// count:6
// 1, 2, 3, 4, 12
// 7: 1, 7
// 20: 1,2,4,5,10,20
// 24: 1,2,3,4,6,8,12,24
// n: 1, n
// 1,2,3,4,6,12 
// reminder 0
// 7 : 1, 7
// 12: 1, 2,3,4,5,6,12
// n/2 = 6
/*
n = 12
    1 * 12
    2 * 6
    3 * 4

    4 * 3
    6 * 2
    12 * 1

    n = 15

    1 * 15
    3 * 5

    5 * 3
    15 * 1


    n = 16
    1 * 16
    2 * 8
    4 * 4
    8 * 2
    16 * 1

    i<=n    10^10  = sqrt(10^10)
    i<=n/2   50
   i<sqrt(n)     <10
*/

function isPerfectSquare(n) {
    var upper = parseInt(Math.sqrt(n));
    return upper * upper === n;
}
function factors(n) {
    var count = 0;
    var upper = parseInt(Math.sqrt(n));
    for (var i = 1; i <= upper; i++) {
        if (n % i === 0) ++count;
    }
    if (isPerfectSquare(n)) console.log(count * 2 - 1);
    else console.log(count * 2);
}

factors(12); // 1, 2,4,8,16
factors(16); // 1, 2,4,8,16
factors(25); // 1,5,25
