// recursion
// 4! = 4*3*2*1 = 24
// 3! = 3*2*1
// 2! = 2*1 
// 1! = 0! = 1
// 4! = 4* 3!
// 4! = 4 * 3 * 2!
// 4! = 4 * 3 * 2 * 1!
// iterative 
// recursive (divide&conquer MergeSort & quick sort)
// iterative
// print 1 to n
// function print(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

function printRec(n) {
    if (n === 0) return;

    printRec(n - 1);
    console.log(n);
}

// printRec(10);
// fibonacci(5);
// 1 1 2 3 5 8

function fact(n) {
    if (n <= 1) return 1;

    return n * fact(n - 1);
}

var res = fact(4);
console.log(res);