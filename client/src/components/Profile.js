import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Wrapper } from "./common";
import { Placeholder } from "semantic-ui-react";
import client from "../graphql";
import { GET_USER_BY_AUTH } from "./queries";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (user && user.sub)
      try {
        getUserInfo();
      } catch (e) {
        console.error("Error getting userId: ", e.message);
      }

    return () => clearTimeout(timer);
  }, [user]);

  const getUserInfo = async () => {
    const {
      data: { getUserByAuthId }
    } = await client.query({
      query: GET_USER_BY_AUTH,
      variables: {
        authId: user.sub
      }
    });

    setUserInfo(() => getUserByAuthId);
  };

  return (
    <Wrapper>
      {loading && (
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line></Placeholder.Line>
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line></Placeholder.Line>
          </Placeholder.Paragraph>
        </Placeholder>
      )}
      {!loading && (
        <>
          <p> {userInfo && JSON.stringify(userInfo)}</p>
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
