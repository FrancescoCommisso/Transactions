import React, { useState, useRef, useEffect } from "react";
import { Input, GridRow, Grid, Button } from "semantic-ui-react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { PrimaryButton, SecondaryButton, Wrapper } from "../common";
import { CREATE_USER_MUTATION } from "../queries";
import { useAuth0 } from "../../react-auth0-spa";
import { Title } from "./styles";

const StyledInput = styled(Input)`
  padding-top: 15px;
`;

export const CreateAccount = ({ nextStep, addPersonalInfo }) => {
  const [values, setValues] = useState({});

  const handleChange = async ({ target: { name, value } }) => {
    await setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper>
      <Title>
        <h1>Add Your Personal Information</h1>
        <h3>Tell us a lil bout yoself</h3>
      </Title>

      <div>
        <StyledInput
          name="firstName"
          placeholder={"First name"}
          fluid
          onChange={handleChange}
        ></StyledInput>
        <StyledInput
          onChange={handleChange}
          name="lastName"
          fluid
          placeholder={"Last name"}
        ></StyledInput>
      </div>

      <div>
        <StyledInput
          onChange={handleChange}
          name="dateOfBirth"
          fluid
          placeholder={"Date of birth"}
        ></StyledInput>
        <StyledInput
          onChange={handleChange}
          name="gender"
          fluid
          placeholder={"Gender"}
        ></StyledInput>
      </div>

      <div>
        <StyledInput
          onChange={handleChange}
          x
          name="budgetPeriod"
          fluid
          placeholder={"Budget Period ( in weeks )"}
        ></StyledInput>
      </div>

      <div style={{ margin: "20px" }}>
        <SecondaryButton
          onClick={() => {
            addPersonalInfo(values);
            nextStep();
          }}
          style={{ margin: "auto" }}
        >
          Next
        </SecondaryButton>
      </div>
    </Wrapper>
  );
};
