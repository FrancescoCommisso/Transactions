const { GraphQLString } = require("graphql");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  user: {
    type: GraphQLString,
    args: {},
    resolve: async (args, { services }) => {
      console.log("args!!: ", args);
      console.log("services: ", services);
      return "YO u did it!";
    }
  }
});
