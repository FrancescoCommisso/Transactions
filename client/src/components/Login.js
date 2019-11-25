import React, { Component, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom";
import logo from "../assets/logo.svg";
import { PrimaryButton } from "./common";
import styled from "styled-components";
import smallLogo from "../assets/small-logo.svg";
import { Loader } from "./common/loader";

export const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  useEffect(() => {
    const timer = setTimeout(() => {
      loginWithRedirect();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  if (isAuthenticated) return <Redirect to={"/dashboard"}></Redirect>;

  return <Loader message={"Logging in"}></Loader>;
};
