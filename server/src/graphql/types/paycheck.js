const { GraphQLString, GraphQLObjectType } = require("graphql");
const { attributeFields } = require("graphql-sequelize");

const {
  models: { Paycheck }
} = require("../../models/index");

module.exports = new GraphQLObjectType({
  name: "Paycheck",
  descriptions: "A paycheck",
  fields: {
    ...attributeFields(Paycheck)
  }
});
