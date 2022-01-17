//map filter reduce
// 5 elements res: 5 elements
// employees
// give increments to all employees by 20%
// return employees who are not employed with the company
const employees = [{
    name: "John",
    salary: 10000,
    dept: "HR",
    active: true
}, {
    name: "Joseph",
    salary: 30000,
    dept: "IT",
    active: true
},
{
    name: "Abc",
    salary: 20000,
    dept: "HR",
    active: false
}];

function incrementSalary(employee) {
    const { salary } = employee; // const salary = employee.salary;
    const newSalary = salary + salary * 0.2; // 10000 + 10000 * 0.2

    employee.salary = newSalary;

    return employee;
}

function getInactiveEmployee(employee) {
    return !employee.active;
}

const allEmployees = employees.map(incrementSalary);

const formerEmployees = employees.filter(getInactiveEmployee);


const arr = [1, 2, 3, 4, 5];

function add(acc, val) {
    return acc * val;
}

const sum = arr.reduce((acc, val) => acc * val);

console.log(sum);
