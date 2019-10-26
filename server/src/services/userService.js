class UserService {
  constructor({ userData, stateData }) {
    this.userData = userData;
    this.stateData = stateData;
  }

  async newUser(args, transaction) {
    return this.userData.newUser(args, transaction);
  }
}

module.exports = UserService;
