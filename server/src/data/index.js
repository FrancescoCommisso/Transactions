const UserData = require("./userData");
const UnitOfWorkData = require("./unitOfWorkData");
const BudgetData = require("./budgetData");
const TransactionData = require("./transactionData");
const PaycheckData = require("./paycheckData");

module.exports = db => {
  const userData = new UserData(db);
  const unitOfWorkData = new UnitOfWorkData(db);
  const budgetData = new BudgetData(db);
  const paycheckData = new PaycheckData(db);
  const transactionData = new TransactionData(db);
  return {
    userData,
    unitOfWorkData,
    budgetData,
    transactionData,
    paycheckData
  };
};
