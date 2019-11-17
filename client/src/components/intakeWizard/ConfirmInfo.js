import React from "react";
import { Wrapper, SecondaryButton } from "../common";
import styled from "styled-components";
import _ from "lodash";
import client from "../../graphql";
import { INIT_USER } from "../queries";
import { useAuth0 } from "../../react-auth0-spa";

const ConfimTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ConfirmInfo = ({
  prevValues: { personalInfo, paymentInfo, budgets }
}) => {
  const { user } = useAuth0();
  console.log("USER: ", user);

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
            <div>
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
            <div>
              <p>{`${p.name} - $${p.cap}`}</p>
            </div>
          ))}{" "}
      </div>
      <div style={{ textAlign: "center" }}>
        <SecondaryButton
          onClick={async () => {
            console.log("sending: ", {
              ...personalInfo,
              paychecks: paymentInfo,
              budgets,
              authId: user.sub,
              email: user.email
            });
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
          }}
        >
          Create Account
        </SecondaryButton>
      </div>
    </Wrapper>
  );
};
