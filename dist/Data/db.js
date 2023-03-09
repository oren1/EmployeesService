"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor({ id, name, lastName, age }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}
exports.User = User;
class DB {
    constructor() {
        this.userIdentifier = 1;
        this.users = {};
    }
    addUser(user) {
        const id = String(this.userIdentifier);
        user.id = id;
        const newUser = new User(user);
        this.users[id] = newUser;
        this.userIdentifier++;
        return newUser;
    }
    allUsers() {
        return this.users;
    }
    userForId(id) {
        return this.users[id];
    }
    updateUser(newUser) {
        const old_user = this.users[newUser.id];
        this.users[newUser.id] = Object.assign(Object.assign({}, old_user), newUser);
        return this.users[newUser.id];
    }
    deleteUser(id) {
        const user = this.users[id];
        delete this.users[id];
        return user;
    }
}
exports.default = new DB();
