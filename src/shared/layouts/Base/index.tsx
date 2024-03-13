import { Box, Container } from "@mui/material"
import NavigationMenu from "../../components/Navbar/Navbar";


interface HTMLPageProps {
  children: any;
}

const LayoutBase = (props:HTMLPageProps) => {
  return (
    <Container>
      <NavigationMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        { props.children }
      </Box>
    </Container>
  )
}

export default LayoutBase;
