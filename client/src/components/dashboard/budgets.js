import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../common";
import _ from "lodash";

const BudgetsDiv = styled(Widget)`
  text-align: left;
  padding: 50px;
`;

const BudgetLine = ({ budget }) => (
  <div>
    <p>{`${budget.name}: ${budget.cap}`}</p>
  </div>
);

export const Budgets = ({ budgets }) => {
  const [loading, setLoading] = useState(!budgets);

  if (loading) return <div></div>;
  return (
    <BudgetsDiv>
      <h3>Budgets</h3>
      {budgets.map(b => (
        <BudgetLine budget={b}></BudgetLine>
      ))}
    </BudgetsDiv>
  );
};
