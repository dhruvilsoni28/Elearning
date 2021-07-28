import * as actionTypes from "./shopping-types";

export const addToCart = (course) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      course,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEMS,
    payload: item,
  };
};
