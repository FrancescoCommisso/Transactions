import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SecondaryButton,
  CenterPage,
  CenterDiv,
  IntakeWidget,
  WidgetTitle,
  IntakeContent
} from "../../common";
import { Input, Button } from "semantic-ui-react";

const ButtonWrapper = styled.span`
  margin: 20px;
`;

const BudgetLine = ({
  handleChange,
  index,
  deletePaycheck,
  nameVal,
  amountVal
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexBasis: "100%",
        marginBottom: "30px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "80%",
          marginRight: "5px"
        }}
      >
        <Input
          style={{ paddingBottom: "10px" }}
          placeholder="Paycheck name"
          onChange={handleChange}
          id={index}
          name="name"
          value={nameVal}
        ></Input>

        <Input
          placeholder="Amount recevied every paycheck"
          type="number"
          onChange={handleChange}
          id={index}
          value={amountVal}
          name="amount"
        ></Input>
      </div>
      <Button
        onClick={() => {
          deletePaycheck(index);
        }}
        style={{ padding: "20px" }}
      >
        Delete
      </Button>
    </div>
  );
};

export const CreatePaychecks = ({ nextStep, previousStep, addPaymentInfo }) => {
  const [paychecks, setPaychecks] = useState([{ name: "", amount: "" }]);

  const handleChange = ({ target: { name, value, id } }) => {
    const newPaychecks = paychecks.map((p, i) => {
      if (i == id) return { ...p, [name]: value };
      return p;
    });
    setPaychecks(newPaychecks);
  };

  useEffect(() => {
    const { name: lastName, amount: lastAmount } = paychecks[
      paychecks.length - 1
    ];

    if (lastName && lastAmount) {
      newPaycheck();
    }
    return () => {};
  }, [paychecks]);

  const newPaycheck = () => {
    if (paychecks.length < 3)
      setPaychecks(() => [...paychecks, { name: "", amount: "" }]);
  };

  const deletePaycheck = index => {
    if (paychecks.length > 1) {
      setPaychecks(
        paychecks.filter((p, i) => {
          return index !== i;
        })
      );
    }
  };

  return (
    <CenterPage>
      <CenterDiv style={{ marginTop: "0px" }}>
        <IntakeWidget>
          <WidgetTitle>Your Paychecks</WidgetTitle>
          <IntakeContent>
            <div style={{ flexBasis: "100%" }}>
              {paychecks.map((p, i) => (
                <BudgetLine
                  deletePaycheck={deletePaycheck}
                  handleChange={handleChange}
                  nameVal={p.name}
                  amountVal={p.amount}
                  key={i}
                  index={i}
                ></BudgetLine>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexBasis: "100%",
                justifyContent: "center",
                marginTop: "10px"
              }}
            >
              <SecondaryButton onClick={() => previousStep(() => false)}>
                Back
              </SecondaryButton>

              <SecondaryButton
                onClick={() => {
                  addPaymentInfo(paychecks);
                  nextStep();
                }}
              >
                Next
              </SecondaryButton>
            </div>
          </IntakeContent>
        </IntakeWidget>
      </CenterDiv>
    </CenterPage>
  );
};
