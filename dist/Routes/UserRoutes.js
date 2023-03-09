"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../Controllers/UserController");
const UserMiddlewares_1 = require("../Middlewares/UserMiddlewares");
exports.default = (app) => {
    app.post('/createUser', [UserMiddlewares_1.validateCreateUser, UserController_1.createUser]);
    app.get('/getUser', [UserMiddlewares_1.validateUserIdExists, UserController_1.getUser]);
    app.get('/listUsers', UserController_1.listUsers);
    app.post('/updateUser', [UserMiddlewares_1.validateUserIdExists, UserController_1.updateUser]);
    app.post('/deleteUser', [UserMiddlewares_1.validateUserIdExists, UserController_1.deleteUser]);
};
