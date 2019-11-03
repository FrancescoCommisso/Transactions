import React, { useEffect } from "react";
import client from "../graphql";
import gql from "graphql-tag";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { create } from "domain";

const TEST_MUTATION = gql`
  mutation createUser {
    createUser(firstName: "Francesco", lastName: "Commisso", email: "piioo") {
      firstName
      lastName
      email
      userId
    }
  }
`;

const TEST_MUTATION_2 = gql`
  query getAllUsers {
    users {
      userId
      firstName
    }
  }
`;

export const Title = ({ title, context }) => {
  const [createUser, { data }] = useMutation(TEST_MUTATION);

  // useEffect(() => {
  //   createUser();
  // }, []);

  return (
    <div>
      {console.log("CONTEXT: ", context)}
      <h1>Transactions {title}</h1>
      <p>Watch your spending</p>

      <div>
        <p>{data && data.createUser.firstName}</p>
        <p>{data && data.createUser.lastName}</p>
        <p>{data && data.createUser.email}</p>
        <p>{data && data.createUser.userId}</p>
      </div>

      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          createUser();
        }}
      >
        Get data
      </button>
    </div>
  );
};
