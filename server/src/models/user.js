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
    User.Transaction = User.hasMany(models.Transaction, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    User.Budget = User.hasMany(models.Budget, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    User.Paycheck = User.hasMany(models.Paycheck, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
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
