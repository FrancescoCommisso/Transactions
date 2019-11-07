import React from "react";
import { Button, Header, Image, Modal, Input } from "semantic-ui-react";

export const AddPaycheck = () => {
  return (
    <Modal trigger={<Button>Add Paycheck</Button>}>
      <Modal.Header>Add New Paycheck</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div style={{ marginLeft: "100px", marginRight: "100px" }}>
            <Input
              style={{ width: "100%", marginBottom: "10px" }}
              placeholder="Paycheck Name"
            ></Input>
            <Input
              style={{ width: "100%", marginBottom: "10px" }}
              placeholder="Paycheck Amount"
            ></Input>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <div style={{ textAlign: "center" }}>
          <Button>Cancel</Button>
          <Button>Add</Button>
        </div>
      </Modal.Actions>
    </Modal>
  );
};
