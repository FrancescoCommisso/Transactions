import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../common";
import _ from "lodash";

const TransactionsDiv = styled(Widget)`
  text-align: left;
  padding: 50px;
`;

const LineItem = styled.p`
  margin: 0px;
  padding: 0px;
  margin-right: 20px;
`;

const LineDiv = styled.div`
  border-bottom: solid 1px;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: 500px;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 20px;
  background-color: ${({ color }) => color};
`;

const TransactionLine = ({ transaction }) => (
  <LineDiv>
    <Square color={"blue"}></Square>

    <LineItem>{`${_.upperFirst(_.toLower(transaction.vendor))}:`}</LineItem>
    <LineItem>{`$${_.upperFirst(_.toLower(transaction.amount))}`}</LineItem>
    <LineItem>{transaction.date && `${transaction.date}`}</LineItem>
  </LineDiv>
);

export const Transactions = ({ transactions }) => {
  const [loading, setLoading] = useState(!transactions);

  if (loading) return <div></div>;
  return (
    <TransactionsDiv>
      <h3>Transactions</h3>
      <div></div>
      {transactions.slice(0, 4).map(b => (
        <TransactionLine transaction={b}></TransactionLine>
      ))}
    </TransactionsDiv>
  );
};
