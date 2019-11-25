import styled from "styled-components";
import { Loader } from "./loader";
import React from "react";

export const colors = {
  primary: "#A4D9FF"
};

export const screens = {
  onlyPhones: "599px",
  landscapeTablets: "900px",
  desktop: "1200px",
  bigDesktop: "1800px"
};

export const budgetColors = [
  "rgba(163, 217, 255, 1)",
  "rgba(126, 107, 143, 1)",
  "rgba(150, 230, 179, 1)",
  "rgba(218, 62, 82, 1)",
  "rgba(242, 233, 78, 1)",
  "rgba(223, 154, 87, 1)",
  "rgba(193, 219, 227, 1)",
  "rgba(212, 197, 226, 1)",
  "rgba(171, 78, 104, 1)",
  "rgba(244, 241, 187, 1)"
];

export const PrimaryButton = styled.button`
  background-color: white;
  color: black;
  padding: 20px;
  font-size: 1rem;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: none;
  outline: none;
  margin: 10px;
  min-width: 160px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: ${colors.primary};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const SecondaryButton = styled.button`
  background-color: white;
  color: ${colors.primary};
  font-weight: 600;
  padding: 20px;
  font-size: 1rem;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: solid 2px;
  border-color: ${colors.primary};
  outline: none;
  margin: 10px;
  min-width: 160px;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: ${colors.primary};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Wrapper = styled.div`
  margin: 100px;
`;

export const Segment = styled.div`
  padding: 10px;
  border: solid 1px;
  border-color: grey;
`;

export const NavButton = styled.button`
  color: black;
  padding: 20px;
  font-size: 1 rem;
  border-radius: 50px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: none;
  outline: none;
  transition: all 0.3s ease 0s;
  :hover {
    box-shadow: 0px 15px 20px rgba(64, 207, 225, 0.4);
    color: #40cfe1;
    transform: translateY(-7px);
  }
`;

export const WidgetTitle = styled.h3`
  opacity: 0.75;
  border-bottom: solid 1px;

  padding-bottom: 20px;
  text-align: left;
`;

export const WidgetComponent = ({ title, content }) => (
  <Widget>
    <WidgetTitle>{title}</WidgetTitle>
    <WidgetContent>{content}</WidgetContent>
  </Widget>
);

export const WidgetContent = styled.div``;

export const Widget = styled.div`
  padding: 25px;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  min-height: 400px;
  flex-basis: 49%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
    padding: 15px;
  }
`;

export const P = styled.p`
  font-family: alata;

  @media (max-width: ${screens.onlyPhones}) {
    font-size: 16px;
  }

  @media (min-width: ${screens.landscapeTablets}) {
    font-size: 18px;
  }
  @media (min-width: ${screens.desktop}) {
    font-size: 16px;
  }
  @media (min-width: ${screens.bigDesktop}) {
    font-size: 20px;
  }
`;

export const H1 = styled.h1`
  font-family: alata;
  font-weight: 100;
  @media (max-width: ${screens.onlyPhones}) {
    font-size: 42px;
  }
  @media (min-width: ${screens.desktop}) {
    font-size: 52px;
  }

  @media (min-width: ${screens.landscapeTablets}) {
    font-size: 64px;
  }

  @media (min-width: ${screens.bigDesktop}) {
    font-size: 72px;
  }
`;

export const H3 = styled.h3`
  @media (max-width: ${screens.onlyPhones}) {
    font-size: 18px;
  }

  @media (min-width: ${screens.landscapeTablets}) {
    font-size: 24px;
  }
  @media (min-width: ${screens.desktop}) {
    font-size: 24px;
  }
  @media (min-width: ${screens.bigDesktop}) {
    font-size: 72px;
  }
`;

export const CenterPage = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  flex-directon: column;
`;

export const CenterDiv = styled.div`
  margin: auto;
`;
