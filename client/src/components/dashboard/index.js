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

const DashDiv = styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: flex-start;
`;

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

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
        // authId: user.sub
        authId: "auth0|5dd2052007ef470efc08cfb5"
      }
    });

    setUserInfo(() => getUserByAuthId);
  };

  getUserInfo();
  return (
    <DashDiv>
      {userInfo && <Profile userInfo={userInfo}></Profile>}
      {userInfo && (
        <BudgetPeriods
          budgets={userInfo.budgets}
          transactions={[{ vendor: "arti", amount: 25 }]}
        ></BudgetPeriods>
      )}
      {userInfo && (
        <Transactions
          transactions={[
            { vendor: "Pho Asia", amount: "25.00", date: "01/01/1996" },
            { vendor: "Gucci store", amount: "450.00", date: "01/30/1996" },
            { vendor: "Pho Asia", amount: "25.00", date: "01/01/1996" },
            { vendor: "Gucci store", amount: "450.00", date: "01/30/1996" },
            { vendor: "Pho Asia", amount: "25.00", date: "01/01/1996" },
            { vendor: "Gucci store", amount: "450.00", date: "01/30/1996" }
          ]}
        ></Transactions>
      )}
      {userInfo && <Budgets budgets={userInfo.budgets}></Budgets>}

      {userInfo && <Paychecks paychecks={userInfo.paychecks}></Paychecks>}
    </DashDiv>
  );
};
