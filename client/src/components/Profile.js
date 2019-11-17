import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Wrapper } from "./common";
import { Placeholder } from "semantic-ui-react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth0();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
          <h3 style={{ textAlign: "left" }}>
            {user.firstName} {user.lastName}
          </h3>
          <h5 style={{ textAlign: "left" }}>{user.email}</h5>
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
