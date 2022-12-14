import React from 'react'
import Item from './Item'
import Spinner from '../utils/Spinner'
function ItemList({product}) {
  return (
    <div className="row row-cols-sm-1 row-cols-md-3 row-cols-xl-4  g-4 mt-3 ">
      
    {
       product.length >0 ?
       product.map(pro => <Item key={pro.id} product={pro}/>)
       : <Spinner></Spinner>
    }
 
 
  
 
</div>
  )
}

export default ItemList