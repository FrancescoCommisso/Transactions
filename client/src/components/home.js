import React, { Component, useEffect } from "react";
import logo from "../assets/logo.svg";
import {
  CenterPage,
  CenterDiv,
  H1,
  H3,
  P,
  colors,
  WidgetComponent
} from "./common";
import styled from "styled-components";
import ring from "../assets/ring.svg";
import homering from "../assets/homering.svg";
import newlogo from "../assets/newlogo.svg";

const p = colors.primary;

export const Home = () => {
  return (
    <div>
      <CenterPage
        style={{
          backgroundColor: p,
          flexWrap: "wrap",
          flexDirection: "column"
        }}
      >
        <CenterDiv>
          <img style={{ width: "90vw", maxWidth: "800px" }} src={newlogo}></img>
        </CenterDiv>
        <div style={{ paddingBottom: "80px", color: "white" }}>
          <P>Scroll to learn how it works</P>
        </div>
      </CenterPage>
      <CenterPage style={{ flexWrap: "wrap" }}>
        <CenterDiv>
          <WidgetComponent title="Add your sources of income"></WidgetComponent>
        </CenterDiv>
      </CenterPage>
      <CenterPage>
        <CenterDiv>
          <WidgetComponent title="Create your budgets"></WidgetComponent>
        </CenterDiv>
      </CenterPage>
      <CenterPage>
        <CenterDiv>
          <WidgetComponent title="Create a budget period"></WidgetComponent>
        </CenterDiv>
      </CenterPage>
      <CenterPage>
        <CenterDiv>
          <WidgetComponent title="Add transactions once every budget period"></WidgetComponent>
        </CenterDiv>
      </CenterPage>
    </div>
  );
};
