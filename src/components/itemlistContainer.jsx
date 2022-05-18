import React, { useEffect, useState } from 'react'
import ItemList from './Card/ItemList';
import styles from "./ItemListContainer.module.css";
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore';


function ItemListContainer (){
    const [items, setItems]= useState([]);

    const {category}= useParams();

    console.log(category);

    useEffect(() => {
        const db = getFirestore();
        
        let productsRef;

        if (!category){
            productsRef = collection(db, 'products');
        } else {
            productsRef = query(collection(db, 'products'), where('category', '==', category))
        }
        getDocs(productsRef).then((res) =>{
            setItems(res.docs.map((item) => ({ id: item.id, ...item.data()})));
        });
    }, [category]);


    return(

        <div className={styles.itemliststyle}>
            {/* <img src="https://drops-ba.com/wp-content/uploads/2021/07/Hero-Landing-Drops.jpg" alt="" /> */}
            <ItemList products = {items}/>
        </div>
    )

}

export default ItemListContainer