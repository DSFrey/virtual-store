import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { connect } from "react-redux"
import { selectCategory } from "../../Store/categories"

const Categories = (props) => {
  const { categories } = props

  return (
    <ToggleButtonGroup color="primary" exclusive value={categories.activeCategory.displayName}>
      {categories.list.map(category => (
        <ToggleButton
          key={category.name}
          value={category.displayName}
          onClick={() => props.selectCategory(category.name)}
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
