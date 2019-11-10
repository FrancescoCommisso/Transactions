import React, { Component, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { GET_USER_BY_EMAIL } from "./queries";
import { client } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { load } from "protobufjs";

export const Callback = () => {
  const [authUser, setAuthUser] = useState(null);
  const [appUser, setAppUser] = useState(null);
  const { loading, data } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email: "francesco@gmail.com"
    }
  });

  const { user } = useAuth0();

  useEffect(
    () => {
      if (user) {
        setAuthUser(user);
      }
    },
    user,
    loading
  );

  console.log(user);
  return <div>{JSON.stringify(authUser) + JSON.stringify(data)}</div>;
};
