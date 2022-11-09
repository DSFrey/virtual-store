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

### Create the Virtual Store application as follows

- A `<Header>` component which shows the name of your virtual store
- A `<Footer>` component which shows your copyright and contact information
- A `<Categories>` component
  - Shows a list of all categories
  - Dispatches an action when one is clicked to “activate” it
- A `<Products>` component
  - Displays a list of products associated with the selected category
- (Stretch goal) An `<ActiveCategory />` component
  - appears above the products list to inform the user as to the name/description of the currently active category

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
- Active Category
  - State should store active category
    - Other components (products, etc) might need to reference this
