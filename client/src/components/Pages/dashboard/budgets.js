import React, { useState } from "react";
import styled from "styled-components";
import { Widget, WidgetTitle, WidgetContent } from "../../common";
import _ from "lodash";
import { budgetColors } from "../../common";
import { Doughnut } from "react-chartjs-2";

const createData = budgetData => {
  return {
    labels: budgetData.map((b, i) => b.name),
    datasets: [
      {
        data: budgetData.map((b, i) => b.cap),
        backgroundColor: budgetData.map((b, i) => budgetColors[i]),
        hoverBackgroundColor: budgetData.map((b, i) => budgetColors[i])
      }
    ]
  };
};

export const Budgets = ({ budgets, paychecks }) => {
  const [loading] = useState(!budgets);

  if (loading) return <div></div>;
  return (
    <Widget>
      <WidgetTitle>Budgets</WidgetTitle>
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
          <Doughnut
            options={{
              legend: {
                display: true,
                position: "right",
                labels: {
                  padding: 5,
                  fontColor: "black"
                }
              },
              cutoutPercentage: 80
            }}
            borderWidth={1}
            data={createData(budgets)}
          />
        </div>
      </WidgetContent>
    </Widget>
  );
};
