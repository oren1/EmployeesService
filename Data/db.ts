type UserType = {
    id: string
    name: string
    lastName: string
    age: number
}
export class User {
    id: string
    name: string
    lastName: string
    age: number
    constructor( { id, name, lastName, age}: UserType) {
        this.id = id
        this.name = name
        this.lastName = lastName
        this.age = age
      }
}

class DB {
    userIdentifier = 1
    users: {[key: string]: User}
    constructor() {
      this.users = {}
    }

    addUser(user: UserType) {
        const id = String(this.userIdentifier)
        user.id = id
        const newUser = new User(user)
        this.users[id] = newUser
        this.userIdentifier++
        return newUser
    }

    allUsers() {
        return this.users
    }

    userForId(id: string) {
        return this.users[id]
    }

    updateUser(newUser: UserType) {
        const old_user = this.users[newUser.id]
        this.users[newUser.id] = {
            ...old_user,
            ...newUser
        }
        return this.users[newUser.id]
    }

    deleteUser(id: string) {
       const user = this.users[id]
       delete this.users[id]
       return user 
    }
}
   
export default new DB()