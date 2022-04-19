import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerDetalleProducto } from '../Products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [producto, setProduct] = useState([]);
    const {id}=useParams();
    useEffect(() => {
        traerDetalleProducto(id)
            .then(res => setProduct(res))
            
        
    }, [id]);

    return(
        <>
            <ItemDetail id={producto.id} name={producto.name} price={producto.price} img={producto.image} description={producto.description} />
        </>
    );
};

export default ItemDetailContainer;