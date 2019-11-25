import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SecondaryButton, Wrapper } from "../../common";
import { Title } from "./styles";
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
        marginBottom: "30px",
        display: "grid",
        gridColumnGap: "10px",
        gridTemplateColumns: "75% 25%"
      }}
    >
      <div>
        <Input
          style={{ width: "100%", paddingBottom: "10px" }}
          placeholder="Paycheck name"
          onChange={handleChange}
          id={index}
          name="name"
          value={nameVal}
        ></Input>

        <Input
          style={{ width: "100%" }}
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
    <Wrapper>
      <Title style={{ textAlign: "left" }}>
        <h1>Add your paychecks</h1>
        <h3>You can add up to 3</h3>
      </Title>
      <div>
        {paychecks.map((p, i) => (
          <BudgetLine
            deletePaycheck={deletePaycheck}
            handleChange={handleChange}
            nameVal={p.name}
            amountVal={p.value}
            key={i}
            index={i}
          ></BudgetLine>
        ))}
      </div>
      <div>
        <Button
          onClick={newPaycheck}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          Add another Paycheck
        </Button>
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
              addPaymentInfo(paychecks);
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
