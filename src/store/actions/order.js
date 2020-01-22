import axiosOrders from '../../axios-orders';
import {ORDERS_SUCCESS,
        ORDERS_ERROR,
        ORDERS_REQUEST,
        DELETE_ORDER_ERROR,
        DELETE_ORDER_REQUEST,
        DELETE_ORDER_SUCCESS
      } 
from '../actions/actionsType';

export const ordersSuccess = (orders) => {
  return { type: ORDERS_SUCCESS, orders };
};

export const ordersError = () => {
  return { type: ORDERS_ERROR };
};

export const ordersRequest = () => {
  return { type: ORDERS_REQUEST };
};

export const deleteOrderError = () => {
  return { type: DELETE_ORDER_ERROR };
};

export const deleteOrderRequest = () => {
  return { type: DELETE_ORDER_REQUEST };
};

export const deleteOrderSuccess = () => {
  return { type: DELETE_ORDER_SUCCESS };
};

export const getOrders = () => {
  return dispatch => {
    dispatch(ordersRequest());
    axiosOrders.get('/allOrders.json').then(response => {
      dispatch(ordersSuccess(response.data));
    }, error => {
      dispatch(ordersError(error));
    });
  }
};

export const deleteOrder = (orderID) => {
  console.log(orderID)
  return async dispatch => {
    try {
      dispatch(deleteOrderRequest());
      await axiosOrders.delete(`/allOrders/${orderID}.json`);
      dispatch(getOrders());
      dispatch(deleteOrderSuccess());
    } catch(err) {
      dispatch(deleteOrderError(err));
    }
  }
};
