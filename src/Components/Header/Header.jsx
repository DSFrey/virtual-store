import { AppBar, Button, Container, Drawer, Toolbar, Typography } from "@mui/material"
import { IconAperture, IconShoppingCart } from "@tabler/icons"
import { useState } from "react";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";

const Header = ({ cartTotalItems }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ width: '100%', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <Container sx={{ display: 'flex' }}>
          <IconAperture size={48} />
          <Button
            component="a"
            href="/"
            sx={{
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Typography variant="h4">Virtual Store</Typography>
          </Button>
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconShoppingCart size={48} onClick={() => setCartOpen(true)} />
          <Typography variant="h4">{cartTotalItems}</Typography>
        </Container>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          PaperProps={{ sx: { width: '250px' } }}
        >
          <Cart />
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ products }) => {
  return products
}

export default connect(mapStateToProps)(Header);
