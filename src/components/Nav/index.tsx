import { MenuList, Paper } from '@mui/material';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom';



const Nav = () => {
    return (
        <Paper>
        <MenuList>
          <MenuItem><Link to="/">Dahs</Link></MenuItem>
          <MenuItem><Link to="/invest">Inverst</Link></MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
    )
 }

 export default Nav;