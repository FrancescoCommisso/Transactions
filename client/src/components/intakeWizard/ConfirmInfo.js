import React, { useState, useEffect } from "react";
import { Wrapper, SecondaryButton } from "../common";
import styled from "styled-components";
import _ from "lodash";
import client from "../../graphql";
import { INIT_USER } from "../queries";
import { useAuth0 } from "../../react-auth0-spa";
import { Redirect } from "react-router-dom";

const ConfimTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ConfirmInfo = ({
  prevValues: { personalInfo, paymentInfo, budgets }
}) => {
  const { user } = useAuth0();
  const [initializeUser, setInitializeUser] = useState(null);

  useEffect(() => {
    console.log(initializeUser);
    if (initializeUser === true) console.log("User created!");
    if (initializeUser === false) console.log("Error creating user!");

    return () => {};
  }, [initializeUser]);

  if (initializeUser) return <Redirect to={"/dashboard"}> </Redirect>;

  return (
    <Wrapper style={{ textAlign: "left" }}>
      <ConfimTitle>
        <h1>Your Personal Information</h1>
      </ConfimTitle>
      <div>
        <h3>{personalInfo.firstName}</h3>
        <h3>{personalInfo.lastName}</h3>
        <h3>{personalInfo.dateOfBirth}</h3>
        <h3>{personalInfo.gender}</h3>
        <h3>{personalInfo.budgetPeriod}</h3>
      </div>
      <ConfimTitle>
        <h1>Your Paychecks </h1>
      </ConfimTitle>
      <div>
        {_.isArray(paymentInfo) &&
          paymentInfo.map((p, i) => (
            <div key={i}>
              <p>{`${p.name} - $${p.amount}`}</p>
            </div>
          ))}
      </div>
      <ConfimTitle>
        <h1>Your Budgets </h1>
      </ConfimTitle>
      <div>
        {_.isArray(budgets) &&
          budgets.map((p, i) => (
            <div key={i}>
              <p>{`${p.name} - $${p.cap}`}</p>
            </div>
          ))}{" "}
      </div>
      <div style={{ textAlign: "center" }}>
        <SecondaryButton
          onClick={async () => {
            try {
              const {
                data: { initializeUser }
              } = await client.mutate({
                mutation: INIT_USER,
                variables: {
                  ...personalInfo,
                  paychecks: paymentInfo,
                  budgets,
                  authId: user.sub,
                  email: user.email
                }
              });
              setInitializeUser(initializeUser);
            } catch (e) {
              console.error("Error creating account: ", e.message);
            }
          }}
        >
          Create Account
        </SecondaryButton>
      </div>
    </Wrapper>
  );
};
