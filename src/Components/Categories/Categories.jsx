import { ButtonGroup, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { categorySelect } from "../../Store/categories"

const Categories = () => {
  const { categories } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <ButtonGroup
      variant="text"
      sx={{margin: '10px', display: 'flex', justifyContent: 'center'}}
    >
      {categories.list.map(category => (
        <Button
          key={category.name}
          value={category.name}
          onClick={() => dispatch(categorySelect(category.name))}
        >
          {category.displayName}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default Categories;
