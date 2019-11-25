// src/components/NavBar.js

import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link, Redirect, useHistory } from "react-router-dom";
import { NavButton } from "../common";
import styled from "styled-components";
import smallLogo from "../../assets/small-logo.svg";
import { Dropdown, Select, Icon, Menu } from "semantic-ui-react";

const NavDiv = styled.div`
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;

const StyledDropDownItem = styled(Dropdown.Item)`
  text-align: left !important;
`;

const NavBar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    user,
    logout,
    loading
  } = useAuth0();
  const [displayName, setDisplayName] = useState(null);
  const history = useHistory();

  console.log("user: ", user);

  useEffect(() => {
    setDisplayName("New user");
    if (user && user.email) {
      setDisplayName(`${user.email} `);
    }
    if (user && user.firstName) {
      setDisplayName(`${user.firstName} ${user.lastName} `);
    }

    return () => {};
  }, [user]);

  return (
    <NavDiv>
      <img
        style={{
          display: "block",
          marginRight: "auto",
          padding: "10px"
        }}
        src={smallLogo}
      ></img>

      <span>
        {user && (
          <Dropdown
            large
            button
            large
            button
            style={{ backgroundColor: "white" }}
            text={displayName}
          >
            <Dropdown.Menu
              style={{ right: "0", left: "auto", margin: "10px" }}
              onChange={(e, data) => {
                console.log(data);
              }}
            >
              <StyledDropDownItem
                style={{ textAlign: "center" }}
                onClick={() => {
                  history.push("/dashboard");
                }}
              >
                Dashboard
              </StyledDropDownItem>
              <StyledDropDownItem
                onClick={() => {
                  history.push("/profile");
                }}
              >
                Profile
              </StyledDropDownItem>
              <StyledDropDownItem
                onClick={() => {
                  history.push("/logout");
                }}
              >
                Logout
              </StyledDropDownItem>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </span>
      {!isAuthenticated && !loading && (
        <span>
          <Dropdown
            large
            button
            style={{ backgroundColor: "white" }}
            text={"Login / Sign up"}
          >
            <Dropdown.Menu
              style={{ right: "0", left: "auto" }}
              onChange={(e, data) => {
                console.log(data);
              }}
            >
              <StyledDropDownItem
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </StyledDropDownItem>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      )}
      {isAuthenticated && <span style={{ justifySelf: "end" }}></span>}
    </NavDiv>
  );
};

export default NavBar;
