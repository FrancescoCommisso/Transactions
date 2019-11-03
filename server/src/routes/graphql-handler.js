const { graphqlExpress } = require("apollo-server-express");
const schema = require("../graphql");

module.exports = services => (req, res, next) => {
  return graphqlExpress({
    schema,
    context: { services }
  })(req, res, next);
};
