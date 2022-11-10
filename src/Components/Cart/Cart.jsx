import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import { IconX } from "@tabler/icons"
import { connect } from "react-redux"

const Cart = ({ cart }) => {
  return (
    <List>
      {cart.map(item => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
