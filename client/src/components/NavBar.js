// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { NavButton } from "./common";
import styled from "styled-components";
import smallLogo from "../assets/small-logo.svg";

const NavDiv = styled.div`
  padding: 50px;
  text-align: right;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  if (loading) return <div></div>;

  return (
    <NavDiv>
      <img src={smallLogo} style={{ marginRight: "auto" }}></img>
      {!isAuthenticated && (
        <span>
          <NavLink to="/">
            <NavButton onClick={() => loginWithRedirect({})}>
              Log in / Create Account
            </NavButton>
          </NavLink>
        </span>
      )}
      {isAuthenticated && (
        <span style={{ justifySelf: "end" }}>
          <NavLink to="/dashboard">
            <NavButton>Dashboard</NavButton>
          </NavLink>
          <NavLink to="/transactions">
            <NavButton>Transactions</NavButton>
          </NavLink>
          <NavLink to="/budgets">
            <NavButton>Budgets</NavButton>
          </NavLink>
          &nbsp;
          <NavLink to="/profile">
            <NavButton>Profile</NavButton>
          </NavLink>
          <NavLink to="/">
            <NavButton onClick={() => logout()}>Log out</NavButton>
          </NavLink>
        </span>
      )}
    </NavDiv>
  );
};

export default NavBar;
