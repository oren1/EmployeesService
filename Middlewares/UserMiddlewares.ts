import { Request, Response, NextFunction } from "express"

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name || 
        !req.body.lastName || 
        !req.body.age) {
        return res.json({error: 'not all fields are filled'})
    }

    next();
}

export const validateUserIdExists = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.id) {
        return res.json({error: 'please include user id'})
    }

    next()
}