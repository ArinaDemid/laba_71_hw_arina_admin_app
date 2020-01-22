import {
  ORDERS_SUCCESS,
  ORDERS_ERROR,
  ORDERS_REQUEST,
  DELETE_ORDER_ERROR,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS
} 
from "../actions/actionsType";

const initialState = {
  orders: [],
  spinner: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ORDERS_SUCCESS:
      return {...state, orders: action.orders, spinner: false};
    case ORDERS_REQUEST:
      return {...state, spinner: true};
    case ORDERS_ERROR:
      return {...state, spinner: false};
    case DELETE_ORDER_REQUEST:
      return {...state, spinner: true};
    case DELETE_ORDER_ERROR:
      return {...state, spinner: false};
    case DELETE_ORDER_SUCCESS:
      return {...state, spinner: false};
    default:
      return state;
  }
};
export default reducer;