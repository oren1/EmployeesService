"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const setRoutes = (app) => {
    (0, UserRoutes_1.default)(app);
};
exports.default = setRoutes;
