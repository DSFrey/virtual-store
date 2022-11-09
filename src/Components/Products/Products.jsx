import { Box, Button, ButtonGroup, Card, CardActions, CardMedia, Typography } from "@mui/material"
import { connect } from "react-redux"
// import { selectCategory } from "../../Store/categories"

const Products = (props) => {
  const { products } = props

  return (
    <Box 
    className="product-container"
    sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      textAlign: 'center',
    }}>
      {products.filteredProducts.map(product => (
        <Card
          key={product.name}
          sx={{
            margin: '10px',

          }}
        >
          <CardMedia
            component='img'
            height='500'
            image={`${process.env.PUBLIC_URL}/images/${product.name}.jpg`}
            alt={product.name}
          />
          <Typography variant="h4">{product.name}</Typography>
          <CardActions>
            <ButtonGroup variant="text" sx={{ display: 'flex', width: '100%'}}>
              <Button sx={{ width: '50%' }}>Add to Cart</Button>
              <Button sx={{ width: '50%' }}>Details</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Products);
