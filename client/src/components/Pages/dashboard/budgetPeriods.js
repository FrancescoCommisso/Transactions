import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Widget,
  SecondaryButton,
  WidgetTitle,
  WidgetContent
} from "../../common";
import _ from "lodash";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { budgetColors } from "../../common";
const BudgetPeriodsDiv = styled(Widget)``;

const createData = budgets => {
  return {
    labels: budgets.map(b => b.name),
    datasets: [
      {
        label: "Actual Spending",
        backgroundColor: budgets.map((b, i) => budgetColors[i]),
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: budgets.map((b, i) => budgetColors[i]),
        hoverBorderColor: "rgba(255,99,132,1)",
        data: budgets.map(b => Number.parseInt(b.cap) * 0.3)
      },
      {
        label: "Goal",
        backgroundColor: budgets.map((b, i) =>
          budgetColors[i].replace("1)", "0.2)")
        ),
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: budgets.map((b, i) =>
          budgetColors[i].replace("1)", "0.2)")
        ),
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
    <Widget>
      <WidgetTitle>Budget Periods</WidgetTitle>

      <WidgetContent
        style={{
          display: "flex",
          height: "100%"
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "100%"
          }}
        >
          <Bar
            data={createData(budgets)}
            width={3}
            height={2}
            options={{
              legend: {
                display: false,
                position: "top",
                padding: 100,
                labels: {
                  fontColor: "black"
                }
              },
              cutoutPercentage: 80,
              maintainAspectRatio: true,
              scales: {
                xAxes: [
                  {
                    stacked: true,
                    ticks: { display: false },
                    gridLines: {
                      display: false,
                      drawBorder: false
                    }
                  }
                ],
                yAxes: [
                  {
                    stacked: true,
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
        </div>
      </WidgetContent>
    </Widget>
  );
};
