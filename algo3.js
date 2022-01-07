// given an array return min element write recursive
// ex: [10,-1,2,4,20,-6,15]
// min: -6
// iteratively
//  [10,-1,2,4,20,-6,15] O(N)
//  sort: NLog(N) [-6,-1,2,4,10,15,20]
//  min: -6

function min(arr) {
    var minSoFar = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }

    return minSoFar;
}
// arr: 5
// 0 - 4
// i=5
function minRec(arr, i, minSoFar) {
    if (i >= arr.length) return minSoFar;

    if (arr[i] < minSoFar) minSoFar = arr[i];
    return minRec(arr, i + 1, minSoFar);
}



var arr = [10, -1, 2, 4, 20, -6, 15];
var arr2 = [1, 0, 2, 4, 20, 6, 15];
var arr3 = [];

var res = minRec(arr, 1, arr[0]);
var res2 = minRec(arr2, 1, arr2[0]);
var res3 = minRec(arr3, 1, arr3[0]);

console.log(res, res2, res3);