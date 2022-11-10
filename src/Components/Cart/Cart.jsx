import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import { IconX } from "@tabler/icons"
import { connect } from "react-redux"
import { removeFromCart } from "../../Store/products"

const Cart = ({ cart, removeFromCart }) => {
  return (
    <List>
      {cart.map(item => (
        <ListItem
          key={item.name}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.name)}>
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

const mapStateToProps = ({ products }) => {
  return products
}


const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
