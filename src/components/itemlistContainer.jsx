import React, { useEffect, useState } from 'react'
import ItemList from './Card/ItemList';
import customFetch from './customFetch';
import products from './Products';
import styles from "./ItemListContainer.module.css";

function ItemListContainer (){
    const [items, setItems]= useState([]);
    console.log(products)
    useEffect(() => {
        customFetch(3000, products)
        .then( result => {setItems(result);})
        .catch(error => console.log(error));
    }, [items])


    return(
        <div className={styles.itemliststyle}>
            <ItemList products = {items}/>
        </div>
    )

}

export default ItemListContainer