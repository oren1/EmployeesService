"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.listUsers = exports.getUser = exports.createUser = void 0;
const db_1 = __importDefault(require("../Data/db"));
const createUser = (req, res) => {
    const user = db_1.default.addUser(req.body);
    res.json(user);
};
exports.createUser = createUser;
const getUser = (req, res) => {
    const userId = req.body.id;
    res.json(db_1.default.userForId(userId));
};
exports.getUser = getUser;
const listUsers = (req, res) => {
    res.json(db_1.default.users);
};
exports.listUsers = listUsers;
const updateUser = (req, res) => {
    res.json(db_1.default.updateUser(req.body));
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const userId = req.body.id;
    res.json(db_1.default.deleteUser(userId));
};
exports.deleteUser = deleteUser;
