"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
let employeeList = [];
employeeList.push(new employee_1.Employee("Nghiem Van Dong", employee_1.Gender.MALE, new Date("1995-08-08"), "yamraja0808@gmail.com", "0961443122"));
employeeList.push(new employee_1.Employee("Van Thi Thanh Thuy", employee_1.Gender.FEMALE, new Date("1996-09-19"), "thuy1tiramisu99@gmail.com", "0972957603"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
