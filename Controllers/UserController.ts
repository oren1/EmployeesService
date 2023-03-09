import { Request, Response } from 'express';
import db, {User} from '../Data/db';

export const createUser = (req: Request, res: Response) => {
    const user = db.addUser(req.body)
    res.json(user)
}

export const getUser = (req: Request, res: Response) => {
    const userId = req.body.id
    res.json(db.userForId(userId))
}

export const listUsers = (req: Request, res: Response) => {
    res.json(db.users)
}

export const updateUser = (req: Request, res: Response) => {
    res.json(db.updateUser(req.body))
}

export const deleteUser = (req: Request, res: Response) => {
    const userId = req.body.id
    res.json(db.deleteUser(userId))    
}