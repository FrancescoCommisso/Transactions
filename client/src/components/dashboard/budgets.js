import React, { useState } from "react";
import styled from "styled-components";
import { Widget, WidgetTitle, WidgetContent } from "../common";
import _ from "lodash";
import { budgetColors } from "../common";
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
      <WidgetContent style={{ alignContent: "center" }}>
        <Doughnut
          options={{
            layout: { margin: 100 },
            legend: {
              display: true,

              position: "top",
              margin: 10,

              labels: {
                padding: 20,
                fontColor: "black"
              }
            },
            cutoutPercentage: 80
          }}
          borderWidth={1}
          data={createData(budgets)}
        />
      </WidgetContent>
    </Widget>
  );
};
