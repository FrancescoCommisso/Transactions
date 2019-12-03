import React, { useState } from "react";
import styled from "styled-components";
import { Widget, WidgetTitle, WidgetContent } from "../../common";
import _ from "lodash";

const LineItem = styled.p`
  margin: 0px;
  padding: 0px;
  margin-right: 20px;
`;

const LineDiv = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: 500px;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  background-color: ${({ color }) => color};
`;

const TransactionLine = ({ transaction }) => (
  <LineDiv>
    <Square color={"blue"}></Square>

    <LineItem>{`${_.upperFirst(_.toLower(transaction.vendor))}:`}</LineItem>
    <LineItem>{`$${_.upperFirst(_.toLower(transaction.amount))}`}</LineItem>
    <LineItem>{transaction.date && `${transaction.date} `}</LineItem>
  </LineDiv>
);

export const Transactions = ({ transactions }) => {
  const [loading, setLoading] = useState(!transactions);

  if (loading) return <div></div>;
  return (
    <Widget>
      <WidgetTitle>Transactions</WidgetTitle>

      <WidgetContent style={{ maxHeight: "400px", overflow: "auto" }}>
        {transactions.length > 0 ? (
          transactions.map((b, i) => (
            <TransactionLine key={i} transaction={b}></TransactionLine>
          ))
        ) : (
          <p style={{ margin: "auto" }}>No transactions yet</p>
        )}
      </WidgetContent>
    </Widget>
  );
};
