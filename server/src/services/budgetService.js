class BudgetService {
  constructor({ budgetData, stateData }) {
    this.budgetData = budgetData;
    this.stateData = stateData;
  }

  async newBudget(args, transaction) {
    return this.budgetData.newBudget(args, transaction);
  }
  async updateBudgetByBudgetId(updateFields, budgetId, transaction) {
    return this.budgetData.updateBudgetByBudgetId(updateFields, budgetId, {
      transaction
    });
  }
}

module.exports = BudgetService;
