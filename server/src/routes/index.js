"use strict";
const { graphiqlExpress } = require("apollo-server-express");
const graphqlHandler = require("./graphql-handler");
const { NODE_ENV } = process.env;

module.exports = (app, services) => {
  const graphql = graphqlHandler(services);
  app.use(`/graphql`, graphql);
  if (NODE_ENV !== "production")
    app.get(
      "/graphiql",
      graphiqlExpress({
        endpointURL: `/graphql`
      })
    );

  return app;
};
