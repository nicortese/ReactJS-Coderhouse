import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import CartIcon from './cartWidget';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Link style={{margin:'0px 7px'}} to="/category/remeras" color="inherit">Remeras</Link>
          <Link style={{margin:'0px 7px'}} to="/category/hoodies" color="inherit">Hoodies</Link>
          <Link style={{margin:'0px 7px'}} to="/category/sneakers" color="inherit">Sneakers</Link>
          <CartIcon/>
        </Toolbar>
      </AppBar>    
    </Box>
  );
}