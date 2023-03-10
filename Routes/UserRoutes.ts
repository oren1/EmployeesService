import { Express } from 'express';
import { createEmployee, listEmployees, getEmployee, updateEmployee, deleteEmployee } from '../Controllers/UserController';
import { validateCreateUser, validateUserIdExists } from '../Middlewares/UserMiddlewares';

export default (app: Express) => {
    app.post('/createEmployee',[validateCreateUser,createEmployee])
    app.get('/getEmployee', [validateUserIdExists, getEmployee])
    app.get('/listEmployees', listEmployees)
    app.post('/updateEmployee', [validateUserIdExists, updateEmployee])
    app.post('/deleteEmployee', [validateUserIdExists, deleteEmployee])
}