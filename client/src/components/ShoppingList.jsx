import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  Input,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem, editItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  state = {
    showInputField: false,
    itemState: {
      show: "",
      id: "",
      name: "",
      price: ""
    },
    editedItemState: {
      id: "",
      name: "",
      price: ""
    }
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  showInputField(id, name, price) {
    this.setState({
      itemState: {
        show: !this.state.itemState.show,
        id: id,
        name: name,
        price: price
      }
    });
  }

  handleFormChange = e => {
    this.setState({
      editedItemState: {
        ...this.state.editedItemState,
        [e.target.name]: e.target.value
      }
    });
  };

  handleInputChange = e => {

     this.setState({
       itemState: {
         ...this.state.itemState,
         [e.target.name]: e.target.value
       }
     });
     
  };

  handleEditSubmit(id, e) {
    e.persist();
    const editItem = {
      id: id,
      name: this.state.editedItemState.name,
      price: this.state.editedItemState.price
    };

    this.props.editItem(editItem);

    this.setState({
      itemState: {}
    });
    e.preventDefault();
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Row>
          <Col lg="12">
            <ListGroup>
              {items.map(({ _id, name, price }) => {
                return (
                  <ListGroupItem key={_id}>
                    <Button
                      name={name}
                      value={_id}
                      style={{ marginRight: 8 }}
                      className="edit-btn"
                      color="secondary"
                      size="small"
                      onClick={this.showInputField.bind(this, _id, name, price)}
                    >
                      &#9998;
                    </Button>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="small"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                    <p>{name}</p>
                    <p>{price} kr </p>
                    {this.state.itemState.id === _id &&
                    this.state.itemState.show ? (
                      <Form
                        onChange={this.handleFormChange.bind(this)}
                        onSubmit={this.handleEditSubmit.bind(this, _id)}
                      >
                        <Input
                          value={this.state.itemState.name}
                          onChange={this.handleInputChange.bind(this)}
                          name="name"
                          type="text"
                          placeholder="Ändra namn"
                        />
                        <Input
                          value={this.state.itemState.price}
                          onChange={this.handleInputChange.bind(this)}
                          name="price"
                          type="text"
                          placeholder="Ändra pris"
                        />
                        <Input type="submit" />
                      </Form>
                    ) : null}
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, editItem }
)(ShoppingList);
