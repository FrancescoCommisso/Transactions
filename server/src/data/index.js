const UserData = require("./userData");
const UnitOfWorkData = require("./unitOfWorkData");
const BudgetData = require("./budgetData");
module.exports = db => {
  const userData = new UserData(db);
  const unitOfWorkData = new UnitOfWorkData(db);
  const budgetData = new BudgetData(db);
  return {
    userData,
    unitOfWorkData,
    budgetData
  };
};
