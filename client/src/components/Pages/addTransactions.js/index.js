import React, { useState, useEffect } from "react";
import { Drag } from "./drag";
import styled from "styled-components";
import csv from "csv-parser";
import CSVReader from "react-csv-reader";
import AddTransactionsImg from "../../../assets/add-transactions.svg";
import { Button } from "semantic-ui-react";
import client from "../../../graphql";
import { CREATE_TRANSACTIONS } from "../../queries";
import { useAuth0 } from "../../../react-auth0-spa";
import { Widget, CenterPage, CenterDiv, WidgetComponent } from "../../common";
import { Placeholder } from "semantic-ui-react";

const testTransaction = {
  vendor: "Testbuy",
  amount: "200.00",
  date: "01/01/2020"
};

const testTransaction1 = {
  vendor: "Testbuy",
  amount: "200.00",
  date: "01/01/2020"
};
const testTransactions = [testTransaction, testTransaction1];
const testUserId = "d3ac6d79-906d-4c05-9661-5e7bcd3117d2";

const Content = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {/* <CSVReader
      onFileLoaded={e => {
        console.log(e);
      }}
    ></CSVReader> */}
      <div onDragEnter={() => {}}>
        {loading ? (
          <Placeholder
            style={{ margin: "auto", width: "20vh", height: "20vh" }}
          >
            <Placeholder.Image />
          </Placeholder>
        ) : (
          <img src={AddTransactionsImg}></img>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p style={{ marginRight: "5px" }}>Add your transactions .csv file</p>
        <a href={"/tutorial"}>(?)</a>
      </div>

      <div>
        <Button
          onClick={async () => {
            const res = await client.mutate({
              mutation: CREATE_TRANSACTIONS,
              variables: {
                transactions: testTransactions,
                userId: testUserId
              }
            });
          }}
        >
          Create Transactions
        </Button>
      </div>
    </div>
  );
};
export const AddTransactions = () => {
  const { user } = useAuth0();

  return (
    <CenterPage>
      <CenterDiv style={{ width: "80vw", marginTop: "0" }}>
        <WidgetComponent
          title={"Add Transactions"}
          content={Content()}
        ></WidgetComponent>
      </CenterDiv>
    </CenterPage>
  );
};
