import React from 'react'
import Item from './Item'
import Spinner from '../utils/Spinner'
function ItemList({product}) {
  return (
    <div class="row row-cols-4 row-cols-md-5 g-4 mt-3 ">
      
    {
       product.length >0 ?
       product.map(pro => <Item key={pro.id} product={pro}/>)
       : <Spinner></Spinner>
    }
 
 
  
 
</div>
  )
}

export default ItemList