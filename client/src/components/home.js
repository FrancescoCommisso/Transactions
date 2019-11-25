import React, { Component, useEffect } from "react";
import logo from "../assets/logo.svg";
import { CenterPage, CenterDiv, H1, H3 } from "./common";
import styled from "styled-components";
import ring from "../assets/ring.svg";
import homering from "../assets/homering.svg";
import snake from "../assets/snake.svg";

export const Home = () => {
  return (
    <CenterPage
      style={
        {
          // justifyContent: "flex-start",
          // backgroundImage: `url(${homering})`,
          // backgroundRepeat: "repeat-y"
        }
      }
    >
      <CenterDiv>
        <H1>p a y c h u n k</H1>
        <H3>A paycheck-based budgetting system that kinda works</H3>
      </CenterDiv>
      <img
        style={{
          position: "fixed",
          right: "0",
          zIndex: "-1",
          width: "50%",
          minWidth: "400px"
        }}
        src={homering}
      ></img>
    </CenterPage>
  );
};
