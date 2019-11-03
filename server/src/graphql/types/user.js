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
    const { budgetType } = require("./");

    return {
      ...attributeFields(User),
      budgets: {
        type: new GraphQLList(budgetType),
        resolve: resolver(User.Budget)
      }
    };
  }
});
