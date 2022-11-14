import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categories";
import productReducer from "./products";

export const store = () => configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer
  }
});
