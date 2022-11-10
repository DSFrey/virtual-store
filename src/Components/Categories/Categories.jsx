import { ButtonGroup, Button } from "@mui/material"
import { connect } from "react-redux"
import { selectCategory } from "../../Store/categories"

const Categories = (props) => {
  const { categories, selectCategory } = props

  return (
    <ButtonGroup
      variant="text"
      sx={{margin: '10px', display: 'flex', justifyContent: 'center'}}
    >
      {categories.list.map(category => (
        <Button
          key={category.name}
          value={category.name}
          onClick={() => selectCategory(category.name)}
        >
          {category.displayName}
        </Button>
      ))}
    </ButtonGroup>
  )
}

const mapStateToProps = ({ categories }) => {
  return { categories }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
