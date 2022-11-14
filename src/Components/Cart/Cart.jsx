import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import { IconX } from "@tabler/icons"
import { useDispatch, useSelector } from "react-redux"
import { productRemoveFromCart } from "../../Store/products"

const Cart = () => {
  const cart = useSelector(state => state.products.cart)
  const dispatch = useDispatch()
  return (
    <List>
      {cart.map(item => (
        <ListItem
          key={item.name}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(productRemoveFromCart(item.name))}>
              <IconX />
            </IconButton>
          }
        >
          <ListItemText
            primary={item.name}
            secondary={item.inCart}
            variant='h3'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default Cart;
