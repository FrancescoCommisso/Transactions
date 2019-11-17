class UserService {
  constructor({ userData, stateData }) {
    this.userData = userData;
    this.stateData = stateData;
  }

  async newUser(args, transaction) {
    return this.userData.newUser(args, transaction);
  }

  async getAllUsers() {
    return this.userData.getAllUsers();
  }
  async getUserByEmail(email) {
    return this.userData.getUserByEmail(email);
  }

  async getUserByAuthId(authId) {
    return this.userData.getUserByAuthId(authId);
  }

  async updateUser(updateFields, authId, transaction) {
    return this.userData.updateUserByauthId(updateFields, authId, transaction);
  }
}

module.exports = UserService;
