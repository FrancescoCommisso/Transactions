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

  async updateUser(updateFields, userId, transaction) {
    return this.userData.updateUserByUserId(updateFields, userId, transaction);
  }
}

module.exports = UserService;
