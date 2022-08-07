"use strict";
/* Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee = {};
employee.code = 10;
employee.name = "John";
*/
let employee_code = document.getElementById('employee_code');
let employee_name = document.getElementById('employee_name');
let employee = {
    code: 10,
    name: "John"
};
employee_code.innerHTML = "Code: " + employee.code;
employee_name.innerHTML = "Name: " + employee.name;
