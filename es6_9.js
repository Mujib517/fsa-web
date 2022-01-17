

// function multiplyBy2(val) {
//     return val * 2;
// }

// const result = arr.map(multiplyBy2);

// console.log(result);
// this 
// async

const arr = [1, 2, 3, 4, 5];

function myMap(transformFn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        const ret = transformFn(elem, i);
        res.push(ret);
    }

    return res;
}

function divideBy2(val) {
    return val / 2;
}

Array.prototype.myMap = myMap;

const data = arr.myMap(divideBy2);
console.log(data);
