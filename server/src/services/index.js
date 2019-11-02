const UserService = require("./userService");
const UnitOfWorkService = require("./unitOfWorkService");
const BudgetService = require("./budgetService");

module.exports = data => {
  const userService = new UserService(data);
  const unitOfWorkService = new UnitOfWorkService(data);
  const budgetService = new BudgetService(data);
  return {
    userService,
    unitOfWorkService,
    budgetService
  };
};
