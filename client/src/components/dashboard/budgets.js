import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../common";
import _ from "lodash";

import PieChart from "react-minimal-pie-chart";
import { Doughnut } from "react-chartjs-2";
import { create } from "domain";

const BudgetsDiv = styled(Widget)`
  text-align: left;
  justify-items: center;
  padding: 50px;
`;

const LeftRighDiv = styled.div`
  display: flex;
`;
const Legend = styled.div`
  text-align: right;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledPChart = styled(PieChart)`
  height: 300px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const createData = budgetData => {
  return {
    labels: budgetData.map((b, i) => b.name),
    datasets: [
      {
        data: budgetData.map((b, i) => b.cap),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
};

export const Budgets = ({ budgets, paychecks }) => {
  const [loading] = useState(!budgets);

  if (loading) return <div></div>;
  return (
    <BudgetsDiv>
      <h3>Budgets</h3>
      <LeftRighDiv>
        <Doughnut
          options={{
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "rgb(255, 99, 132)"
              }
            },
            cutoutPercentage: 80
          }}
          borderWidth={1}
          data={createData(budgets)}
        />
      </LeftRighDiv>
    </BudgetsDiv>
  );
};
