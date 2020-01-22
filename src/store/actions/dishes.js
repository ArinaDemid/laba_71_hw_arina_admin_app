import axiosOrders from '../../axios-orders';
import { FETCH_DISHES_SUCCESS, 
        FETCH_DISHES_ERROR, 
        FETCH_DISHES_REQUEST, 
        ADD_DISH_TO_FRB,
        DELETE_DISH_FROM_FRB,
        CHANGE_DISH_FROM_FRB, 
        POST_DISH_TO_FRB_ERROR,
        POST_DISH_TO_FRB_REQUEST,
        VALUE_CHANGE,
        DELETE_DISH_FROM_FRB_ERROR,
        DELETE_DISH_FROM_FRB_REQUEST,
        CHANGE_DISH_FROM_FRB_REQUEST,
        CHANGE_DISH_FROM_FRB_ERROR
      } 
from '../actions/actionsType';

export const fetchDishesSuccess = (dishes) => {
  return { type: FETCH_DISHES_SUCCESS, dishes };
};

export const fetchDishesError = (error) => {
  return { type: FETCH_DISHES_ERROR, error };
};

export const fetchDishesRequest = () => {
  return { type: FETCH_DISHES_REQUEST };
};
export const postDishToFRBSuccess = (dishReload) => {
  return { type: ADD_DISH_TO_FRB, dishReload };
};

export const postDishToFRBRequest = () => {
  return { type: POST_DISH_TO_FRB_REQUEST };
};

export const postDishToFRBError = () => {
  return { type: POST_DISH_TO_FRB_ERROR };
};

export const changeDishFromFRBError = () => {
  return { type: CHANGE_DISH_FROM_FRB_ERROR };
};

export const changeDishFromFRBRequest = () => {
  return { type: CHANGE_DISH_FROM_FRB_REQUEST };
};

export const deleteDishFromFRBRequest = () => {
  return { type: DELETE_DISH_FROM_FRB_REQUEST};
};
export const deleteDishFromFRBError = () => {
  return { type: DELETE_DISH_FROM_FRB_ERROR };
};

export const valueChange = (name, value) => {
  return { type: VALUE_CHANGE, name, value };
};

export const addDishToFRB = (event, dish) => {
  event.preventDefault();
  return async dispatch => {
    try {
      dispatch(postDishToFRBRequest());
      await axiosOrders.post('/dishesList.json', dish);
      let response = await axiosOrders.get('/dishesList.json');
      dispatch(postDishToFRBSuccess(response.data));
    } catch(err) {
      dispatch(postDishToFRBError(err));
    }
  }
};

export const deleteDishFromFRBSuccess = () => {
  return { type: DELETE_DISH_FROM_FRB };
};

export const changeDishFromFRBSuccess = (dishID, changeDish) => {
  return { type: CHANGE_DISH_FROM_FRB, dishID, changeDish };
};

export const fetchDishes = () => {
  return dispatch => {
    dispatch(fetchDishesRequest());
    axiosOrders.get('/dishesList.json').then(response => {
      dispatch(fetchDishesSuccess(response.data));
    }, error => {
      dispatch(fetchDishesError(error));
    });
  }
};

export const deleteDishFromFRB = (dishID) => {
  return async dispatch => {
    try {
      dispatch(deleteDishFromFRBRequest());
      await axiosOrders.delete('/dishesList/' + dishID + '.json');
      dispatch(fetchDishes());
      dispatch(deleteDishFromFRBSuccess());
    } catch(err) {
      dispatch(deleteDishFromFRBError(err));
    }
  }
};

export const changeDishFromFRB = (dishID, changeDish) => {
  return async dispatch => {
    try {
      dispatch(changeDishFromFRBRequest());
      await axiosOrders.put('/dishesList/' + dishID + '.json', changeDish);
      dispatch(changeDishFromFRBSuccess(dishID, changeDish));
    } catch(err) {
      dispatch(changeDishFromFRBError(err));
    }
  }
};


