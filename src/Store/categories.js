const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics', description: 'An extended marketing description of the type of products in this category' },
    { name: 'food', displayName: 'Food', description: 'An extended marketing description of the type of products in this category' },
    { name: 'clothing', displayName: 'Clothing', description: 'An extended marketing description of the type of products in this category' },
  ],
  activeCategory: {}
}

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT':
      return {
        ...state,
        activeCategory: state.list.find(element => element.name === payload)
      }
    default:
      return state;
  }
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT',
    payload: category
  }
}