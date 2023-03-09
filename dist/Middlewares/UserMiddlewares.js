"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserIdExists = exports.validateCreateUser = void 0;
const validateCreateUser = (req, res, next) => {
    if ('name' in req.body &&
        'lastName' in req.body &&
        'age' in req.body) {
        next();
    }
    else {
        res.json({ error: 'not all fields are filled' });
    }
};
exports.validateCreateUser = validateCreateUser;
const validateUserIdExists = (req, res, next) => {
    if ('id' in req.body) {
        next();
    }
    else {
        res.json({ error: 'please include user id' });
    }
};
exports.validateUserIdExists = validateUserIdExists;
