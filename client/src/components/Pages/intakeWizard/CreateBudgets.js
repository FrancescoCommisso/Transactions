import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hasLength from "lodash";
import {
  SecondaryButton,
  IntakeContent,
  IntakeWidget,
  CenterPage,
  CenterDiv,
  WidgetTitle
} from "../../common";
import { Input, Button } from "semantic-ui-react";

const ButtonWrapper = styled.span`
  margin: 20px;
`;

const BudgetLine = ({ handleChange, index, deleteBudget, nameVal, capVal }) => {
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
          style={{ marginBottom: "10px" }}
          placeholder="Budget name"
          onChange={handleChange}
          id={index}
          name="name"
          value={nameVal}
        ></Input>

        <Input
          placeholder="How much you want to spend on this budget"
          onChange={handleChange}
          id={index}
          value={capVal}
          name="cap"
        ></Input>
      </div>

      <Button
        onClick={() => {
          deleteBudget(index);
        }}
        style={{ padding: "20px" }}
      >
        Delete
      </Button>
    </div>
  );
};

export const CreateBudgets = ({ nextStep, previousStep, addBudgets }) => {
  const [budgets, setBudgets] = useState([{ name: "", cap: "" }]);

  useEffect(() => {
    const { name: lastName, cap: lastCap } = budgets[budgets.length - 1];

    if (lastName && lastCap) {
      newBudget();
    }
    return () => {};
  }, [budgets]);

  const handleChange = ({ target: { name, value, id } }) => {
    const newBudgets = budgets.map((p, i) => {
      if (i == id) return { ...p, [name]: value };
      return p;
    });
    setBudgets(newBudgets);
  };

  const newBudget = () => {
    if (budgets.length < 10)
      setBudgets(() => [...budgets, { name: "", cap: "" }]);
  };

  const deleteBudget = index => {
    if (budgets.length > 1) {
      const filteredB = budgets.filter((p, i) => {
        return index !== i;
      });

      setBudgets(filteredB);
    }
  };

  return (
    <CenterPage>
      <CenterDiv style={{ marginTop: "0px" }}>
        <IntakeWidget>
          <WidgetTitle>Add your budgets</WidgetTitle>
          <IntakeContent>
            <div style={{ flexBasis: "100%" }}>
              {budgets.map((p, i) => {
                return (
                  <BudgetLine
                    deleteBudget={deleteBudget}
                    handleChange={handleChange}
                    nameVal={p.name}
                    capVal={p.cap}
                    key={i}
                    index={i}
                  ></BudgetLine>
                );
              })}
            </div>

            <div
              style={{
                flexBasis: "100%",
                justifyContent: "center",
                display: "flex"
              }}
            >
              <ButtonWrapper>
                <SecondaryButton onClick={() => previousStep(() => false)}>
                  Back
                </SecondaryButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <SecondaryButton
                  onClick={() => {
                    addBudgets(budgets);
                    nextStep();
                  }}
                >
                  Next
                </SecondaryButton>
              </ButtonWrapper>
            </div>
          </IntakeContent>
        </IntakeWidget>
      </CenterDiv>
    </CenterPage>
  );
};
