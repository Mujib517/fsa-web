// write a program to filter all even numbers from array
// open close principle
// function filterEven(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             result.push(arr[i]);
//         }
//     }

//     console.log(result);
//     return result;
// }

var arr = [1, 2, 3, 4, 5, 6];

function isEven(val, index) {
    return val % 2 === 0;
}

function isOdd(val) {
    return val % 2 !== 0;
}

function getHREmployee(employee) {
    return employee.dept === "HR";
}

const result = arr.filter(isEven);
const result2 = arr.filter(isOdd);
console.log(arr, result);

