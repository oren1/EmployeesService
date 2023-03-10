"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../Controllers/UserController");
const UserMiddlewares_1 = require("../Middlewares/UserMiddlewares");
exports.default = (app) => {
    app.post('/createEmployee', [UserMiddlewares_1.validateCreateUser, UserController_1.createEmployee]);
    app.get('/getEmployee', [UserMiddlewares_1.validateUserIdExists, UserController_1.getEmployee]);
    app.get('/listEmployees', UserController_1.listEmployees);
    app.post('/updateEmployee', [UserMiddlewares_1.validateUserIdExists, UserController_1.updateEmployee]);
    app.post('/deleteEmployee', [UserMiddlewares_1.validateUserIdExists, UserController_1.deleteEmployee]);
};
