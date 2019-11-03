const { GraphQLString, GraphQLNonNull, GraphQLBoolean } = require("graphql");
const { transactionType } = require("../types");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  createTransaction: {
    type: transactionType,
    args: {
      vendor: { type: new GraphQLNonNull(GraphQLString) },
      date: { type: GraphQLString },
      amount: { type: new GraphQLNonNull(GraphQLString) },
      userId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { vendor, date, amount, userId },
      { services, services: { transactionService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const newTransaction = await transactionService.newTransaction({
          vendor,
          amount,
          userId,
          date
        });
        await transaction.commit();
        return newTransaction;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating transaction: ", e);
        return null;
      }
    }
  },
  updateTransaction: {
    type: transactionType,
    args: {
      name: { type: GraphQLString },
      cap: { type: GraphQLString },
      date: { type: GraphQLString },
      budgetId: { type: GraphQLString },
      transactionId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { name, cap, date, budgetId, transactionId },
      { services: { transactionService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const updatedTransaction = await transactionService.updateTransactionByTransactionId(
          {
            name,
            date,
            budgetId,
            cap
          },
          transactionId
        );
        await transaction.commit();
        return updatedTransaction;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating transaction: ", e);
        return null;
      }
    }
  }
});
