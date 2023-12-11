const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import { persistReducer, persistStore } from "redux-persist";
import shoppingCartReducer from "../redux/features/shoppingCart/ShoppingCartSlice";
import userReducer from '../redux/features/users/UsersSlice'
// import localStorageLib from "redux-persist/lib/storage"; //local storage lib
// import sessionStorageLib from "redux-persist/lib/storage//session"; //local storage lib
import storage from "redux-persist/lib/storage";

const configuration = {
  key: "globalStorage",
   storage,
}



// localStorageconfiguration = {
//   key : "root",
//   Storage : localStorageLib
// }


// sessionStorageconfiguration ={
// key : "user",
// Storage : sessionStorageLib
// }
const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  //  user :userReducer
});

const persistedReducer = persistReducer(configuration, rootReducer);

export const ReduxPersistStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(ReduxPersistStore);
