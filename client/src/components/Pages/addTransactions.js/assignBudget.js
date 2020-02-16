import React, { useState, useEffect } from "react";
import {
  CenterPage,
  CenterDiv,
  PrimaryButton,
  SecondaryButton,
  WidgetComponent,
  DoubleButtonDiv
} from "../../common";
import { TransactionsView } from "../../common/transactions";
import { Button } from "semantic-ui-react";
import client from "../../../graphql";
import { CREATE_TRANSACTIONS } from "../../queries";

const BudgetCard = ({ budget, onBudgetSelected }) => {
  return (
    <Button
      onClick={() => {
        onBudgetSelected(budget);
      }}
    >
      {budget && budget.name}
    </Button>
  );
};

const BudgetsView = ({ budgets, onBudgetSelected }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      {budgets.length &&
        budgets.map(b => (
          <BudgetCard
            onBudgetSelected={onBudgetSelected}
            budget={b}
          ></BudgetCard>
        ))}
    </div>
  );
};

export const AssignBudgets = ({
  setTransactions,
  transactions,
  user,
  nextStep,
  previousStep
}) => {
  const Content = (
    setTransactions,
    transactions,
    user,
    nextStep,
    previousStep
  ) => {
    console.log("user: ", user);

    const [currentTransaction, setcurrentTransaction] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeg, setIsBeg] = useState(false);

    useEffect(() => {
      if (currentTransaction === transactions.length - 1) {
        setTransactions(transactions);
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }

      if (currentTransaction === 0) setIsBeg(true);
      else {
        setIsBeg(false);
      }

      return () => {};
    }, [currentTransaction]);

    const nextTransaction = () => {
      if (currentTransaction < transactions.length - 1)
        setcurrentTransaction(() => currentTransaction + 1);
    };

    const previousTransaction = () => {
      return currentTransaction > 0
        ? setcurrentTransaction(currentTransaction - 1)
        : null;
    };

    const assignBudgetToTransaction = budget => {
      console.log("click click: ", budget);
      if (transactions.length) {
        transactions[currentTransaction].budget = budget;
        setTransactions([...transactions]);
        nextTransaction();
      }
    };

    return (
      <div>
        {console.log({ currentTransaction })}

        {transactions.length && (
          <TransactionsView
            selected={currentTransaction}
            transactions={transactions}
          ></TransactionsView>
        )}

        {user && user.budgets && (
          <>
            <BudgetsView
              onBudgetSelected={assignBudgetToTransaction}
              budgets={user.budgets}
            ></BudgetsView>

            <DoubleButtonDiv style={{ marginTop: "20px" }}>
              <SecondaryButton
                onClick={async () => {
                  previousStep();
                }}
              >
                Back
              </SecondaryButton>
              {isEnd && (
                <PrimaryButton
                  onClick={async () => {
                    try {
                      const mappedT = transactions.map(
                        ({ date, vendor, budget: { budgetId }, amount }) => {
                          return { date, vendor, budgetId, amount };
                        }
                      );
                      console.log("mappedT: ", mappedT);
                      const didSetTransactions = await client.mutate({
                        mutation: CREATE_TRANSACTIONS,
                        variables: {
                          mappedT,
                          userId: user.userId
                        }
                      });

                      console.log({ didSetTransactions });
                    } catch (e) {
                      console.log("Error adding transactions: ", e);
                    }
                  }}
                >
                  Assign Budgets to Transactions
                </PrimaryButton>
              )}
            </DoubleButtonDiv>
          </>
        )}
      </div>
    );
  };

  return (
    <CenterPage>
      <CenterDiv style={{ width: "80vw", marginTop: "0" }}>
        <WidgetComponent
          title={"Assign Budgets to Transactions"}
          content={Content(
            setTransactions,
            transactions,
            user,
            nextStep,
            previousStep
          )}
        ></WidgetComponent>
      </CenterDiv>
    </CenterPage>
  );
};
