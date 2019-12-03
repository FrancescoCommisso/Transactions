const Sequelize = require("sequelize");
const {
  DATABASE = "postgres",
  DATABASE_HOST = "localhost",
  DATABASE_USER = "admin",
  DATABASE_PASSWORD = "password",
  DATABASE_PORT = 5432
} = process.env;

console.log("data: ", {
  DATABASE,
  DATABASE_HOST,
  DATABASE_PASSWORD,
  DATABASE_USER
});

const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  dialect: "postgres"
});

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
