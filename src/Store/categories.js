import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'An extended marketing description of the type of products in this category' },
    { name: 'food', displayName: 'Food', description: 'An extended marketing description of the type of products in this category' },
    { name: 'clothing', displayName: 'Clothing', description: 'An extended marketing description of the type of products in this category' },
  ],
  activeCategory: {}
}
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categorySelect(state, action) {
      return {
        ...state,
        activeCategory: state.list.find(element => element.name === action.payload)
      }
    }
  }
})
console.log(categorySlice)
export default categorySlice.reducer;
export const { categorySelect } = categorySlice.actions;