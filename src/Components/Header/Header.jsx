import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { IconAperture } from "@tabler/icons"

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  )
}