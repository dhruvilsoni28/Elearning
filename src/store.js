import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./features";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
});
const persistor = persistStore(store);

export { store, persistor };
