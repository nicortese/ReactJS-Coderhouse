import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';

function CartIcon() {
    return(
        <IconButton>
            <ShoppingCartRoundedIcon sx={{color: 'white'}}/>
        </IconButton>
    );
}

export default CartIcon