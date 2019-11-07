import React, { Context, createContext, useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <div className="App">
//       {/* New - use BrowserRouter to provide access to /profile */}
//       <BrowserRouter>
//         <header>
//           <NavBar />
//         </header>
//         <Switch>
//           <Route path="/" exact />
//           <PrivateRoute path="/profile" component={Profile} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

import {
  UserContextProvider,
  UserContext
} from "./components/context/UserContext";
import { AddPaycheck } from "./components/AddPaycheck";
import { createAccount, CreateAccount } from "./components/createAccount";

const TestApp = userContext => (
  <div>
    <Title userContext={userContext}></Title>
    <CreateAccount></CreateAccount>

    <AddPaycheck userContext={userContext}></AddPaycheck>
  </div>
);

function App() {
  return (
    <UserContextProvider>
      <UserContext.Consumer>
        {userContext =>
          userContext.isAuthenticated ? (
            <TestApp></TestApp>
          ) : (
            <div>
              Not logged in
              <button onClick={userContext.handleLogin}>Login</button>
            </div>
          )
        }
      </UserContext.Consumer>
    </UserContextProvider>
  );
}

export default App;
