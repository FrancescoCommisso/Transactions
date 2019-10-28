const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const db = require("../models");
const queries = require("./queries")(db);
console.log("queries!!: ", queries);

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: () => queries
  })
  // mutation: new GraphQLObjectType({
  //   name: "RootMutation",
  //   fields: () => mutation
  // })
});

// const schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// const root = {
//   hello: () => "Hello World!"
// };

// module.exports = {
//   schema,
//   root
// };
