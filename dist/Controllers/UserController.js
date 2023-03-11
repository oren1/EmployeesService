"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.listEmployees = exports.getEmployee = exports.createEmployee = void 0;
const EmployeesService_1 = __importDefault(require("../Services/EmployeesService"));
const createEmployee = (req, res) => {
    const user = EmployeesService_1.default.addEmployee(req.body);
    res.json(user);
};
exports.createEmployee = createEmployee;
const getEmployee = (req, res) => {
    const employeeId = req.body.id;
    const employee = EmployeesService_1.default.employeeForId(employeeId);
    if (employee == null) {
        res.json({ error: `user with id ${employeeId} doesn't exist` });
    }
    res.json(employee);
};
exports.getEmployee = getEmployee;
const listEmployees = (req, res) => {
    res.json(EmployeesService_1.default.allEmployees());
};
exports.listEmployees = listEmployees;
const updateEmployee = (req, res) => {
    res.json(EmployeesService_1.default.updateEmployee(req.body));
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => {
    const employeeId = req.body.id;
    const deletedEmployee = EmployeesService_1.default.deleteEmployee(employeeId);
    if (!deletedEmployee) {
        return res.json({ error: `user with id ${employeeId} doesn't exist` });
    }
    res.json();
};
exports.deleteEmployee = deleteEmployee;
