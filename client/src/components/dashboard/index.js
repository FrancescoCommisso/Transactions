import React, { useState, useEffect } from "react";
import { Profile } from "./profile";
import styled from "styled-components";
import { useAuth0 } from "../../react-auth0-spa";
import client from "../../graphql";
import { GET_USER_BY_AUTH } from "../queries";
import { Budgets } from "./budgets";
import { Paychecks } from "./paychecks";
import { Transactions } from "./transactions";
import { BudgetPeriods } from "./budgetPeriods";
import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { SecondaryButton } from "../common";

const DashDiv = styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: flex-start;
`;

const AddButton = styled(SecondaryButton)`
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 100;
  color: ${({ color }) => color};
`;

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    window.onresize = function() {
      window.location.reload();
    };
    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (user && user.sub && !userInfo)
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
        // authId: "auth0|5dd2052007ef470efc08cfb5"
      }
    });

    setUserInfo(() => getUserByAuthId);
  };

  // getUserInfo();
  return (
    <DashDiv>
      <Link to="/add-transactions">
        <AddButton>Add Transactions</AddButton>
      </Link>

      {/* {userInfo && <Profile userInfo={userInfo}></Profile>} */}
      {userInfo && (
        <BudgetPeriods
          budgets={userInfo.budgets}
          transactions={[{ vendor: "arti", amount: 25 }]}
        ></BudgetPeriods>
      )}
      {userInfo && <Budgets budgets={userInfo.budgets}></Budgets>}

      {userInfo && (
        <Transactions transactions={userInfo.transactions}></Transactions>
      )}

      {userInfo && <Paychecks paychecks={userInfo.paychecks}></Paychecks>}
    </DashDiv>
  );
};
