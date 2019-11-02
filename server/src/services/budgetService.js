class BudgetService {
  constructor({ budgetData, stateData }) {
    this.budgetData = budgetData;
    this.stateData = stateData;
  }

  async newBudget(args) {
    return this.budgetData.newBudget(args);
  }
}

module.exports = BudgetService;
