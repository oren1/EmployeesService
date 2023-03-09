import { Express } from 'express';
import { createUser, listUsers, getUser, updateUser, deleteUser } from '../Controllers/UserController';
import { validateCreateUser, validateUserIdExists } from '../Middlewares/UserMiddlewares';

export default (app: Express) => {
    app.post('/createUser',[validateCreateUser,createUser])
    app.get('/getUser', [validateUserIdExists, getUser])
    app.get('/listUsers', listUsers)
    app.post('/updateUser', [validateUserIdExists, updateUser])
    app.post('/deleteUser', [validateUserIdExists, deleteUser])
}