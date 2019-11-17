import React, { useRef, useState } from "react";

import { CreateAccount } from "./CreateAccount";
import StepWizard from "react-step-wizard";
import { CreatePaychecks } from "./CreatePaychecks";
import { CreateBudgets } from "./CreateBudgets";
import { ConfirmInfo } from "./ConfirmInfo";

export const IntakeWizard = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [budgets, setBudgets] = useState({});

  const handlePersonalInfo = personalInfo => {
    setPersonalInfo(personalInfo);
  };
  const handlePaymentInfo = paymentInfo => {
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
