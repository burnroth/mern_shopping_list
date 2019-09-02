import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { editItem } from "../actions/itemActions";

class EditItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const editItem = {
      id: this.props.id,
      name: this.state.name
    };
    // Add item via addItem action
    this.props.editItem(editItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{
            marginBottom: "2rem"
          }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal toggle={this.toggle} isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder={this.props.name}
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{ marginTop: "2rem", display: "block" }}
                >
                  Edit Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { editItem }
)(EditItemModal);
