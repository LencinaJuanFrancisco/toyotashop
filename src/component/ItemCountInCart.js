import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { useState } from "react";

import  {CartConext}  from "../context/CartContex";


function ItemCountInCart( {item} ) {

   console.log('item.item',item.item);
   console.log('item.count',item.count); 
 const {addItemFromCart} = useContext(CartConext)
    
  const [count, setCount] = useState(item.count);
  const [instock, setStock] = useState(item.item.stock);

  const add = () => {
    if (count < instock){

        setCount(count + 1);
      addItemFromCart(item.item,count)
    } 
  };

  const sub =  () => {
    if (count > 1) {
    
        setCount(count - 1);
    
        addItemFromCart(item.item,count)
    }
  };



  return (
    <div
      className=""
     
    >
      <button type="button" className="d-inline btn " onClick={()=>add()}>
        +
      </button>
      <h2 className="px-3 d-inline fs-5 "> {item.count}</h2>
      <button type="button" className="d-inline btn" onClick={()=>sub()}>
        -
      </button>
    </div>
  );
}

export default ItemCountInCart;
