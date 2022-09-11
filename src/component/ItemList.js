import React from 'react'
import Item from './Item'
function ItemList({product}) {
  return (
    <div class="row row-cols-4 row-cols-md-5 g-4">
  
    {
       product.length >0 ?
       product.map(pro => <Item key={pro.id} product={pro}/>)
       : <p>cargando ...</p>
    }
 
 
  
 
</div>
  )
}

export default ItemList