import React, { Component } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom";
import logo from "../assets/logo.svg";
import { PrimaryButton } from "./common";
import styled from "styled-components";
import smallLogo from "../assets/small-logo.svg";

export const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div>
        <img style={{ margin: "20px" }} src={logo}></img>
      </div>
      <div>We're not saying you're financially irresponsible... but ...</div>
    </div>
  );
};
