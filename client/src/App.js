import React, { Context, createContext, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { AddPaycheck } from "./components/AddPaycheck";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { Login } from "./components/Login";
import { Callback } from "./components/Callback";
import { IntakeWizard } from "./components/intakeWizard";
import { Dashboard } from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch style={{ textAlign: "center", backgroundColor: "blue" }}>
          <Route path="/" exact component={Login} />
          <PrivateRoute
            path="/add-paycheck"
            component={AddPaycheck}
          ></PrivateRoute>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/callback" component={Callback} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/intake" component={IntakeWizard}></Route>
          <PrivateRoute path="/add-paycheck" component={AddPaycheck} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
