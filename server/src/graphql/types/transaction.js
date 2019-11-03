const { GraphQLString, GraphQLObjectType } = require("graphql");
const { attributeFields } = require("graphql-sequelize");

const {
  models: { Transaction }
} = require("../../models/index");

module.exports = new GraphQLObjectType({
  name: "Transaction",
  descriptions: "A transaction",
  fields: {
    ...attributeFields(Transaction)
  }
});
