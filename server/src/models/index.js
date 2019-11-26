const Sequelize = require("sequelize");
const x = {};
const {
  DATABASE = "postgres",
  DATABASE_HOST = "transactions-staging-db.crrzpkj28irq.us-east-2.rds.amazonaws.com",
  DATABASE_USER = "postgres",
  DATABASE_PASSWORD = "chowchiTS69",
  DATABASE_PORT = 5432
} = process.env;

console.log("Db", {
  DATABASE,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT
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
