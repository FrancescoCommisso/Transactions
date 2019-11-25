const {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = require("graphql");
const { transactionType } = require("../types");
const { TransactionInput } = require("../inputs");
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
  createTransactions: {
    type: GraphQLBoolean,
    args: {
      transactions: { type: new GraphQLList(TransactionInput) },
      userId: { type: GraphQLString }
    },
    resolve: async (
      root,
      { transactions, userId },
      { services, services: { transactionService, unitOfWorkService } }
    ) => {
      let transaction;

      // const testTransaction = {
      //   vendor: "Bestbuy",
      //   amount: "200.00",
      //   date: "01/01/2020"
      // };

      // const testTransaction1 = {
      //   vendor: "Bestbuy",
      //   amount: "200.00",
      //   date: "01/01/2020"
      // };
      // transactions = [testTransaction, testTransaction1];
      // userId = "d3ac6d79-906d-4c05-9661-5e7bcd3117d2"; // remove me

      transactions = transactions.map(transaction => {
        return { ...transaction, userId };
      });

      try {
        transaction = await unitOfWorkService.transaction();
        await transactionService.newTransactions(transactions, transaction);
        await transaction.commit();
        return true;
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
