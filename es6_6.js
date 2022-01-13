const arr = [1, 2, 3, 4];
// functional programming
// procedural
// object oriented
// functional programming

function double(val) {
    return val * 2;
}

function triple(val) {
    return val * 3;
}

function transformEven(val) {
    return val % 2 === 0 ? val * 2 : val;
}

function transformOdd(val) {
    return val % 2 === 0 ? val : val * 3;
}

function transform(val){

}

const result = arr.map(transform);
const result2 = arr.map(triple);
const result3 = arr.map(transformEven);
const result4 = arr.map(transformOdd);

console.log(arr, result);