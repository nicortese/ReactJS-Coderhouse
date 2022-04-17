import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { traerProducto } from '../Products';

const ItemDetailContainer = () =>{
    const [producto, setProduct] = useState([]);
    useEffect(() => {
        traerProducto(2000)
            .then(res => setProduct(res.find(it => it.id ===1)))
        
    }, []);

    return(
        <>
            <ItemDetail key={producto.id} name={producto.name} price={producto.price} img={producto.img} description={producto.description} />
        </>
    );
};

export default ItemDetailContainer;