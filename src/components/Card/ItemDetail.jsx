import React from 'react'

const ItemDetail = ({id, name, price, img, description}) => {
    return(
        <div key={id}>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
};

export default ItemDetail;