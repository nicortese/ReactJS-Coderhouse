import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from '../Products';
import customFetch from '../customFetch';

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    useEffect(() => {
        customFetch(2000, products)
            .then(res => setProduct(res.find(it => it.id ===1)))
        
    }, []);

    return(
        <>
            <ItemDetail key={product.id} name={product.name} price={product.price} image={product.image}/>
        </>
    );
};

export default ItemDetailContainer;