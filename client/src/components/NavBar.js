// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link, Redirect } from "react-router-dom";
import { NavButton } from "./common";
import styled from "styled-components";
import smallLogo from "../assets/small-logo.svg";
import { Dropdown, Select, Icon, Menu } from "semantic-ui-react";

const NavDiv = styled.div`
  padding: 20px;
  text-align: right;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const routes = [
  { text: "Profile", value: "/profile" },
  { text: "Logout", value: "/logout" }
];

const navOptions = routes.map(({ value, text }, key) => {
  return {
    key,
    text,
    value
  };
});

const StyledDropdown = styled(Dropdown)`
  color: black !important;
  &&&& {
    opacity: 1 !important;
    color: black !important;
  }
`;

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return (
    <NavDiv>
      <img src={smallLogo} style={{ marginRight: "auto" }}></img>
      <span>
        <Menu
          style={{ color: "black !important" }}
          text="Francesco"
          placeholder="Francesco Commisso"
        >
          <Dropdown.Menu
            style={{ right: "0", left: "auto", margin: "10px" }}
            onChange={(e, data) => {
              console.log(data);
            }}
          >
            <Dropdown.Item>
              <Link to="/profile">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/logout">Logout</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Menu>
        {/* <Icon name="bars" size="big"></Icon> */}
      </span>
      {!isAuthenticated && (
        <span>
          <NavLink to="/">
            <NavButton onClick={() => loginWithRedirect({})}>
              Log in / Create Account
            </NavButton>
          </NavLink>
        </span>
      )}
      {isAuthenticated && <span style={{ justifySelf: "end" }}></span>}
    </NavDiv>
  );
};

export default NavBar;
