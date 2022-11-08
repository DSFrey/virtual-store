const initialState = {
  list: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
}

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SELECT':
      console.log(payload)
      return {
        ...state,
        activeCategory: state.categories.find(element => element.name === payload)
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