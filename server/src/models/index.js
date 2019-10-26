const Sequelize = require("sequelize");
console.log("sequelize: ", {
  db: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  pw: process.env.DATABASE_PASSWORD
});
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

console.log("models", models);

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { models, sequelize };
