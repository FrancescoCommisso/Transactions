const { GraphQLString, GraphQLList, GraphQLObjectType } = require("graphql");
const { attributeFields } = require("graphql-sequelize");
const { resolver } = require("graphql-sequelize");

const {
  models: { Budget }
} = require("../../models/index");

module.exports = new GraphQLObjectType({
  name: "Budget",
  descriptions: "A budget",
  fields: () => {
    const { transactionType } = require("./");

    return {
      ...attributeFields(Budget),
      transactions: {
        type: new GraphQLList(transactionType),
        resolve: resolver(Budget.Transaction)
      }
    };
  }
});
