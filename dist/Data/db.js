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
}
exports.default = new DB();
