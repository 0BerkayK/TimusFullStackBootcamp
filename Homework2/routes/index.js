const express = require("express");

const employeeRoutes = require("./employeeRoutes");
const {authMiddleware} = require("../middlewares");

const router = express.Router();

router.use("/employees", authMiddleware.validateTokenAndEmail, employeeRoutes);

module.exports = router; 