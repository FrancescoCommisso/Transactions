import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SecondaryButton, Wrapper } from "../../common";
import { Title } from "./styles";
import { Input, Button } from "semantic-ui-react";
import InputMask from "react-input-mask";

const MoneyInput = props => {
  return <InputMask {...props} mask="\$ 999\.00" maskChar="" />;
};

const ButtonWrapper = styled.span`
  margin: 20px;
`;

const BudgetLine = ({ handleChange, index, deleteBudget, nameVal, capVal }) => {
  return (
    <div
      style={{
        marginBottom: "30px",
        display: "grid",
        gridColumnGap: "10px",
        gridTemplateColumns: "40% 40% 20%"
      }}
    >
      <Input
        style={{ width: "100%" }}
        placeholder="Budget name"
        onChange={handleChange}
        id={index}
        name="name"
        value={nameVal}
      ></Input>

      <Input
        style={{ width: "100%" }}
        placeholder="How much you want to spend on this budget"
        onChange={handleChange}
        id={index}
        value={capVal}
        name="cap"
      ></Input>
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
      setBudgets(
        budgets.filter((p, i) => {
          return index !== i;
        })
      );
    }
  };

  return (
    <Wrapper>
      <Title style={{ textAlign: "left" }}>
        <h1>Create Your Budgets</h1>
        <h3>No pressure. These can be editted later on.</h3>
      </Title>
      <div>
        {budgets.map((p, i) => (
          <BudgetLine
            deleteBudget={deleteBudget}
            handleChange={handleChange}
            nameVal={p.name}
            capVal={p.value}
            key={i}
            index={i}
          ></BudgetLine>
        ))}
      </div>
      <div>
        {budgets.length < 10 && (
          <Button
            onClick={newBudget}
            style={{ width: "100%", marginBottom: "10px" }}
          >
            Add another Budget
          </Button>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
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
    </Wrapper>
  );
};
