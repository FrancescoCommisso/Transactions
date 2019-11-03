class BudgetData {
  constructor(model) {
    this.model = model;
  }

  async newBudget({ name, cap, userId }) {
    return this.model.Budget.create({
      name,
      cap,
      userId
    });
  }

  async updateBudgetByBudgetId(updateFields, budgetId) {
    const res = await this.model.Budget.update(updateFields, {
      where: { budgetId },
      returning: true
    });

    return res[1][0];
  }
}
module.exports = BudgetData;
