import React, { useEffect, useState } from 'react'
import ItemList from './Card/ItemList';
import styles from "./ItemListContainer.module.css";
import { useParams } from 'react-router-dom';
import { traerProductos } from './Products';


function ItemListContainer (){
    const [items, setItems]= useState([]);

    const {categoryId}= useParams();

    console.log(categoryId);

    useEffect(() => {
        traerProductos(categoryId)
        .then( result => {setItems(result);})
        .catch(error => console.log(error));
    }, [categoryId])


    return(
        <div className={styles.itemliststyle}>
            <ItemList products = {items}/>
        </div>
    )

}

export default ItemListContainer