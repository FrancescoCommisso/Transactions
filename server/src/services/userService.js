class UserService {
  constructor({ userData, stateData }) {
    this.userData = userData;
    this.stateData = stateData;
  }

  async newUser(args) {
    return this.userData.newUser(args);
  }

  async getAllUsers() {
    return this.userData.getAllUsers();
  }

  async updateUser(updateFields, userId) {
    return this.userData.updateUserByUserId(updateFields, userId);
  }
}

module.exports = UserService;
