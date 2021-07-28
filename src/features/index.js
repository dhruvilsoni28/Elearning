import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import courses from "./courses";
import cart from "./cart";

const rootReducer = combineReducers({
  auth: auth,
  courses: courses,
  cart: cart,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
