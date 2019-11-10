import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import client from "./graphql";
import "semantic-ui-css/semantic.min.css";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={"http://localhost:3000/callback"}
    onRedirectCallback={onRedirectCallback}
  >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </Auth0Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,

//   document.getElementById("root")
// );

serviceWorker.unregister();
