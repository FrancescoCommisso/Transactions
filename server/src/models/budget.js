const budget = (sequelize, { UUID, STRING, UUIDV4 }) => {
  const Budget = sequelize.define("budget", {
    budgetId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    color: STRING,
    name: STRING,
    cap: STRING
  });
  Budget.associate = models => {
    Budget.UserId = Budget.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Budget.Transaction = Budget.hasMany(models.Transaction, {
      foreignKey: "budgetId"
    });
  };
  return Budget;
};
module.exports = budget;
