const IUserRepository = require("../../application/ports/IUserRepository")

const User = require("../../domain/entities/User");

class UserRepository extends IUserRepository {
    constructor(){
        super();
        this.dummyDatabase = [];
    }
    async save(userEntity){
        console.log(`[UserRepository] Saving user: ${userEntity.Username}`);
        this.dummyDatabase.push(userEntity);
        return userEntity;
    }

    async findByUsername(username){
        console.log(`[UserRepository] Searching for user by username: ${username}`);
        const foundUser = this.dummyDatabase.find(user => user.Username === username);
        if(foundUser){
            console.log(`[UserRepository] User found: ${foundUser.Username}`);
        } else {
            console.log(`[UserRepository] No user found with username: ${username}`);
        }

        return foundUser || null;
    }
}

module.exports = UserRepository;
