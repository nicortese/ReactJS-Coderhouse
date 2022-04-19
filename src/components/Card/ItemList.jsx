import React from 'react'
import MediaCard from './CardItem'

function ItemList({products}) {
  return (
    products.map(p =>(
        <MediaCard
        id={p.id}
        name={p.name}
        price={p.price}
        image={p.image}
        />
    ))
  )
}

export default ItemList