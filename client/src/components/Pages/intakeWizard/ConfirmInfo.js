import React, { useState, useEffect } from "react";
import {
  Wrapper,
  SecondaryButton,
  CenterPage,
  CenterDiv,
  IntakeContent,
  IntakeWidget,
  WidgetTitle,
  P
} from "../../common";
import styled from "styled-components";
import _ from "lodash";
import client from "../../../graphql";
import { INIT_USER } from "../../queries";
import { useAuth0 } from "../../../react-auth0-spa";
import { Redirect } from "react-router-dom";

export const ConfirmInfo = ({
  previousStep,
  prevValues: { personalInfo, paymentInfo, budgets }
}) => {
  const fBudgets = _.isArray(budgets)
    ? budgets.filter(b => b.name && b.cap)
    : [];
  const fPaymentInfo = _.isArray(paymentInfo)
    ? paymentInfo.filter(p => p.name && p.amount)
    : [];

  const { user } = useAuth0();
  const [initializeUser, setInitializeUser] = useState(null);

  useEffect(() => {
    if (initializeUser === true) console.log("User created!");
    if (initializeUser === false) console.error("Error creating user!");
    return () => {};
  }, [initializeUser]);

  if (initializeUser) return <Redirect to={"/dashboard"}> </Redirect>;

  return (
    <CenterPage>
      <CenterDiv style={{ flexBasis: "100%" }}>
        <IntakeWidget>
          <WidgetTitle>Confirm your info</WidgetTitle>
          <IntakeContent
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <IntakeWidget style={{ flexBasis: "30%" }}>
              <WidgetTitle>Personal</WidgetTitle>
              <IntakeContent>
                <div>
                  <P>{personalInfo.firstName}</P>
                  <P>{personalInfo.lastName}</P>
                  <P>{personalInfo.dateOfBirth}</P>
                  <P>{personalInfo.gender}</P>
                  <P>{personalInfo.budgetPeriod}</P>
                </div>
              </IntakeContent>
            </IntakeWidget>
            <IntakeWidget style={{ flexBasis: "30%" }}>
              <WidgetTitle>Paychecks</WidgetTitle>
              <IntakeContent>
                <div>
                  {fPaymentInfo.map((p, i) => (
                    <div key={i}>
                      <p>{`${p.name} - $${p.amount}`}</p>
                    </div>
                  ))}
                </div>
              </IntakeContent>
            </IntakeWidget>
            <IntakeWidget style={{ flexBasis: "30%" }}>
              <WidgetTitle>Budgets</WidgetTitle>
              <IntakeContent>
                <div>
                  {fBudgets.map((p, i) => (
                    <div key={i}>
                      <p>{`${p.name} - $${p.cap}`}</p>
                    </div>
                  ))}
                </div>
              </IntakeContent>
            </IntakeWidget>
          </IntakeContent>
        </IntakeWidget>

        <div
          style={{
            display: "flex",
            flexBasis: "100%",
            justifyContent: "center"
          }}
        >
          <SecondaryButton onClick={() => previousStep(() => false)}>
            Back
          </SecondaryButton>

          <SecondaryButton
            onClick={async () => {
              try {
                const {
                  data: { initializeUser }
                } = await client.mutate({
                  mutation: INIT_USER,
                  variables: {
                    ...personalInfo,
                    paychecks: fPaymentInfo,
                    budgets: fBudgets,
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
      </CenterDiv>
    </CenterPage>
  );
};
