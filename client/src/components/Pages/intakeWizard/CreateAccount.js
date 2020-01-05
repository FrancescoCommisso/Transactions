import React, { useState } from "react";
import { Input, Select } from "semantic-ui-react";
import styled from "styled-components";
import { screens, IntakeWidget, IntakeContent, P } from "../../common";
import {
  SecondaryButton,
  Wrapper,
  Widget,
  WidgetTitle,
  WidgetContent,
  CenterPage,
  CenterDiv
} from "../../common";

const StyledInput = styled(Input)`
  flex-basis: ${({ w }) => (w ? w : "48%")};
  min-width: ${({ mw }) => (mw ? mw : "250px")};
  margin-bottom: 10px;
  @media (max-width: ${screens.onlyPhones}) {
    flex-basis: 100%;
  }
`;
const StyledSelect = styled(Select)`
  flex-basis: ${({ w }) => (w ? w : "48%")};
  min-width: 250px;
  margin-bottom: 10px;
  @media (max-width: ${screens.onlyPhones}) {
    flex-basis: 100%;
  }
`;

const genderOptions = [
  { name: "Male", value: "Male", text: "Male" },
  { name: "Female", value: "Female", text: "Female" }
];

export const CreateAccount = ({ nextStep, addPersonalInfo }) => {
  const [values, setValues] = useState({});

  const handleChange = async ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleGender = async (e, data) => {
    setValues({ ...values, [data.name]: data.value });
  };

  return (
    <CenterPage>
      <CenterDiv style={{ marginTop: "0px" }}>
        <IntakeWidget>
          <WidgetTitle>{"Personal Information"}</WidgetTitle>
          <IntakeContent>
            <StyledInput
              name="firstName"
              placeholder={"First name"}
              fluid
              mw={"100px"}
              w={"49%"}
              value={values.firstName}
              onChange={handleChange}
            ></StyledInput>
            <StyledInput
              onChange={handleChange}
              name="lastName"
              mw={"100px"}
              w={"49%"}
              value={values.lastName}
              fluid
              placeholder={"Last name"}
            ></StyledInput>
            <StyledInput
              onChange={handleChange}
              name="dateOfBirth"
              value={values.dateOfBirth}
              w={"33%"}
              mw={"100px"}
              placeholder={"Date of birth ( dd/mm/yyyy )"}
            ></StyledInput>
            <StyledSelect
              onChange={handleGender}
              name="gender"
              w={"33%"}
              mw={"100px"}
              value={values.gender}
              fluid
              options={genderOptions}
              placeholder={"Gender"}
            ></StyledSelect>
            <StyledInput
              w={"33%"}
              mw={"100px"}
              onChange={handleChange}
              name="budgetPeriod"
              value={values.budgetPeriod}
              type="number"
              fluid
              placeholder={"Budget Period ( in weeks )"}
            ></StyledInput>

            <div
              style={{
                flexBasis: "100%",
                textAlign: "center"
              }}
            >
              <P>
                This is going to be the duration through which you gauge your
                spending.
              </P>
            </div>

            <div style={{ flexBasis: "100%", margin: "10px" }}>
              <SecondaryButton
                onClick={() => {
                  addPersonalInfo(values);
                  nextStep();
                }}
              >
                Next
              </SecondaryButton>
            </div>
          </IntakeContent>
        </IntakeWidget>
      </CenterDiv>
    </CenterPage>
  );
};
