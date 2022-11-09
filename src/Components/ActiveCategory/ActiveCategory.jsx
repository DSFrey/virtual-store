import { Box, Divider, Typography } from "@mui/material"
import { connect } from "react-redux"

const ActiveCategory = (props) => {
  const { activeCategory } = props.categories

  return (
    <Box textAlign="center" maxWidth="50%" m="0 auto 25px">
      <Typography variant="h1">{activeCategory.displayName}
      <Divider />
      </Typography>
      <Typography variant="h5">{activeCategory.description}</Typography>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ActiveCategory);
