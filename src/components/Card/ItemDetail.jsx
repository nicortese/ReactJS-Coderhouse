import React, { useState } from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ItemCount from './ItemCount';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ItemDetail = (props) => {
    
    const [quantity, setQuantity] = useState(0)
    
    const {product:{id,name,price,image, description}}=props

    const history = useNavigate()
    
    function handleOnAdd(q){
        setQuantity(q)
    }

    console.log(quantity)


    function cartAdd (){

        return(
            
            <Button color='success' variant="contained" onClick={()=>history("/cart")}>
            Ir al carrito
            </Button>
            
        )
        
    }

    return(
    <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
                <div id={id}>
                    <h1>{name}</h1>
                    <img src={image} alt={name}/>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <ItemCount product={props} stock={5} cartAdd={handleOnAdd}/>
                {cartAdd()}
            </Container>
    </React.Fragment>
    )
};

export default ItemDetail;