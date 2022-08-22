const employee = {
    name: "edwin",
    streetAddress: "ruaraka"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {

    return {
        ...employee,
        [key]:value,
    };
}
const employeeOne= updateEmployeeWithKeyAndValue(employee, "name","Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
    return employee;
}
const employeeTwo = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress","12 Broadway");


function deleteFromEmployeeByKey(employee, key) {

    const newObj = {...employee};
    delete newObj.name;
    return newObj;
}
const newEmployee = deleteFromEmployeeByKey(employee, "name");

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee.name;
    return employee;
}
const employeeNew = destructivelyDeleteFromEmployeeByKey(employee, "name");