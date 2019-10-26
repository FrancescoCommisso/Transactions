const paycheck = (sequelize, { UUID, STRING, UUIDV4 }) => {
  const Paycheck = sequelize.define("paycheck", {
    paycheckId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    amount: STRING,
    name: STRING
  });
  Paycheck.associate = models => {
    Paycheck.UserId = Paycheck.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return Paycheck;
};
module.exports = paycheck;
