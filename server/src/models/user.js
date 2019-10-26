const user = (sequelize, { UUID, STRING, UUIDV4 }) => {
  const User = sequelize.define("user", {
    userId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    firstName: {
      type: STRING
    },
    lastName: {
      type: STRING
    },
    email: {
      type: STRING
    },
    budgetPeriod: {
      type: STRING
    }
  });
  User.associate = models => {
    // User.hasMany(models.Transaction, { onDelete: "CASCADE" });
    // User.hasMany(models.Budget, { onDelete: "CASCADE" });
  };
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login }
    });
    if (!user) {
      user = await User.findOne({
        where: { email: login }
      });
    }
    return user;
  };
  return User;
};
module.exports = user;
