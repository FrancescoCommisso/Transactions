const Users = {
  userId: "uuid",
  firstName: "string",
  lastName: "string",
  userName: "string",
  password: "string",
  interval: "string"
};

const Budgets = {
  budgetId: "uuid",
  name: "string",
  cap: "string",
  user: "uuid"
};

const Paychecks = {
  paycheckId: "uuid",
  amount: "string",
  name: "string",
  user: "uuid"
};

const Transaction = {
  transactionId: "string",
  vendor: "string",
  amount: "string",
  budget: "uuid",
  date: "string"
};
