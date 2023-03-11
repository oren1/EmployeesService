"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importStar(require("../Data/db"));
class EmployeesService {
    addEmployee(user) {
        const id = db_1.default.userIdentifier.toString();
        user.id = id;
        const newEmployee = new db_1.Employee(user);
        db_1.default.employees[id] = newEmployee;
        db_1.default.userIdentifier++;
        return newEmployee;
    }
    allEmployees() {
        return db_1.default.employees;
    }
    employeeForId(id) {
        return db_1.default.employees[id];
    }
    updateEmployee(newEmployee) {
        const old_employee = db_1.default.employees[newEmployee.id];
        db_1.default.employees[newEmployee.id] = Object.assign(Object.assign({}, old_employee), newEmployee);
        return db_1.default.employees[newEmployee.id];
    }
    deleteEmployee(id) {
        const user = db_1.default.employees[id];
        delete db_1.default.employees[id];
        return user;
    }
}
exports.default = new EmployeesService();
