class UserData {
  constructor(model) {
    this.model = model;
  }

  async newUser(
    { firstName, lastName, email, gender, dateOfBirth, budgetPeriod, authId },
    transaction
  ) {
    return this.model.User.create(
      {
        firstName,
        lastName,
        email,
        authId,
        dateOfBirth,
        budgetPeriod,
        gender
      },
      { transaction }
    );
  }

  async updateUserByUserId(updateFields, authId, transaction) {
    const res = await this.model.User.update(
      updateFields,
      {
        where: { authId },
        returning: true
      },
      { transaction }
    );

    return res[1][0];
  }

  async getAllUsers() {
    return this.model.User.findAll();
  }
  async getUserByEmail(email) {
    return this.model.User.findOne({ where: { email } });
  }
  async getUserByAuthId(authId) {
    return this.model.User.findOne({ where: { authId } });
  }
  async getUserByUserId(userId) {
    return this.model.User.findOne({ where: { userId } });
  }
}
module.exports = UserData;
