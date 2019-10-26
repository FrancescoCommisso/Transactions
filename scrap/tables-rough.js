const Users = {
  userId: "uuid",
  firstName: "string",
  lastName: "string",
  userName: "string",
  password: "string"
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
  payDayFormula: "string",
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
