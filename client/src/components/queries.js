import gql from "graphql-tag";

export const ADD_PAYCHECK = gql`
  mutation createUser($userId: String!, $amount: String!, $name: String!) {
    createPaycheck(userId: $userId, amount: $amount, name: $name) {
      userId
      amount
      name
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      userId
      firstName
      lastName
      budgetPeriod
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email) {
      firstName
      lastName
      email
      userId
    }
  }
`;
