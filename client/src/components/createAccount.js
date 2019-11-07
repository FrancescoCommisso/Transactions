import React, { Component } from "react";
import { Input, GridRow, Grid, Button } from "semantic-ui-react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";

const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email) {
      firstName
      lastName
      email
      userId
    }
  }
`;

export const CreateAccount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER_MUTATION);

  return (
    <div
      style={{
        maxWidth: "400px",
        padding: "10px",
        textAlign: "center"
      }}
    >
      <div>
        <Input
          style={{ margin: "5px" }}
          placeholder={"First name"}
          fluid
        ></Input>
        <Input
          style={{ margin: "5px" }}
          fluid
          placeholder={"Last name"}
        ></Input>
      </div>

      <div>
        <Input
          fluid
          style={{ margin: "5px" }}
          placeholder={"Date of birth"}
        ></Input>
        <Input fluid style={{ margin: "5px" }} placeholder={"Gender"}></Input>
      </div>

      <div>
        <Input
          style={{ margin: "5px" }}
          fluid
          placeholder={"Financial Institution"}
        ></Input>
      </div>

      <Button
        onClick={() => {
          createUser({
            variables: {
              firstName: "FrancescoCCC",
              lastName: "commissoo",
              email: "yoyoyo"
            }
          });
        }}
        style={{ margin: "auto" }}
      >
        Create Account
      </Button>
    </div>
  );
};
