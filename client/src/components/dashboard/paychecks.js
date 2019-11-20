import React, { useState } from "react";
import styled from "styled-components";
import { Widget, WidgetTitle } from "../common";
import _ from "lodash";

const PaychecksDiv = styled(Widget)``;

const PaycheckLine = ({ paycheck }) => (
  <div>
    <p>{`${paycheck.name} - $${paycheck.amount} `}</p>
  </div>
);

export const Paychecks = ({ paychecks }) => {
  const [loading, setLoading] = useState(!paychecks);

  if (loading) return <div></div>;
  return (
    <PaychecksDiv>
      <WidgetTitle>Paychecks</WidgetTitle>
      {paychecks.map(b => (
        <PaycheckLine paycheck={b}></PaycheckLine>
      ))}
    </PaychecksDiv>
  );
};
