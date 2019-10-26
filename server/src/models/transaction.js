const transaction = (sequelize, { UUID, UUIDV4, STRING }) => {
  const Transaction = sequelize.define("transaction", {
    transactionId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    vendor: STRING,
    amount: STRING,
    group: STRING
  });
  Transaction.associate = models => {
    Transaction.UserId = Transaction.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Transaction.BudgetId = Transaction.belongsTo(models.Budget, {
      foreignKey: "budgetId"
    });
  };
  return Transaction;
};
module.exports = transaction;
