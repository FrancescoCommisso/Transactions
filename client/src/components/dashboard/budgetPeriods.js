import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../common";
import _ from "lodash";
import { Button } from "semantic-ui-react";

const BudgetPeriodsDiv = styled(Widget)`
  text-align: left;
  padding: 50px;
  margin: auto;
  flex-basis: 100%;
  background-color: blue;
`;

const BudgetLine = ({ budget }) => (
  <div>
    <p>{`${budget.name}: ${budget.cap}`}</p>
  </div>
);

export const BudgetPeriods = ({ budgets, transactions }) => {
  const [loading, setLoading] = useState(!(budgets && transactions));

  if (loading) return <div></div>;
  return (
    <BudgetPeriodsDiv>
      <h3>Budget Periods</h3>
      <div style={{ textAlign: "center" }}>
        <h5>October 1 - 15th 2019</h5>
        {budgets.map(b => (
          <BudgetLine budget={b}></BudgetLine>
        ))}
        <Button style={{ marginTop: "15px" }}>Add Transactions</Button>
      </div>
    </BudgetPeriodsDiv>
  );
};
