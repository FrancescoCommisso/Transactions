import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../../react-auth0-spa";
import StepWizard from "react-step-wizard";
import { AddCsv } from "./addCsv";
import { AssignBudgets } from "./assignBudget";

export const AddTransactions = () => {
  const { user } = useAuth0(); //commented out for wifi
  // const user = {
  //   budgets: [
  //     { name: "Test Budget 1", budgetId: 123123 },
  //     { name: "Test Budget 2", budgetId: 456456 },
  //     { name: "Test Budget 3", budgetId: 789789 }
  //   ]
  // };
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("Transactions changed index: ", transactions);
    return () => {};
  }, [transactions]);

  return (
    <StepWizard>
      <AddCsv
        user={user}
        transactions={transactions}
        setTransactions={setTransactions}
      ></AddCsv>
      <AssignBudgets
        user={user}
        transactions={transactions}
        setTransactions={setTransactions}
      ></AssignBudgets>
    </StepWizard>
  );
};
