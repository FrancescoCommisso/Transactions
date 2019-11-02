class BudgetData {
  constructor(model) {
    this.model = model;
  }

  async newBudget({ budgetId, name, cap, userId }, transaction) {
    const newBudget = await this.model.Budget.build({
      budgetId,
      name,
      cap,
      userId
    });
    return newBudget.save({ transaction });
  }
}
module.exports = BudgetData;
