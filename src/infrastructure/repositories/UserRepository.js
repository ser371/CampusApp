// const IUserRepository = require("../../application/ports/IUserRepository")

// // const User = require("../../domain/entities/User");

// class UserRepository extends IUserRepository {
//     constructor(){
//         super();
//         this.dummyDatabase = [];
//     }
//     async save(userEntity){
//         console.log(`[UserRepository] Saving user: ${userEntity.Username}`);
//         this.dummyDatabase.push(userEntity);
//         return userEntity;
//     }

//     async findByUsername(username){
//         console.log(`[UserRepository] Searching for user by username: ${username}`);
//         const foundUser = this.dummyDatabase.find(user => user.Username === username);
//         if(foundUser){
//             console.log(`[UserRepository] User found: ${foundUser.Username}`);
//         } else {
//             console.log(`[UserRepository] No user found with username: ${username}`);
//         }

//         return foundUser || null;
//     }
// }

// module.exports = UserRepository;


const IUserRepository = require("../../application/ports/IUserRepository");
const User = require("../../domain/entities/User");

class UserRepository extends IUserRepository {
    constructor() {
        super();
        this.dummyDatabase = [];
    }

    async save(userEntity) {
        console.log(`[UserRepository] Saving user: ${userEntity.Username}`);
        this.dummyDatabase.push(userEntity);
        return userEntity;
    }

    async findByUsername(username) {
        console.log(`[UserRepository] Searching for user by username: ${username}`);
        const foundUser = this.dummyDatabase.find(user => user.Username === username);
        return foundUser || null;
    }

    async findById(userId) {
        console.log(`[UserRepository] Searching for user by ID: ${userId}`);
        const foundUser = this.dummyDatabase.find(user => user.UserId === userId);
        return foundUser || null;
    }

    async update(userEntity) {
        console.log(`[UserRepository] Updating user: ${userEntity.UserId}`);
        const index = this.dummyDatabase.findIndex(user => user.UserId === userEntity.UserId);
        if (index !== -1) {
            this.dummyDatabase[index] = userEntity;
            return userEntity;
        }
        throw new Error("User not found");
    }

    async delete(userId) {
        console.log(`[UserRepository] Deleting user: ${userId}`);
        const index = this.dummyDatabase.findIndex(user => user.UserId === userId);
        if (index !== -1) {
            this.dummyDatabase.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = UserRepository;