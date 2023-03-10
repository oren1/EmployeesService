"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserIdExists = exports.validateCreateUser = void 0;
const validateCreateUser = (req, res, next) => {
    if (!req.body.name ||
        !req.body.lastName ||
        !req.body.age) {
        return res.json({ error: 'not all fields are filled' });
    }
    next();
};
exports.validateCreateUser = validateCreateUser;
const validateUserIdExists = (req, res, next) => {
    if (!req.body.id) {
        return res.json({ error: 'please include user id' });
    }
    next();
};
exports.validateUserIdExists = validateUserIdExists;
