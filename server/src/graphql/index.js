const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const db = require("../models");
const queries = require("./queries")(db);
const mutation = require("./mutations")(db);

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: () => queries
  }),

  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: () => mutation
  })
});
