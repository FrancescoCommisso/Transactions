const UserService = require("./userService");
const UnitOfWorkService = require("./unitOfWorkService");
const BudgetService = require("./budgetService");
const TransactionService = require("./transactionService");
const PaycheckService = require("./paycheckService");

module.exports = data => {
  const userService = new UserService(data);
  const unitOfWorkService = new UnitOfWorkService(data);
  const budgetService = new BudgetService(data);
  const transactionService = new TransactionService(data);
  const paycheckService = new PaycheckService(data);
  return {
    userService,
    unitOfWorkService,
    budgetService,
    transactionService,
    paycheckService
  };
};
