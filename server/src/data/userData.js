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

  async updateUserByUserId(updateFields, userId) {
    const res = await this.model.User.update(updateFields, {
      where: { userId },
      returning: true
    });

    return res[1][0];
  }

  async getAllUsers() {
    return this.model.User.findAll();
  }
}
module.exports = UserData;
