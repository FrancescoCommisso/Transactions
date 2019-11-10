import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom";
import logo from "../assets/logo2.png";

export const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <img src={logo}></img>
      </div>
      <div>
        {!isAuthenticated ? (
          <button onClick={loginWithRedirect}>Log in / Sign up</button>
        ) : (
          <button onClick={logout}>Log out</button>
        )}
      </div>
    </div>
  );
};
