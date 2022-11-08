import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { connect } from "react-redux"
import { selectCategory } from "../../Store/categories"

const Categories = (props) => {
  const { categories } = props

  return (
    <ToggleButtonGroup variant="text" color="primary" exclusive value={categories.activeCategory}>
      {categories.list.map(category => (
        <ToggleButton
          key={category.name}
          value={category.name}
          onClick={() => selectCategory(category.name)}
        >
          {category.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

const mapStateToProps = ({ categories }) => {
  return { categories }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
