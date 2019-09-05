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
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    price: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    console.log(e.target)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      price: this.state.price
    };

    this.setState({
      name: "",
      price: ""
    })

    // Add item via addItem action
    this.props.addItem(newItem);

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
            <Form onChange={this.onChange} onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Lägg till varor"
                />
                <Input type="number" name="price" placeholder="Pris" />
                <Button
                  color="dark"
                  style={{ marginTop: "2rem", display: "block" }}
                  disabled={ this.state.name && this.state.price ? false : true}
                  
                >
                  Add Item
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
  { addItem }
)(ItemModal);
