import { Request, Response } from 'express';
import db, {Employee} from '../Data/db';


export const createEmployee = (req: Request, res: Response) => {
    const user = db.addEmployee(req.body)
    res.json(user)
}

export const getEmployee = (req: Request, res: Response) => {
    const employeeId = req.body.id
    const employee = db.employeeForId(employeeId)
    if (employee == null) {
        res.json({error: `user with id ${employeeId} doesn't exist`})
    }
    res.json(employee)
}

export const listEmployees = (req: Request, res: Response) => {
    res.json(db.employees)
}

export const updateEmployee = (req: Request, res: Response) => {
    res.json(db.updateEmployee(req.body))
}

export const deleteEmployee = (req: Request, res: Response) => {
    const userId = req.body.id
    res.json(db.deleteEmployee(userId))    
}