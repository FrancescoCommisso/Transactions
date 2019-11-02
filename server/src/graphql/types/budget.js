const { GraphQLString, GraphQLObjectType } = require("graphql");
const { attributeFields } = require("graphql-sequelize");
const {
  models: { Budget }
} = require("../../models/index");
const { resolver } = require("graphql-sequelize");

module.exports = new GraphQLObjectType({
  name: "Budget",
  descriptions: "A budget",
  fields: {
    ...attributeFields(Budget)
  }
});
