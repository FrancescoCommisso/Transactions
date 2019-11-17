import React, { useRef, useState } from "react";

import { CreateAccount } from "./CreateAccount";
import { Button } from "semantic-ui-react";
import StepWizard from "react-step-wizard";
import { AddPaycheck } from "../AddPaycheck";
import { CreatePaychecks } from "./CreatePaychecks";
import { CreateBudgets } from "./CreateBudgets";
import { ConfirmInfo } from "./ConfirmInfo";

export const IntakeWizard = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [budgets, setBudgets] = useState({});

  const handlePersonalInfo = personalInfo => {
    console.log("personalInfo: ", personalInfo);
    setPersonalInfo(personalInfo);
  };
  const handlePaymentInfo = paymentInfo => {
    console.log("paymentInfo: ", paymentInfo);
    setPaymentInfo(paymentInfo);
  };
  const handleBudgets = budgets => {
    setBudgets(budgets);
  };

  return (
    <StepWizard>
      <CreateAccount addPersonalInfo={handlePersonalInfo}></CreateAccount>
      <CreatePaychecks addPaymentInfo={handlePaymentInfo}></CreatePaychecks>
      <CreateBudgets addBudgets={handleBudgets}></CreateBudgets>
      <ConfirmInfo
        prevValues={{ personalInfo, paymentInfo, budgets }}
      ></ConfirmInfo>
    </StepWizard>
  );
};
