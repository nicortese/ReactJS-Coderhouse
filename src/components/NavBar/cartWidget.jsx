import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function CartIcon() {
    return(
        <Link to='/cart'>
        <IconButton>
            <ShoppingCartRoundedIcon sx={{color: 'white'}}/>
        </IconButton>
        </Link>
    );
}

export default CartIcon