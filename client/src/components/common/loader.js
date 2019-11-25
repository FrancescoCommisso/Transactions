import React from "react";
import styled, { keyframes } from "styled-components";
import ring from "../../assets/ring.svg";
import { CenterPage, CenterDiv } from ".";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const fade = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const Spinner = styled.img`
  animation: ${rotate} 2s ease-out;
  width: 10vw;
`;

const PulseDiv = styled.div`
  animation: ${pulse} 2s linear;
`;

export const Loader = ({ message }) => (
  <CenterPage>
    <CenterDiv>
      <PulseDiv>
        <Spinner src={ring}></Spinner>
      </PulseDiv>

      <p style={{ padding: `15px` }}>{message}</p>
    </CenterDiv>
  </CenterPage>
);
