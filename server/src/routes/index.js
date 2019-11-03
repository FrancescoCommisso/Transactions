"use strict";
const { graphiqlExpress } = require("apollo-server-express");
const graphqlHandler = require("./graphql-handler");
const { API_VERSION = "v1", NODE_ENV } = process.env;

module.exports = (app, services) => {
  const graphql = graphqlHandler(services);
  app.use(`/${API_VERSION}/graphql`, graphql);
  if (NODE_ENV !== "production")
    app.get(
      "/graphiql",
      graphiqlExpress({
        endpointURL: `/${API_VERSION}/graphql`
      })
    );

  return app;
};
