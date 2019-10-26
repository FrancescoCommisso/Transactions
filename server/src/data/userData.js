class UserData {
  constructor(model) {
    this.model = model;
  }

  async newUser({ firstName, lastName, email }, transaction) {
    const newUser = await this.model.User.build({
      firstName,
      lastName,
      email
    });
    return newUser.save({ transaction });
  }
}
module.exports = UserData;
