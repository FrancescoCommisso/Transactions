const { GraphQLString, GraphQLObjectType } = require("graphql");
const { attributeFields } = require("graphql-sequelize");
const { User } = require("../../models");
const { resolver } = require("graphql-sequelize");

module.exports = new GraphQLObjectType({
  name: "User",
  descriptions: "A user",
  fields: {
    ...attributeFields(User)
  }
});
