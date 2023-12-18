const Employee = require("../models");

const dataOperationsService = require("./dataOperationsService");

function addEmployee(id, name, age, position) {
  const employees = dataOperationsService.readData();
  id = Date.now();
  const newEmployee = new Employee(id, name, position);
  employees.push(newEmployee);
  dataOperationsService.writeData(employees);
  return newEmployee;
}

function getAllEmployees() {
  return dataOperationsService.readData();
}

function getEmployeeById(id) {
  const employees = dataOperationsService.readData();
  return employees.find((employee) => employee.id === id);
}

function deleteEmployeeById(id) {
  let employees = dataOperationsService.readData();
  employees = employees.filter((employee) => employee.id !== id);
  dataOperationsService.writeData(employees);
}

function updateEmployeeById(id, updatedEmployee) {
  let employees = dataOperationsService.readData();
  const index = employees.findIndex((employee) => employee.id === id);

  if (index !== -1) {
    // ID değiştirmeye izin verilmiyor
    if (id !== updatedEmployee.id) {
      throw new Error("ID değiştirmeye izin verilmiyor.");
    }

    // Zorunlu veri tiplerini kontrol etmek için özel bir işlem yapabilirsiniz

    employees[index] = updatedEmployee;
    dataOperationsService.writeData(employees);
  }
}

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,
};
