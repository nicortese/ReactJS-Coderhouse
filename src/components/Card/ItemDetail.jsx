import React, { useState } from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, price, img, description}) => {
    
    const [quantity, setQuantity] = useState(0)
    
    function handleOnAdd(q){
        setQuantity(q)
    }

    console.log(quantity)


    function cartAdd (){

        return(
            <Link to='/cart'>Ir al carrito</Link>
        )
        
    }

    return(
    <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
                <div id={id}>
                    <h1>{name}</h1>
                    <img src={img} alt={name}/>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <ItemCount stock={5} cartAdd={handleOnAdd}/>
                {cartAdd()}
            </Container>
    </React.Fragment>
    )
};

export default ItemDetail;