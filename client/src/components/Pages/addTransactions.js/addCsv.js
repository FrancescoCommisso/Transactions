import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import AddTransactionsImg from "../../../assets/add-transactions.svg";
import {
  CenterPage,
  CenterDiv,
  PrimaryButton,
  SecondaryButton,
  WidgetComponent,
  DoubleButtonDiv
} from "../../common";
import { TransactionsView } from "../../common/transactions";

const Content = (setTransactions, transactions, user, nextStep) => {
  const mapTransactions = transactions => {
    const mappedTransactions = transactions
      .filter(line => line[0] != "" && line[1] != "" && line[2] != "")
      .map(line => ({
        date: line[0],
        vendor: line[1],
        amount: line[2],
        budget: null
      }));
    setTransactions(mappedTransactions);
  };

  // useEffect(() => {
  //   const testTransaction = {
  //     vendor: "Testbuy",
  //     amount: "200.00",
  //     date: "01/01/2020"
  //   };

  //   const testTransaction1 = {
  //     vendor: "Testbuy",
  //     amount: "200.00",
  //     date: "01/01/2020"
  //   };
  //   const testTransactions = [testTransaction, testTransaction1];
  //   setTransactions(testTransactions);
  //   return () => {};
  // }, []);

  return (
    <div>
      {transactions.length === 0 && (
        <>
          <div>
            <img src={AddTransactionsImg}></img>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "center"
            }}
          >
            <p style={{ marginRight: "5px" }}>
              Add your transactions .csv file
            </p>
            <a href={"/tutorial"}>(?)</a>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              paddingLeft: "80px"
            }}
          >
            {transactions.length === 0 && (
              <CSVReader
                onFileLoaded={e => {
                  mapTransactions(e);
                }}
              ></CSVReader>
            )}
          </div>
        </>
      )}

      <div>
        {transactions.length > 0 && (
          <div>
            <TransactionsView transactions={transactions} />
            <DoubleButtonDiv style={{ marginTop: "20px" }}>
              <SecondaryButton
                onClick={async () => {
                  setTransactions([]);
                }}
              >
                Discard CSV
              </SecondaryButton>
              <PrimaryButton
                onClick={async () => {
                  nextStep();
                }}
              >
                Assign Budgets to Transactions
              </PrimaryButton>
            </DoubleButtonDiv>

            {/* <Button
              onClick={async () => {
                await client.mutate({
                  mutation: CREATE_TRANSACTIONS,
                  variables: {
                    transactions,
                    userId: user.userId
                  }
                });
              }}
            >
              Create Transactions
            </Button> */}
          </div>
        )}
      </div>
    </div>
  );
};
export const AddCsv = ({ setTransactions, transactions, user, nextStep }) => {
  return (
    <CenterPage>
      <CenterDiv style={{ width: "80vw", marginTop: "0" }}>
        <WidgetComponent
          title={"Add Transactions"}
          content={Content(setTransactions, transactions, user, nextStep)}
        ></WidgetComponent>
      </CenterDiv>
    </CenterPage>
  );
};
