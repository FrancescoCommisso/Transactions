const { GraphQLString, GraphQLNonNull, GraphQLBoolean } = require("graphql");
const { paycheckType } = require("../types");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  createPaycheck: {
    type: paycheckType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      amount: { type: new GraphQLNonNull(GraphQLString) },
      userId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { name, amount, userId },
      { services, services: { paycheckService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const newPaycheck = await paycheckService.newPaycheck({
          name,
          amount,
          userId
        });
        await transaction.commit();
        return newPaycheck;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating paycheck: ", e);
        return null;
      }
    }
  },
  updatePaycheck: {
    type: paycheckType,
    args: {
      name: { type: GraphQLString },
      amount: { type: GraphQLString },
      paycheckId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { name, amount, paycheckId },
      { services: { paycheckService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const updatedPaycheck = await paycheckService.updatePaycheckByPaycheckId(
          {
            name,
            amount
          },
          paycheckId
        );
        await transaction.commit();
        return updatedPaycheck;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating paycheck: ", e);
        return null;
      }
    }
  }
});
