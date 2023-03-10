"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.listEmployees = exports.getEmployee = exports.createEmployee = void 0;
const db_1 = __importDefault(require("../Data/db"));
const createEmployee = (req, res) => {
    const user = db_1.default.addEmployee(req.body);
    res.json(user);
};
exports.createEmployee = createEmployee;
const getEmployee = (req, res) => {
    const employeeId = req.body.id;
    const employee = db_1.default.employeeForId(employeeId);
    if (employee == null) {
        res.json({ error: `user with id ${employeeId} doesn't exist` });
    }
    res.json(employee);
};
exports.getEmployee = getEmployee;
const listEmployees = (req, res) => {
    res.json(db_1.default.employees);
};
exports.listEmployees = listEmployees;
const updateEmployee = (req, res) => {
    res.json(db_1.default.updateEmployee(req.body));
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => {
    const userId = req.body.id;
    res.json(db_1.default.deleteEmployee(userId));
};
exports.deleteEmployee = deleteEmployee;
