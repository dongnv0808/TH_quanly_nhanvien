import { Employee, Gender } from "./employee";

let employeeList: Employee[] = [];

employeeList.push(new Employee ("Nghiem Van Dong", Gender.MALE, new Date ("1995-08-08"), "yamraja0808@gmail.com", "0961443122"));
employeeList.push(new Employee ("Van Thi Thanh Thuy", Gender.FEMALE, new Date ("1996-09-19"), "thuy1tiramisu99@gmail.com", "0972957603"));

function showEmployee(employee: Employee){
    console.log(employee);
}

employeeList.forEach(showEmployee);