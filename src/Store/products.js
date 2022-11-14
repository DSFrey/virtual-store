import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, inCart: 0 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, inCart: 0 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, inCart: 0 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, inCart: 0 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, inCart: 0 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, inCart: 0 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, inCart: 0 },
  ],
  cart: [],
  cartTotalItems: 0,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productAddToCart(state, action) {
      let products, cart
      products = state.products.map(item => {
        if (item.name === action.payload) {
          if (item.inStock === 0) return item;
          return {
            ...item,
            inStock: item.inStock - 1,
            inCart: item.inCart + 1,
          }
        }
        return item;
      })
      cart = [...products].filter(element => element.inCart > 0)
      return {
        products,
        cart,
        cartTotalItems: state.cartTotalItems + 1
      }
    },
    productRemoveFromCart(state, action) {
      let products, cart, qty;
      products = state.products.map(item => {
        if (item.name === action.payload) {
          qty = item.inCart
          return {
            ...item,
            inStock: item.inStock + qty,
            inCart: 0,
          }
        }
        return item;
      })
      cart = [...products].filter(element => element.inCart > 0)
      return {
        products,
        cart,
        cartTotalItems: state.cartTotalItems - qty,
      }
    }
  }
})

export default productSlice.reducer;
export const { productAddToCart, productRemoveFromCart } = productSlice.actions;