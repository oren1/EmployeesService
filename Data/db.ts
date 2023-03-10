type EmployeeType = {
    id: string
    name: string
    lastName: string
    age: number
}
export class Employee {
    id: string
    name: string
    lastName: string
    age: number
    constructor( { id, name, lastName, age}: EmployeeType) {
        this.id = id
        this.name = name
        this.lastName = lastName
        this.age = age
      }
}

class DB {
    userIdentifier = 1
    employees: {[key: string]: Employee}
    constructor() {
      this.employees = {}
    }

    addEmployee(user: EmployeeType) {
        const id = String(this.userIdentifier)
        user.id = id
        const newEmployee = new Employee(user)
        this.employees[id] = newEmployee
        this.userIdentifier++
        return newEmployee
    }

    allEmployees() {
        return this.employees
    }

    employeeForId(id: string) {
        return this.employees[id]
    }

    updateEmployee(newEmployee: EmployeeType) {
        const old_employee = this.employees[newEmployee.id]
        this.employees[newEmployee.id] = {
            ...old_employee,
            ...newEmployee
        }
        return this.employees[newEmployee.id]
    }

    deleteEmployee(id: string) {
       const user = this.employees[id]
       delete this.employees[id]
       return user 
    }
}
   
export default new DB()