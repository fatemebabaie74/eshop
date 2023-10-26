const { configureStore } = require("@reduxjs/toolkit");
import shoppingCartReducer from "../redux/features/shoppingCart/ShoppingCartSlice";
export const Store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
