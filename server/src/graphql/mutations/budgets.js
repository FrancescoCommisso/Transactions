const { GraphQLString, GraphQLNonNull, GraphQLBoolean } = require("graphql");
const { budgetType } = require("../types");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  createBudget: {
    type: budgetType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      cap: { type: GraphQLString },
      userId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { name, cap, userId },
      { services, services: { budgetService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const newBudget = await budgetService.newBudget({ name, cap, userId });
        await transaction.commit();
        return newBudget;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating budget: ", e);
        return null;
      }
    }
  },
  updateBudget: {
    type: budgetType,
    args: {
      name: { type: GraphQLString },
      cap: { type: GraphQLString },
      budgetId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { name, cap, budgetId },
      { services: { budgetService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const updatedBudget = await budgetService.updateBudgetByBudgetId(
          {
            name,
            cap
          },
          budgetId
        );
        await transaction.commit();
        return updatedBudget;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating budget: ", e);
        return null;
      }
    }
  }
});
