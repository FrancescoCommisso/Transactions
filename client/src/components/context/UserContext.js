import React, { Context, createContext, useState } from "react";

const UserContext = createContext();
const initialState = {
  user: {
    name: "Roy"
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loginUser":
      return {
        ...state,
        isAuthenticated: action.payload.authenticated,
        name: action.payload.user.name,
        user: action.payload
      };
    default:
      return state;
  }
};

export const UserContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState.user);
  auth.handleAuthentication().then(() => {
    dispatch({
      type: "loginUser",
      payload: {
        authenticated: true,
        user: auth.getProfile(),
        id: auth.idToken
      }
    });
  });
  return (
    <UserContext.Provider
      value={{
        ...state,
        handleLogin: auth.signIn
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext };
