import React from 'react'

const ItemDetail = ({id, name, price, img}) => {
    return(
        <div key={id}>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p>{price}</p>
        </div>
    )
};

export default ItemDetail;