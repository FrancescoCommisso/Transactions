import React, { useState } from "react";
import styled from "styled-components";
import { Widget, SecondaryButton } from "../common";
import _ from "lodash";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

const BudgetPeriodsDiv = styled(Widget)`
  text-align: left;
  padding: 50px;
  flex-basis: 50%;
`;

const BudgetLine = ({ budget }) => (
  <div>
    <p>{`${budget.name}: ${budget.cap}`}</p>
  </div>
);

const createData = budgets => {
  return {
    labels: budgets.map(b => b.name),
    datasets: [
      {
        label: "Actual Spending",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: budgets.map(b => Number.parseInt(b.cap) * 0.3)
      },
      {
        label: "Goal",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: budgets.map(b => Number.parseInt(b.cap))
      }
    ]
  };
};

export const BudgetPeriods = ({ budgets, transactions }) => {
  const [loading, setLoading] = useState(!(budgets && transactions));

  if (loading) return <div></div>;
  return (
    <BudgetPeriodsDiv>
      <h3>Budget Periods</h3>

      <Bar
        style={{ margin: "0px", padding: "0px" }}
        data={createData(budgets)}
        width={3}
        height={1}
        options={{
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                ticks: { display: false },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
              }
            ],
            yAxes: [
              {
                ticks: { display: false },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
              }
            ]
          }
        }}
      />
    </BudgetPeriodsDiv>
  );
};
