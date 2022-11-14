import { Box, Button, ButtonGroup, Card, CardActions, CardMedia, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { productAddToCart } from "../../Store/products"

const Products = (props) => {
  const { products } = useSelector(state => state.products)
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch()
  return (
    <Box
      className="product-container"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        textAlign: 'center',
      }}>
      {products.filter(item => item.category === activeCategory.name && item.inStock > 0).map(product => (
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
            <ButtonGroup variant="text" sx={{ display: 'flex', width: '100%' }}>
              <Button sx={{ width: '50%' }} onClick={() => dispatch(productAddToCart(product.name))}>Add to Cart</Button>
              <Button sx={{ width: '50%' }}>Details</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}

export default Products;
