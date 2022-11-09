import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer } from "./categories";
import { productReducer } from "./products";

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer
});

export const store = () => createStore(reducers, composeWithDevTools());
