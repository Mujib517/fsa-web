// object oriented
// functional programming
const obj = {
    length: 5,
    0: 10,
    1: 20,
    3: 30,
    4: 40,
    5: 50
};

const sliceFn = [].slice.bind(obj); // fixed context
const res = sliceFn(0, 2);
console.log(res);


// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.slice(0, 2);
// console.log(newArr);