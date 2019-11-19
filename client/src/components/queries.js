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

export const GET_USER_BY_ID = gql`
  query getUserByUserId($userId: String!) {
    getUserByUserId(userId: $userId) {
      firstName
      lastName
      email
      gender
      dateOfBirth
      budgetPeriod
      budgets {
        name
        cap
        userId
      }
      transactions {
        vendor
        amount
        date
        group
        budgetId
      }
      paychecks {
        amount
        name
        userId
      }
    }
  }
`;

export const GET_USER_BY_AUTH = gql`
  query getUserByAuthId($authId: String!) {
    getUserByAuthId(authId: $authId) {
      firstName
      lastName
      email
      gender
      dateOfBirth
      budgetPeriod
      budgets {
        name
        cap
        userId
      }
      transactions {
        vendor
        amount
        date
        group
        budgetId
      }
      paychecks {
        amount
        name
        userId
      }
    }
  }
`;

export const GET_USER_BY_AUTH0_ID = gql`
  query getUserByAuth0($authId: String!) {
    getUserByAuthId(authId: $authId) {
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
    $authId: String!
    $lastName: String!
    $email: String!
  ) {
    createUser(
      authId: $authId
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      firstName
      lastName
      email
      userId
      authId
    }
  }
`;

export const INIT_USER = gql`
  mutation intitializeUser(
    $firstName: String!
    $authId: String!
    $lastName: String!
    $gender: String!
    $email: String!
    $dateOfBirth: String!
    $budgetPeriod: String!
    $budgets: [BudgetInput]!
    $paychecks: [PaycheckInput]!
  ) {
    initializeUser(
      authId: $authId
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      dateOfBirth: $dateOfBirth
      budgetPeriod: $budgetPeriod
      budgets: $budgets
      paychecks: $paychecks
    )
  }
`;
