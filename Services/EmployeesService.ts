
import db, { Employee } from "../Data/db"

class EmployeesService {

    addEmployee(user: Employee) {
        const id = db.userIdentifier.toString()
        user.id = id
        const newEmployee = new Employee(user)
        db.employees[id] = newEmployee
        db.userIdentifier++
        return newEmployee
    }
    
    allEmployees() {
        return db.employees
    }
    
    employeeForId(id: string) {
        return db.employees[id]
    }
    
    updateEmployee(newEmployee: Employee) {
        const old_employee = db.employees[newEmployee.id]
        db.employees[newEmployee.id] = {
            ...old_employee,
            ...newEmployee
        }
        return db.employees[newEmployee.id]
    }
    
    deleteEmployee(id: string) {
       const user = db.employees[id]
       delete db.employees[id]
       return user 
    }
}

export default new EmployeesService()
