class BudgetData {
  constructor(model) {
    this.model = model;
  }

  async newBudget({ name, cap, userId }, transaction) {
    return this.model.Budget.create(
      {
        name,
        cap,
        userId
      },
      { transaction }
    );
  }

  async updateBudgetByBudgetId(updateFields, budgetId, transaction) {
    const res = await this.model.Budget.update(
      updateFields,
      {
        where: { budgetId },
        returning: true
      },
      { transaction }
    );

    return res[1][0];
  }
}
module.exports = BudgetData;
