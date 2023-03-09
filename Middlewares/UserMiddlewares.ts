import { Request, Response, NextFunction } from "express"

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
    if ('name' in req.body && 
        'lastName' in req.body && 
        'age' in req.body) {
        next()
    }
    else {
        res.json({error: 'not all fields are filled'})
    }
}

export const validateUserIdExists = (req: Request, res: Response, next: NextFunction) => {
    if ('id' in req.body) {
        next()
    }
    else {
        res.json({error: 'please include user id'})
    }
}