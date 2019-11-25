import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom";
import { Loader } from "./common/loader";

export const Logout = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  if (!loading && !isAuthenticated) return <Redirect to={"/home"}></Redirect>;

  return <Loader message={"Logging out"}></Loader>;
};
