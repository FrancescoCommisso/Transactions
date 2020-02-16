import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "../../../react-auth0-spa";
import client from "../../../graphql";
import { GET_USER_BY_AUTH } from "../../queries";
import { Budgets } from "./budgets";
import { Paychecks } from "./paychecks";
import { Transactions } from "./transactions";
import { BudgetPeriods } from "./budgetPeriods";

import { Link } from "react-router-dom";
import { SecondaryButton } from "../../common";
import { Loader } from "../../common/loader";

const DashDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const AddButton = styled(SecondaryButton)`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 100;
  color: ${({ color }) => color};
  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
  }
  @media (max-width: 400px) {
    right: 5px;
    bottom: 5px;
  }
`;

export const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const { user, loading } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    window.onresize = () => {
      window.location.reload();
    };

    return () => {
      window.onresize = null;
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (user && user.sub)
      try {
        getUserInfo();
      } catch (e) {
        console.error("Error getting userId: ", e.message);
      }

    return () => clearTimeout(timer);
  }, [user]);

  const getUserInfo = async () => {
    const {
      data: { getUserByAuthId }
    } = await client.query({
      query: GET_USER_BY_AUTH,
      variables: {
        authId: user.sub
        // authId: "auth0|5dd396a87ff15e0efa63b6d3"
      }
    });

    setUserInfo(() => getUserByAuthId);
  };

  getUserInfo();

  return (
    <>
      {false ? (
        <Loader message={"Getting your information"}></Loader>
      ) : (
        <DashDiv>
          <Link to="/add-transactions">
            <AddButton>Add Transactions</AddButton>
          </Link>

          {userInfo && (
            <>
              <BudgetPeriods
                budgets={userInfo.budgets}
                transactions={[{ vendor: "arti", amount: 25 }]}
              ></BudgetPeriods>
              <Budgets budgets={userInfo.budgets}></Budgets>
              <Transactions transactions={userInfo.transactions}></Transactions>
              <Paychecks paychecks={userInfo.paychecks}></Paychecks>
            </>
          )}
        </DashDiv>
      )}
    </>
  );
};
