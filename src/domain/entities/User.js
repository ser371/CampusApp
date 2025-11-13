class User{
	constructor({UserId, Username, PasswordHash, Email, CreatedAt, LastLoginTime}){
		this.UserId = UserId;
		this.Username = Username;
		this.PasswordHash = PasswordHash;
		this.Email = Email;
		this.CreatedAt = new Date();
		this.LastLoginTime = null;

}
