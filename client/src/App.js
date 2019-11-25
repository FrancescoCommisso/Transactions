import React, { Context, createContext, useState } from "react";

import NavBar from "./components/Nav/NavBar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/Nav/PrivateRoute";
import { Login } from "./components/Login";
import { Callback } from "./components/Callback";
import { IntakeWizard } from "./components/Pages/intakeWizard";
import { Dashboard } from "./components/Pages/dashboard";
import { AddTransactions } from "./components/Pages/addTransactions.js";
import { Home } from "./components/home";
import { Logout } from "./components/logout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GoogleFontLoader
        fonts={[
          {
            font: "Alata",
            weights: [400, "400i"]
          }
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/callback" component={Callback} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/intake" component={IntakeWizard}></Route>
          <Route path="/add-transactions" component={AddTransactions}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
