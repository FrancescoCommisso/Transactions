const { GraphQLString, GraphQLObjectType, GraphQLList } = require("graphql");
const { attributeFields } = require("graphql-sequelize");
const { resolver } = require("graphql-sequelize");
const {
  models: { User }
} = require("../../models/index");

module.exports = new GraphQLObjectType({
  name: "User",
  descriptions: "A user",
  fields: () => {
    const { budgetType, paycheckType, transactionType } = require("./");

    return {
      ...attributeFields(User),
      paychecks: {
        type: new GraphQLList(paycheckType),
        resolve: resolver(User.Paycheck)
      },
      budgets: {
        type: new GraphQLList(budgetType),
        resolve: resolver(User.Budget)
      },
      transactions: {
        type: new GraphQLList(transactionType),
        resolve: resolver(User.Transaction)
      }
    };
  }
});
