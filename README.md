# Virtual Store

An online shopping portal for a fictional store

## Technical Requirements

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
- Identify that category as selected (change of class/display)
  - Show a list of products associated with the category
  - Application Architecture
- Add a “Cart” indicator to the header, like this: Cart (0)
- Create a new Cart component to show the items in the user’s cart

### Create the Virtual Store application as follows

- A `<Header>` component which shows the name of your virtual store
- A `<Footer>` component which shows your copyright and contact information
- A `<Categories>` component
  - Shows a list of all categories
  - Dispatches an action when one is clicked to “activate” it
- A `<Products>` component
  - Displays a list of products associated with the selected category that have a quantity > 0
  - Add an “add to cart” button to each product
- **(Stretch goal)** An `<ActiveCategory />` component
  - appears above the products list to inform the user as to the name/description of the currently active category
- `<SimpleCart />` Displays a short list (title only) of products in the cart
  - This should be present at all times
  - When a user clicks the “add to cart” button add the item to their cart
  - Show a running list of the items in the cart (just the titles)
  - Change the (0) indicator in the header to show the actual number of items in the cart
  - Reduce the number in stock for that product
  - **(Stretch Goal)** Add a “Remove from Cart” button to each item in the cart
    - Change the indicator in the menu
    - Add 1 back to the # in stock for that product

### Notes on constructing the Redux Store

- Categories
  - State should contain a list of categories as well as the active category
    - Each category should have a normalized name, display name, and a description
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this action is dispatched
- Products
  - State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger when the active category is changed
  - Create a reducer that will filter the products list based on the active category
  - Create an action that will trigger the reducer to reduce the stock counter
  - Create a reducer that reduces the # in stock when that action is dispatched
- Active Category
  - State should store active category
    - Other components (products, etc) might need to reference this
- Cart
  - State should be an array of products that have been added (all product details)
  - Create an action that will trigger the reducer to add the selected item to the cart
  - Create a reducer that adds the product to the array of items in state
