import React, { useState, useEffect } from "react";
import { Button, Header, Image, Modal, Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_PAYCHECK } from "./queries";

const ButtonWrapper = styled.span`
  margin: 20px;
`;

export const AddPaycheck = () => {
  const [name, setName] = useState(null);
  const [amount, setAmount] = useState(null);
  const [addPaycheck, { data }] = useMutation(ADD_PAYCHECK);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      trigger={
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Paycheck
        </Button>
      }
      open={isOpen}
    >
      <Modal.Header>Add New Paycheck</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div>
            <h4>Paycheck Name</h4>
            <Input
              style={{ width: "100%", marginBottom: "10px" }}
              placeholder="Ex: Freelance Gig, Day Job, Dog Walking ... "
              onChange={e => setName(e.target.value)}
              value={name}
            ></Input>
            <h4>Amount</h4>
            <Input
              style={{ width: "100%", marginBottom: "10px" }}
              placeholder="Ex: $500, $1000, $10,000,000 ..."
              type="number"
              onChange={e => setAmount(e.target.value)}
              value={amount}
            ></Input>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <div style={{ textAlign: "center" }}>
          <ButtonWrapper>
            <Button onClick={() => setIsOpen(() => false)}>Cancel</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => {
                addPaycheck({
                  variables: {
                    amount,
                    name,
                    userId: "910eb638-1ae1-49f5-8868-2ae10493496e"
                  }
                });
              }}
            >
              Add
            </Button>
            <div>{data && JSON.stringify(data)}</div>
          </ButtonWrapper>
        </div>
      </Modal.Actions>
    </Modal>
  );
};
