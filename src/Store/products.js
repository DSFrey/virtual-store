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

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_TO_CART':
      let products = state.products.map(item => {
        if (item.name === payload) {
          if (item.inStock === 0) return item;
          return {
            ...item,
            inStock: item.inStock - 1,
            inCart: item.inCart + 1,
          }
        }
        return item;
      })
      let cart = [...products].filter(element => element.inCart > 1)
      return {
        products,
        cart,
        cartTotalItems: state.cartTotalItems + 1
      }
    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}
