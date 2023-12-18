
const { employeeService,dataOperationsService }= require('../services');


exports.getAllEmployees = (req, res) => {
    const employees = employeeService.getAllEmployees();
    res.json(employees).status(200);
};

exports.addEmployee = (req, res) => {
    const { name, position } = req.body;
    const newEmployee = employeeService.addEmployee(name, position);
    res.json(newEmployee).status(201);
};

exports.getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employeeService.getEmployeeById(id);

    if (employee) {
        res.json(employee).status(200);
    } else {
        res.status(404).json({ error: 'Çalışan bulunamadı.' });
    }
};

exports.deleteEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    employeeService.deleteEmployeeById(id);
    res.json({ message: 'Çalışan başarıyla silindi.' }).status(204);
};

exports.updateEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedEmployee = req.body;

    try {
        employeeService.updateEmployeeById(id, updatedEmployee);
        res.json({ message: 'Çalışan başarıyla güncellendi.' }).status(203);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
