import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../common";
import _ from "lodash";

const PaychecksDiv = styled(Widget)`
  text-align: left;
  padding: 50px;
  flex-basis: 100%;
  background-color: red;
`;

const PaycheckLine = ({ paycheck }) => (
  <div>
    <p>{`${paycheck.name}: ${paycheck.amount}`}</p>
  </div>
);

export const Paychecks = ({ paychecks }) => {
  const [loading, setLoading] = useState(!paychecks);

  if (loading) return <div></div>;
  return (
    <PaychecksDiv>
      <h3>Paychecks</h3>
      {paychecks.map(b => (
        <PaycheckLine paycheck={b}></PaycheckLine>
      ))}
    </PaychecksDiv>
  );
};
