"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor({ id, name, lastName, age }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}
exports.Employee = Employee;
class DB {
    constructor() {
        this.userIdentifier = 1;
        this.employees = {};
    }
    addEmployee(user) {
        const id = String(this.userIdentifier);
        user.id = id;
        const newEmployee = new Employee(user);
        this.employees[id] = newEmployee;
        this.userIdentifier++;
        return newEmployee;
    }
    allEmployees() {
        return this.employees;
    }
    employeeForId(id) {
        return this.employees[id];
    }
    updateEmployee(newEmployee) {
        const old_employee = this.employees[newEmployee.id];
        this.employees[newEmployee.id] = Object.assign(Object.assign({}, old_employee), newEmployee);
        return this.employees[newEmployee.id];
    }
    deleteEmployee(id) {
        const user = this.employees[id];
        delete this.employees[id];
        return user;
    }
}
exports.default = new DB();
