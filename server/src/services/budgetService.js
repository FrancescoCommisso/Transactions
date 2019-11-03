class BudgetService {
  constructor({ budgetData, stateData }) {
    this.budgetData = budgetData;
    this.stateData = stateData;
  }

  async newBudget(args) {
    return this.budgetData.newBudget(args);
  }
  async updateBudgetByBudgetId(updateFields, budgetId) {
    return this.budgetData.updateBudgetByBudgetId(updateFields, budgetId);
  }
}

module.exports = BudgetService;
