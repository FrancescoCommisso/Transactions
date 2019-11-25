import React, { useState } from "react";
import styled from "styled-components";
import { Widget } from "../../common";
import _ from "lodash";

const ProfileDiv = styled(Widget)`
  flex-basis: 100%;
`;

export const Profile = ({ userInfo: { firstName, lastName, email } }) => {
  const [loading, setLoading] = useState(!firstName);

  if (loading) return <div></div>;
  return (
    <ProfileDiv>
      <p>{`${firstName} ${lastName}`}</p>
      <p>{`${email}`}</p>
    </ProfileDiv>
  );
};
