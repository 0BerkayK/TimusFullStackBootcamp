const express = require('express');
const controller = require('../controller');
const middlewares= require("../middlewares")
const router = express.Router({ mergeParams: true });

// Routes

router.route('/').get(controller.employeeController.getAllEmployees);
router.route('/:id').get(controller.employeeController.getEmployeeById);
router.route('/').post(middlewares.validationMiddleware.validateEmployeeData , controller.employeeController.addEmployee);

router.route('/:id').delete(controller.employeeController.deleteEmployeeById);
router.route('/:id').put(middlewares.validationMiddleware.validateEmployeeData,controller.employeeController.updateEmployeeById);

module.exports =  router;
