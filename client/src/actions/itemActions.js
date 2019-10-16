import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  ITEMS_LOADING
} from "./types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  console.log("getting items");
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch(
      {
        type: ADD_ITEM,
        payload: res.data
      },
      console.log("addItem :" + res.data)
    )
  );
};

export const editItem = req => dispatch => {
  axios
    .put(`/api/items/${req.id}`, {
      body: {
        name: req.name,
        price: req.price
      }
    })
    .then(res =>
      dispatch({
        type: EDIT_ITEM,
        payload: {
          _id: req.id,
          name: req.name,
          price: req.price
        }
      })
    );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
