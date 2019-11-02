const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres"
  }
);
const models = {
  Transaction: sequelize.import("./transaction"),
  User: sequelize.import("./user"),
  Budget: sequelize.import("./budget"),
  Paycheck: sequelize.import("./paycheck")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});
models.sequelize = sequelize;

module.exports = { models, sequelize };
