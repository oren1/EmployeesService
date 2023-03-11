import { Request, Response } from 'express';
import employeesService from '../Services/EmployeesService';

export const createEmployee = (req: Request, res: Response) => {
    const user = employeesService.addEmployee(req.body)
    res.json(user)
}

export const getEmployee = (req: Request, res: Response) => {
    const employeeId = req.body.id
    const employee = employeesService.employeeForId(employeeId)
    if (employee == null) {
        res.json({error: `user with id ${employeeId} doesn't exist`})
    }
    res.json(employee)
}

export const listEmployees = (req: Request, res: Response) => {
    res.json(employeesService.allEmployees())
}

export const updateEmployee = (req: Request, res: Response) => {
    res.json(employeesService.updateEmployee(req.body))
}

export const deleteEmployee = (req: Request, res: Response) => {
    const employeeId = req.body.id
    const deletedEmployee = employeesService.deleteEmployee(employeeId)
    if(!deletedEmployee) {
       return res.json({error: `user with id ${employeeId} doesn't exist`})
    }

    res.json()    
}