import { FETCH_DISHES_SUCCESS, 
  FETCH_DISHES_REQUEST, 
  FETCH_DISHES_ERROR, 
  ADD_DISH_TO_FRB,
  DELETE_DISH_FROM_FRB,
  CHANGE_DISH_FROM_FRB,
  POST_DISH_TO_FRB_REQUEST,
  POST_DISH_TO_FRB_ERROR,
  VALUE_CHANGE } 
from "../actions/actionsType";

const initialState = {
  dishes: [],
  dish: {
    title: "",
    price: "",
    image: ""
  },
  spinner: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISHES_SUCCESS:
      return {...state, dishes: action.dishes, spinner: false};
    case FETCH_DISHES_REQUEST:
      return {...state, spinner: true};
    case FETCH_DISHES_ERROR:
      return {...state, spinner: false};
    case CHANGE_DISH_FROM_FRB:
      return {...state, dishes: {
        ...state.dishes, 
        [action.dishID]: action.changeDish
      } 
    };
    case DELETE_DISH_FROM_FRB:
      return {...state, spinner: false};
    case POST_DISH_TO_FRB_ERROR:
      return {...state, spinner: false};
    case POST_DISH_TO_FRB_REQUEST:
      return {...state, spinner: true};
    case VALUE_CHANGE:
      return {...state, 
        dish: {
        ...state.dish,
        [action.name]: action.value
        }
      };
    case ADD_DISH_TO_FRB:
      return {...state, 
        dish: {
        ...state.dish,
        title: "",
        price: "",
        image: ""
        },
        dishes: action.dishReload,
        spinner: false
      };
    default:
      return state;
  }
};
export default reducer;