import { Employee } from "./Employee.js";

function main() {
    let employees = new Array();
    employees = initEmployees(employees);
    outputEmployees(employees);

    inputEmployees(employees);
    outputEmployees(employees);
}
function outputEmployees(employeeList){
    console.log("list of employees is: ")
    employeeList.forEach((e) => console.log(e));
}

function initEmployees(employeeList) {
    let firstEmployee = new Employee(1, "ty", 500, 50);
    let secondEmployee = new Employee(1, "ty", 550, 55);
    let thirdEmployee = new Employee(1, "ty", 540, 60);
    let fouthEmployee = new Employee(1, "ty", 530, 45);
    let fifthEmployee = new Employee(1, "ty", 520, 65);
    
    employeeList.push(firstEmployee);
    employeeList.push(secondEmployee);
    employeeList.push(thirdEmployee);
    employeeList.push(fouthEmployee);
    employeeList.push(fifthEmployee);

    return employeeList;

}

function outputEmployees(employeeList){
                console.log("list of employees is: ")
                employeeList.forEach((e) => console.log(e));
            }

            function inputEmployee(idx){
                let id = idx + 1;
                let fullName = prompt(`enter employees[${id}] full name:`);
                let baseSalary = Number(prompt(`enter employees[${id}] base salary:`));
                let productSalary = 50;
                let productQuantity = Number(prompt(`Enter employees[${id}] product quantity: `)
                );
                return {id, fullName, baseSalary, productSalary, productQuantity };
            }
            
            function inputEmployees (employeeList) {
                let n = Number(prompt ("Enter number of employees: "));
                let nextIdx = employeeList.length;

                for (let i = 0; i < n; i++) {
                let newEmployee = inputEmployee(i + nextIdx);
                employeeList.push(newEmployee);
                }
            }


main();