import styled from "styled-components";

export const colors = {
  primary: "#01BBD3"
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

export const WidgetContent = styled.div`
  flex-basis: 80%;
`;

export const Widget = styled.div`
  padding: 25px;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: stretch;
  flex-direction: column;
  display: flex;

  flex-basis: 50%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
    padding: 15px;
  }
`;
