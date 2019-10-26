const budget = (sequelize, { UUID, STRING, UUIDV4 }) => {
  const Budget = sequelize.define("budget", {
    budgetId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    name: STRING,
    cap: STRING
  });
  Budget.associate = models => {
    Budget.UserId = Budget.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return Budget;
};
module.exports = budget;