import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TransactionLine = ({
  transaction: { amount, date, vendor, budget, selected, i }
}) => {
  return (
    <tr
      key={i}
      onClick={() => {}}
      style={{
        margin: "5px",
        backgroundColor: `${selected ? "lavender" : "null"}`
      }}
    >
      <td>{vendor}</td>
      <td>{amount}</td>
      <td>{date}</td>
      <td>{budget && budget.name}</td>
    </tr>
  );
};

export const TransactionsView = ({ transactions, selected }) => {
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  useEffect(() => {
    if (transactions.length) {
      const selectedTransactions = transactions.map((t, i) => {
        return { ...t, selected: selected === i, i };
      });
      setSelectedTransactions(selectedTransactions);
    }
    return () => {};
  }, [transactions, selected]);

  return (
    <div style={{ maxHeight: "400px", overflow: "auto" }}>
      <table style={{ tableLayout: "fixed", width: "100%" }}>
        <thead>
          <tr>
            {console.log({ selectedTransactions, selected })}
            <th>Vendor</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Budget</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length &&
            selectedTransactions.map((t, i) => {
              return <TransactionLine transaction={t}></TransactionLine>;
            })}
        </tbody>
      </table>
    </div>
  );
};
