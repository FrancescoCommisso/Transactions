import React, { useState } from "react";
import styled from "styled-components";
import { Widget, WidgetTitle, WidgetContent } from "../../common";
import _ from "lodash";
import { Dimmer, Segment, Label } from "semantic-ui-react";

const StyledLabel = styled(Label)`
  background-color: white !important;
  font-size: 20px !important;
`;

const PaycheckLine = ({ paycheck }) => {
  const [hide, setHide] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline"
      }}
    >
      <div>
        <p>{`${paycheck.name}:   `}</p>
      </div>

      <Dimmer.Dimmable
        onClick={() => setHide(!hide)}
        style={{ marginLeft: "20px", borderRadius: "5px" }}
        blurring
        inverted
        large
        as={StyledLabel}
        tex
        dimmed={hide}
      >
        <div>{` $${paycheck.amount} `}</div>
        <Dimmer inverted active={hide} />
      </Dimmer.Dimmable>
    </div>
  );
};

export const Paychecks = ({ paychecks }) => {
  const [loading, setLoading] = useState(!paychecks);

  if (loading) return <div></div>;
  return (
    <Widget>
      <WidgetTitle>Paychecks</WidgetTitle>
      <WidgetContent style={{ textAlign: "left" }}>
        {paychecks.map((b, i) => (
          <PaycheckLine key={i} paycheck={b}></PaycheckLine>
        ))}
      </WidgetContent>
    </Widget>
  );
};
