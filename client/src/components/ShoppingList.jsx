import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import EditItemModal from './EditItemModal'

class ShoppingList extends Component {
  state = {
    showEditModal:false,
  }
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  showEditModal() {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
  }

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
            {items.map(({ _id, name, price }) => (
                <ListGroupItem key={_id} >
                  <Button
                  className="edit-btn"
                  color="secondary"
                  size="small"
                  onClick={this.showEditModal.bind(this)}
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
                  {name}
                  {price}
                  {this.state.showEditModal ? <EditItemModal id={_id} name={name}/> : null}
                </ListGroupItem>
            ))}
        
        </ListGroup>
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
  { getItems, deleteItem }
)(ShoppingList);
