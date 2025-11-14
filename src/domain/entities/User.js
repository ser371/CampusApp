class User {
    constructor({ UserId, Username, PasswordHash, Email, CreatedAt, LastLoginTime }) {
        this.UserId = UserId;
        this.Username = Username;
        this.PasswordHash = PasswordHash;
        this.Email = Email;
        this.CreatedAt = CreatedAt || new Date(); // Use provided value or default to current time
        this.LastLoginTime = LastLoginTime || null; // Use provided value or default to null
    }
}

module.exports = User;