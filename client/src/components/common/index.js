import styled from "styled-components";

export const colors = {
  primary: "#01BBD3"
};

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

export const Widget = styled.div`
  padding: 20px;
  flex-grow: 0;
  align-items: stretch;
  flex-shrink: 0;
  flex-basis: 50%;
  background-color: green;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;
