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
      console.log("services:", services);
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
  }
});
