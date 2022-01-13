// function transform(arr,increment) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] * increment;
//     }

//     console.log(arr, result);
// }


// transform(arr);
// write an algorithm transform [3,6,9,12,15]

const arr = [1, 2, 3, 4, 5];

function transformFn(val) {
    return val % 2 === 0 ? val * 2 : val;
}

// callback fn
const result = arr.map(val => val * 3);
const result2 = arr.map(val => val % 2 === 0 ? val * 2 : val)


function noTransform(v, i) {
    console.log(v,i);
    return v;
}

arr.map(noTransform);

