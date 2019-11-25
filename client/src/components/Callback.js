import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { GET_USER_BY_EMAIL, GET_USER_BY_AUTH0_ID } from "./queries";
import client from "../graphql";

import { Redirect } from "react-router-dom";

export const Callback = () => {
  // const [authUser, setAuthUser] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [first, setFirst] = useState(true);
  const { user } = useAuth0();

  useEffect(() => {
    if (user && user.sub && first) {
      getUser(user.sub);
    }
  }, [user]);

  const getUser = async sub => {
    const {
      data: { getUserByAuthId }
    } = await client.query({
      query: GET_USER_BY_AUTH0_ID,
      variables: {
        authId: sub
      }
    });
    if (!getUserByAuthId) setNewUser(true);
    setFirst(false);
  };

  if (newUser) return <Redirect to={"/intake"}> </Redirect>;

  if (!first) return <Redirect to={"/dashboard"}> </Redirect>;

  return <div></div>;
};
