import * as actionTypes from "../pages/cart/shopping-types";

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload.course],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.LOAD_CURRENT_ITEMS:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default cart;
